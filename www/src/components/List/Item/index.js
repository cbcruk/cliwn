import React from 'react'
import { Text, TouchableHighlight } from 'react-native'
import { navigate } from '@reach/router'

const Item = ({ subject, board_sn }) => (
  <TouchableHighlight onPress={() => navigate(`/sold/${board_sn}`)}>
    <Text>{subject}</Text>
  </TouchableHighlight>
)

export default Item
