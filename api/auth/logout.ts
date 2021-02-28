import { serialize } from 'cookie'
import { NextApiResponse } from 'next'

async function auth(_req, res: NextApiResponse) {
  res.setHeader('Set-Cookie', [
    serialize('SESSION', '', {
      maxAge: -1,
      path: '/',
    }),
  ])
  res.end()
}

export default auth
