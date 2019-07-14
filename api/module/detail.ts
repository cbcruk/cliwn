import { getHtml } from '../lib/cheerio'
import getNickname from './nickname'

const NICKNAME_SELECTOR = '.nickname'
const SUBJECT_SELECTOR = '.post_subject > span:last-child'
const VIEW_COUNT_SELECTOR = '.view_count'
const TIMESTAMP_SELECTOR = '.post_author > span:first-child'
const IP_SELECTOR = '.post_author > span:last-child'
const ARTICLE_SELECTOR = '.post_article'
const WRITER_SELECTOR = '#writer'

async function getDetail(endpoint: string) {
  const $ = await getHtml(endpoint)
  const [$nickname, ...rest] = [
    NICKNAME_SELECTOR,
    SUBJECT_SELECTOR,
    VIEW_COUNT_SELECTOR,
    TIMESTAMP_SELECTOR,
    IP_SELECTOR,
  ].map(selector => $(selector))
  const [subject, view_count, timestamp, ip] = rest.map($element =>
    $element.textWithTrim()
  )
  const [created_date, updated_date] = timestamp
    .split('수정일 : ')
    .map(text => text.trim())
  const nickname = getNickname($nickname)
  const $article = $(ARTICLE_SELECTOR)
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
  const writer = $(WRITER_SELECTOR).val()

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
