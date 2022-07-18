import { NavBar as NavBarAntd } from 'antd-mobile'
import { useNavigate } from 'react-router-dom'

import { getSafeAreaInsets } from '@/libs/app-jssdk'

import type { NavBarProps } from './interface'

// 大有可能自己去实现
const NavBar: React.FC<NavBarProps> = ({ onBack }) => {
  const insets = getSafeAreaInsets()
  const navigate = useNavigate()

  return (
    <div style={{ paddingTop: insets.top }}>
      <NavBarAntd
        onBack={() => {
          onBack ? onBack() : navigate(-1)
        }}>
        标题
      </NavBarAntd>
    </div>
  )
}

export default NavBar
