import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/view/index'
import SignIn from '@/view/SignIn'
import SignUp from '@/view/SignUp'
import Cart from '@/view/Cart'
import Main from '@/view/Main'
import Content from '@/view/Content'
import GoodsDetail from '@/view/GoodsDetail'
import Catagory from '@/view/Catagory'
import CommercialIndex from '@/view/CommercialIndex'
import PersonalInfo from '@/view/PersonalInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Main,
      children: [
        {
          path: '/commercial/:commercialId',
          component: CommercialIndex
        },
        {
          path: '/personalInfo/:id',
          component: PersonalInfo
        },
        {
          path: '/signin',
          name: 'SignIn',
          component: SignIn
        },
        {
          path: '/signup',
          name: 'SignUp',
          component: SignUp
        },
        {
          path: '/cart',
          name: 'Cart',
          component: Cart
        },
        {
          path: '',
          component: Index,
          children: [
            {
              path: '',
              component: Content
            },
            {
              path: 'catagory/:catagory',
              component: Catagory
            },
            {
              path: 'good/:goodid',
              component: GoodsDetail
            }
          ]
        }
      ]
    }
  ]
})
