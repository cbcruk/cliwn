import { NextApiResponse, NextApiRequest } from 'next'
import rpc from '../../lib/rpc'
import getSoldList from './helper/getSoldList'
import getPageOffset from './helper/getPageOffset'

async function sold(req: NextApiRequest, res: NextApiResponse) {
  const document = await rpc('/sold', {
    params: req.query,
  })
  const data = getSoldList(document)
  const pageOffset = getPageOffset(document)

  res.json({
    data,
    links: {
      next: pageOffset + 1,
    },
  })
}

export default sold
