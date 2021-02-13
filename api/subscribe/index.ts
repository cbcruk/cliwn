import { NextApiRequest, NextApiResponse } from 'next'
import admin, { SUBSCRIBE_TOPIC_SOLD_KEYWORDS } from '../../lib/firebase'

async function subscribe(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    if (req.body) {
      const { token, isSubscribe = true } = req.body

      if (token) {
        const messaging = admin.messaging()
        const result = await messaging[
          isSubscribe ? 'subscribeToTopic' : 'unsubscribeFromTopic'
        ]([token], SUBSCRIBE_TOPIC_SOLD_KEYWORDS)

        res.json(result)
      }
    }
  }
}

export default subscribe
