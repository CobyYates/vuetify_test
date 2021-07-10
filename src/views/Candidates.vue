<template>
  <div>
    <h2>Candidates</h2>
    <v-row>
      <v-col>
        <v-data-table
          :headers="headers"
          :items="$store.state.candidates"
          @click:row="viewCandidate"
          class="elevation-1"
        >
          <template v-slot:item.portfolio="{ item }">
            <a :href="item.portfolio">Portfolio</a>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        { text: "First", align: "start", value: "first", },
        { text: "Last", value: "last" },
        { text: "Email", value: "email" },
        { text: "Added", value: "dateAdded" },
        { text: "Resume", value: "resume" },
        { text: "Portfolio", value: "portfolio" },
      ],
    };
  },
  methods: {
    viewCandidate(candidate) {
      this.$router.push(`/candidate/${candidate.candidateID}`)
    }
  },
};
</script>

<style lang="scss" scoped>
::v-deep tr:hover {
  cursor: pointer!important;
}</style>
