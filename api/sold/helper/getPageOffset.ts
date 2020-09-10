import { querySelectorAll } from '../../../lib/utils'
import { PO } from './selector'

function getPageOffset(document: Document) {
  const [po] = querySelectorAll(document, PO)

  return parseInt(po.getAttribute('value'), 10)
}

export default getPageOffset
