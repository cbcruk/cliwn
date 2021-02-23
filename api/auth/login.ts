import puppeteer from 'puppeteer'
import puppeteerCore from 'puppeteer-core'
import chrome from 'chrome-aws-lambda'
import { serialize } from 'cookie'

const isLamda = process.env.AWS_LAMBDA_FUNCTION_VERSION

async function auth(req, res) {
  const { id, password } = JSON.parse(req.body)

  const browser = isLamda
    ? await puppeteerCore.launch({
        args: chrome.args,
        executablePath: await chrome.executablePath,
        headless: chrome.headless,
      })
    : await puppeteer.launch()
  const page = await browser.newPage()

  await page.goto(`${process.env.API_URL}/auth/login`)

  // @ts-ignore
  await page.$eval(
    'input[name="remember-me"]',
    (input: HTMLInputElement) => (input.checked = true)
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
