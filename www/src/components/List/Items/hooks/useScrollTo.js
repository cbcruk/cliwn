import { useLayoutEffect, useEffect } from 'react'
import { AsyncStorage } from 'react-native'

export default function(infiniteLoaderRef, items) {
  useEffect(() => {
    ;(async () => {
      if (items.length === 0) {
        await AsyncStorage.removeItem('detailIndex')
      }
    })()
  }, [items])

  useLayoutEffect(() => {
    ;(async () => {
      const detailIndex = await AsyncStorage.getItem('detailIndex')
      const listRef = infiniteLoaderRef.current._listRef

      listRef && listRef.scrollToItem(detailIndex, 'center')
    })()
  }, [infiniteLoaderRef])
}
