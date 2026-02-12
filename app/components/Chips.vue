<template lang="">
  <v-chip class="ma-2 text-wrap" color="pink" label>
    <v-icon :icon="icon" start></v-icon>
    {{ text }}
  </v-chip>
</template>
<script setup lang="ts">
defineProps<{ text: string; icon: string }>();
</script>
