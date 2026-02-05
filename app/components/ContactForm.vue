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
      <div class="d-flex flex-column align-apart ga-6">
        <p class="text-h4">Say Hi</p>
        <FormKit
          type="text"
          name="name"
          id="name"
          label="Name"
          placeholder="Jon Doe"
          validation="required"
          :validation-messages="{
            required: 'Name is required.',
          }"
        />
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
    </FormKit>
  </div>
</template>
<script setup lang="ts">
import SendEmailToBoss from "~/services/resend";
const config = useRuntimeConfig();
const apiKey = config.public.RESEND_API_KEY;
const SendMessage = async (e: any) => {
  console.log("e", e);
  // const { data, error } = await SendEmailToBoss(e, apiKey);
  // console.log({ data });
  // return data;
};
</script>
