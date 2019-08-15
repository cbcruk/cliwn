import { NowRequest, NowResponse } from '@now/node'
import getList from '../module/list'
import sold from './sold'

const mem = require('mem')

const boards = {
  sold
}

const memList = mem(
  async (board: string, query) => {
    const response = await getList(board, query)
    const route = boards[board]
    const items = route ? route(response) : response.list

    return items
  },
  {
    maxAge: 60000
  }
)

async function list(req: NowRequest, res: NowResponse) {
  const { board, ...rest } = req.query
  const items = await memList(board, rest)

  res.json({
    items
  })
}

export default list
