import autodux, {id} from 'autodux'

const duck = autodux({
  slice: 'auth',
  initial: {
    email: 'tquanghieu@tma.com.vn',
    password: 'Aa123456',
    isAuthenticated: false,
  },
  actions: {
    login: id,
    onLogin: (state: any, payload: any) => {
      return {...state, password: '', isAuthenticated: payload}
    },
  },
})

export default duck
