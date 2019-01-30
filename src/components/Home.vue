<template>
	<v-container>
		<v-layout row wrap>
			<v-flex xs12 sm6 class="text-xs-center text-sm-right">
				<v-btn class="primary" large router to="/meetups">
					Explore Meetups
				</v-btn>
			</v-flex>
			<v-flex xs12 sm6 class="text-xs-center text-sm-left">
				<v-btn class="primary" large router to="/meetups">Explore Meetups</v-btn>
			</v-flex>
		</v-layout>
		<v-layout>
			<v-flex xs12>
				<v-carousel>
				    <v-carousel-item
				      v-for="meetup in meetups"
				      :key="meetup.id"
				      :src="meetup.imageUrl"
				    ></v-carousel-item>
				</v-carousel>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
	export default {
		data () {
			return {
				meetups: [
					{ imageUrl: 'https://travel.jumia.com/blog/ng/wp-content/uploads/2015/08/victoria-island-660x400.jpg', id: 'lag_meetup', title: 'Meetup in Lagos'},
					{ imageUrl: 'https://2.bp.blogspot.com/-JwDu33EhI-Q/Vqk8OnUECPI/AAAAAAAA83Q/pG0vThluJZM/s1600/ibadan%2Bcity%2Bbeautiful.jpg', id: 'ib_meetup', title: 'Meetup in Ibadan'}
				]
			}
		}
	}
</script>