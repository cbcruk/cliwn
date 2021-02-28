import getBasicInfo from './getBasicInfo'
import getProductInfo from './getProductInfo'
import getContactInfo from './getContactInfo'
import getContent from './getContent'
import getComments from './getComments'

function getData(element: HTMLElement) {
  const basicInfo = getBasicInfo(element)
  const productInfo = getProductInfo(element)
  const contactInfo = getContactInfo(element)
  const comments = getComments(element)
  const content = getContent(element)

  return {
    ...basicInfo,
    ...productInfo,
    ...contactInfo,
    comments,
    content,
  }
}

export default getData
