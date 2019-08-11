import { NowRequest, NowResponse } from '@now/node'
import * as _ from 'lodash'
import getDetail from '../module/detail'
import sold from './sold'

const boards = {
  sold
}

export default async function(req: NowRequest, res: NowResponse) {
  const { board, id } = req.query
  const response = await getDetail(`${board}/${id}`)
  const route = boards[board as string]
  const item = route ? route(response) : response.detail

  res.json(item)
}
