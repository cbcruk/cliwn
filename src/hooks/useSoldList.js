import { useInfiniteQuery } from 'react-query'
import axios from 'axios'

function useSoldList() {
  const result = useInfiniteQuery(
    'soldList',
    async (_key, po = 0) => {
      const { data } = await axios.get('/api/sold', {
        params: {
          po,
        },
      })

      return data
    },
    {
      getFetchMore: ({ links }) => links.next,
    }
  )

  return result
}

export default useSoldList
