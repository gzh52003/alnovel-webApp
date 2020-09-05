import Vue from 'vue'
import VueRouter from 'vue-router'
import Shelf from '../views/shelf/Shelf.vue'


Vue.use(VueRouter)

const routes = [{
    path: "/",
    redirect: "/shelf"
  },
  {
    path: '/shelf',
    name: 'Shelf',
    meta: {
      title: "书架"
    },
    component: Shelf
  }, {
    path: '/books',
    name: 'Books',
    meta: {
      title: "书城"
    },
    component: () => import("../views/books/Books.vue")
  }, {
    path: '/category',
    name: 'Category',
    meta: {
      title: "分类"
    },
    component: () => import("../views/category/Category.vue")
  }, {
    path: '/categoryDetail/:id/:type',
    name: 'CategoryDetail',
    meta: {
      title: "都市"
    },
    component: () => import("../views/category/CategoryDetail.vue")
  },
  {
    path: '/profile',
    name: 'Profile',
    meta: {
      title: "我的"
    },
    component: () => import("../views/profile/Profile.vue")
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: "登录"
    },
    component: () => import("../views/profile/Login.vue")
  },
  {
    path: '/reg',
    name: 'Reg',
    meta: {
      title: "注册"
    },
    component: () => import("../views/profile/Reg.vue")
  },
  {
    path: '/findPsd',
    name: 'FindPsd',
    meta: {
      title: "找回密码"
    },
    component: () => import("../views/profile/Reg.vue")
  },
  {
    path: '/myvip',
    name: 'MyVip',
    meta: {
      title: "我的会员"
    },
    component: () => import("../views/profile/MyVip.vue")
  },
  {
    path: '/topUp',
    name: 'TopUp',
    meta: {
      title: "书豆充值"
    },
    component: () => import("../views/profile/TopUp.vue")
  },
  {
    path: '/consume',
    name: 'Consume',
    meta: {
      title: "书豆充值"
    },
    component: () => import("../views/profile/Consume.vue")
  },
  {
    path: '/bought',
    name: 'Bought',
    meta: {
      title: "购买过的书"
    },
    component: () => import("../views/profile/Bought.vue")
  },
  {
    path: '/feedback',
    name: 'Feedback',
    meta: {
      title: "意见反馈"
    },
    component: () => import("../views/profile/Feedback.vue")
  },
]

const router = new VueRouter({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes
})


router.beforeEach((to, form, next) => {
  document.title = to.meta.title
  next()
})
export default router