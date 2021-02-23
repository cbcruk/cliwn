import { useRef } from 'react'
import { IonPage } from '@ionic/react'
import { Header, Content, ProgressBar } from '../../components/List'
import { Spinner } from '../../components/shared'
import Menu from '../../components/shared/Menu'
import useSoldList from './useSoldList'
import ListContext from './context'

function List() {
  const contentRef = useRef(null)
  const result = useSoldList()

  return (
    <ListContext.Provider value={{ ...result, contentRef }}>
      <Menu />
      <IonPage id="list-page">
        <Header />
        {result.isLoading && <Spinner />}
        <ProgressBar />
        <Content />
      </IonPage>
    </ListContext.Provider>
  )
}

export default List
