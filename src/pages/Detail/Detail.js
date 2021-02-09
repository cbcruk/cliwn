import { IonPage } from '@ionic/react'
import { Header, Content } from '../../components/Detail'
import useSoldItem from './useSoldItem'
import DetailContext from './context'

function Detail() {
  const result = useSoldItem()

  return (
    <DetailContext.Provider value={result}>
      <IonPage>
        <Header />
        <Content />
      </IonPage>
    </DetailContext.Provider>
  )
}

export default Detail
