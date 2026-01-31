<template lang="">
  <div class="d-flex flex-column">
    <p>{{ name }}</p>
    <div class="d-flex ga-2 align-center">
      <v-progress-linear
        color="indigo"
        :model-value="percentage"
        rounded
      ></v-progress-linear>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps<{ name: string; percentage: number }>();
</script>
