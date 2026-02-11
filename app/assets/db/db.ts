export type authorType = {
  role: string;
  desc: string;
  name: string | undefined;
  year: string | undefined;
  number: string | undefined;
  email: string | undefined;
  country: string | undefined;
  language: string | undefined;
  available: string;
};
export type skillsType = {
  icon: string;
  name: string;
  link?: string;
  value?: string;
  expertise?: number;
};
export type experiencesType = {
  icon: string;
  name: string;
  years: string;
  country: string;
  type: string;
  desc: string;
};
export type projectsType = {
  url: string;
  title: string;
  type: string;
  icon: string;
  year: number;
  live: boolean;
  technologies: string[];
};
export type Dbtype = {
  socials: skillsType[];
};
