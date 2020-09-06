import React from 'react'
import { ActivityIndicator } from 'react-native'

const Wait = ({ isLoading, children }) =>
  isLoading ? <ActivityIndicator /> : children

export default Wait
