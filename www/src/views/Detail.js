import React from 'react'
import { View, Text } from 'react-native'

const Detail = ({ page, id }) => (
  <View>
    <Text>
      {page} detail: {id}
    </Text>
  </View>
)

export default Detail
