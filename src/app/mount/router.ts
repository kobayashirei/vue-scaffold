import router from '@/router'
import { useLoadingStore } from '@/stores/loading'

export function RouterApplication() {
  const loading = useLoadingStore()

  router.beforeEach((to, from, next) => {
    loading.show()
    next()
  })

  router.afterEach(() => {
    loading.hide()
  })

  router.onError(() => {
    loading.hide()
  })

  return router
}
