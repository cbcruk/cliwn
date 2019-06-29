function getNickname($element: Cheerio) {
  const text = $element.textWithTrim()
  const alt = $element.find('img').attr('alt')

  return text || alt
}

export default getNickname
