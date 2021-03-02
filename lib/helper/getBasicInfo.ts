import { text, number, alt } from '@cbcruk/dom'
import * as SELECTORS from './selector'

function getBasicInfo(element: HTMLElement) {
  const [subject, nickname, viewCount, timestamp, ip, category] = [
    SELECTORS.DETAIL_SUBJECT,
    SELECTORS.DETAIL_NICKNAME,
    SELECTORS.DETAIL_VIEW_COUNT,
    SELECTORS.DETAIL_TIMESTAMP,
    SELECTORS.DETAIL_IP,
    SELECTORS.DETAIL_CATEGORY,
  ].map((selector) => element.querySelector(selector))
  const [, , createdDate, updatedDate] = timestamp.childNodes

  return {
    subject: text(subject),
    nickname: alt(nickname),
    viewCount: number(viewCount),
    ip: text(ip),
    category: text(category),
    createdDate: text(createdDate),
    updatedDate: text(updatedDate),
  }
}

export default getBasicInfo
