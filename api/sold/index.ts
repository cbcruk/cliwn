import { NowRequest, NowResponse } from '@now/node'
import * as _ from 'lodash'
import list from './list'
import item from './item'

function sold(req: NowRequest, res: NowResponse) {
  const hasId = _.has(req.query, 'id')
  const route = hasId ? item : list

  try {
    route(req, res)
  } catch (error) {
    console.error(error)
  }
}

export default sold
