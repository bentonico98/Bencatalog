export default defineEventHandler(async () => {
  await new Promise((res) => setTimeout(res, 1000));

  const education = [
    {
      name: "Universidad Tecnologica de Santiago (UTESA)",
      icon: "https://pbs.twimg.com/profile_images/783336810676006914/HDJDMj4m.jpg",
      years: "2018-2024",
      country: "Dominican Republic",
      type: "University College",
      desc: "System Engineering / Computer Science",
    },
  ];

  return education;
});
