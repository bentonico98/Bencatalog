<template lang="">
  <div class="d-flex align-center">
    <div class="rounded-frame border-none">
      <img
        lazy-src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
        :src="icon"
        class="bg-grey-lighten-2 centered-image"
      />
    </div>
    <div>
      <p class="text-h4">{{ title }}</p>
    </div>
  </div>
  <ExperienceCard
    v-for="(item, index) in items"
    :key="index"
    :name="item.name"
    :years="item.years"
    :type="item.type"
    :desc="item.desc"
  />
</template>
<script setup lang="ts">
defineProps<{ icon: string; title: string; items: any[] }>();
</script>
