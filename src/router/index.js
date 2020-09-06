import Vue from 'vue'
import VueRouter from 'vue-router'
import Shelf from '../views/shelf/Shelf.vue'
import store from '../store/index'


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
    path: '/search',
    name: 'Search',
    meta: {
      title: "搜索"
    },
    component: () => import("../views/shelf/Search.vue")
  },
  {
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
    path: '/categoryDetail/:id/:name/:booksType',
    name: 'CategoryDetail',
    meta: {
      title: ""
    },
    component: () => import("../views/category/CategoryDetail.vue")
  },
  {
    path: '/novelDetails/:id',
    name: 'NovelDetails',
    meta: {
      title: "书籍详情"
    },
    component: () => import("../views/category/NovelDetails.vue")
  },
  {
    path: '/catalog',
    name: 'Catalog',
    meta: {
      title: ""
    },
    component: () => import("../views/category/Catalog.vue")
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
      title: "我的会员",
      requestAuth: true
    },
    component: () => import("../views/profile/MyVip.vue")
  },
  {
    path: '/topUp',
    name: 'TopUp',
    meta: {
      title: "书豆充值",
      requestAuth: true
    },
    component: () => import("../views/profile/TopUp.vue")
  },
  {
    path: '/consume',
    name: 'Consume',
    meta: {
      title: "消费充值记录",
      // requestAuth: true
    },
    component: () => import("../views/profile/Consume.vue")
  },
  {
    path: '/bought',
    name: 'Bought',
    meta: {
      title: "购买过的书",
      // requestAuth: true
    },
    component: () => import("../views/profile/Bought.vue")
  },
  {
    path: '/feedback',
    name: 'Feedback',
    meta: {
      title: "意见反馈",
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
  if (to.name === "CategoryDetail") {
    document.title = to.params.name
  } else {
    document.title = to.meta.title
  }

  next()
  if (to.meta.requestAuth) {
    let auth = store.state.auth
    console.log(auth)
    if (auth) {
      next()
    } else {
      router.push('/login')
    }
  }
})

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
export default router