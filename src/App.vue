<template>
  <v-app>
    <!-- v-if="showNav" -->
    <v-navigation-drawer
      v-if="loggedIn"
      permanent
      dark
      app
      color="blue lighten-2"
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            {{ currentUser.displayName }}
          </v-list-item-title>
          <v-list-item-subtitle> {{ currentUser.email }} </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link :to="item.to">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn block @click="signOut"> Logout </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-main>
      <router-view class="ma-10" />
    </v-main>
  </v-app>
</template>

<script>
import { mapState } from "vuex";
import firebase from "firebase";

export default {
  name: "App",
  data: () => ({
    items: [
      { title: "Home", icon: "mdi-home", to: "/" },
      { title: "Candidates", icon: "mdi-account-group", to: "/candidates" },
      { title: "Vacancies", icon: "mdi-chair-rolling", to: "/vacancies" },
    ],
    loggedIn: false,
  }),
  methods: {
    async signOut() {
      try {
        await firebase.auth().signOut();
      } catch (err) {
        console.log(err);
      }
    },
  },
  beforeMount() {
    // console.log('user',this.$store.state.currentUser);
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.loggedIn = true;
      } else {
        this.loggedIn = false;
      }
    });
  },
  computed: {
    ...mapState(["currentUser"]),
  },
};
</script>
