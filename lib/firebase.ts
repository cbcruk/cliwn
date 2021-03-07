import { getFirebaseAdmin } from '@cbcruk/firebase-admin'

const admin = getFirebaseAdmin({
  projectId: process.env.FIREBASE_PROJECT_ID,
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  privateKey: process.env.FIREBASE_PRIVATE_KEY,
})

export default admin
