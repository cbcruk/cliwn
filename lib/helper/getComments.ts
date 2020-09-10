import {
  querySelectorAll,
  querySelectors,
  textContent,
  altContent,
} from '../utils'
import * as SELECTORS from './selector'

function getComments(document: Document) {
  const comments = querySelectorAll(document, SELECTORS.COMMENT).map(
    (comment) => {
      const { commentSn = null, authorId = null } = comment.dataset
      const [
        nickname,
        timestamp,
        ip,
        content,
        likeCount,
      ] = querySelectors(comment, [
        SELECTORS.COMMENT_NICKNAME,
        SELECTORS.COMMENT_TIMESTAMP,
        SELECTORS.COMMENT_IP,
        SELECTORS.COMMENT_CONTENT,
        SELECTORS.COMMENT_LIKE_COUNT,
      ])
      const [created_time, updated_time] = textContent(timestamp).split('/')

      return {
        commentSn,
        authorId,
        nickname: altContent(nickname),
        ip: textContent(ip),
        created_time,
        updated_time,
        likeCount: textContent(likeCount),
        content: textContent(content).replace(/\t/g, ''),
      }
    }
  )

  return comments
}

export default getComments
