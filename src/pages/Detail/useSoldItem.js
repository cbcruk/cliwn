import { useQuery } from 'react-query'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export const QUERY_KEY = 'soldItem'

function useSoldItem() {
  const { id } = useParams()
  const result = useQuery([QUERY_KEY, id], async () => {
    const { data } = await axios.get(`/api/sold/${id}`)
    return data.data
  })

  return result
}

export default useSoldItem
