<template>
  <div>
    <v-row>
      <v-col class="d-flex">
        <v-img
          :src="`${vacancy.companyInfo[0].logo}`"
          max-width="80"
          class="mr-2"
          contain
        />
        <div>
          <h2 class="display-1">{{ vacancy.title }}</h2>
          <div class="d-flex align-center">
            <p class="mb-0">at {{ vacancy.company }}</p>
            <v-btn
              class="ml-2"
              small
              target="_blank"
              color="secondary"
              :href="vacancy.companyInfo[0].website"
              ><v-icon left @click="editVacancy">mdi-web</v-icon> Visit Company
              Website</v-btn
            >
          </div>
        </div>
      </v-col>
      <v-col class="text-right">
        <v-btn
          color="primary"
          :to="`/edit-vacancy/${vacancy.vacancyID}`"
        >
          Edit Vacancy
          <v-icon right>mdi-pencil</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
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
      <v-col>
        <p v-html="vacancy.jobDescription" />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
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
      <v-col>
        <v-card color="blue-grey darken-1 apply" dark>
          <v-card-title>How to apply</v-card-title>
          <v-card-text v-html="vacancy.howToApply" class="body-1"></v-card-text>
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

<style lang="scss" scoped>
::v-deep .apply a {
  color: white !important;
  text-decoration: none;
  border-bottom: 2px solid greenyellow;
}
</style>
