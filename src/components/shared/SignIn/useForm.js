import { useAtom } from 'jotai'
import { useCallback, useRef } from 'react'
import { authAtom } from '../../../atom/auth'

function useForm() {
  const [, setAuth] = useAtom(authAtom)
  const formRef = useRef({
    id: '',
    password: '',
  })
  const handleInput = useCallback((e) => {
    const target = e.target

    formRef.current[target.name] = target.value
  }, [])
  const handleSubmit = useCallback(async () => {
    await fetch('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify(formRef.current),
    })
    setAuth(true)
  }, [setAuth])

  return {
    handleInput,
    handleSubmit,
  }
}

export default useForm
