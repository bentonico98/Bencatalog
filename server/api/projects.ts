export default defineEventHandler(async () => {
  await new Promise((res) => setTimeout(res, 1000));

  const projects = [
    {
      url: "https://www.xfoliado.com",
      title: "Test",
      type: "Design / Marketing",
      icon: "https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg",
      year: 2020,
      live: true,
      technologies: ["React", "JS", "PHP"],
    },
    {
      url: "https://www.xfoliado.com",
      title: "Test",
      type: "Design / Marketing",
      icon: "https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg",
      year: 2020,
      live: true,
      technologies: ["React", "JS", "PHP"],
    },
    {
      url: "https://www.xfoliado.com",
      title: "Test",
      type: "Design / Marketing",
      icon: "https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg",
      year: 2020,
      live: true,
      technologies: ["React", "JS", "PHP"],
    },
    {
      url: "https://www.xfoliado.com",
      title: "Test",
      type: "Design / Marketing",
      icon: "https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg",
      year: 2020,
      live: false,
      technologies: ["React", "JS", "PHP"],
    },
    {
      url: "https://www.xfoliado.com",
      title: "Test",
      type: "ECommerce",
      icon: "https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg",
      year: 2020,
      live: false,
      technologies: ["React", "JS", "PHP"],
    },
    {
      url: "https://www.xfoliado.com",
      title: "Test",
      type: "ECommerce",
      icon: "https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg",
      year: 2020,
      live: false,
      technologies: ["React", "JS", "PHP"],
    },
  ];

  return projects;
});
