import { createRouter, createWebHistory } from 'vue-router';

const routes = [{ path: '/', component: () => import('@/layout/Index.vue') }];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    return savedPosition ? savedPosition : { left: 0, top: 0 };
  },
});

export default router;
