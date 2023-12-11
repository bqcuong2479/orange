import {connect} from 'react-redux'
import Layout from '../../components/Layout'
import {ICommonState} from '../../utils'
import {dashboardPropsSelector} from '../../selectors'
import duck from './duck'

export interface IDashboardProps {
  common: ICommonState
}

const DashboardPage = ({common}: IDashboardProps) => {
  const {messages} = common
  return <Layout messages={messages}>TODO</Layout>
}

const enhance = connect(dashboardPropsSelector, {...duck.actions})
export default enhance(DashboardPage)
