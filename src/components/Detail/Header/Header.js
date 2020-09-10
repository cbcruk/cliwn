import React from 'react'
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonBackButton,
  IonButtons,
} from '@ionic/react'

function Header({ id }) {
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
