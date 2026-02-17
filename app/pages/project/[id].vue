<template lang="">
  <div>
    <v-row no-gutters>
      <v-col cols="12" sm="6">
        <v-img
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
          <div class="d-flex" v-else>
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
          <div class="d-flex" v-else>
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

          <div class="d-flex flex-wrap ga-2">
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
    <v-divider></v-divider>
    <div v-if="project?.pages?.length > 0">
      <v-container>
        <CustomTitle title="Gallery" />
        <div v-for="(page, index) in project.pages" :key="index">
          <p
            class="d-flex justify-center text-h5 pb-3 go-forth transparent mt-4"
          >
            {{ page.title }}
          </p>
          <v-img
            :lazy-src="page?.url"
            :src="page?.url"
            class="bg-grey-lighten-2"
            cover
          >
            <template v-slot:placeholder>
              <v-row align="center" class="ma-0" justify="center">
                <v-progress-circular
                  color="grey-lighten-5"
                  indeterminate
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </div>
      </v-container>
    </div>
  </div>
</template>
<script setup lang="ts">
const route = useRoute();
const id = ref(route.params.id);
const { data: project, pending } = await useFetch(`/api/projects/${id.value}`);
const { isMobile } = useIsMobile();
</script>
