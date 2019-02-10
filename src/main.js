import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import { store } from './store/index'

Vue.use(Vuetify)
Vue.config.productionTip = false

new Vue({
	el: '#app',
	router,
	store,
  	render: h => h(App)
})
