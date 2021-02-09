import React from 'react'
import { IonContent } from '@ionic/react'
import useContent from '../../../pages/List/useContent'
import List from './List'
import InfiniteScroll from './InfiniteScroll'

function Content() {
  const contentRef = useContent()

  return (
    <IonContent ref={contentRef}>
      <List />
      <InfiniteScroll />
    </IonContent>
  )
}

export default Content
