<template>
  <v-app>
    <v-toolbar>
      <v-toolbar-side-icon @click.native="sideNav = !sideNav"></v-toolbar-side-icon>
      <v-toolbar-title>DevMeetup</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat>
          <v-icon left>supervisor_account</v-icon>
          View Meetups
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-navigation-drawer v-model="sideNav">
      
    </v-navigation-drawer>
    <main>
      
    </main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      sideNav : false
      //
    }
  }
}
</script>
