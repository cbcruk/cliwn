import { NowRequest } from '@now/node'
import { getHtml } from '../lib/cheerio'
import getNickname from './nickname'

async function getList(path: string, query?: NowRequest['query']) {
  const $ = await getHtml(path, {
    params: query
  })

  const rows = $('.list_item.symph_row')
  const list = rows.toArray().map(element => {
    const $this = $(element)

    const {
      authorId: author_id,
      boardSn: board_sn,
      commentCount: comment_count
    }: {
      authorId: string
      boardSn: number
      commentCount: number
    } = $this.data()
    const [$nickname, ...rest] = [
      '.nickname',
      '.subject_fixed',
      '.hit',
      '.timestamp'
    ].map(selector => $this.find(selector))
    const [subject, hit, timestamp] = rest.map($element =>
      $element.textWithTrim()
    )
    const nickname = getNickname($nickname)

    return {
      subject,
      nickname,
      hit: parseInt(hit, 10),
      timestamp,
      author_id,
      board_sn: board_sn.toString(),
      comment_count
    }
  })

  return { $, list, rows }
}

export default getList
