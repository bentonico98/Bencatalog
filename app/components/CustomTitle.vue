<template class="position-relative">
  <div class="d-flex justify-center my-15 position-relative">
    <p
      class="bottom-border d-flex justify-center text-h5 pb-3 go-forth transparent"
    >
      {{ title }}
    </p>
    <p class="text-h1 position-absolute text-grey-lighten-2 transparent">
      {{ title }}
    </p>
  </div>
</template>
<script setup lang="ts">
defineProps<{ title: string }>();
</script>
