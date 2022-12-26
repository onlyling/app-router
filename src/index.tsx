import React from 'react'
import { createRoot } from 'react-dom/client'

import { ready } from '@/starbridge/app-jssdk'

import App from './app'

const root = createRoot(document.getElementById('root')!)

ready().then(() => {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
})
