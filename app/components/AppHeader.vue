<template lang="">
  <v-card>
    <v-toolbar class="text-white bg-black" title="BenDev">
      <v-btn><a class="btn" href="#Home">Home</a></v-btn>
      <v-btn><a class="btn" href="#About">About</a></v-btn>
      <v-btn><a class="btn" href="#Skills">Skills</a></v-btn>
      <v-btn><a class="btn" href="#Usage">Usage</a></v-btn>
      <v-btn><a class="btn" href="#Resume">Resume</a></v-btn>
      <v-btn><a class="btn" href="#Portfolio">Portfolio</a></v-btn>
      <v-btn><a class="btn" href="#Contact">Contact</a></v-btn>
    </v-toolbar>
  </v-card>
</template>
<script setup lang="ts">
const Navigate = (link: string) => {
  navigateTo(link);
};
</script>
