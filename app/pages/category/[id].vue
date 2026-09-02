<template lang="">
  <div v-for="(project, index) in projects" :key="index">
    <v-row no-gutters>
      <v-col cols="12" sm="6">
        <Loading v-if="pending" />
        <v-img
          v-else
          :lazy-src="project?.icon"
          :src="project?.icon"
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
      <v-col cols="12" sm="6">
        <Loading v-if="pending" />
        <div v-else class="d-flex flex-column align-start">
          <div class="d-flex flex-column" v-if="isMobile">
            <p class="text-h5 pa-2 text-wrap">Description:</p>
            <p class="text-sm pa-2 text-wrap">
              {{ project?.desc }}
            </p>
          </div>
          <div class="d-flex px-2 ga-2" v-else>
            <v-sheet class="text-h5 pa-2 text-wrap">Description: </v-sheet>
            <v-sheet class="text-sm pa-2 text-wrap">
              {{ project?.desc }}
            </v-sheet>
          </div>

          <div class="d-flex flex-column" v-if="isMobile">
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
          </div>
          <div class="d-flex flex-wrap px-2 ga-2" v-else>
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
          </div>

          <div class="d-flex flex-wrap px-2 ga-2">
            <v-sheet class="pa-2 d-flex ga-1">Tools Used: </v-sheet>
            <v-chip
              v-for="(technology, index) in project?.technologies"
              :key="index"
              color="green"
              variant="flat"
            >
              {{ technology }}
            </v-chip>
          </div>
          <div class="d-flex flex-wrap px-2 ga-2">
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
          </div>
          <div class="d-flex flex-wrap px-2 ga-2">
            <v-sheet class="pa-2">
              Url:

              <nuxt-link :to="project?.url">
                <Chips :text="project?.url" icon="mdi-web" />
              </nuxt-link>
            </v-sheet>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-divider></v-divider>
  </div>
</template>
<script setup lang="ts">
const route = useRoute();
const id = ref(route.params.id);
const { data: projects, pending } = await useFetch(
  `/api/categories/${id.value}`,
);
const config = useRuntimeConfig();

const { isMobile } = useIsMobile();
const url = config.public.baseURL;

pending.value = false;
</script>
