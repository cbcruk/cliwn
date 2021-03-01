import { IonItem, IonLabel } from '@ionic/react'
import { useAtom } from 'jotai'
import { authAtom } from '../../../atom/auth'
import SignIn from '../SignIn'
import Spinner from '../Spinner'
import { statusAtom, FORM, REQUEST_LOGOUT, REQUEST_LOGIN } from './atom'

function Sign() {
  const [auth, setAuth] = useAtom(authAtom)
  const [status, setStatus] = useAtom(statusAtom)

  return (
    <>
      {!auth && status !== REQUEST_LOGIN ? (
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
      {status === REQUEST_LOGIN && <Spinner />}
    </>
  )
}

export default Sign
