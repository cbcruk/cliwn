import { NowRequest, NowResponse } from '@now/node'
import * as _ from 'lodash'
import getDetail from '../module/detail'

const CATEGORY_SELECTOR = '.post_category'
const PRODUCT_INFO_SELECTOR = '.product_info'

export default async function(req: NowRequest, res: NowResponse) {
  const { $, detail } = await getDetail(`sold/${req.query.id}`)

  const category = $(CATEGORY_SELECTOR).textWithTrim()
  const [how, status, price, when, area] = $(PRODUCT_INFO_SELECTOR)
    .toArray()
    .map(element => $(element).textWithTrim())

  const item = {
    ...detail,
    category,
    how,
    status,
    price,
    when,
    area
  }

  res.json(item)
}
