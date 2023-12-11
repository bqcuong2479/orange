import {ConnectedRouter} from 'connected-react-router'
import {Provider} from 'react-redux'
import store from './settings/store'
import {history} from './utils'

import './scss/App.scss'
import Routes from './settings/Routes'
import {Suspense} from 'react'

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Routes />
        </ConnectedRouter>
      </Provider>
    </Suspense>
  )
}

export default App
