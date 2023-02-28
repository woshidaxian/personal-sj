import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    redirect: '/frontIndex'
  },
  {
    path: '/time',
    name: '实时时间',
    component: () => import('./../views/time.vue')
  },
  {
    path: '/frontIndex',
    name: '用户端',
    component: () => import('../views/frontIndex.vue'),
    redirect: '/frontIndex/home',
    children: [
      {
        path: 'home',
        name: '首页',
        component: () => import('../views/front/Home.vue'),
      },
      {
        path: 'infomation',
        name: '简历',
        component: () => import('../views/front/简历.vue')
      }
    ]
  },
  {
    path: '/backIndex',
    name: '管理员端',
    component: () => import('../views/backIndex.vue'),
    redirect: '/backIndex/overview',
    children: [
      {
        path: 'overview',
        name: '数据总览',
        component: () => import('../views/back/overview.vue')
      }
    ]
  },
  {
    path: '/notFound',
    name: 'notFound',
    component: () => import('../views/notFound.vue'),
  },
  {
    path: '/:pathMath(.*)',
    name: 'any',
    redirect: '/notFound'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from)=>{
  console.log(to, from)
})

export default router
