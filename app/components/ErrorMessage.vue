<template lang="">
  <v-snackbar
    :timeout="2000"
    class="elevation-24"
    :color="color"
    v-model="snack"
  >
    **<strong> {{ error }}</strong>
  </v-snackbar>
</template>
<script setup lang="ts">
defineProps<{
  error: string;
  color: string;
}>();
const snack = ref(true);
</script>
