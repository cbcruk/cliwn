function getContent(article: HTMLElement) {
  const content = article.textContent.trim().replace(/  /g, '')

  return content
}

export default getContent
