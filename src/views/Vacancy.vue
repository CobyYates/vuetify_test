<template>
  <div>
    <v-row>
      <v-col cols="10" class="mx-auto d-flex pb-0 mt-4">
        <v-img
          :src="`${vacancy.companyInfo[0].logo}`"
          max-width="80"
          class="mr-2"
          contain
        />
        <h2 class="display-1">{{ vacancy.title }}</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="10" class="mx-auto">
        <v-card flat color="grey lighten-4 pa-3 d-flex" tile>
          <div class="d-flex flex-column align-start">
            <p class="ma-0">Location</p>
            <p class="ma-0">{{ vacancy.location }}</p>
          </div>
          <div class="d-flex flex-column align-start px-8">
            <p class="ma-0">Job Type</p>
            <p class="ma-0">{{ vacancy.jobType }}</p>
          </div>
          <div class="d-flex flex-column align-start">
            <p class="ma-0">Salary</p>
            <p class="ma-0">{{ vacancy.salary }}</p>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="10" class="mx-auto">
        <p v-html="vacancy.jobDescription" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="10" class="mx-auto">
        <v-chip
          v-for="item in vacancy.skills"
          :key="item.i"
          class="mr-3"
          color="blue"
          dark
          label
        >
          {{ item }}
        </v-chip>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="10" class="mx-auto">
        <v-card>
          <v-card-title>How to apply</v-card-title>
          <p>{{ vacancy.howToApply }}</p>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      vacancy: [],
    };
  },
  beforeMount() {
    this.vacancy = this.$store.state.vacancies.filter(
      (e) => e.vacancyID == this.$route.params.id
    )[0];
  },
};
</script>

<style lang="scss" scoped></style>
