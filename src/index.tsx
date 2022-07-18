import React from 'react'
import { createRoot } from 'react-dom/client'

import { ready, getInitialPathname } from '@/libs/app-jssdk'

import App from './App'

const root = createRoot(document.getElementById('root')!)

ready().then(() => {
  const initialPathname = getInitialPathname()
  const initialEntries = initialPathname ? [initialPathname] : undefined

  root.render(
    <React.StrictMode>
      <App initialEntries={initialEntries} />
    </React.StrictMode>,
  )
})
