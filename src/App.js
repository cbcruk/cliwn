import React from 'react'
import { Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { IonApp, IonRouterOutlet, setupConfig } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import { List, Detail } from './pages'
import '@ionic/react/css/core.css'
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'
import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'
import './theme/variables.css'

setupConfig({
  spinner: 'crescent',
})

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: false,
      refetchOnWindowFocus: false,
    },
  },
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <IonApp>
        <IonReactRouter>
          <IonRouterOutlet>
            <Route exact path="/" component={List} />
            <Route path="/:id" component={Detail} />
          </IonRouterOutlet>
        </IonReactRouter>
      </IonApp>
    </QueryClientProvider>
  )
}

export default App
