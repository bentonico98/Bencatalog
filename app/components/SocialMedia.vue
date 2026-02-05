<template lang="">
  <div class="d-flex ga-6">
    <SocialMediaCard
      v-for="(social, index) in socials"
      :key="index"
      :name="social.name"
      :link="social.link"
      :icon="social.icon"
    />
  </div>
</template>
<script setup lang="ts">
import { db } from "~/assets/db/db";
const socials = ref(db.socials);
</script>
