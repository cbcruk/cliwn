import { useContextSelector } from 'use-context-selector'
import ListContext from './context'

function useContent() {
  const contentRef = useContextSelector(
    ListContext,
    ({ contentRef }) => contentRef
  )

  return contentRef
}

export default useContent
