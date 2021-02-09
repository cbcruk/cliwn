import React from 'react'
import { IonInfiniteScroll, IonInfiniteScrollContent } from '@ionic/react'
import { useContextSelector } from 'use-context-selector'
import ListContext from '../../../../pages/List/context'

function InfiniteScroll() {
  const { fetchNextPage, isFetchingNextPage } = useContextSelector(
    ListContext,
    ({ fetchNextPage, isFetchingNextPage }) => ({
      fetchNextPage,
      isFetchingNextPage,
    })
  )

  return (
    <IonInfiniteScroll
      threshold="100px"
      disabled={isFetchingNextPage}
      onIonInfinite={async (e) => {
        await fetchNextPage()
        e.target.complete()
      }}
    >
      <IonInfiniteScrollContent />
    </IonInfiniteScroll>
  )
}

export default InfiniteScroll
