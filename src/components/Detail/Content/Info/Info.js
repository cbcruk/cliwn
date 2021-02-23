import React from 'react'
import { IonLabel, IonItemGroup, IonItem } from '@ionic/react'
import { useContextSelector } from 'use-context-selector'
import DetailContext from '../../../../pages/Detail/context'
import styles from './style.module.css'

function ItemInfo() {
  const { price, status, boughtDate } = useContextSelector(
    DetailContext,
    (result) => result.data
  )

  return (
    <IonItemGroup>
      <IonItem className={styles.item}>
        <IonLabel>판매가격: {price}</IonLabel>
      </IonItem>
      <IonItem className={styles.item}>
        <IonLabel>판매상태: {status}</IonLabel>
      </IonItem>
      <IonItem className={styles.item}>
        <IonLabel>구매시기: {boughtDate}</IonLabel>
      </IonItem>
    </IonItemGroup>
  )
}

export default ItemInfo
