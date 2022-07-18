import type { ComponentType } from 'react'

export interface RouteProps<T> {
  component: ComponentType<any>
  name: keyof T
}

export interface RouterProps {
  initialRouteName?: string
}

export interface RouterConfig<T> {
  name: string
  key: string
  Component: ComponentType<any>
  params?: T
}

export interface RouterContext<T> {
  currentPath: keyof T
  routes: RouterConfig<any>[]
}
