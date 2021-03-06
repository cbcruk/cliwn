import { text } from '@cbcruk/dom'
import * as SELECTORS from './selector'

function getProductInfo(element: HTMLElement) {
  const infoNodeList = element.querySelectorAll<HTMLElement>(
    SELECTORS.DETAIL_PRODUCT_INFO
  )
  const [how, status, price, boughtDate, area] = Array.from(
    infoNodeList
  ).map((element) => text(element).replace(/\n/g, ''))

  return { how, status, price, boughtDate, area }
}

export default getProductInfo
