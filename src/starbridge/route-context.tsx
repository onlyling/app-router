/* eslint-disable react/no-unescaped-entities */
import React, {
  createContext,
  useContext,
  useMemo,
  useRef,
  useEffect,
  useCallback,
} from 'react'
import { useLocation, useRoutes } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import type { RouteContextState } from './interface'

import './style.less'

const RouteContext = createContext<RouteContextState>({
  hasLastPage: () => false,
})

export const useRouteContext = () => useContext(RouteContext)

// /** Helper Component to make a new page. */
// const Page: React.FC<React.PropsWithChildren<{ to: string }>> = (props) => <main><Link {...props} /></main>; // prettier-ignore

// /** Page A, see App for the URL */
// const A = () => <Page to="/b">You're on "/a": click to go to "/b"</Page>
// /** Page B, see App for the URL */
// const B = () => <Page to="/a">Now on "/b": now click to go to "/a"</Page>

export const RouteContextProvider: React.FC<{
  routes: RouteObject[]
}> = ({ routes }) => {
  const location = useLocation()
  const historyPaths = useRef<string[]>([])
  const hasLastPage = useCallback(() => historyPaths.current.length > 1, [])
  const value = useMemo(() => ({ hasLastPage }), [hasLastPage])

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

  return (
    <RouteContext.Provider value={value}>
      <TransitionGroup className={`app-switchover-${isPush ? 'push' : 'pop'}`}>
        <CSSTransition
          key={location.key}
          classNames="app-switchover"
          timeout={300}>
          {useRoutes(routes)}
        </CSSTransition>
      </TransitionGroup>
    </RouteContext.Provider>
  )
}
