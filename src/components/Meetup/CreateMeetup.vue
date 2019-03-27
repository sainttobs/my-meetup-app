<template>
	<v-container>
		<v-layout row>
			<v-flex xs12>
				<h4 class="primary--text">Create a new Meetup </h4>
			</v-flex>
		</v-layout>
		<v-layout>
			<v-flex xs12>
				<form>
					<v-layout row>
						<v-flex xs12 sm6>
							<v-text-field
								name="Title"
								id="title"
								label="Title"
								required="true"
								clearable
								solo
							></v-text-field>
						</v-flex>
					</v-layout>
				</form>
			</v-flex>
		</v-layout>
	</v-container>
</template>