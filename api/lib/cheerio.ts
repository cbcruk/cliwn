import axios, { AxiosRequestConfig } from 'axios'
import * as cheerio from 'cheerio'

export async function getHtml(
  path: string,
  params?: AxiosRequestConfig['params']
) {
  const isAll = path === 'clien_all'
  const prefix = 'https://www.clien.net/service'
  const url = isAll ? `${prefix}/group/clien_all` : `${prefix}/board/${path}`
  const response = await axios.get(url, params)
  const $ = cheerio.load(response.data)

  return $
}
