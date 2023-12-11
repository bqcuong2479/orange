import {helloController} from './controller/helloController'

export const service = () => {
  const hello = helloController()
  return {
    ...hello,
  }
}
