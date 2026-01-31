<template lang="">
  <v-container>
    <CustomTitle title="Usage" />

    <v-row no-gutters>
      <v-col cols="12" sm="6">
        <v-sheet class="ma-2 pa-2 text-h4"> My cups of tea.... </v-sheet>
        <v-sheet class="ma-2 pa-2">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores.
        </v-sheet>
        <v-sheet class="ma-2 pa-2">
          Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
          dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
          elitr, sed diam nonumy eirmod tempor invidunt.
        </v-sheet>
      </v-col>
      <v-col cols="12" sm="6">
        <div class="d-flex flex-column">
          <ProgressCard
            v-for="(skill, index) in skills"
            :key="index"
            :name="skill.name"
            :percentage="skill.expertise"
          />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup lang="ts">
import { db } from "~/assets/db/db";
const skills = ref(db.skills);
</script>
