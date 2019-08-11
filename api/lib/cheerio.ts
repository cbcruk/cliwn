import axios, { AxiosRequestConfig } from 'axios'
import * as cheerio from 'cheerio'

export async function getHtml(
  path: string,
  params?: AxiosRequestConfig['params']
) {
  const response = await axios.get(
    `https://www.clien.net/service/board/${path}`,
    params
  )
  const $ = cheerio.load(response.data)

  return $
}
