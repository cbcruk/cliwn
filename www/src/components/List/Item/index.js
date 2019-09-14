import React from 'react'
import {
  Text,
  TouchableHighlight,
  AsyncStorage,
  ActivityIndicator,
  View
} from 'react-native'
import { navigate } from '@reach/router'

const Item = ({
  board_sn,
  subject,
  category,
  nickname,
  hit,
  timestamp,
  index,
  isLoading,
  page,
  style
}) => (
  <TouchableHighlight
    onClick={async () => {
      await AsyncStorage.setItem('detailIndex', index)
      navigate(`/${page}/${board_sn}`)
    }}
    style={style}
  >
    {isLoading ? (
      <ActivityIndicator />
    ) : (
      <View>
        <Text>{subject}</Text>
        <View>
          <Text>{category}</Text>
          <Text>{nickname}</Text>
          <Text>{hit}</Text>
          <Text>{timestamp}</Text>
        </View>
      </View>
    )}
  </TouchableHighlight>
)

export default Item
