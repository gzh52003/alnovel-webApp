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