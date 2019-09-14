import React, { useRef } from 'react'
import { FixedSizeList } from 'react-window'
import AutoSizer from 'react-virtualized-auto-sizer'
import InfiniteLoader from 'react-window-infinite-loader'
import useScrollTo from './hooks/useScrollTo'
import Item from '../Item'
import useFetch from './hooks/useFetch'

const Items = ({ page, items }) => {
  const infiniteLoaderRef = useRef(null)
  const itemCount = items.length + 1
  const isItemLoaded = index => index < items.length
  const fetchItems = useFetch(page)

  useScrollTo(infiniteLoaderRef, items)

  return (
    <AutoSizer>
      {({ width, height }) => (
        <InfiniteLoader
          ref={infiniteLoaderRef}
          isItemLoaded={isItemLoaded}
          itemCount={itemCount}
          loadMoreItems={fetchItems}
        >
          {({ onItemsRendered, ref }) => (
            <FixedSizeList
              ref={ref}
              width={width}
              height={height}
              itemData={items}
              itemCount={itemCount}
              itemSize={84}
              onItemsRendered={onItemsRendered}
            >
              {({ data, index, style }) => {
                const isLoading = !isItemLoaded(index)

                return (
                  <Item
                    {...{ style, index, page, isLoading, ...data[index] }}
                  />
                )
              }}
            </FixedSizeList>
          )}
        </InfiniteLoader>
      )}
    </AutoSizer>
  )
}

export default Items
