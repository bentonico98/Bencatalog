<template lang="">
  <div
    class="highlighted-border rounded-xl d-flex flex-1 ga-2 pa-2 align-center disappear-on-hover-container"
  >
    <v-btn
      :icon="icon"
      density="comfortable"
      variant="text"
      @click="() => Navigate(link)"
    ></v-btn>
    <div class="disappear-on-hover">
      <p>{{ name }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps<{ link: string; icon: string; name: string }>();
const Navigate = (link: string) => {
  navigateTo(link, { external: true });
};
</script>
