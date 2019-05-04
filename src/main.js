import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import { store } from './store'
import DateFilter from './filters/date'

Vue.use(Vuetify)
Vue.config.productionTip = false

Vue.filter('date', DateFilter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
  	firebase.initializeApp({
  		apiKey: 'AIzaSyDZMFBiyy_B1B0Az24szcnLFFAzKAvV-6k',
		authDomain: 'dev-meetup-app.firebaseapp.com',
	    databaseURL: 'https://dev-meetup-app.firebaseio.com',
		projectId: 'dev-meetup-app',
		storageBucket: '',
  	})
  }
})