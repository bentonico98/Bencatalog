<script setup>
import { ref } from "vue";

const drawer = ref(false);
const navItems = [
  { title: "Home", href: "#Home" },
  { title: "About", href: "#About" },
  { title: "Usage", href: "#Usage" },
  { title: "Resume", href: "#Resume" },
  { title: "Portfolio", href: "#Portfolio" },
  { title: "Contact", href: "#Contact" },
];
</script>

<template>
  <v-app-bar class="bg-black text-white" elevation="2" density="comfortable">
    <template v-slot:prepend>
      <v-app-bar-nav-icon
        class="d-md-none"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
    </template>

    <v-app-bar-title class="font-weight-bold"> Ben's Portfolio </v-app-bar-title>

    <v-spacer></v-spacer>

    <!-- Desktop Menu -->
    <div class="d-none d-md-flex">
      <v-btn
        v-for="item in navItems"
        :key="item.title"
        :href="item.href"
        variant="text"
        class="text-capitalize"
      >
        {{ item.title }}
      </v-btn>
    </div>
  </v-app-bar>

  <!-- Mobile Navigation Drawer -->
  <v-navigation-drawer
    v-model="drawer"
    location="left"
    temporary
    class="bg-black text-white"
  >
    <v-list>
      <v-list-item
        v-for="item in navItems"
        :key="item.title"
        :href="item.href"
        @click="drawer = false"
      >
        <v-list-item-title class="text-white">{{
          item.title
        }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped>
.v-btn {
  font-weight: 500;
}
</style>
