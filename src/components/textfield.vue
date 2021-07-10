<template>
  <v-row>
    <v-col cols="6">
      <label>{{ label }}</label>
      <v-text-field
        v-if="type == 'text'"
        value="value"
        solo
        dense
        hide-details="auto"
      />

      <v-select
        v-if="type == 'select'"
        :items="items"
        value="value"
        solo
        dense
        hide-details="auto"
        :menu-props="{ bottom: true, offsetY: true, left: true }"
      />
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "HelloWorld",
  props: ["value", "label", "type", "items"],
  data: () => ({
    
  }),
};
</script>
