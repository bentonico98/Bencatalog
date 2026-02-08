<template lang="">
  <v-container id="Skills">
    <CustomTitle title="Skills" />
    <v-row>
      <v-col v-for="(skill, index) in skills" :key="index" cols="12" sm="3">
        <SkillCard :name="skill.name" :icon="skill.icon" />
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup lang="ts">
import { db } from "~/assets/db/db";
const skills = ref(db.skills);
</script>
