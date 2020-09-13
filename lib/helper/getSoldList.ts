import {
  querySelectorAll,
  querySelectors,
  altContent,
  textContent,
  numberContent,
} from '../utils'
import * as SELECTORS from './selector'

function getSoldList(document: Document) {
  const list = querySelectorAll(document, SELECTORS.LIST_ROW).map((row) => {
    const { authorId = '', boardSn = '', commentCount = '0' } = row.dataset
    const [nickname, subject, hit, timestamp, category] = querySelectors(row, [
      SELECTORS.LIST_NICKNAME,
      SELECTORS.LIST_SUBJECT,
      SELECTORS.LIST_HIT,
      SELECTORS.LIST_TIMESTAMP,
      SELECTORS.LIST_CATEGORY,
    ])

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
  })

  return list
}

export default getSoldList
