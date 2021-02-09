import { useInfiniteQuery } from 'react-query'
import axios from 'axios'

export const QUERY_KEY = 'soldList'

function useSoldList() {
  const result = useInfiniteQuery(
    QUERY_KEY,
    async ({ pageParam }) => {
      const { data } = await axios.get('/api/sold', {
        params: {
          po: pageParam || 0,
        },
      })

      return data
    },
    {
      getNextPageParam: ({ links }) => links.next,
    }
  )

  return result
}

export default useSoldList
