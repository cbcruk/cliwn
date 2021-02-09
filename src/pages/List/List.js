import { useRef } from 'react'
import { IonPage } from '@ionic/react'
import { Header, Content, ProgressBar } from '../../components/List'
import useSoldList from './useSoldList'
import ListContext from './context'
import { Spinner } from '../../components/shared'

function List() {
  const contentRef = useRef(null)
  const result = useSoldList()

  return (
    <ListContext.Provider value={{ ...result, contentRef }}>
      <IonPage>
        <Header />
        {result.isLoading && <Spinner />}
        <ProgressBar />
        <Content />
      </IonPage>
    </ListContext.Provider>
  )
}

export default List
