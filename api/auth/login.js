import { getBrowser } from '@cbcruk/puppeteer'
import { serialize } from 'cookie'

async function auth(req, res) {
  const { id, password } = JSON.parse(req.body)

  const browser = await getBrowser()
  const page = await browser.newPage()

  await page.goto(`${process.env.API_URL}/auth/login`)

  await page.$eval(
    'input[name="remember-me"]',
    (input) => (input.checked = true)
  )
  await page.type('input[name="userId"]', id)
  await page.type('input[name="userPassword"]', password)
  await page.keyboard.press('Enter')

  await page.waitForNavigation()

  const rawCookies = await page.cookies()
  const session = rawCookies.find((cookie) => cookie.name === 'SESSION')

  await browser.close()

  res.setHeader(
    'Set-Cookie',
    serialize('SESSION', session.value, {
      path: '/',
    })
  )
  res.end(res.getHeader('Set-Cookie'))
}

export default auth
