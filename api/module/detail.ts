import { getHtml } from '../lib/cheerio'
import getNickname from './nickname'

async function getDetail(endpoint: string) {
  const $ = await getHtml(endpoint)

  const [$nickname, ...rest] = [
    '.nickname > span',
    '.post_subject > span:last-child',
    '.view_count',
    '.post_author > span:first-child',
    '.post_author > span:last-child'
  ].map(selector => $(selector))
  const [subject, view_count, timestamp, ip] = rest.map($element =>
    $element.textWithTrim()
  )
  const [created_date, updated_date] = timestamp
    .split('수정일 : ')
    .map(text => text.trim())
  const nickname = getNickname($nickname)
  const $article = $('.post_article')
  const content = $article
    .text()
    .trim()
    .replace(/\t/g, '')
  const images = $article
    .find('img')
    .toArray()
    .map(element => {
      const src = $(element).attr('src')
      return src.slice(0, src.lastIndexOf('?'))
    })
  const writer = $('#writer').val()

  const detail = {
    nickname,
    subject,
    view_count: parseInt(view_count, 10),
    created_date,
    updated_date,
    ip,
    content,
    images,
    writer
  }

  return {
    $,
    detail
  }
}

export default getDetail
