import { text, alt } from '@cbcruk/dom'
import * as SELECTORS from './selector'

function getComments(element: HTMLElement) {
  const wrapper = element.querySelector(SELECTORS.COMMENT_WRAPPER)
  const commentNodeList = wrapper.querySelectorAll<HTMLElement>(
    SELECTORS.COMMENT
  )
  const comments = Array.from(commentNodeList).map((comment) => {
    const { commentSn = null, authorId = null } = comment.dataset
    const [nickname, timestamp, ip, content, likeCount] = [
      SELECTORS.COMMENT_NICKNAME,
      SELECTORS.COMMENT_TIMESTAMP,
      SELECTORS.COMMENT_IP,
      SELECTORS.COMMENT_CONTENT,
      SELECTORS.COMMENT_LIKE_COUNT,
    ].map((selector) => comment.querySelector(selector))
    const [created_time, updated_time] = text(timestamp).split('/')

    return {
      commentSn,
      authorId,
      nickname: alt(nickname),
      ip: text(ip),
      created_time,
      updated_time,
      likeCount: text(likeCount),
      content: text(content).replace(/\t/g, ''),
    }
  })

  return comments
}

export default getComments
