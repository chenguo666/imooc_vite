export default [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/main/index.vue')
  },

  {
    path: '/profile',
    name: 'profile',
    component: () => import('@/views/profile/index.vue'),
    // 当前页面只有用户登录才能进
    meta: {
      user: true
    }
  },
  {
    path: '/pins/:id',
    name: 'pins',
    component: () => import('@/views/pins/index.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login-register/index.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/login-register/register/index.vue')
  },
  {
    path: '/member',
    name: 'member',
    component: () => import('@/views/member/index.vue'),
    // 当前页面只有用户登录才能进
    meta: {
      user: true
    }
  }
]
