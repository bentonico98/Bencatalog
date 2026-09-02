<template lang="">
  <div @click="navigate" class="d-flex cursor-pointer">
    <div
      class="flex-shink-1 rounded-circle pa-2 highlighted-border d-flex align-center"
    >
      <img :src="icon" width="30" height="30" />
    </div>
    <div class="d-flex flex-grow-1 flex-column">
      <p>{{ name }}</p>
      <div class="d-flex ga-2 align-center">
        <v-progress-linear
          color="indigo"
          :model-value="percentage"
          rounded
        ></v-progress-linear>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const { destination } = defineProps<{
  name: string;
  icon: string;
  percentage: number;
  destination?: string | undefined;
}>();
const navigate = () => {
  navigateTo(`/category/${destination}`);
};
</script>
