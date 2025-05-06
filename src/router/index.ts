import { createRouter, createWebHashHistory } from 'vue-router'
// @ts-ignore
import routes from '~pages'

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
export default router
export { routes }
