import { querySelectorAll, textContent } from '../utils'
import { CONTACT_INFO } from './selector'

function getContactInfo(document: Document) {
  const info = querySelectorAll(document, CONTACT_INFO).map((element) =>
    textContent(element).replace(/\n/g, '')
  )

  return info
}

export default getContactInfo
