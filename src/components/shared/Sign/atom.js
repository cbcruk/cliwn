import { atom } from 'jotai'

export const IDLE = 'IDLE'
export const FORM = 'FORM'
export const REQUEST_LOGIN = 'REQUEST_LOGIN'
export const REQUEST_LOGOUT = 'REQUEST_LOGOUT'

export const statusAtom = atom(IDLE)
