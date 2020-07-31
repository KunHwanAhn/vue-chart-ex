import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/bar-chart',
    },
    {
      path: '/bar-chart',
      component: () => import(/* webpackChunkName: "barChart" */ './views/BarChart.vue')
    },
    {
      path: '/stacked-bar-chart',
      component: () => import(/* webpackChunkName: "stackedBarChart" */ './views/StackedBarChart.vue')
    }
  ]
})
