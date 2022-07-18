import { useRef, useEffect, useState } from 'react'
import { useRoutes, useLocation } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import Home from '@/pages/home'
import Home2 from '@/pages/home2'

import './style.less'

const Route = () => {
  const location = useLocation()
  const historyPaths = useRef<string[]>([])

  const el = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/HOME2',
      element: <Home2 />,
    },
  ])

  const isPush =
    historyPaths.current[historyPaths.current.length - 2] !== location.pathname

  useEffect(() => {
    if (isPush) {
      // 追加
      historyPaths.current.push(location.pathname)
    } else {
      // 最后一个弹出
      historyPaths.current.pop()
    }
  }, [isPush, location.pathname])

  console.log('isPush => ', isPush)

  return (
    <TransitionGroup className={`app-switchover-${isPush ? 'push' : 'pop'}`}>
      <CSSTransition
        key={location.key}
        classNames="app-switchover"
        timeout={300}>
        {el}
      </CSSTransition>
    </TransitionGroup>
  )
}

export default Route
