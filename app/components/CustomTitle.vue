<template>
  <div class="d-flex justify-center my-15 position-relative">
    <p v-if="isMobile" class="bottom-border text-h6 pb-2 go-forth transparent">
      {{ title }}
    </p>
    <p
      v-else
      class="bottom-border d-flex justify-center text-h5 pb-3 go-forth transparent"
    >
      {{ title }}
    </p>
    <p
      v-if="isMobile"
      class="text-h2 position-absolute text-grey-lighten-2 transparent centered-on-mobile"
    >
      {{ title }}
    </p>
    <p v-else class="text-h1 position-absolute text-grey-lighten-2 transparent">
      {{ title }}
    </p>
  </div>
</template>
<script setup lang="ts">
defineProps<{ title: string }>();
const { isMobile } = useIsMobile();
</script>
