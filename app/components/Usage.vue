<template lang="">
  <v-container id="Usage">
    <CustomTitle title="Usage" />

    <v-row no-gutters>
      <v-col cols="12" sm="6">
        <v-sheet class="ma-2 pa-2 text-h4"> My cups of tea.... </v-sheet>
        <v-sheet class="ma-2 pa-2">
          My work primarily involves modern web technologies such as HTML, CSS,
          JavaScript, and frameworks like React and Next.js, along with backend
          tools and APIs when needed. I focus on writing maintainable code,
          optimizing performance, and creating intuitive user experiences that
          translate ideas into functional products.
        </v-sheet>
        <v-sheet class="ma-2 pa-2">
          Each project in this portfolio was built to solve a real-world
          problem—whether it’s improving usability, streamlining workflows, or
          delivering a polished, professional interface. I enjoy learning new
          technologies and continuously improving my skills through hands-on
          development.
        </v-sheet>
      </v-col>
      <v-col cols="12" sm="6">
        <div class="d-flex flex-column ga-2">
          <Loading v-if="pending" />
          <ProgressCard
            v-else
            v-for="(skill, index) in skills"
            :key="index"
            :name="skill?.name"
            :icon="skill?.icon"
            :percentage="skill?.expertise"
          />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup lang="ts">
const { data: skills, pending } = useFetch("/api/skills");
</script>
