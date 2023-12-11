import {IFactory} from '@orange/api-client'
import {Epic, ofType} from 'redux-observable'
import {concat, mergeMap, of} from 'rxjs'
import duck from './duck'
import common from '../Common/duck'
import {history, ToastMessage} from '../../utils'

const {login, onLogin} = duck.actions
const {addMessage} = common.actions
const toast = ToastMessage(addMessage)

export const loginEpic: Epic<any, any, any, IFactory> = (
  action$,
  state$
  // {postLogin$}
) =>
  action$.pipe(
    ofType(login.type),
    mergeMap((payload) => {
      const {auth, router} = state$.value
      const {email, password} = auth
      // postLogin$({username: email, password})
      localStorage.setItem(
        'Authorization',
        JSON.stringify({email, isAuthenticated: true})
      )

      const redirectUrl = new URLSearchParams(router.location.search).get(
        'redirectUrl'
      )
      if (redirectUrl) {
        history.push(redirectUrl)
      } else {
        history.push('/')
      }

      return concat(
        of(onLogin(true)),
        of(toast.success('LOGIN_PAGE.MESSAGE.WELCOME', {name: email}))
      )
      // return concat(of(toast.error('Wrong username or password!')))
    })
  )
