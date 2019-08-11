const SOURCE_SELECTOR = '.outlink > a'

export default function({ $, detail }) {
  const source = $(SOURCE_SELECTOR).attr('href')

  const item = {
    ...detail,
    source
  }

  return item
}
