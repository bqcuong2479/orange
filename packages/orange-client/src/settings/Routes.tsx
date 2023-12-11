import {Route, Switch} from 'react-router-dom'
import PrivateRoute from '../components/Common/PrivateRoute'
import LoginPage from '../features/Login/'
import DashboardPage from '../features/Dashboard'

const Routes = () => {
  return (
    <Switch>
      <PrivateRoute exact path="/" component={DashboardPage} />
      <Route exact path="/login" component={LoginPage} />
    </Switch>
  )
}

export default Routes
