import { createSlice } from 'redux-starter-kit'

const list = createSlice({
  slice: 'detail',
  initialState: {
    item: {},
    isLoading: false,
    error: null
  },
  reducers: {
    getItemStart(state) {
      state.isLoading = true
    },
    getItemSuccess(state, { payload }) {
      const { item } = payload

      state.item = item
      state.isLoading = false
    },
    getItemFailure(state, { payload }) {
      const { error } = payload

      state.error = error
      state.isLoading = false
    },
    resetItem(state) {
      state.item = {}
    }
  }
})

const { reducer, actions } = list

export const {
  getItemStart,
  getItemSuccess,
  getItemFailure,
  resetItem
} = actions

export const fetchDetail = (board, id, signal) => async dispatch => {
  try {
    dispatch(getItemStart())

    const response = await fetch(`/api/detail?board=${board}&id=${id}`, {
      signal
    })
    const item = await response.json()

    dispatch(
      getItemSuccess({
        item
      })
    )
  } catch (error) {
    if (error.code === 20) {
      return
    }

    dispatch(
      getItemFailure({
        error
      })
    )
  }
}

export default reducer
