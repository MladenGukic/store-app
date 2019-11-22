import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import AppCustomers from './components/AppCustomers'
import AppProducts from './components/AppProducts'

Vue.use (VueRouter)

Vue.config.productionTip = false

const routes = [
  {name: 'products', path: '/products', component: AppProducts },
  {name: 'customers', path: '/customers', component: AppCustomers }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
