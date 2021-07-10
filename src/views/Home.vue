<template>
  <div>
    <v-btn @click="openApi()">Hit API</v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: null,
    };
  },
  methods: {
    openApi() {
      //   let url = `https://openvacancy-dot-sandbox-opsy.uc.r.appspot.com/api/candidates`
      //   // let url = 'http://example.com/movies.json'
      // this.data = fetch(url, {
      //   method: 'get',
      //   mode: 'cors',
      //   headers: {
      //     "Content-Type": "application/json",
      //     'Access-Control-Allow-Origin': '*',
      //     'Authentication': this.$store.state.currentUser.idToken
      //     // 'Authentication': 'eyJhbGciOiJSUzI1NiIsImtpZCI6Ijg4ZGYxMzgwM2I3NDM2NjExYWQ0ODE0NmE4ZGExYjA3MTg2ZmQxZTkiLCJ0eXAiOiJKV1QifQ'
      //   }
      // })
      // .then((e) => {
      //   console.log('step1',e)
      // })
      console.log('here')
      fetch(
        "https://openvacancy-dot-sandbox-opsy.uc.r.appspot.com/api/candidates",
        {
          headers: {
            mode: "cors",
            "Content-Type": "application/json",
            Authentication: this.$store.state.currentUser.idToken,
          },
        }
      )
        .then((response) => console.log(response))
        .then((data) => console.log(data));
    },
  },
};
</script>

<style lang="scss" scoped></style>
