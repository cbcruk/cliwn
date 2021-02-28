import { domUtils } from '@cbcruk/utils'
import { flow, toNumber } from 'lodash/fp'
import * as SELECTORS from './selector'

const { value } = domUtils

function getPageOffset(document: Document) {
  const poElement = document.querySelector<HTMLInputElement>(SELECTORS.LIST_PO)
  const poValue = flow(value, toNumber)(poElement)

  return poValue
}

export default getPageOffset
