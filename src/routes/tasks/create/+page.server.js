export async function load({ url }) {
  const projectId = url.searchParams.get('projectId');
  return { projectId };
}

import db from "$lib/db.js";

export const actions = {
  create: async ({ request }) => {
    const data = await request.formData();

    const task = {
      title: data.get("title"),
      description: data.get("description"),
      impactLevel: data.get("impactLevel") || "mittel",
      completed: data.get("completed") === "on",
      dueDate: data.get("dueDate") ? new Date(data.get("dueDate")+"T00:00:00Z") : null,
      projectId: data.get("projectId"),
      createdAt: new Date()
    };

    await db.createTask(task);

    return { success: true };
  }
};
