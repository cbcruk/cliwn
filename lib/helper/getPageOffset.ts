import { querySelectorAll } from '../utils'
import { LIST_PO } from './selector'

function getPageOffset(document: Document) {
  const [po] = querySelectorAll(document, LIST_PO)

  return parseInt(po.getAttribute('value'), 10)
}

export default getPageOffset
