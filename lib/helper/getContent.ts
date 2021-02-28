import * as SELECTORS from './selector'

function getContent(element: HTMLElement) {
  const content = element
    .querySelector(SELECTORS.DETAIL_ARTICLE)
    .innerHTML.trim()

  return content
}

export default getContent
