import { NowRequest, NowResponse } from '@now/node'
import * as _ from 'lodash'
import getDetail from '../module/detail'

const CATEGORY_SELECTOR = '.post_category'
const PRODUCT_INFO_SELECTOR = '.product_info'

export default async function(req: NowRequest, res: NowResponse) {
  const { $, detail } = await getDetail(`sold/${req.query.id}`)

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

  res.json(item)
}
