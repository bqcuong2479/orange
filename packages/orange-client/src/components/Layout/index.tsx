import * as React from 'react'
import {useTranslation} from 'react-i18next'
import Toast from '../Toast'
import {IToastMessage} from '../../utils'

// export function Layout(props: React.PropsWithChildren) {
//   const {children} = props
//   const {t} = useTranslation('translation', {keyPrefix: 'description'})
//   return (
//     <div>
//       {children}
//       {/* <Toast messages={messages} /> */}
//     </div>
//   )
// }

interface LayoutProps {
  children?: React.ReactNode
  messages: IToastMessage[]
}

const Layout: React.FC<LayoutProps> = ({children, messages}) => {
  return (
    <React.Fragment>
      {children}
      <Toast messages={messages} />
    </React.Fragment>
  )
}

export default Layout
