import React from 'react'
import { IonPage } from '@ionic/react'
import useSoldList from '../hooks/useSoldList'
import { Header, Content } from '../components/List'

function List() {
  const { data = [], fetchMore, refetch, isFetching, isLoading } = useSoldList()

  return (
    <IonPage>
      <Header refetch={refetch} />
      <Content
        data={data}
        fetchMore={fetchMore}
        isFetching={isFetching}
        isLoading={isLoading}
      />
    </IonPage>
  )
}

export default List
