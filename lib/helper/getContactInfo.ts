import { domUtils } from '@cbcruk/utils'
import * as SELECTORS from './selector'

const { text } = domUtils

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
