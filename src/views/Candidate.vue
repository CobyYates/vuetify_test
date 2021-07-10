<template>
  <v-row class="pt-2 grey lighten-3">
    <v-col cols="2">
      <v-img :src="candidate.profileImage" height="200" contain />
    </v-col>
    <v-col class="d-flex flex-column justify-end">
      <h3>{{ candidate.first }} {{ candidate.last }}</h3>
      <h3 class="font-weight-light">{{ candidate.email }}</h3>
      <div>
        <v-btn
        class="mr-2"
          width="120"
          color="primary"
          :to="candidate.portfolio"
          >Portfolio</v-btn
        >
        <v-btn color="success" width="120"
          >Resume<v-icon right>mdi-open-in-new</v-icon></v-btn
        >
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      candidate: [],
    };
  },
  beforeMount() {
    this.candidate = this.$store.state.candidates.filter(
      (e) => e.candidateID == this.$route.params.id
    )[0];
    console.log(this.candidate);
  },
};
</script>

<style lang="scss" scoped></style>
