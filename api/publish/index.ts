import { NextApiRequest, NextApiResponse } from 'next'
import { SUBSCRIBE_TOPIC_SOLD_KEYWORDS } from '../../lib/constants'
import admin from '../../lib/firebase'

async function publish(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { nickname, subject } = req.body
    const response = await admin.messaging().send({
      notification: {
        title: `회원중고장터 • ${nickname}`,
        body: subject,
      },
      topic: SUBSCRIBE_TOPIC_SOLD_KEYWORDS,
    })

    res.json(response)
  }
}

export default publish
