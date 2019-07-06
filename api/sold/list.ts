import { NowRequest, NowResponse } from '@now/node'
import * as _ from 'lodash'
import getList from '../module/list'

const CATEGORY_SELECTOR = '.category_fixed'

export default async function(req: NowRequest, res: NowResponse) {
  const { $, list, rows } = await getList('sold', req.query)

  const rest = rows.toArray().map(element => {
    const $this = $(element)
    const category = $this.find(CATEGORY_SELECTOR).textWithTrim()

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

  res.json({
    items
  })
}
