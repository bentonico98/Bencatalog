export default defineEventHandler(async () => {
  const contacts = [
    {
      value: process.env.NUXT_EMAIL,
      name: "Email",
      icon: "https://img.icons8.com/?size=100&id=53388&format=png&color=000000",
    },
    {
      value: process.env.NUXT_NUMBER,
      name: "Phone",
      icon: "https://img.icons8.com/?size=100&id=9659&format=png&color=000000",
    },
  ];

  return contacts;
});
