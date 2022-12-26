import React from 'react'

import routes from '@/routes'
import { Router, RouteContextProvider } from '@/starbridge'
import type { RouterProps } from '@/starbridge/interface'

import './style.less'

const App: React.FC<RouterProps> = () => {
  return (
    <Router>
      <RouteContextProvider routes={routes} />
    </Router>
  )
}

export default App
