import { NextApiResponse, NextApiRequest } from 'next'
import rpc from '../../../lib/rpc'
import getData from './helper/getData'

async function soldById(req: NextApiRequest, res: NextApiResponse) {
  const { id, ...params } = req.query
  const document = await rpc(`/sold/${id}`, {
    params,
  })
  const data = getData(document)

  res.json({
    data,
  })
}

export default soldById
