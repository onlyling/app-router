import type { RouteProps, RouterConfig } from './interface'
import Route from './route'
import Router from './router'

export const createRouter = <T extends Record<string, any>>() => {
  return {
    Router: Router,
    Route: Route as unknown as (p: RouteProps<T>) => null,
    useNavigation: () => {},
    useRoute: <Params = Record<string, any>>(): Omit<
      RouterConfig<Params>,
      'Component'
    > => {
      return {
        key: '1',
        name: '1',
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        params: {} as Params,
      }
    },
  }
}
