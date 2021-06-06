import firebase from 'firebase/app'
import 'firebase/messaging'
import { FIREBASE_OPTIONS } from '../constants'

firebase.initializeApp(FIREBASE_OPTIONS)

export const messaging = firebase.messaging.isSupported()
  ? firebase.messaging()
  : null
