import { NextApiResponse, NextApiRequest } from 'next'
import rpc from './helper/rpc'
import * as selectors from './selector'
import {
  textContent,
  numberContent,
  altContent,
  querySelectors,
  querySelectorAll,
} from './helper/utils'

async function sold(req: NextApiRequest, res: NextApiResponse) {
  const document = await rpc('/sold', {
    params: req.query,
  })
  const items = querySelectorAll(document, selectors.ROW_SELECTOR).map(
    (row) => {
      const { authorId = '', boardSn = '', commentCount = '0' } = row.dataset
      const [nickname, subject, hit, timestamp, category] = querySelectors(
        row,
        [
          selectors.NICKNAME_SELECTOR,
          selectors.SUBJECT_SELECTOR,
          selectors.HIT_SELECTOR,
          selectors.TIMESTAMP_SELECTOR,
          selectors.CATEGORY_SELECTOR,
        ]
      )

      return {
        nickname: altContent(nickname),
        subject: textContent(subject),
        hit: numberContent(hit),
        timestamp: textContent(timestamp),
        category: textContent(category),
        authorId,
        boardSn,
        commentCount: parseInt(commentCount, 10),
      }
    }
  )

  res.json({
    items,
  })
}

export default sold
