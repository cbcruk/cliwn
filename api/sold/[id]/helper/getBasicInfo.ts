import {
  querySelectors,
  altContent,
  textContent,
  numberContent,
} from '../../../../lib/utils'
import { toISOString } from '../../../../lib/time'
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
    SELECTORS.NICKNAME,
    SELECTORS.SUBJECT,
    SELECTORS.VIEW_COUNT,
    SELECTORS.TIMESTAMP,
    SELECTORS.IP,
    SELECTORS.ARTICLE,
    SELECTORS.WRITER,
    SELECTORS.CATEGORY,
  ])

  return {
    nickname: altContent(nickname),
    subject: textContent(subject),
    viewCount: numberContent(viewCount),
    ip: textContent(ip),
    writer: writer.getAttribute('value'),
    category: textContent(category),
    createdDate: toISOString(textContent(timestamp.childNodes[2])),
    updatedDate: toISOString(textContent(timestamp.childNodes[3])),
    article,
  }
}

export default getBasicInfo
