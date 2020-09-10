import React from 'react'
import { IonContent, IonSpinner, IonRow } from '@ionic/react'
import Title from './Title'
import ItemInfo from './ItemInfo'
import SellerInfo from './SellerInfo'
import Desc from './Desc'

function Content({ item, isLoading }) {
  const {
    subject,
    content,
    price,
    status,
    boughtDate,
    how,
    area,
    nickname,
  } = item

  return (
    <IonContent className="ion-padding">
      {isLoading && (
        <IonRow class="ion-justify-content-center">
          <IonSpinner name="crescent" />
        </IonRow>
      )}
      <Title>{subject}</Title>
      <ItemInfo price={price} status={status} boughtDate={boughtDate} />
      <SellerInfo how={how} area={area} nickname={nickname} />
      <Desc>{content}</Desc>
    </IonContent>
  )
}

export default Content
