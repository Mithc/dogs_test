import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main'
import Favorite from '@/components/favourites'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/favorite',
      name: 'favorite',
      component: Favorite
    }
  ]
})
