import { uniqBy, map, flattenDeep, flow } from 'lodash/fp'

export function getList(data) {
  const list = flow(
    map((page) => page.data),
    flattenDeep,
    uniqBy('boardSn'),
    map((data) => {
      return {
        ...data,
        isDone: data.category !== '판매',
      }
    })
  )(data)

  return list
}
