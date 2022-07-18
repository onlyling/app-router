import { memo } from 'react'

import type { RouteProps } from './interface'

const Route = <T,>({ name, component }: RouteProps<T>) => {
  return null
}

export default memo(Route)
