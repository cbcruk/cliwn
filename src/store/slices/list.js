import { createSlice } from 'redux-starter-kit'
import uniq from 'lodash/uniq'

const initialState = {
  items: [],
  board: null,
  pageOffset: 0,
  isLoading: false,
  error: null
}

const list = createSlice({
  slice: 'list',
  initialState: {
    ...initialState
  },
  reducers: {
    getItemsStart(state) {
      state.isLoading = true
    },
    getItemsSuccess(state, { payload }) {
      const { items, board } = payload

      state.items = uniq([...state.items, ...items], 'board_sn')
      state.board = board
      state.pageOffset = state.pageOffset + 1
      state.isLoading = false
    },
    getItemsFailure(state, { payload }) {
      const { error } = payload

      state.error = error
      state.isLoading = false
    },
    resetItems(state) {
      state.items = []
      state.pageOffset = 0
    }
  }
})

const { reducer, actions } = list

export const {
  getItemsStart,
  getItemsSuccess,
  getItemsFailure,
  resetItems
} = actions

export const fetchList = (board, signal) => async (dispatch, getState) => {
  try {
    dispatch(getItemsStart())

    const state = getState()
    const po = state.list.pageOffset

    const response = await fetch(`/api/list?board=${board}&po=${po}`, {
      signal
    })
    const { items } = await response.json()

    dispatch(
      getItemsSuccess({
        items,
        board
      })
    )
  } catch (error) {
    if (error.code === 20) {
      return
    }

    dispatch(getItemsFailure({ error }))
  }
}

export default reducer
