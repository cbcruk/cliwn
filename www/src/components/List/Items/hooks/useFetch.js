import { useDispatch } from 'react-redux'
import { useCallback, useEffect } from 'react'
import { fetchList } from '../../../../store/slices/list'

let controller

export default function(page) {
  const dispatch = useDispatch()
  const fetchItems = useCallback(() => {
    controller = new AbortController()

    dispatch(fetchList(page, controller.signal))
  }, [dispatch, page])

  useEffect(() => () => controller.abort(), [])

  return fetchItems
}
