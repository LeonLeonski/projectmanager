import db from "$lib/db.js";
import { redirect } from "@sveltejs/kit";

export async function load({ params }) {
  console.log("Loading project with id: " + params.project_id);

  const project = await db.getProject(params.project_id);
  const tasks = await db.getTasksByProjectId(params.project_id);

  return {
    project,
    tasks
  };
}

export const actions = {
  delete: async ({ request }) => {
    const data = await request.formData();
    await db.deleteProject(data.get("id"));
    throw redirect(303, "/projects");
  },
};
