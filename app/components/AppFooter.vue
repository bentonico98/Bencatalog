<template>
  <v-footer
    class="text-center bg-black d-flex flex-column ga-2 py-4"
    color="black"
  >
    <div class="d-flex ga-3">
      <Loading v-if="pending" />
      <v-btn
        v-else
        v-for="icon in socials"
        :key="icon?.icon"
        :icon="icon?.icon"
        density="comfortable"
        variant="text"
        @click="() => Navigate(icon?.link)"
      ></v-btn>
    </div>

    <v-divider class="my-2" thickness="2" width="50"></v-divider>

    <div class="text-caption font-weight-regular opacity-60">
      The following project is a personal Fullstack / Web Developer portfolio;
      all assets used on the website to the exceptions of icons and logos, are
      considered property of Benjunior Dorlouis and shouldn't be used without
      the written or verbal consent of Benjunior Dorlouis
    </div>

    <v-divider></v-divider>

    <div>© {{ new Date().getFullYear() }}</div>
  </v-footer>
</template>
<script setup lang="ts">
const { data: socials, pending } = useFetch("/api/socials", { server: false });
const Navigate = (link: string | undefined) => {
  if (!link) return;
  navigateTo(link, { external: true });
};
</script>
