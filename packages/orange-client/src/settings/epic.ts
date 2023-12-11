import {combineEpics, createEpicMiddleware} from 'redux-observable'
import {catchError} from 'rxjs'
import * as authEpic from '../features/Login/epics'
import * as commonEpic from '../features/Common/epics'

import dependencies from './dependencies'

export const rootEpic = (action$: any, store$: any, dependencies: any) =>
  combineEpics(...Object.values(commonEpic), ...Object.values(authEpic))(
    action$,
    store$,
    dependencies
  ).pipe(
    catchError((error, source) => {
      console.error(error)
      return source
    })
  )

const options = {
  dependencies,
}

export default createEpicMiddleware(options)
