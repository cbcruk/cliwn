import React from 'react'
import { useQueryClient } from 'react-query'
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonIcon,
} from '@ionic/react'
import { refresh } from 'ionicons/icons'
import useContent from '../../../pages/List/useContent'
import { QUERY_KEY } from '../../../pages/List/useSoldList'

function Header() {
  const queryClient = useQueryClient()
  const contentRef = useContent()

  return (
    <IonHeader>
      <IonToolbar>
        <IonTitle>사고팔고</IonTitle>
        <IonButtons slot="end">
          <IonButton
            onClick={async () => {
              contentRef.current.scrollToTop()

              queryClient.setQueryData(QUERY_KEY, (data) => {
                return {
                  pages: data.pages.slice(0, 1),
                  pageParams: data.pageParams.slice(0, 1) || 0,
                }
              })
              queryClient.invalidateQueries(QUERY_KEY)
            }}
          >
            <IonIcon slot="start" icon={refresh} />
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  )
}

export default Header
