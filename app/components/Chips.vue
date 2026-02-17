<template lang="">
  <v-chip :class="finalClass" color="pink" label>
    <v-icon :icon="icon" start></v-icon>
    {{ text }}
  </v-chip>
</template>
<script setup lang="ts">
const finalClass = ref(" ma-2 text-wrap ");
const { customClass } = defineProps<{
  text: string | boolean | number;
  icon: string;
  customClass?: string;
}>();

if (customClass) finalClass.value += customClass;
</script>
