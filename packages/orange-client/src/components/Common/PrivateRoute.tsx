import * as React from 'react'
import {connect} from 'react-redux'
import {Redirect, Route, RouteProps, useLocation} from 'react-router-dom'
import {authPropsSelector} from '../../selectors'

export interface IPrivateRouteProps {
  auth: any
}

const PrivateRoute = (props: RouteProps & IPrivateRouteProps) => {
  //const authorization = localStorage.getItem('Authorization')
  // TODO: check auth

  const {auth} = props
  const {isAuthenticated} = auth

  const location = useLocation()

  if (!isAuthenticated) {
    if (location.pathname === '/') {
      return <Redirect to="/login"></Redirect>
    }
    const currentLocation = location.pathname + location.search
    return (
      <Redirect
        to={`/login?redirectUrl=${encodeURIComponent(currentLocation)}`}
      ></Redirect>
    )
  }

  return <Route {...props}></Route>
}

const enhance = connect(authPropsSelector)
export default enhance(PrivateRoute)
