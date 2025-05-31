import db from "$lib/db.js";

export const actions = {
  create: async ({ request }) => {
    const data = await request.formData();
    let project = {
      title: data.get("title"),
      description: data.get("description"),
      createdAt: new Date(),
    };
    await db.createProject(project);
    return { success: true };
  },
};
