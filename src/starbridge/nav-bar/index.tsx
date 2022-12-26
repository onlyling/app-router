import { NavBar as NavBarAntd } from 'antd-mobile'
import { memo, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { goBack } from '../app-jssdk/navigation'
import { useRouteContext } from '../route-context'

import type { NavBarProps } from './interface'

// 大有可能自己去实现
const NavBar: React.FC<NavBarProps> = ({
  title,
  backgroundColor = '#fff',
  onBack,
}) => {
  const navigate = useNavigate()
  const { hasLastPage } = useRouteContext()

  useEffect(() => {
    const themeColor = document.querySelector('meta[name="theme-color"]')
    themeColor.setAttribute('content', backgroundColor)
  }, [backgroundColor])

  return (
    <NavBarAntd
      style={{ backgroundColor }}
      onBack={() => {
        onBack ? onBack() : hasLastPage() ? navigate(-1) : goBack()
      }}>
      {title}
    </NavBarAntd>
  )
}

export default memo(NavBar)
