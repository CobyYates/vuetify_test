<template>
  <v-img
    src="https://images.pexels.com/photos/392018/pexels-photo-392018.jpeg?auto=compress&cs=tinysrgb&dpr=2"
    height="100vh"
  >
    <v-overlay absolute :opacity="0.2">
      <v-card width="300" elevation="8" id="firebaseui-auth-container"></v-card>
    </v-overlay>
  </v-img>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, email } from "vuelidate/lib/validators";
import firebase from "firebase";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";

export default {
  mixins: [validationMixin],

  validations: {
    email: { required, email },
  },
  mounted() {
    let ui = firebaseui.auth.AuthUI.getInstance();
    if (!ui) {
      ui = new firebaseui.auth.AuthUI(firebase.auth());
    }
    var uiConfig = {
      callbacks: {
        signInSuccessWithAuthResult: function () {
          return true;
        },
      },
      signInSuccessUrl: "/",
      signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID],
    };
    ui.start("#firebaseui-auth-container", uiConfig);
  },
};
</script>

<style lang="scss" scoped>
.loginForm {
  height: 100vh;
}
</style>
