import About from '@/components/About.vue'
import Home from '@/components/Home.vue'
import UserLayout from '@/components/User/UserLayout.vue'
import UserDetail from '@/components/User/UserDetail.vue'
import { createRouter, createWebHistory } from 'vue-router'
import UserList from '@/components/User/UserList.vue'
import Counter from '@/components/Counter.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/counter',
    name: 'Counter',
    component: Counter,
  },
  {
    path: '/user',
    component: UserLayout,
    children: [
      {
        path: '',
        name: 'UserList',
        component: UserList,
      },
      {
        path: ':id',
        name: 'userDetail',
        component: UserDetail,
        meta: { requireAuth: true },
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
