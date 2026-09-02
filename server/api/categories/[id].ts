import { projectsTable } from "../projects";

export default defineEventHandler(async (e) => {
  const id = getRouterParam(e, "id");
  console.log(
    "ID",
    projectsTable.filter((x) => x.technologies.includes(id ?? "")),
  );
  console.log("ID", id);
  return projectsTable.filter((x) => x.technologies.includes(id ?? ""));
});
