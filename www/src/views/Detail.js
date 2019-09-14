import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDetail, resetItem } from '../store/slices/detail'
import Wait from '../components/common/Wait'

const Detail = ({ page, id }) => {
  const dispatch = useDispatch()
  const { item, isLoading } = useSelector(state => state.detail)

  useEffect(() => {
    const controller = new AbortController()

    ;(async () => {
      await dispatch(fetchDetail(page, id, controller.signal))
    })()

    return () => controller.abort()
  }, [page, id, dispatch])

  useEffect(() => () => dispatch(resetItem()), [dispatch])

  return (
    <Wait {...{ isLoading }}>
      <View>
        <Text>{item.subject}</Text>
        <Text>{item.updated_date}</Text>
        <Text>{item.view_count}</Text>
      </View>

      <View>
        <Text>거래방법: {item.how}</Text>
        <Text>판매상태: {item.status}</Text>
        <Text>판매가격: {item.price}</Text>
        <Text>구매시기: {item.bought_date}</Text>
        <Text>거래지역: {item.area}</Text>
      </View>

      <View>
        <Text>{item.content}</Text>
      </View>
    </Wait>
  )
}

export default Detail
