import { createSlice } from 'redux-starter-kit'

const list = createSlice({
  slice: 'list',
  initialState: {
    items: [],
    isFetching: false
  },
  reducers: {
    fetchItems(state) {
      state.isFetching = true
    },
    addItems(state, action) {
      state.items = [...state.items, action.payload.items]
      state.isFetching = false
    },
    setItems(state, action) {
      state.items = action.payload.items
      state.isFetching = false
    }
  }
})

const { reducer, actions } = list

const { setItems } = actions

export default reducer
