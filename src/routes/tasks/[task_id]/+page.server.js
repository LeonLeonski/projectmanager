import db from "$lib/db.js";
import { redirect } from "@sveltejs/kit";

export async function load({ params }) {
  console.log("Loading task with id: " + params.task_id);

  const task = await db.getTask(params.task_id);

  if (!task) {
    //throw redirect(303, "/tasks"); // oder Fehler werfen
  }

  const project = await db.getProject(task.projectId);

  return {
    task,
    project
  };
}

export const actions = {
  delete: async ({ request }) => {
    const data = await request.formData();
    const id = data.get("id");

    await db.deleteTask(id);

    throw redirect(303, "/tasks");
  }
};
