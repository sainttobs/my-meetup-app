import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
	state : {
		loadedMeetups: [
			{ imageUrl: 'https://travel.jumia.com/blog/ng/wp-content/uploads/2015/08/victoria-island-660x400.jpg', id: 'lag_meetup', title: 'Meetup in Lagos', date: '2018-02-07'},
			{ imageUrl: 'https://2.bp.blogspot.com/-JwDu33EhI-Q/Vqk8OnUECPI/AAAAAAAA83Q/pG0vThluJZM/s1600/ibadan%2Bcity%2Bbeautiful.jpg', id: 'ib_meetup', title: 'Meetup in Ibadan', date: '2018-03-08'}
		],
		user: {
			id: 'userID',
			registeredMeetups: ['lag_meetup']
		}
	},
	mutations: {},
	actions: {},
	getters: {
		loadedMeetups (state) {
			return state.loadedMeetups.sort((meetupA,meetupB) => {
				return meetupA.date > meetupB.date
			})
		},
		featuredMeetups (state, getters) {
			return getters.loadedMeetups.slice(0,5)
		},
		loadedMeetup (state) {
			return (meetupID) => {
				return state.loadedMeetups.find((meetup) =>{
					return meetup.id === meetupID
				})
			}
		}
	}
})