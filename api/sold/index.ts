import rpc from '../../lib/rpc'
import getSoldList from '../../lib/helper/getSoldList'
import getPageOffset from '../../lib/helper/getPageOffset'

async function sold(req, res) {
  try {
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
  } catch (error) {
    console.log(error)
  }
}

export default sold
