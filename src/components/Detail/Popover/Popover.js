import { IonItem, IonLabel, IonPopover } from '@ionic/react'
import { useAtom } from 'jotai'
import { useResetAtom } from 'jotai/utils'
import { useContextSelector } from 'use-context-selector'
import DetailContext from '../../../pages/Detail/context'
import { popoverAtom } from './atom'

function Popover() {
  const { how, area, name, mobile } = useContextSelector(
    DetailContext,
    (result) => result.data ?? {}
  )
  const [popover] = useAtom(popoverAtom)
  const resetPopover = useResetAtom(popoverAtom)

  return (
    <IonPopover
      event={popover.event}
      isOpen={popover.isShow}
      onDidDismiss={resetPopover}
    >
      <IonItem>
        <IonLabel>거래방법: {how}</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>거래지역: {area}</IonLabel>
      </IonItem>
      {name && (
        <IonItem>
          <IonLabel>이름: {name}</IonLabel>
        </IonItem>
      )}
      {mobile && (
        <IonItem>
          <IonLabel>연락처: {mobile}</IonLabel>
        </IonItem>
      )}
    </IonPopover>
  )
}

export default Popover
