import { getDocument } from '@cbcruk/dom'
import { NextApiRequest, NextApiResponse } from 'next'
import getSoldList from '../../lib/helper/getSoldList'
import getPageOffset from '../../lib/helper/getPageOffset'

async function sold(req: NextApiRequest, res: NextApiResponse) {
  try {
    const document = await getDocument('/board/sold', {
      params: req.query,
      headers: {
        ['User-Agent']: req.headers['user-agent'],
      },
    })
    const data = getSoldList(document)
    const pageOffset = getPageOffset(document)

    res.json({
      data,
      links: {
        next: pageOffset + 1,
      },
    })
  } catch (error) {
    console.log(error)
  }
}

export default sold
