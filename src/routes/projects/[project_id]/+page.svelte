<script>
  export let data;
  let project = data.project;
  let tasks = data.tasks;
</script>

<a href="/projects">Back</a>

<h1>{project.title}</h1>

<div class="mb-3">
  <p><strong>Beschreibung:</strong> {project.description}</p>
  <p><strong>Erstellt am:</strong> {new Date(project.createdAt).toLocaleDateString()}</p>

  <div class="d-flex gap-2 mt-3">
    <a class="btn btn-primary" href={`/tasks/create?projectId=${project._id}`}>Add Task</a>
    <form method="POST" action="?/delete">
      <input type="hidden" name="id" value={project._id} />
      <button class="btn btn-danger">Delete Project</button>
    </form>
  </div>
</div>

<hr />

<h2 class="mt-5">Tasks zu diesem Projekt</h2>

{#if tasks.length === 0}
  <p class="text-muted">Keine Tasks vorhanden.</p>
{:else}
  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-2">
    {#each tasks as task}
      <div class="col">
        <div class="card bg-dark text-light h-100 shadow-sm border-light">
          <div class="card-body">
            <h5 class="card-title mb-1">
              <a href={`/tasks/${task._id}`} class="text-info text-decoration-none">{task.title}</a>
            </h5>

            {#if task.description}
              <p class="card-text">{task.description}</p>
            {/if}

            <p class="mb-1">
              <strong>Impact:</strong>
              <span class="badge bg-secondary">{task.impactLevel}</span>
            </p>

            <p class="mb-1">
              <strong>Fällig am:</strong>
              {task.dueDate
                ? new Date(task.dueDate).toLocaleDateString()
                : '–'}
            </p>

            <p class="mb-0">
              <strong>Status:</strong>
              {#if task.completed}
                <span class="badge bg-success">Erledigt</span>
              {:else}
                <span class="badge bg-warning text-dark">Offen</span>
              {/if}
            </p>
          </div>
        </div>
      </div>
    {/each}
  </div>
{/if}
