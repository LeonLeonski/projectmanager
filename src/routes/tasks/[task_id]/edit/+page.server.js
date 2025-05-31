import db from "$lib/db.js";
import { redirect } from "@sveltejs/kit";

export async function load({ params }) {
  const task = await db.getTask(params.task_id);
  if (!task) {
    throw redirect(303, "/tasks");
  }
  return { task };
}

export const actions = {
  update: async ({ request }) => {
    const data = await request.formData();

    const updatedTask = {
      title: data.get("title"),
      description: data.get("description"),
      impactLevel: data.get("impactLevel") || "mittel",
      completed: data.get("completed") === "on",
      dueDate: data.get("dueDate") ? new Date(data.get("dueDate")) : null,
      updatedAt: new Date()
    };

    const id = data.get("id");
    await db.updateTask(id, updatedTask);

    throw redirect(303, `/tasks/${id}`);
  }
};
