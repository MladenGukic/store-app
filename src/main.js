import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import AppCustomers from './components/AppCustomers'
import AppProducts from './components/AppProducts'
import LatestPurchases from './components/LatestPurchases'

Vue.use (VueRouter)

Vue.config.productionTip = false

const routes = [
  {name: 'products', path: '/products', component: AppProducts },
  {name: 'customers', path: '/customers', component: AppCustomers },
  {name: 'latestPurchases', path: '/customers/:id', component: LatestPurchases}
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
