import { IonToast } from '@ionic/react'
import { close, link } from 'ionicons/icons'
import { useHistory } from 'react-router-dom'
import { useContextSelector } from 'use-context-selector'
import { NotificationContext } from './NotificationProvider'

function Notification() {
  const history = useHistory()
  const {
    state: { isOpen, data, error },
    handleHide,
  } = useContextSelector(NotificationContext, (r) => r)

  if (!isOpen) {
    return null
  }

  const { title, body, click_action } = data

  return (
    <IonToast
      isOpen={true}
      color={error ? 'warning' : 'primary'}
      header={title}
      message={body}
      buttons={[
        {
          icon: link,
          handler() {
            const { pathname } = new URL(click_action)
            history.push(pathname)
          },
        },
        {
          icon: close,
          role: 'cancel',
          handler: handleHide,
        },
      ]}
    />
  )
}

export default Notification
