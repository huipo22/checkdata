import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

import h1 from '@/components/hi'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/hi',
      name: 'hi',
      component: h1
    }
  ]
})
