<template>
  <div>
    <v-row class="mt-8">
      <v-col
        cols="12"
        v-for="vacancy in $store.state.vacancies"
        :key="vacancy.i"
      >
        <v-card @click="openListing(vacancy.vacancyID)">
          <v-card-title class="d-flex justify-space-between">
            {{ vacancy.title }}
            <v-btn
              @click="openListing(vacancy.vacancyID)"
              small
              color="blue"
              dark
            >
              View
              <v-icon right>mdi-open-in-new</v-icon></v-btn
            >
          </v-card-title>
          <v-card-subtitle
            >From {{ vacancy.company }} | <v-icon>mdi-map-marker</v-icon>
            {{ vacancy.location }}</v-card-subtitle
          >
          <v-card-text>{{ vacancy.summary.slice(0, 350) }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        {
          text: "First",
          align: "start",
          sortable: false,
          value: "first",
        },
        { text: "Last", value: "last" },
        { text: "Email", value: "email" },
        { text: "Added", value: "dateAdded" },
        { text: "Resume", value: "resume" },
        { text: "Portfolio", value: "portfolio" },
      ],
    };
  },
  methods: {
    openListing(id) {
      // window.open(`/vacancy/${id}`, "_blank");
      this.$router.push(`/vacancy/${id}`);
    },
  },
};
</script>

<style lang="scss" scoped></style>
