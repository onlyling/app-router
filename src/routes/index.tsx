import type { RouteObject } from 'react-router-dom'

import Home from '@/pages/home'
import Home2 from '@/pages/home2'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/HOME2',
    element: <Home2 />,
  },
]

export default routes
