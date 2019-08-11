function getNickname($element: Cheerio) {
  const text = $element.text().trim()
  const alt = $element.find('img').attr('alt')

  return text || alt
}

export default getNickname
