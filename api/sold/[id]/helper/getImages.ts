import { querySelectorAll } from '../../../../lib/utils'

function getImages(article: HTMLElement) {
  const images = querySelectorAll(article, 'img').map((img) => {
    const src = img.getAttribute('src') || ''

    return src.slice(0, src.lastIndexOf('?'))
  })

  return images
}

export default getImages
