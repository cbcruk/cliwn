import React from 'react'
import { IonLabel, IonChip, IonRow } from '@ionic/react'

function ItemInfo({ price, status, boughtDate }) {
  return (
    <IonRow>
      <IonChip color="primary">
        <IonLabel>{price}</IonLabel>
      </IonChip>
      <IonChip color="secondary">
        <IonLabel>{status}</IonLabel>
      </IonChip>
      <IonChip color="tertiary">
        <IonLabel>{boughtDate}</IonLabel>
      </IonChip>
    </IonRow>
  )
}

export default ItemInfo
