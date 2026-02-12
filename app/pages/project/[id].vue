<template lang="">
  <div>
    <v-row no-gutters>
      <v-col cols="12" sm="6">
        <v-img
          :lazy-src="project?.icon"
          :src="project?.icon"
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
      <v-col cols="12" sm="6" class="d-flex justify-center align-center">
        <Loading v-if="pending" />
        <div v-else class="d-flex flex-column align-start">
          <v-sheet class="pa-2 text-wrap"
            >Description: {{ project?.desc }}
          </v-sheet>
          <v-sheet class="pa-2"
            >Title: <Chips :text="project?.title" icon="mdi-tag" />
          </v-sheet>
          <v-sheet class="pa-2"
            >Type: <Chips :text="project?.type" icon="mdi-label" />
          </v-sheet>
          <v-sheet class="pa-2"
            >Year: <Chips :text="project?.year" icon="mdi-calendar" />
          </v-sheet>
          <v-sheet class="pa-2"
            >Live: <Chips :text="project?.live" icon="mdi-broadcast" />
          </v-sheet>
          <v-sheet class="pa-2 d-flex ga-1"
            >Tools Used:
            <v-chip
              v-for="(technology, index) in project?.technologies"
              :key="index"
              color="green"
              variant="flat"
            >
              {{ technology }}
            </v-chip>
          </v-sheet>
          <v-sheet class="pa-2 d-flex ga-1"
            >Participation:
            <v-chip
              v-for="(participation, index) in project?.participation"
              :key="index"
              color="green"
              variant="flat"
            >
              {{ participation }}
            </v-chip>
          </v-sheet>
          <v-sheet class="pa-2">
            Url:

            <nuxt-link :to="project?.url">
              <Chips :text="project?.url" icon="mdi-web" />
            </nuxt-link>
          </v-sheet>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<script setup lang="ts">
const route = useRoute();
const id = ref(route.params.id);

const { data: project, pending } = await useFetch(`/api/projects/${id.value}`);
console.log("project", project.value);
</script>
