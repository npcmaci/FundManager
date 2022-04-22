import { initRouter, initRouterLayout } from '@hsui/core'

export default initRouter(
  [
    {
      path: '/',
      component: initRouterLayout(layout => {
        return import('@/layouts/' + layout + '.vue')
      }),
      children: [
        {
          name: 'index',
          path: '',
          component: Index,
          children: [
            {
              name: 'index-home',
              path: 'home',
              component: IndexHome
            }
          ]
        },
        {
          name: 'detail',
          path: 'detail',
          component: Detail
        },
        {
          name: 'PageOne',
          path: 'PageOne',
          component: PageOne
        },
        {
          name: 'PageThree',
          path: 'PageThree',
          component: PageThree
        },
        {
          name: 'PageTwo',
          path: 'PageTwo',
          component: PageTwo
        },
        {
          name: '__404__',
          path: '*',
          component: __404__
        }
      ]
    }
  ],
  { base: '/', mode: 'hash' }
)

function Index() {
  return import(/* webpackChunkName: "index" */ '@/views/index.vue')
}
function IndexHome() {
  return import(/* webpackChunkName: "index-home" */ '@/views/index/home.vue')
}
function Detail() {
  return import(/* webpackChunkName: "detail" */ '@/views/detail.vue')
}
function PageOne() {
  return import(/* webpackChunkName: "PageOne" */ '@/views/PageOne.vue')
}
function PageThree() {
  return import(/* webpackChunkName: "PageThree" */ '@/views/PageThree.vue')
}
function PageTwo() {
  return import(/* webpackChunkName: "PageTwo" */ '@/views/PageTwo.vue')
}
function __404__() {
  return import(/* webpackChunkName: "__404__" */ '@/views/__404__.vue')
}
