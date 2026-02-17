<template lang="">
  <v-container id="Contact">
    <CustomTitle title="Contact Me" />
    <v-row no-gutters class="ga-8">
      <v-col cols="12" sm="5">
        <ContactForm />
      </v-col>
      <v-col cols="12" sm="5" class="d-flex flex-column ga-4">
        <p class="text-h4">Contact Info</p>
        <p class="text-black">
          If you like you saw, don't hesitate to get in touch; I'm not a jack of
          all trades however fullstack is what i do.
        </p>
        <div>
          <Loading v-if="pending" />
          <ContactCard
            v-else
            v-for="(contact, index) in contacts"
            :key="index"
            :icon="contact?.icon"
            :name="contact?.name"
            :value="contact?.value"
          />
        </div>
        <p class="text-grey my-2">Visit my social media</p>
        <SocialMedia />
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts" setup>
const { data: contacts, pending } = useFetch("/api/contacts");
</script>
