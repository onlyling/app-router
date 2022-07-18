import { emit } from './'

export const goBack = () => {
  emit('NAVIGATION_GO_BACK', {})
}
