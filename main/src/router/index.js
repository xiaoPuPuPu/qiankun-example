/*
 * @Author: xiao pu
 * @Date: 2021-03-02 16:52:25
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-03-02 17:29:31
 * @Description: file content
 * @FilePath: /qiankun-example/main/src/router/index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Content from '../view/Content.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/content',
    name: 'Content',
    component: Content
  }
  //   {
  //     path: '/about',
  //     name: 'About',
  //     // route level code-splitting
  //     // this generates a separate chunk (about.[hash].js) for this route
  //     // which is lazy-loaded when the route is visited.
  //     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  //   }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
