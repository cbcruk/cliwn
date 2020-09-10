import rpc from '../../../lib/rpc'
import getData from '../../../lib/helper/getData'

async function soldById(req, res) {
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
