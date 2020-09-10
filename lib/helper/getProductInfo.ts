import { querySelectorAll, textContent } from '../utils'
import { DETAIL_PRODUCT_INFO } from './selector'

function getProductInfo(document: Document) {
  const info = querySelectorAll(document, DETAIL_PRODUCT_INFO).map((element) =>
    textContent(element).replace(/\n/g, '')
  )

  return info
}

export default getProductInfo
