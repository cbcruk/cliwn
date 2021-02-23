import { IonItem, IonLabel } from '@ionic/react'
import { useAtom } from 'jotai'
import { authAtom } from '../../../atom/auth'
import SignIn from '../SignIn'
import { statusAtom, FORM, REQUEST_LOGOUT } from './atom'

function Sign() {
  const [auth, setAuth] = useAtom(authAtom)
  const [status, setStatus] = useAtom(statusAtom)

  return (
    <>
      {!auth ? (
        <IonItem onClick={() => setStatus(FORM)}>
          <IonLabel>로그인</IonLabel>
        </IonItem>
      ) : (
        <IonItem
          onClick={async () => {
            setStatus(REQUEST_LOGOUT)
            await fetch('/api/auth/logout')
            setAuth(false)
          }}
        >
          <IonLabel>로그아웃</IonLabel>
        </IonItem>
      )}
      {status === FORM && <SignIn />}
    </>
  )
}

export default Sign
