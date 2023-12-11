import {createStructuredSelector} from 'reselect'
import {RootState} from './interfaces'

const commonSelector = (state: RootState) => state.common

const authSelector = (state: RootState) => state.auth
export const authPropsSelector = createStructuredSelector({
  common: commonSelector,
  auth: authSelector,
})

const dashboardSelector = (state: RootState) => state.dashboard
export const dashboardPropsSelector = createStructuredSelector({
  common: commonSelector,
  dashboard: dashboardSelector,
})
