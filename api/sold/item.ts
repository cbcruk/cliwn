import { NowRequest, NowResponse } from '@now/node'
import * as _ from 'lodash'
import getDetail from '../module/detail'

export default async function(req: NowRequest, res: NowResponse) {
  const { $, detail } = await getDetail(`sold/${req.query.id}`)

  const category = $('.post_category').textWithTrim()
  const [how, status, price, when, area] = $('.product_info')
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
