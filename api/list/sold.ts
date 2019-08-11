import * as _ from 'lodash'

const CATEGORY_SELECTOR = '.category_fixed'

export default function({ $, list, rows }) {
  const rest = rows.toArray().map(element => {
    const $this = $(element)
    const category = $this.find(CATEGORY_SELECTOR).text()

    return {
      category
    }
  })

  const items = _.zipWith(list, rest, (a, b) => {
    return {
      ...a,
      ...b
    }
  })

  return items
}
