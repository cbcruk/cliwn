import React, { useEffect } from 'react'
import { FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { fetchList } from '../store/slices/list'
import Item from '../components/List/Item'
import Footer from '../components/List/Footer'

const keyExtractor = item => item.board_sn

const List = ({ page }) => {
  const dispatch = useDispatch()
  const { items, pageOffset, isLoading } = useSelector(state => state.list)

  useEffect(() => {
    if (page) {
      if (items.length === 0) {
        dispatch(fetchList(page))
      }
    }
  }, [dispatch, page, items])

  return (
    <FlatList
      data={items}
      renderItem={({ item, index }) => <Item {...{ ...item, index }} />}
      keyExtractor={keyExtractor}
      ListFooterComponent={
        <Footer
          isLoading={isLoading}
          onLoadMore={() => dispatch(fetchList(page, pageOffset))}
        />
      }
    />
  )
}

export default List
