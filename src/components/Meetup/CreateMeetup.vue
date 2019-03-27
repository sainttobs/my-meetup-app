<template>
	<v-container>
		<v-layout row>
			<v-flex xs12>
				<h2 class="secondary--text">Create a new Meetup </h2>
			</v-flex>
		</v-layout>
		<v-layout>
			<v-flex xs12>
				<form @submit.prevent="onCreateMeetup">
					<v-layout row>
						<v-flex xs12 sm6>
							<v-text-field
								name="Title"
								id="title"
								label="Title"
								v-model="title"
								required
								clearable
								solo
							></v-text-field>
						</v-flex>
					</v-layout>
					<v-layout row>
						<v-flex xs12 sm6>
							<v-text-field
								name="Location"
								id="location"
								label="Location"
								v-model="location"
								required
								clearable
								solo
							></v-text-field>
						</v-flex>
					</v-layout>
					<v-layout row>
						<v-flex xs12 sm6>
							<v-text-field
								name="imageUrl"
								id="image-url"
								label="Image Url"
								v-model="imageUrl"
								required
								clearable
								solo
							></v-text-field>
						</v-flex>
					</v-layout>
					<v-layout row>
						<v-flex xs12 sm6>
							<img :src="imageUrl" height="300px">
						</v-flex>
					</v-layout>
					<v-layout row>
						<v-flex xs12 sm6>
							<v-text-field
								name="description"
								id="description"
								label="Description"
								v-model="description"
								multi-line
								required
								clearable
								solo
							></v-text-field>
						</v-flex>
					</v-layout>
					<v-layout row>
						<v-flex xs12 sm6 offset3>
							<v-btn class="primary" 
							:disabled="!formIsValid"
							type="submit"> Create Meetup</v-btn>
						</v-flex>
					</v-layout>
				</form>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
export default {
	data () {
		return {
			title : '',
			location : '',
			imageUrl: '',
			description: ''
		}
	},
	computed: {
		formIsValid() {
			return this.title !== '' && 
				   this.location !== '' && 
				   this.imageUrl !== '' && 
				   this.description !== '' 
		}
	},
	methods: {
		onCreateMeetup () {
			if(!this.formIsValid) {
				return
			}
			const meetupData = {
				title : this.title,
				location : this.location,
				imageUrl : this.imageUrl,
				description : this.description,
				date : new Date()
			}
			this.$store.dispatch('createMeetup', meetupData)
			this.$router.push('/meetups');
		}
	}
}
</script>
