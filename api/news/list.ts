import { NowRequest, NowResponse } from '@now/node'
import * as _ from 'lodash'
import getList from '../module/list'

export default async function(req: NowRequest, res: NowResponse) {
  try {
    const { list: items } = await getList('news', req.query)

    res.json({
      items
    })
  } catch (error) {
    console.error(error)
  }
}
