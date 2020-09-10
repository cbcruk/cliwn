import React from 'react'
import { IonPage } from '@ionic/react'
import useSoldItem from '../hooks/useSoldItem'
import { Header, Content } from '../components/Detail'

function Detail({ match }) {
  const { id } = match.params
  const { data: item = {}, isLoading } = useSoldItem(id)

  return (
    <IonPage>
      <Header id={id} />
      <Content item={item} isLoading={isLoading} />
    </IonPage>
  )
}

export default Detail
