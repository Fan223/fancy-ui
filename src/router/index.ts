import { createRouter, createWebHistory } from 'vue-router';
import { useNavStore } from '@/pinia';

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: () => import('@/layout/Index.vue'),
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
      },
      {
        path: '/blog',
        name: 'Blog',
        component: () => import('@/views/blog/Index.vue'),
      },
      {
        path: '/resource',
        name: 'Resource',
        component: () => import('@/views/resource/Index.vue'),
      },
      {
        path: '/tool',
        name: 'Tool',
        component: () => import('@/views/tool/Index.vue'),
      },
      {
        path: '/article/preview/:id',
        name: 'Preview',
        component: () => import('@/vditor/Preview.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    return savedPosition ? savedPosition : { left: 0, top: 0 };
  },
});

router.beforeEach((to, _from) => {
  const { active } = storeToRefs(useNavStore());
  active.value = to.path;
  return true;
});

export default router;
