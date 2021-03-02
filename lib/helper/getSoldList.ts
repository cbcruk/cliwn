import { alt, number, text } from '@cbcruk/dom'
import { toNumber } from 'lodash'
import * as SELECTORS from './selector'

function getSoldList(document: Document) {
  const rowNodeList = document.querySelectorAll<HTMLDivElement>(
    SELECTORS.LIST_ROW
  )
  const list = Array.from(rowNodeList).map((row) => {
    const { authorId = '', boardSn = '', commentCount = '0' } = row.dataset
    const [nickname, subject, hit, timestamp, category, picture] = [
      SELECTORS.LIST_NICKNAME,
      SELECTORS.LIST_SUBJECT,
      SELECTORS.LIST_HIT,
      SELECTORS.LIST_TIMESTAMP,
      SELECTORS.LIST_CATEGORY,
      SELECTORS.LIST_PICTURE,
    ].map((selector) => row.querySelector(selector))

    return {
      nickname: alt(nickname),
      subject: text(subject),
      hit: number(hit),
      timestamp: text(timestamp),
      category: text(category),
      authorId,
      boardSn,
      commentCount: toNumber(commentCount),
      hasPicture: Boolean(picture),
    }
  })

  return list
}

export default getSoldList
