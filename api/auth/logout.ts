import { serialize } from 'cookie'

async function auth(_req, res) {
  res.setHeader('Set-Cookie', [
    serialize('SESSION', '', {
      maxAge: -1,
      path: '/',
    }),
  ])
  res.end()
}

export default auth
