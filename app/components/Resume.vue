<template>
  <v-container>
    <CustomTitle title="Resume" />
    <v-row no-gutters>
      <v-col cols="12" sm="6">
        <ResumeCard
          :icon="employmentsIcon"
          title="Experience"
          :items="employments"
        />
      </v-col>
      <v-col cols="12" sm="6">
        <ResumeCard
          :icon="educationIcon"
          title="Education"
          :items="education"
        />
      </v-col>
    </v-row>
  </v-container>
  <v-divider></v-divider>
</template>
<script setup lang="ts">
import { db } from "~/assets/db/db";
const employments = ref(db.experiences);
const education = ref(db.education);
const employmentsIcon = employments?.value[0]?.icon ?? "";
const educationIcon = education?.value[0]?.icon ?? "";
</script>
