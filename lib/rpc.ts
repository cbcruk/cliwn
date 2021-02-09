import axios, { AxiosRequestConfig } from 'axios'
import { JSDOM } from 'jsdom'

const instance = axios.create({
  baseURL: process.env.API_URL,
})

async function html2document(html: string) {
  const { window } = new JSDOM(html)

  return window.document
}

async function rpc(url: string, config?: AxiosRequestConfig) {
  const { data } = await instance.get<string>(url, config)
  const document = html2document(data)

  return document
}

export default rpc
