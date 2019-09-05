import React from 'react'
import { Text, View, FlatList } from 'react-native'

const Home = () => (
  <View>
    <FlatList data={[]} renderItem={({ item }) => <Text>{item.key}</Text>} />
  </View>
)

export default Home
