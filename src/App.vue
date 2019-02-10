<template>
  <v-app>
    <v-toolbar light class="light-blue lighten-3">
      <v-toolbar-side-icon @click.native="sideNav = !sideNav" class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer;">DevMeetup</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat v-for="item in menuItems" :key="item.title" router :to="item.link">
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-navigation-drawer class="hidden-sm-and-up" temporary v-model="sideNav">
      <v-list>
        <v-list-tile v-for="item in menuItems" :key="item.title" router :to="item.link">
          <v-list-tile-action>
            <v-icon>{{ item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title}}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <main>
      <router-view></router-view> 
    </main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Home from './components/Home'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Home
  },
  data () {
    return {
      sideNav : false,
      menuItems : [
        { icon : 'supervisor_account', title : 'View Meetups', link: '/meetups'},
        { icon : 'room', title : 'Organize Meetup', link: '/meetup/new'},
        { icon : 'person', title : 'profile', link: '/profile'},
        { icon : 'face', title : 'Sign up', link: '/signup'},
        { icon : 'lock_open', title : 'Sign in',link: 'signin'}
      ]
    }
  }
}
</script>
