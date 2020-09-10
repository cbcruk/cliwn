import React from 'react'
import { IonLabel, IonChip, IonRow } from '@ionic/react'

function SellerInfo({ how, area, nickname }) {
  return (
    <IonRow>
      <IonChip color="primary" outline>
        <IonLabel>{how}</IonLabel>
      </IonChip>
      <IonChip color="secondary" outline>
        <IonLabel>{area}</IonLabel>
      </IonChip>
      <IonChip color="tertiary" outline>
        <IonLabel>{nickname}</IonLabel>
      </IonChip>
    </IonRow>
  )
}

export default SellerInfo
