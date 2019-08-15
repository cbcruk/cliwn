import { NowRequest, NowResponse } from '@now/node'
import * as _ from 'lodash'
import getDetail from '../module/detail'
import sold from './sold'

const mem = require('mem')

const boards = {
  sold
}

const memDetail = mem(
  async (board: string, id: string) => {
    const response = await getDetail(`${board}/${id}`)
    const route = boards[board as string]
    const item = route ? route(response) : response.detail

    return item
  },
  {
    maxAge: 60000
  }
)

async function detail(req: NowRequest, res: NowResponse) {
  const { board, id } = req.query
  const item = await memDetail(board, id)

  res.json(item)
}

export default detail
