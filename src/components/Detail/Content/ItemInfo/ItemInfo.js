import React from 'react'
import { IonLabel, IonChip, IonRow } from '@ionic/react'
import { useContextSelector } from 'use-context-selector'
import DetailContext from '../../../../pages/Detail/context'

function ItemInfo() {
  const { price, status, boughtDate } = useContextSelector(
    DetailContext,
    (result) => result.data
  )

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
