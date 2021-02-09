import React from 'react'
import { IonLabel, IonChip, IonRow } from '@ionic/react'
import { useContextSelector } from 'use-context-selector'
import DetailContext from '../../../../pages/Detail/context'

function SellerInfo() {
  const { how, area, nickname } = useContextSelector(
    DetailContext,
    (result) => result.data
  )

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
