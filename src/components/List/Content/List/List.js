import React from 'react'
import { useContextSelector } from 'use-context-selector'
import { IonList, IonItem, IonLabel, IonIcon } from '@ionic/react'
import { imageOutline } from 'ionicons/icons'
import classNames from 'classnames'
import { getTimeFromNow } from '@cbcruk/utils'
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
        <IonItem
          key={item.boardSn}
          routerLink={`/${item.boardSn}`}
          className={classNames([
            styles.item,
            {
              'is-done': item.isDone,
            },
          ])}
        >
          <IonLabel>
            <h2 className={styles.title}>
              <span className={styles.subject}>{item.subject}</span>
              {item.hasPicture && <IonIcon icon={imageOutline} />}
            </h2>
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
