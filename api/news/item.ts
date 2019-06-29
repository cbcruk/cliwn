import { NowRequest, NowResponse } from '@now/node'
import * as _ from 'lodash'
import getDetail from '../module/detail'

export default async function(req: NowRequest, res: NowResponse) {
  const { $, detail } = await getDetail(`news/${req.query.id}`)

  const source = $('.outlink > a').attr('href')

  const item = {
    ...detail,
    source
  }

  res.json(item)
}
