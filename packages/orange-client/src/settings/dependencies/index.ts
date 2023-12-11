import {factory} from '@orange/api-client'

const config: any = {
  basePath: 'http://localhost:5005/v1/',
}

const dependencies = factory(config)
export default {...dependencies}
