import React from 'react'
import { IonText } from '@ionic/react'

function Title({ children }) {
  return (
    <IonText color="dark">
      <h2>{children}</h2>
    </IonText>
  )
}

export default Title
