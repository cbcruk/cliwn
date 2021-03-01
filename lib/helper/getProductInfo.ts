import { domUtils } from '@cbcruk/utils'
import * as SELECTORS from './selector'

const { text } = domUtils

function getProductInfo(element: HTMLElement) {
  const infoNodeList = element.querySelectorAll<HTMLElement>(
    SELECTORS.DETAIL_PRODUCT_INFO
  )
  const [how, status, price, boughtDate, area] = Array.from(
    infoNodeList
  ).map((element) => text(element).replace(/\n/g, ''))

  return { how: how.replace('&nbsp;', ''), status, price, boughtDate, area }
}

export default getProductInfo
