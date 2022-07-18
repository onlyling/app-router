import type { InitialEntry } from 'history'
import { memo } from 'react'
import { MemoryRouter, BrowserRouter } from 'react-router-dom'

import { inClient } from '@/libs/app-jssdk'

import './style.less'
import Route from './routes'

function App({ initialEntries }: { initialEntries?: InitialEntry[] }) {
  if (inClient) {
    return (
      <MemoryRouter initialEntries={initialEntries}>
        <Route />
      </MemoryRouter>
    )
  }

  return (
    <BrowserRouter>
      <Route />
    </BrowserRouter>
  )
}

export default memo(App)
