<template>
  <img :src="spinner" class="spinner-icon" />
</template>
<script setup lang="ts">
const { live } = defineProps<{
  image: string;
  title: string;
  type: string;
  live: boolean;
}>();
import spinner from "~/assets/img/spinner.gif";
</script>
