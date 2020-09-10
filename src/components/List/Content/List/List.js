import React from 'react'
import { IonList, IonItem, IonLabel } from '@ionic/react'
import { getTimeFromNow } from '../../../../helper/time'
import { getList } from './helper/getList'

function List({ data }) {
  const dataList = getList(data)

  return (
    <IonList>
      {dataList.map((item) => (
        <IonItem key={item.boardSn} routerLink={`/${item.boardSn}`}>
          <IonLabel>
            <h2>{item.subject}</h2>
            <p>
              {[
                item.nickname,
                getTimeFromNow(item.timestamp),
                `조회수 ${item.hit} (${item.commentCount})`,
                item.category,
              ].join(' • ')}
            </p>
          </IonLabel>
        </IonItem>
      ))}
    </IonList>
  )
}

export default List
