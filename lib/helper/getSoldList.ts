import { domUtils } from '@cbcruk/utils'
import { toNumber } from 'lodash'
import * as SELECTORS from './selector'

const { alt, number, text } = domUtils

function getSoldList(document: Document) {
  const rowNodeList = document.querySelectorAll<HTMLDivElement>(
    SELECTORS.LIST_ROW
  )
  const list = Array.from(rowNodeList).map((row) => {
    const { authorId = '', boardSn = '', commentCount = '0' } = row.dataset
    const [nickname, subject, hit, timestamp, category] = [
      SELECTORS.LIST_NICKNAME,
      SELECTORS.LIST_SUBJECT,
      SELECTORS.LIST_HIT,
      SELECTORS.LIST_TIMESTAMP,
      SELECTORS.LIST_CATEGORY,
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
    }
  })

  return list
}

export default getSoldList
