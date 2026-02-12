<template lang="">
  <v-container id="Resume">
    <CustomTitle title="Resume" />
    <v-row no-gutters>
      <Loading v-if="pending" />
      <v-col v-else cols="12" sm="6">
        <ResumeCard
          title="Experience"
          :icon="employmentsIcon"
          :items="employments ?? []"
        />
      </v-col>
      <Loading v-if="pending" />
      <v-col v-else cols="12" sm="6">
        <ResumeCard
          title="Education"
          :icon="educationIcon"
          :items="education ?? []"
        />
      </v-col>
    </v-row>
  </v-container>
  <v-divider></v-divider>
</template>

<script setup lang="ts">
const allData = await Promise.all([
  useFetch("/api/experiences"),
  useFetch("/api/education"),
]);
const employments = reactive(allData[0].data);
const education = reactive(allData[1].data);
const pending = reactive(allData[0].pending);
const employmentsIcon =
  employments && employments?.value ? (employments?.value[0]?.icon ?? "") : "";
const educationIcon =
  education && education?.value ? (education?.value[0]?.icon ?? "") : "";
</script>
