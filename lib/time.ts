import dayjs from 'dayjs'

export function toISOString(time: string) {
  if (!time) {
    return null
  }
  return dayjs(time).toISOString()
}
