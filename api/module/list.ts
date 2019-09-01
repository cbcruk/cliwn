import { getHtml } from '../lib/cheerio'
import getNickname from './nickname'

const ROW_SELECTOR = '.list_item.symph_row'
const NICKNAME_SELECTOR = '.nickname'
const SUBJECT_SELECTOR = '.subject_fixed'
const HIT_SELECTOR = '.hit'
const TIMESTAMP_SELECTOR = '.timestamp'

type Od = 'T31' | 'T32' | 'T33' | 'T34'
type Po = number | string

interface Query {
  od: Od
  po: Po
}

async function getList(path, query?: Query) {
  const $ = await getHtml(path, {
    params: query
  })

  const rows = $(ROW_SELECTOR)
  const list = rows.toArray().map(element => {
    const $this = $(element)

    const {
      authorId,
      boardSn: board_sn,
      commentCount: comment_count
    }: {
      authorId: number | string
      boardSn: number
      commentCount: number
    } = $this.data()
    const [$nickname, ...rest] = [
      NICKNAME_SELECTOR,
      SUBJECT_SELECTOR,
      HIT_SELECTOR,
      TIMESTAMP_SELECTOR
    ].map(selector => $this.find(selector))
    const [subject, hit, timestamp] = rest.map($element => $element.text())
    const nickname = getNickname($nickname)

    return {
      subject,
      nickname,
      hit: parseInt(hit, 10),
      timestamp,
      author_id: authorId.toString(),
      board_sn: board_sn.toString(),
      comment_count
    }
  })

  return { $, list, rows }
}

export default getList
