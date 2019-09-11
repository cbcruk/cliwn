import { createSlice } from 'redux-starter-kit'
import uniq from 'lodash/uniq'

const list = createSlice({
  slice: 'list',
  initialState: {
    items: [],
    pageOffset: 0,
    isLoading: false,
    error: null
  },
  reducers: {
    getItemsStart(state) {
      state.isLoading = true
    },
    getItemsSuccess(state, { payload }) {
      const { items } = payload

      state.items = uniq([...state.items, ...items], 'board_sn')
      state.pageOffset = state.pageOffset + 1
      state.isLoading = false
    },
    getItemsFailure(state, { payload }) {
      state.error = payload
      state.isLoading = false
    }
  }
})

const { reducer, actions } = list

export const { getItemsStart, getItemsSuccess, getItemsFailure } = actions

export const fetchList = (board, po = 0) => async dispatch => {
  try {
    dispatch(getItemsStart())

    const response = await fetch(`/api/list?board=${board}&po=${po}`)
    const { items } = await response.json()

    dispatch(
      getItemsSuccess({
        items
      })
    )
  } catch (error) {
    dispatch(getItemsFailure(error))
  }
}

export default reducer
