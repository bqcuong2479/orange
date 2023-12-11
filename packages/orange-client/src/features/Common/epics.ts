import {ofType, Epic} from 'redux-observable'
import {IFactory} from '@orange/api-client'
import duck from './duck'
import {delayWhen, filter, map, timer} from 'rxjs'
import {IToastMessage} from '../../utils'

const {addMessage, removeMessage} = duck.actions

export const toastMessageEpic: Epic<any, any, any, IFactory> = (
  action$,
  state$
) =>
  action$.pipe(
    ofType(addMessage.type),
    delayWhen(({payload}): any => {
      const {variant}: IToastMessage = payload
      if (variant === 'danger') {
        return timer(5000)
      }
      return timer(3000)
    }),
    filter(({payload}) => {
      const {content}: IToastMessage = payload
      return state$.value.common.messages.find(
        (m: IToastMessage) => m.content === content
      )
    }),
    map(({payload}) => removeMessage(payload))
  )
