import { getDocument } from '@cbcruk/dom'
import { NextApiRequest, NextApiResponse } from 'next'
import getData from '../../../lib/helper/getData'

async function soldById(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { id, ...params } = req.query
    const session = req.cookies['SESSION']
    const document = await getDocument(`/board/sold/${id}`, {
      params,
      headers: {
        cookie: session ? `SESSION=${session};` : '',
      },
    })
    const mainElement = document.getElementById('div_content')
    const data = getData(mainElement)

    res.json({
      data,
    })
  } catch (error) {
    console.log(error)

    res.status(error.code)
    res.end()
  }
}

export default soldById
