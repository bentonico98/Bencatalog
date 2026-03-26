<script setup lang="ts">
import { ref, reactive } from "vue";

const form = ref(null);
const isLoading = ref(false);
const isError = ref(false);
const isSent = ref(false);
const errorMsj = ref("An error occurred! Try again!");
const successMsj = ref("Email Sent!");

const formData = reactive({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const rules = {
  required: (v: string) => !!v || "Field is required",
  email: (v: string) => /.+@.+\..+/.test(v) || "E-mail must be valid",
  max120: (v: string) => (v && v.length <= 120) || "Max 120 characters",
};

const SendMessage = async () => {
  if (!form.value) return;

  const { valid } = await (form.value as any).validate();
  if (!valid) return;

  try {
    isLoading.value = true;
    isError.value = false;
    isSent.value = false;

    await $fetch("/api/resend", {
      method: "POST",
      body: formData,
    });

    isSent.value = true;
    // Reset form
    formData.name = "";
    formData.email = "";
    formData.subject = "";
    formData.message = "";
    (form.value as any).resetValidation();
  } catch (error) {
    isError.value = true;
  } finally {
    isLoading.value = false;
  }
};
</script>

<template>
  <v-container class="py-8">
    <v-row justify="center">
      <v-col cols="12" md="10" lg="8">
        <v-card class="pa-6 elevation-4" rounded="lg">
          <v-card-title class="text-h4 font-weight-bold mb-4">
            Contact Me
          </v-card-title>

          <v-form ref="form" @submit.prevent="SendMessage">
            <v-row>
              <v-col cols="12" md="12">
                <v-text-field
                  v-model="formData.name"
                  label="Name"
                  placeholder="John Doe"
                  :rules="[rules.required]"
                  variant="outlined"
                  class="mb-2"
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="12">
                <v-text-field
                  v-model="formData.email"
                  label="Email"
                  placeholder="john@email.com"
                  :rules="[rules.required, rules.email]"
                  variant="outlined"
                  class="mb-2"
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-text-field
                  v-model="formData.subject"
                  label="Subject"
                  placeholder="Your subject"
                  :rules="[rules.required]"
                  variant="outlined"
                  class="mb-2"
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-textarea
                  v-model="formData.message"
                  label="Message"
                  placeholder="Write your message"
                  :rules="[rules.required, rules.max120]"
                  variant="outlined"
                  counter="120"
                  class="mb-4"
                  rows="4"
                  persistent-counter
                ></v-textarea>
              </v-col>
            </v-row>

            <v-btn
              type="submit"
              color="black"
              size="large"
              block
              :loading="isLoading"
              class="text-none font-weight-bold"
            >
              Send Message
            </v-btn>
          </v-form>

          <ErrorMessage color="green" v-if="isSent" :error="successMsj" />
          <ErrorMessage color="red" v-if="isError" :error="errorMsj" />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.v-card {
  transition: transform 0.2s ease-in-out;
}
.v-card:hover {
  transform: translateY(-4px);
}
</style>
