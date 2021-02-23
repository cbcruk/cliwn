import React from 'react'
import { useContextSelector } from 'use-context-selector'
import { IonContent } from '@ionic/react'
import Title from './Title'
import Info from './Info'
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
          <Info />
          <Desc>{data?.content}</Desc>
        </>
      )}
    </IonContent>
  )
}

export default Content
