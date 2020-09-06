import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Items from '../components/List/Items'
import { resetItems } from '../store/slices/list'
import pick from 'lodash/pick'

const List = ({ page }) => {
  const dispatch = useDispatch()
  const { items, board } = useSelector(state =>
    pick(state.list, ['items', 'board'])
  )

  useEffect(() => {
    if (page !== board) {
      dispatch(resetItems())
    }
  }, [dispatch, page, board])

  return <Items {...{ page, items }} />
}

export default List
