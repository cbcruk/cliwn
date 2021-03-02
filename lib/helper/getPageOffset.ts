import { value } from '@cbcruk/dom'
import { flow, toNumber } from 'lodash/fp'
import * as SELECTORS from './selector'

function getPageOffset(document: Document) {
  const poElement = document.querySelector<HTMLInputElement>(SELECTORS.LIST_PO)
  const poValue = flow(value, toNumber)(poElement)

  return poValue
}

export default getPageOffset
