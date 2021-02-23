import { atomWithReset } from 'jotai/utils'

export const popoverAtom = atomWithReset({
  isShow: false,
  event: undefined,
})
