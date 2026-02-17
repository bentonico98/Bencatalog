<template lang="">
  <div class="my-8">
    <FormKit
      type="form"
      @submit="SendMessage"
      submit-label="Send Message"
      #default="{ value }"
      :submit-attrs="{
        inputClass: 'primary-button',
        'data-theme': `light`,
        ignore: false,
      }"
    >
      <Loading v-if="isLoading" />
      <div v-else class="d-flex flex-column align-apart ga-6">
        <p class="text-h4">Say Hi</p>
        <div class="bottom-border-full">
          <FormKit
            type="text"
            name="name"
            id="name"
            class="my-input"
            label="Name"
            placeholder="Jon Doe"
            validation="required"
            :validation-messages="{
              required: 'Name is required.',
            }"
          />
        </div>
        <div class="bottom-border-full">
          <FormKit
            type="email"
            name="email"
            id="email"
            label="Email"
            placeholder="JonDoe@email.com"
            validation="required"
            :validation-messages="{
              required: 'Email is required.',
            }"
          />
        </div>
        <div class="bottom-border-full">
          <FormKit
            type="text"
            name="subject"
            id="subject"
            label="Subject"
            placeholder="Your subject"
            validation="required"
            :validation-messages="{
              required: 'Subject is required.',
            }"
          />
        </div>
        <div class="bottom-border-full">
          <FormKit
            type="textarea"
            name="message"
            id="message"
            label="Message"
            placeholder="Write your message"
            maxlength="120"
            cols="40"
            rows="4"
            :help="`${value.message ? value.message.length : 0} / 120`"
            validation="length:0,120; required;"
            validation-visibility="live"
            :validation-messages="{
              length: 'Message cannot be more than 120 characters.',
            }"
          />
        </div>
      </div>
      <ErrorMessage color="green" v-if="isSent" :error="successMsj" />
      <ErrorMessage color="red" v-if="isError" :error="errorMsj" />
    </FormKit>
  </div>
</template>
<script setup lang="ts">
let isLoading = ref(false);
let isError = ref(false);
let isSent = ref(false);
let errorMsj = ref("An error occurred! Try again!");
let successMsj = ref("Email Sent!");

const SendMessage = async (e: any) => {
  try {
    isLoading.value = true;
    await $fetch("/api/resend", {
      method: "POST",
      body: e,
    });
    isSent.value = true;
  } catch (error) {
    isError.value = error ? true : false;
  } finally {
    isLoading.value = false;
  }
};
</script>
