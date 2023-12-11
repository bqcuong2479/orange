import auth from '../features/Login/duck'
import dashboard from '../features/Dashboard/duck'
import common from '../features/Common/duck'

const actions = {
  ...common.actions,
  ...auth.actions,
  ...dashboard.actions,
}

export {actions, common, auth, dashboard}
