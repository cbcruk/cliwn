import React from 'react'
import {
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import Sign from '../Sign'

function Menu() {
  return (
    <IonMenu contentId="list-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>메뉴</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonListHeader>내 메뉴</IonListHeader>
          <Sign />

          <IonListHeader>게시판</IonListHeader>
          <IonMenuToggle auto-hide="false">
            <IonItem routerLink="/">
              <IonLabel>홈</IonLabel>
            </IonItem>
          </IonMenuToggle>
        </IonList>
      </IonContent>
    </IonMenu>
  )
}

export default Menu
