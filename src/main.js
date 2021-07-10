import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import firebase from "firebase";
// import firebaseui from "firebaseui";
import { firebaseConfig } from "./firebase/credentials";
import Vuelidate from "vuelidate";

Vue.config.productionTip = false;
Vue.use(Vuelidate);

new Vue({
  router,
  store,
  vuetify,
  created() {
    firebase.initializeApp(firebaseConfig);
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.state.currentUser = user;
      } else {
        this.$router.push("/login");
      }
    });
  },
  el: "#app",
  render: (h) => h(App),
});
