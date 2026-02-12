const author = {
  role: "Full-Stack Developper",
  desc: "I am a full-stack developper originating from the Dominican Republic seeking to be one of the essentials piece in any web development project",
  name: process.env.NUXT_NAME,
  year: process.env.NUXT_YEAR,
  number: process.env.NUXT_NUMBER,
  email: process.env.NUXT_EMAIL,
  country: process.env.NUXT_COUNTRY,
  language: process.env.NUXT_LANGUAGE,
  available: "Yes",
};

export default defineEventHandler(async () => {
  return { ...author };
});
