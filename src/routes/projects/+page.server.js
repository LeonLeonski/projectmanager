import db from '$lib/db.js';

export async function load() {
  const projects = await db.getProjects();

  // Für jedes Projekt: passende Tasks laden
  const projectsWithTasks = await Promise.all(
    projects.map(async (project) => {
      const tasks = await db.getTasksByProjectId(project._id);
      return { ...project, tasks };
    })
  );

  return {
    projects: projectsWithTasks
  };
}
