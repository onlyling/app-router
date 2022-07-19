import { NavBar as NavBarAntd } from 'antd-mobile'
import { useNavigate } from 'react-router-dom'

import { getSafeAreaInsets } from '../app-jssdk'
import { goBack } from '../app-jssdk/navigation'
import { useRouteContext } from '../route-context'

import type { NavBarProps } from './interface'

// 大有可能自己去实现
const NavBar: React.FC<NavBarProps> = ({ onBack }) => {
  const insets = getSafeAreaInsets()
  const navigate = useNavigate()
  const { hasLastPage } = useRouteContext()

  return (
    <div style={{ paddingTop: insets.top }}>
      <NavBarAntd
        onBack={() => {
          onBack ? onBack() : hasLastPage() ? navigate(-1) : goBack()
        }}>
        标题
      </NavBarAntd>
    </div>
  )
}

export default NavBar
