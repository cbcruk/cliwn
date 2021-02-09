import React from 'react'
import { useContextSelector } from 'use-context-selector'
import { IonContent } from '@ionic/react'
import Title from './Title'
import ItemInfo from './ItemInfo'
import SellerInfo from './SellerInfo'
import Desc from './Desc'
import DetailContext from '../../../pages/Detail/context'
import { Spinner } from '../../shared'

function Content() {
  const { isLoading, data } = useContextSelector(
    DetailContext,
    (result) => result || {}
  )

  return (
    <IonContent className="ion-padding">
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Title>{data?.subject}</Title>
          <ItemInfo />
          <SellerInfo />
          <Desc>{data?.content}</Desc>
        </>
      )}
    </IonContent>
  )
}

export default Content
