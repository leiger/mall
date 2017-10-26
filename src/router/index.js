import Vue from 'vue'
import Router from 'vue-router'
import GoodList from '@/views/GoodsList'
import Title from './../views/Title.vue'
import Image from '../views/Image.vue'
import Cart from '../views/cart.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/goods',
      name: 'GoodList',
      component: GoodList,
      children: [
        {
          path: 'title',
          name:'title',
          component: Title
        },
        {
          path: 'image',
          name: 'image',
          component: Image
        }
      ]
    },
    {
      path: '/cart',
      name: '/cart',
      component: Cart
    }
  ]
})
