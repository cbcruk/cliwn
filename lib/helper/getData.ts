import getComments from './getComments'
import getContent from './getContent'
import getImages from './getImages'
import getProductInfo from './getProductInfo'
import getBasicInfo from './getBasicInfo'
import getContactInfo from './getContactInfo'

function getData(document: Document) {
  const { article, ...basicInfo } = getBasicInfo(document)
  const [how, status, price, boughtDate, area] = getProductInfo(document)
  const [name, mobile, time] = getContactInfo(document)
  const comments = getComments(document)
  const content = getContent(article)
  const images = getImages(article)

  return {
    ...basicInfo,
    content,
    images,
    how,
    status,
    price,
    boughtDate,
    area,
    comments,
    name,
    mobile,
    time,
  }
}

export default getData
