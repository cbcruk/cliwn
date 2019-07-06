import { NowRequest } from '@now/node'
import { getHtml } from '../lib/cheerio'
import getNickname from './nickname'

const COMMENT_SELECOTR = '.comment_row'
const NICKNAME_SELECOTR = '.nickname'
const TIMESTAMP_SELECOTR = '.timestamp'
const IP_SELECOTR = '.ip_address'
const CONTENT_SELECOTR = '.comment_view'
const LIKE_COUNT_SELECOTR = '.comment_symph > strong'

async function getComment({ board, id, writer }: NowRequest['query']) {
  const $ = await getHtml(`${board}/${id}/comment`, {
    writer
  })

  const comments = $(COMMENT_SELECOTR)
    .toArray()
    .map(element => {
      const $this = $(element)

      const {
        commentSn: comment_sn,
        authorId: author_id
      }: { commentSn: string; authorId: string } = $this.data()
      const nickname = getNickname($this.find(NICKNAME_SELECOTR))
      const [created_time, updated_time] = $this
        .find(TIMESTAMP_SELECOTR)
        .textWithTrim()
        .split('/')
      const [ip, content, like_count] = [
        IP_SELECOTR,
        CONTENT_SELECOTR,
        LIKE_COUNT_SELECOTR,
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
