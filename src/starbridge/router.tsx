import React, { memo } from 'react'
import { MemoryRouter, BrowserRouter } from 'react-router-dom'

import { inClient } from './app-jssdk'
import type { RouterProps } from './interface'

import './style.less'

const Router: React.FC<React.PropsWithChildren<RouterProps>> = ({
  children,
}) => {
  if (inClient) {
    return <MemoryRouter>{children}</MemoryRouter>
  }

  return <BrowserRouter>{children}</BrowserRouter>
}

export default memo(Router)
