import React from 'react'
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonBackButton,
  IonButtons,
} from '@ionic/react'
import { useParams } from 'react-router-dom'

function Header() {
  const { id } = useParams()

  return (
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton />
        </IonButtons>
        <IonTitle>사고팔고 {id}</IonTitle>
      </IonToolbar>
    </IonHeader>
  )
}

export default Header
