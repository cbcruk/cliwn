import { AppRegistry } from 'react-native'
import App from './App'
import * as serviceWorker from './serviceWorker'

AppRegistry.registerComponent('App', () => App)

AppRegistry.runApplication('App', {
  initialProps: {},
  rootTag: document.getElementById('root')
})

serviceWorker.unregister()
