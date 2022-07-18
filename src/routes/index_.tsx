import { memo } from 'react'

import { createRouter } from '@/libs/router/create-router'
import type { RouteProps } from '@/libs/router/interface'
import Home from '@/pages/home'

type RouteRoot = {
  HOME: undefined
}

const routes: RouteProps<RouteRoot>[] = [
  {
    name: 'HOME',
    component: Home,
  },
]

const Stack = createRouter<RouteRoot>()

const Route = () => {
  return (
    <Stack.Router>
      {routes.map(item => {
        return (
          <Stack.Route
            key={item.name}
            name={item.name}
            component={item.component}
          />
        )
      })}
    </Stack.Router>
  )
}

export default memo(Route)
