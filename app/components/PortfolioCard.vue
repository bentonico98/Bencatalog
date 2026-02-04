<template lang="">
  <div :class="designatedStyle">
    <img :src="race" class="responsive-fill" />
    <div
      class="overlay centered-image highlighted-border borderless-box appear-on-hover"
    >
      <img
        src="https://img.icons8.com/?size=100&id=7695&format=png&color=000000"
        class="overlay centered-icon"
      />
      <p class="text-black text-h5 overlay bottom-0 mb-5">
        {{ title }}
      </p>
      <p class="text-black-2 text-h7 overlay bottom-0 mb-1">{{ type }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
const { live } = defineProps<{
  image: string;
  title: string;
  type: string;
  live: boolean;
}>();
import race from "~/assets/img/race.gif";
const designatedStyle = ref("flex-box position-relative ");
if (live) designatedStyle.value += " pointer appear-on-hover-container";
</script>
