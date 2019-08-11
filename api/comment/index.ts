import { NowRequest, NowResponse } from '@now/node'
import getComment from '../module/comment'

async function comment(req: NowRequest, res: NowResponse) {
  try {
    const items = await getComment(req.query)

    res.json({
      items
    })
  } catch (error) {
    console.error(error)
  }
}

export default comment
