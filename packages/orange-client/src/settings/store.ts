import {createStore, applyMiddleware, compose, Middleware} from 'redux'
import {configureStore} from '@reduxjs/toolkit'
import {rootReducer} from './reducer'
import epicMiddleware, {rootEpic} from './epic'
import {routerMiddleware} from 'connected-react-router'
import {history} from '../utils'

// const windowIfDefined = typeof window === 'undefined' ? null : (window as any)
// const composeEnhancers =
//   windowIfDefined.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// const middleware: Middleware[] = [routerMiddleware(history), epicMiddleware]

// const store = createStore(
//   rootReducer(history),
//   composeEnhancers(applyMiddleware(...middleware))
// )
const store = configureStore({
  reducer: rootReducer(history),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(epicMiddleware),
  devTools: process.env.NODE_ENV !== 'production',
})
epicMiddleware.run(rootEpic)

export default store
