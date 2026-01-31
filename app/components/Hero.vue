<template lang="">
  <div>
    <v-row no-gutters>
      <v-col
        cols="12"
        sm="6"
        class="d-flex flex-column align-center justify-center"
      >
        <div class="d-flex flex-column align-start ma-10">
          <v-sheet class="ma-2 pa-2">Hello, I'm</v-sheet>
          <v-sheet class="text-h1 ma-2 pa-2"> {{ author.name }} </v-sheet>
          <v-sheet class="text-h5 ma-2 pa-2"> {{ author.role }} </v-sheet>
          <v-btn rounded variant="outlined">Contact Me</v-btn>
        </div>
      </v-col>
      <v-col cols="12" sm="6">
        <v-img
          lazy-src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
          :src="author.picture"
          aspect-ratio="1"
          class="bg-grey-lighten-2"
          cover
        >
          <template v-slot:placeholder>
            <v-row align="center" class="fill-height ma-0" justify="center">
              <v-progress-circular
                color="grey-lighten-5"
                indeterminate
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
    </v-row>
  </div>
</template>
<script setup lang="ts">
import { db } from "~/assets/db/db";
const author = ref(db.author);
</script>
