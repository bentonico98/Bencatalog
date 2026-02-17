<template lang="">
  <v-container id="About">
    <CustomTitle title="About Me" />
    <v-row no-gutters>
      <v-col cols="12" sm="6">
        <v-img
          lazy-src="/assets/img/fotograd.jpeg"
          src="/assets/img/fotograd.jpeg"
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
      <Loading v-if="pending" />
      <v-col v-else cols="12" sm="6">
        <v-sheet v-if="isMobile" class="ma-2 pa-2 text-h4">
          Hi! I'm {{ author?.name }}
        </v-sheet>
        <v-sheet v-else class="ma-2 pa-2 text-h3">
          Hi! I'm {{ author?.name }}
        </v-sheet>
        <v-sheet class="ma-2 pa-2 text-h5 text-blue">
          {{ author?.role }}
        </v-sheet>
        <v-sheet class="ma-2 pa-2 text-h7"> {{ author?.desc }} </v-sheet>
        <v-sheet class="ma-2 pa-2">Phone Number: {{ author?.number }}</v-sheet>
        <v-sheet class="ma-2 pa-2">Email: {{ author?.email }}</v-sheet>
        <v-sheet class="ma-2 pa-2">Country: {{ author?.country }}</v-sheet>
        <v-sheet class="ma-2 pa-2">Language: {{ author?.language }}</v-sheet>
        <v-sheet class="ma-2 pa-2"
          >Open To Hire: {{ author?.available }}</v-sheet
        >
        <div class="mx-3">
          <v-btn rounded variant="outlined" @click="download">View CV</v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup lang="ts">
import viewFile from "~/services/viewFile";
const { data: author, pending } = useFetch("/api/author");
const { isMobile } = useIsMobile();
const download = () => viewFile("/cv.pdf");
</script>
