import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'

const Footer = ({ isLoading, onLoadMore }) => (
  <View>
    {isLoading ? (
      <ActivityIndicator />
    ) : (
      <Text onPress={onLoadMore}>Footer</Text>
    )}
  </View>
)

export default Footer
