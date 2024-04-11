import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeVue.vue')
    },
    {
      path: '/directives',
      name: 'directives',
      component: () => import('../views/DirectivesVue.vue')
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('../views/ProductsVue.vue')
    },
    {
      path: '/products/:id',
      name: 'product',
      component: () => import('../views/ProductVue.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginVue.vue')
    }

  ]
})

export default router
