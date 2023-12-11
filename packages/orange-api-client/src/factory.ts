import {Observable, from} from 'rxjs'
// import {AuthApi} from './apis'
// import {PostLoginRequest, PostLoginResponse} from './models'
import {Configuration} from './runtime'

export interface IFactory {
  // postLogin$(body: PostLoginRequest): Observable<PostLoginResponse>
  sampleAPI$: any
}

export function factory(config?: Configuration): IFactory {
  // const authApi = new AuthApi(config)
  // const postLogin$ = (body: PostLoginRequest): Observable<PostLoginResponse> =>
  //   from(authApi.postLogin({postLoginRequest: body}))
  return {
    // postLogin$,
    sampleAPI$: null,
  }
}
