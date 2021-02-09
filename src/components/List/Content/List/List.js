import React from 'react'
import { useContextSelector } from 'use-context-selector'
import { IonList, IonItem, IonLabel } from '@ionic/react'
import { getTimeFromNow } from '../../../../helper/time'
import ListContext from '../../../../pages/List/context'
import { getList } from './helper/getList'
import styles from './style.module.css'

function List() {
  const data = useContextSelector(ListContext, (result) => result.data)

  if (!data) {
    return null
  }

  return (
    <IonList>
      {getList(data.pages).map((item) => (
        <IonItem key={item.boardSn} routerLink={`/${item.boardSn}`}>
          <IonLabel>
            <h2>{item.subject}</h2>
            <p>
              <span className={styles.meta}>{item.nickname}</span>
              <span className={styles.meta}>
                {getTimeFromNow(item.timestamp)}
              </span>
              <span
                className={styles.meta}
              >{`조회수 ${item.hit} (${item.commentCount})`}</span>
              <span className={styles.meta}>{item.category}</span>
            </p>
          </IonLabel>
        </IonItem>
      ))}
    </IonList>
  )
}

export default List
