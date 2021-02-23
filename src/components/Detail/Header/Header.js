import React from 'react'
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonBackButton,
  IonButtons,
  IonIcon,
  IonButton,
} from '@ionic/react'
import { fileTray } from 'ionicons/icons'
import { useParams } from 'react-router-dom'
import { useAtom } from 'jotai'
import { popoverAtom } from '../Popover/atom'
import Popover from '../Popover'

function Header() {
  const { id } = useParams()
  const [, setPopover] = useAtom(popoverAtom)

  return (
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton defaultHref="/" />
        </IonButtons>
        <IonTitle>사고팔고 {id}</IonTitle>
        <IonButtons slot="end">
          <IonButton
            onClick={(event) =>
              setPopover({
                isShow: true,
                event,
              })
            }
          >
            <IonIcon icon={fileTray} />
          </IonButton>
        </IonButtons>
      </IonToolbar>
      <Popover />
    </IonHeader>
  )
}

export default Header
