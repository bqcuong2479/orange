import autodux from 'autodux'
import {ICommonState, IToastMessage} from '../../utils'

const duck = autodux({
  slice: 'common',
  initial: {
    messages: [],
  },
  actions: {
    addMessage: (
      {messages, ...state}: ICommonState,
      message: IToastMessage
    ) => ({
      ...state,
      messages: [...messages, message],
    }),
    removeMessage: (
      {messages, ...state}: ICommonState,
      message: IToastMessage
    ) => ({
      ...state,
      messages: messages.filter(
        (m: IToastMessage) => m.content !== message.content
      ),
    }),
  },
})

export default duck
