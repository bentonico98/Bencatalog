<template lang="">
  <div class="experience-card position-relative pb-5">
    <p class="text-h4 text-orange">{{ name }}</p>
    <p class="text-grey italic">{{ years }}</p>

    <p class="">{{ type }}</p>
    <p class="text-bold text-grey">
      {{ desc }}
    </p>
    <div class="bulletin position-absolute"></div>
  </div>
</template>
<script setup lang="ts">
defineProps<{ name: string; years: string; type: string; desc: string }>();
</script>
