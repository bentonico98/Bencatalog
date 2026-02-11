<template lang="">
  <v-container id="Skills">
    <CustomTitle title="Skills" />
    <v-row>
      <v-col v-for="(skill, index) in skills" :key="index" cols="12" sm="3">
        <Loading v-if="pending" />
        <SkillCard v-else :name="skill?.name" :icon="skill?.icon" />
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup lang="ts">
const { data: skills, pending } = useFetch("/api/skills", { server: false });
</script>
