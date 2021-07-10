<template>
  <div>
    <textfield :value="vacancy.title" label="Vacancy Title" type="text" />
    <textfield :value="vacancy.jobType" label="Vacancy Title" type="select" :items="$store.state.jobType" />
  </div>
</template>

<script>
import Textfield from "../components/textfield.vue";

export default {
  components: {
    Textfield,
  },
  data() {
    return {
      vacancy: "",
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
