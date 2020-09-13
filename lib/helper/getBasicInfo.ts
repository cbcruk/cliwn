import {
  querySelectors,
  altContent,
  textContent,
  numberContent,
} from '../utils'
import * as SELECTORS from './selector'

function getBasicInfo(document: Document) {
  const [
    nickname,
    subject,
    viewCount,
    timestamp,
    ip,
    article,
    writer,
    category,
  ] = querySelectors(document, [
    SELECTORS.DETAIL_NICKNAME,
    SELECTORS.DETAIL_SUBJECT,
    SELECTORS.DETAIL_VIEW_COUNT,
    SELECTORS.DETAIL_TIMESTAMP,
    SELECTORS.DETAIL_IP,
    SELECTORS.DETAIL_ARTICLE,
    SELECTORS.DETAIL_WRITER,
    SELECTORS.DETAIL_CATEGORY,
  ])

  return {
    nickname: altContent(nickname),
    subject: textContent(subject),
    viewCount: numberContent(viewCount),
    ip: textContent(ip),
    writer: writer.getAttribute('value'),
    category: textContent(category),
    createdDate: textContent(timestamp.childNodes[2]),
    updatedDate: textContent(timestamp.childNodes[3]),
    article,
  }
}

export default getBasicInfo
