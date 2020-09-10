import React from 'react'
import { IonInfiniteScroll, IonInfiniteScrollContent } from '@ionic/react'

function InfiniteScroll({ fetchMore, isLoading }) {
  return (
    <IonInfiniteScroll
      threshold="100px"
      disabled={isLoading}
      onIonInfinite={async (e) => {
        await fetchMore()
        e.target.complete()
      }}
    >
      <IonInfiniteScrollContent />
    </IonInfiniteScroll>
  )
}

export default InfiniteScroll
