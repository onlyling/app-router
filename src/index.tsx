import React from 'react'
import { createRoot } from 'react-dom/client'

import { ready, getInitialPathname } from '@/starbridge/app-jssdk'

import App from './app'

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
