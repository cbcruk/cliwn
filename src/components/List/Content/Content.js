import React from 'react'
import { IonContent } from '@ionic/react'
import ProgressBar from './ProgressBar'
import List from './List'
import InfiniteScroll from './InfiniteScroll'

function Content({ data, fetchMore, isFetching, isLoading }) {
  return (
    <IonContent>
      <ProgressBar isFetching={isFetching} />
      <List data={data} />
      <InfiniteScroll fetchMore={fetchMore} isLoading={isLoading} />
    </IonContent>
  )
}

export default Content
