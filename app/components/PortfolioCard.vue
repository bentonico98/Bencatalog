<template lang="">
  <div
    class="position-relative pointer appear-on-hover-container my-3"
    @click="navigate"
  >
    <v-img :lazy-src="image" class="responsive position-relative" :src="image">
      <template v-slot:placeholder>
        <v-row align="center" class="fill-height ma-0" justify="center">
          <v-progress-circular
            color="grey-lighten-5"
            indeterminate
          ></v-progress-circular>
        </v-row>
      </template>
      <div
        class="overlay overlay-parent centered-image highlighted-border borderless-box appear-on-hover"
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
    </v-img>
  </div>
</template>
<script setup lang="ts">
const { id } = defineProps<{
  id: string;
  image: string;
  title: string;
  type: string;
  live: boolean;
}>();
const navigate = () => {
  navigateTo(`/project/${id}`);
};
</script>
