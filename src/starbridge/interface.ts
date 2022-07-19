import type { InitialEntry } from 'history'

export interface RouteContextState {
  hasLastPage: () => boolean
}

export interface RouterProps {
  initialEntries?: InitialEntry[]
}
