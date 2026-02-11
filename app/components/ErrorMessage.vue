<template lang="">
  <v-snackbar :timeout="2000" class="elevation-24" color="red" v-model="snack">
    **<strong> {{ error }}</strong>
  </v-snackbar>
</template>
<script setup lang="ts">
const { isError } = defineProps<{ error: string; isError: boolean }>();
const snack = ref(isError);
</script>
