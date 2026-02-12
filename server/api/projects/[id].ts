import { projectsTable } from "../projects";

export default defineEventHandler(async (e) => {
  const id = getRouterParam(e, "id");
  return projectsTable.filter((x) => x.id === id)[0];
});
