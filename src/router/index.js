import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index'
import ItemDetail from '@/components/ItemDetail'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/itemDetail/:id',
      name: 'itemDetail',
      component: ItemDetail
    }
  ]
})
