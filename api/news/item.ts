import { NowRequest, NowResponse } from '@now/node'
import * as _ from 'lodash'
import getDetail from '../module/detail'

const SOURCE_SELECTOR = '.outlink > a'

export default async function(req: NowRequest, res: NowResponse) {
  const { $, detail } = await getDetail(`news/${req.query.id}`)

  const source = $(SOURCE_SELECTOR).attr('href')

  const item = {
    ...detail,
    source
  }

  res.json(item)
}
