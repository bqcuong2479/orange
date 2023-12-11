import {Action} from 'redux'
import {IToastMessage} from './interfaces'
import i18n from '../i18n'

export const ToastMessage = (
  addMessage: (message: IToastMessage) => Action
) => {
  return {
    success: (message: string, param: object) => {
      return addMessage({
        content: i18n.t(message, param),
        variant: 'success',
      })
    },
    error: (message: string, param: object) => {
      return addMessage({
        content: i18n.t(message, param),
        variant: 'danger',
      })
    },
  }
}
