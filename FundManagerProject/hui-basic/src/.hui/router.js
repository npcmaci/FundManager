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
            },
            {
              name: 'index-userDetailFake',
              path: 'userDetailFake',
              component: IndexUserDetailFake
            }
          ]
        },
        {
          name: 'buy',
          path: 'buy',
          component: Buy
        },
        {
          name: 'decidebuy',
          path: 'decidebuy',
          component: Decidebuy
        },
        {
          name: 'detail',
          path: 'detail',
          component: Detail
        },
        {
          name: 'editUserDetail',
          path: 'editUserDetail',
          component: EditUserDetail
        },
        {
          name: 'editUserDetailFake',
          path: 'editUserDetailFake',
          component: EditUserDetailFake
        },
        {
          name: 'KaiHu',
          path: 'KaiHu',
          component: KaiHu
        },
        {
          name: 'kaihu2',
          path: 'kaihu2',
          component: Kaihu2
        },
        {
          name: 'kaihu3',
          path: 'kaihu3',
          component: Kaihu3
        },
        {
          name: 'newProduct',
          path: 'newProduct',
          component: NewProduct
        },
        {
          name: 'np2',
          path: 'np2',
          component: Np2
        },
        {
          name: 'searchTransaction',
          path: 'searchTransaction',
          component: SearchTransaction
        },
        {
          name: 'sell',
          path: 'sell',
          component: Sell
        },
        {
          name: 'userDetail',
          path: 'userDetail',
          component: UserDetail
        },
        {
          name: 'userManagement',
          path: 'userManagement',
          component: UserManagement
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
function IndexUserDetailFake() {
  return import(
    /* webpackChunkName: "index-userDetailFake" */ '@/views/index/userDetailFake.vue'
  )
}
function Buy() {
  return import(/* webpackChunkName: "buy" */ '@/views/buy.vue')
}
function Decidebuy() {
  return import(/* webpackChunkName: "decidebuy" */ '@/views/decidebuy.vue')
}
function Detail() {
  return import(/* webpackChunkName: "detail" */ '@/views/detail.vue')
}
function EditUserDetail() {
  return import(
    /* webpackChunkName: "editUserDetail" */ '@/views/editUserDetail.vue'
  )
}
function EditUserDetailFake() {
  return import(
    /* webpackChunkName: "editUserDetailFake" */ '@/views/editUserDetailFake.vue'
  )
}
function KaiHu() {
  return import(/* webpackChunkName: "KaiHu" */ '@/views/KaiHu.vue')
}
function Kaihu2() {
  return import(/* webpackChunkName: "kaihu2" */ '@/views/kaihu2.vue')
}
function Kaihu3() {
  return import(/* webpackChunkName: "kaihu3" */ '@/views/kaihu3.vue')
}
function NewProduct() {
  return import(/* webpackChunkName: "newProduct" */ '@/views/newProduct.vue')
}
function Np2() {
  return import(/* webpackChunkName: "np2" */ '@/views/np2.vue')
}
function SearchTransaction() {
  return import(
    /* webpackChunkName: "searchTransaction" */ '@/views/searchTransaction.vue'
  )
}
function Sell() {
  return import(/* webpackChunkName: "sell" */ '@/views/sell.vue')
}
function UserDetail() {
  return import(/* webpackChunkName: "userDetail" */ '@/views/userDetail.vue')
}
function UserManagement() {
  return import(
    /* webpackChunkName: "userManagement" */ '@/views/userManagement.vue'
  )
}
function __404__() {
  return import(/* webpackChunkName: "__404__" */ '@/views/__404__.vue')
}
