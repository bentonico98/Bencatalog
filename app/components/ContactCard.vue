<template lang="">
  <div class="rounded-xl d-flex flex-1 ga-2 pa-2 align-center">
    <div class="rounded-circle pa-2 highlighted-border d-flex align-center">
      <img :src="icon" width="30" height="30" />
    </div>
    <div>
      <p class="text-h5">{{ name }}</p>
      <p class="text-grey">{{ value }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps<{ value: string; icon: string; name: string }>();
</script>
