import { getDocument } from '@cbcruk/utils'
import { NextApiRequest, NextApiResponse } from 'next'
import getSoldList from '../../lib/helper/getSoldList'
import getPageOffset from '../../lib/helper/getPageOffset'

async function sold(req: NextApiRequest, res: NextApiResponse) {
  try {
    const document = await getDocument('/board/sold', {
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
  } catch (error) {
    console.log(error)
  }
}

export default sold
