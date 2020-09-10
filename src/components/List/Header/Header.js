import React from 'react'
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonIcon,
} from '@ionic/react'
import { refresh } from 'ionicons/icons'

function Header({ refetch }) {
  return (
    <IonHeader>
      <IonToolbar>
        <IonTitle>사고팔고</IonTitle>
        <IonButtons slot="end">
          <IonButton onClick={() => refetch()}>
            <IonIcon slot="start" icon={refresh} />
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  )
}

export default Header
