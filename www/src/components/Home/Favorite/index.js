import React from 'react'
import { navigate } from '@reach/router'
import { Text, View, SectionList } from 'react-native'
import { sections } from './constants'

const SectionHeader = ({ section: { title } }) => <Text>{title}</Text>

const Item = ({ item, index }) => (
  <Text key={index} onPress={() => navigate(item.path)}>
    {item.text}
  </Text>
)

const Favorite = () => (
  <View>
    <Text>Favorite</Text>
    <SectionList
      renderItem={Item}
      renderSectionHeader={SectionHeader}
      sections={sections}
      keyExtractor={(item, index) => item.path + index}
    />
  </View>
)

export default Favorite
