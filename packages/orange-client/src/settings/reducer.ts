import {combineReducers, Reducer} from 'redux'
import {common, auth, dashboard} from './duck'
import {History} from 'history'
import {connectRouter} from 'connected-react-router'

// export const rootReducer = (history: History) =>
//   combineReducers({
//     router: connectRouter(history) as Reducer,
//     common: common.reducer as Reducer,
//     auth: auth.reducer as Reducer,
//     dashboard: dashboard.reducer as Reducer,
//   })

export const rootReducer = (history: History) => ({
  router: connectRouter(history) as Reducer,
  common: common.reducer as Reducer,
  auth: auth.reducer as Reducer,
  dashboard: dashboard.reducer as Reducer,
})
