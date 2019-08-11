const CATEGORY_SELECTOR = '.post_category'
const PRODUCT_INFO_SELECTOR = '.product_info'

export default function({ $, detail }) {
  const category = $(CATEGORY_SELECTOR).text()
  const [how, status, price, bought_date, area] = $(PRODUCT_INFO_SELECTOR)
    .toArray()
    .map(element =>
      $(element)
        .text()
        .trim()
        .replace(/\t|\n/g, '')
    )

  const item = {
    ...detail,
    category,
    how,
    status,
    price,
    bought_date,
    area
  }

  return item
}
