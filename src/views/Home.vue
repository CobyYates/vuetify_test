<template>
  <div>
    <v-btn @click="openApi()">Hit API</v-btn>
    <v-card width="400" height="auto" class="mt-5" v-if="error">
      <v-card-title>Error</v-card-title>
      <v-card-text>{{error}}</v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: null,
      error: null
    };
  },
  methods: {
    openApi() {
      fetch(
        "https://openvacancy-dot-sandbox-opsy.uc.r.appspot.com/api/vacancies",
        {
          headers: {
            type: "cors",
            'Accept': "application/json",
            "Content-Type": "application/json",
            token: this.$store.state.currentUser.idToken,
          },
        }
      )
        .then((response) => this.error = response)
        .then((data) => console.log(data));
    },
  },
};
</script>

<style lang="scss" scoped></style>
