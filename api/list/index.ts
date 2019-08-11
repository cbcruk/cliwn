import { NowRequest, NowResponse } from '@now/node'
import getList from '../module/list'
import sold from './sold'

const boards = {
  sold
}

async function list(req: NowRequest, res: NowResponse) {
  const { board } = req.query
  const response = await getList(board, req.query)
  const route = boards[board as string]
  const items = route ? route(response) : response.list

  res.json({
    items
  })
}

export default list
