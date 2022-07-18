import React, { useState, useMemo, memo } from 'react'

import Page from '@/components/page'

import { ctx } from './context'
import { childrenToArray } from './helpers'
import type { RouterProps, RouterConfig } from './interface'

const Router = <T,>({
  children,
  initialRouteName,
}: React.PropsWithChildren<RouterProps>) => {
  const routeConfig = useMemo(() => {
    const _children = childrenToArray(children)

    return _children.map(item => {
      return {
        name: item.props.name,
        Component: item.props.component,
      }
    })
  }, [children])
  const [routes] = useState<RouterConfig<T>[]>(() => {
    const key = Math.ceil(Math.random() * 10000000)
    if (initialRouteName) {
      const f = routeConfig.filter(item => item.name === initialRouteName)
      if (f.length) {
        return [
          {
            ...f[0],
            key: `${f[0].name}_${key}`,
          },
        ]
      }
    }

    return [
      {
        ...routeConfig[0],
        key: `${routeConfig[0].name}_${key}`,
      },
    ]
  })

  const value = useMemo(() => {
    return {
      routes: routes,
    }
  }, [routes])

  return (
    <ctx.Provider value={value}>
      {routes.map(item => {
        return (
          <Page key={item.key}>
            <item.Component />
          </Page>
        )
      })}
    </ctx.Provider>
  )
}

export default memo(Router)
