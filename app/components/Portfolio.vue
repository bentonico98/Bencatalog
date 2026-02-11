<template lang="">
  <v-container id="Portfolio">
    <CustomTitle title="Portfolio" />
    <v-row no-gutters>
      <v-col v-for="(project, index) in projects" :key="index" cols="12" sm="4">
        <Loading v-if="pending" />
        <PortfolioCard
          v-else
          :image="project?.icon"
          :title="project?.title"
          :type="project?.type"
          :live="project?.live"
        />
      </v-col>
    </v-row>
    <div class="d-flex justify-center my-4">
      <v-btn color="black" rounded variant="outlined"> See More </v-btn>
    </div>
  </v-container>
</template>
<script setup lang="ts">
const { data: projects, pending } = useFetch("/api/projects", {
  server: false,
});
</script>
