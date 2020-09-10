import {
  querySelectorAll,
  querySelectors,
  altContent,
  textContent,
  numberContent,
} from '../../../lib/utils'
import * as SELECTORS from './selector'
import { toISOString } from '../../../lib/time'

function getSoldList(document: Document) {
  const list = querySelectorAll(document, SELECTORS.ROW).map((row) => {
    const { authorId = '', boardSn = '', commentCount = '0' } = row.dataset
    const [nickname, subject, hit, timestamp, category] = querySelectors(row, [
      SELECTORS.NICKNAME,
      SELECTORS.SUBJECT,
      SELECTORS.HIT,
      SELECTORS.TIMESTAMP,
      SELECTORS.CATEGORY,
    ])

    return {
      nickname: altContent(nickname),
      subject: textContent(subject),
      hit: numberContent(hit),
      timestamp: toISOString(textContent(timestamp)),
      category: textContent(category),
      authorId,
      boardSn,
      commentCount: parseInt(commentCount, 10),
    }
  })

  return list
}

export default getSoldList
