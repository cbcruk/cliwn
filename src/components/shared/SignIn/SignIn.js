import { IonAlert } from '@ionic/react'
import { useAtom } from 'jotai'
import { IDLE, REQUEST_LOGIN, statusAtom } from '../Sign/atom'
import useForm from './useForm'

function SignIn() {
  const [status, setStatus] = useAtom(statusAtom)
  const { handleInput, handleSubmit } = useForm()

  return (
    <IonAlert
      isOpen
      backdropDismiss={false}
      header="로그인"
      message={status === REQUEST_LOGIN ? '로그인중입니다' : ''}
      inputs={[
        {
          type: 'text',
          placeholder: '아이디',
          attributes: {
            name: 'id',
            onInput: handleInput,
          },
        },
        {
          type: 'password',
          placeholder: '비밀번호',
          attributes: {
            name: 'password',
            onInput: handleInput,
          },
        },
      ]}
      buttons={[
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Ok',
          async handler() {
            setStatus(REQUEST_LOGIN)
            await handleSubmit()
            setStatus(IDLE)
          },
        },
      ]}
    />
  )
}

export default SignIn
