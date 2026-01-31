<template lang="">
  <div class="box">
    <div class="rounded-frame">
      <img
        lazy-src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
        :src="icon"
        class="bg-grey-lighten-2 centered-image"
      />
    </div>
    <v-sheet> {{ name }} </v-sheet>
  </div>
</template>
<script setup lang="ts">
defineProps<{ icon: string; name: string }>();
</script>
