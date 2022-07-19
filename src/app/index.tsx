import React from 'react'

import routes from '@/routes'
import { Router, RouteContextProvider } from '@/starbridge'
import type { RouterProps } from '@/starbridge/interface'

import './style.less'

const App: React.FC<RouterProps> = ({ initialEntries }) => {
  return (
    <Router initialEntries={initialEntries}>
      <RouteContextProvider routes={routes} />
    </Router>
  )
}

export default App
