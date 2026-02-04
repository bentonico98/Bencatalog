<template lang="">
  <v-container>
    <v-row no-gutters>
      <v-col v-for="(project, index) in projects" :key="index" cols="12" sm="4">
        <PortfolioCard
          :image="project.icon"
          :title="project.title"
          :type="project.type"
          :live="project.live"
        />
      </v-col>
    </v-row>
    <div class="d-flex justify-center my-4">
      <v-btn color="black" rounded variant="outlined"> See More </v-btn>
    </div>
  </v-container>
</template>
<script setup lang="ts">
import { db } from "~/assets/db/db";
const projects = ref(db.projects);
</script>
