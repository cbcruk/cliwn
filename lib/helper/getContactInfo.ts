import { text } from '@cbcruk/dom'
import * as SELECTORS from './selector'

function getContactInfo(element: HTMLElement) {
  const infoNodeList = element.querySelectorAll<HTMLElement>(
    SELECTORS.DETAIL_CONTACT_INFO
  )
  const [name, mobile, time] = Array.from(infoNodeList).map((info) =>
    text(info).replace(/\n/g, '')
  )

  return { name, mobile, time }
}

export default getContactInfo
