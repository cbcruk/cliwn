import * as admin from 'firebase-admin'

const isDev = process.env.NODE_ENV === 'development'

admin.initializeApp({
  credential: admin.credential.cert(
    isDev
      ? require('./serviceAccountKey.json')
      : {
          projectId: process.env.FIREBASE_PROJECT_ID,
          clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
          privateKey: process.env.FIREBASE_PRIVATE_KEY,
        }
  ),
})

export const SUBSCRIBE_TOPIC_SOLD_KEYWORDS = 'SOLD_KEYWORDS'

export default admin
