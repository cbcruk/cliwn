import { useQuery } from 'react-query'
import axios from 'axios'

function useSoldItem(id) {
  const result = useQuery(['soldItem', id], async () => {
    const { data } = await axios.get(`/api/sold/${id}`)
    return data.data
  })

  return result
}

export default useSoldItem
