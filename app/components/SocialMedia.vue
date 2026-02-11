<template lang="">
  <div class="d-flex ga-6">
    <Loading v-if="pending" />
    <SocialMediaCard
      v-else
      v-for="(social, index) in socials"
      :key="index"
      :name="social?.name"
      :link="social?.link"
      :icon="social?.icon"
    />
  </div>
</template>
<script setup lang="ts">
const { data: socials, pending } = useFetch("/api/socials", { server: false });
</script>
