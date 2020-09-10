import { querySelectorAll, textContent } from '../../../../lib/utils'
import { PRODUCT_INFO } from './selector'

function getProductInfo(document: Document) {
  const info = querySelectorAll(document, PRODUCT_INFO).map((element) =>
    textContent(element).replace(/\n/g, '')
  )

  return info
}

export default getProductInfo
