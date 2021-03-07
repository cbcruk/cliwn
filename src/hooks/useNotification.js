import { useCallback, useEffect, useReducer } from 'react'
import { get, set } from 'idb-keyval'
import { messaging } from '../lib/firebase'

export const FCM_TOKEN = 'FCM_TOKEN'
export const TOAST_SHOW = 'TOAST_SHOW'
export const TOAST_HIDE = 'TOAST_HIDE'
export const TOAST_FAIL = 'TOAST_FAIL'

function useNotification() {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case TOAST_SHOW:
          return {
            ...state,
            isOpen: true,
            data: action.payload,
          }
        case TOAST_HIDE:
          return {
            ...state,
            isOpen: false,
            data: null,
          }
        case TOAST_FAIL:
          return {
            ...state,
            isOpen: true,
            error: true,
          }
        default:
          return state
      }
    },
    {
      isOpen: false,
      data: null,
      error: false,
    }
  )

  const handleHide = useCallback(
    () =>
      dispatch({
        type: TOAST_HIDE,
      }),
    []
  )

  useEffect(() => {
    get(FCM_TOKEN).then((token) => {
      if (!token) {
        messaging
          .getToken({
            vapidKey: process.env.REACT_APP_PUBLIC_VAPID_KEY,
          })
          .then((token) => set(FCM_TOKEN, token))
          .catch(() =>
            dispatch({
              type: TOAST_FAIL,
            })
          )
      }
    })
  }, [])

  useEffect(() => {
    messaging.onMessage((payload) => {
      dispatch({
        type: TOAST_SHOW,
        payload: payload.notification,
      })
    })
  }, [])

  return { state, handleHide }
}

export default useNotification
