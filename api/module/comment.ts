import { NowRequest } from '@now/node'
import { getHtml } from '../lib/cheerio'
import getNickname from './nickname'

async function getComment({ board, id, writer }: NowRequest['query']) {
  const $ = await getHtml(`${board}/${id}/comment`, {
    writer
  })

  const comments = $('.comment_row')
    .toArray()
    .map(element => {
      const $this = $(element)

      const {
        commentSn: comment_sn,
        authorId: author_id
      }: { commentSn: string; authorId: string } = $this.data()
      const nickname = getNickname($this.find('.nickname'))
      const [created_time, updated_time] = $this
        .find('.timestamp')
        .textWithTrim()
        .split('/')
      const [ip, content, like_count] = [
        '.ip_address',
        '.comment_view',
        '.comment_symph > strong'
      ].map(selector => $(selector).textWithTrim())

      return {
        comment_sn,
        author_id,
        nickname,
        ip,
        created_time,
        updated_time,
        like_count,
        content: content.replace(/\t/g, '')
      }
    })

  return comments
}

export default getComment
