import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store/store'

Vue.use(require('vue-resource'))
Vue.use(require('vue-router'))

var phonesPage = require('./pages/Phones.vue')
var phoneDetailsPage = require('./pages/PhoneDetails.vue')

var router = new VueRouter({
  mode: 'hash',
  base: window.location.href,
  routes: [
    { path: '/', component: phonesPage },
    { path: '/phones/:id', component: phoneDetailsPage }
  ]
})

const app = new Vue({
  el: '#app',
  router: router,
  store,
  data: {
    currentRoute: window.location.pathname
  },
  methods: {
    loadPhonesData: function () {
      this.$http.get('../content/phones/phones.json').then((response) => {
        this.$store.dispatch('setPhones', response.body)
      }, (response) => {
        console.log("Couldn't find the phones file!")
      })
    }
  },
  render: h => h('router-view')
})

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname
})

// Populate the phones object in the store on startup.
app.loadPhonesData()
