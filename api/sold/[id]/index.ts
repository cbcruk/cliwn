import rpc from '../../../lib/rpc'
import getData from '../../../lib/helper/getData'

async function soldById(req, res) {
  try {
    const { id, ...params } = req.query
    const session = req.cookies['SESSION']
    const document = await rpc(`/sold/${id}`, {
      params,
      headers: {
        cookie: session ? `SESSION=${session};` : '',
      },
    })
    const data = getData(document)

    res.json({
      data,
    })
  } catch (error) {
    res.status(error.code)
    res.end()
  }
}

export default soldById
