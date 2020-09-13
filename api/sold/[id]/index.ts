import rpc from '../../../lib/rpc'
import getData from '../../../lib/helper/getData'

async function soldById(req, res) {
  try {
    const { id, ...params } = req.query
    const document = await rpc(`/sold/${id}`, {
      params,
    })
    const data = getData(document)

    res.json({
      data,
    })
  } catch (error) {
    console.log(error)
  }
}

export default soldById
