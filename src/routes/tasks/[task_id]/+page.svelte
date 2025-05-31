<script>
  export let data;
  let task = data.task;
  let project = data.project;
</script>

<a href=javascript:history.back()>Back</a>

<h1>{task.title}</h1>

<div class="row mt-3">
  <div class="col">
    <p><strong>Beschreibung:</strong> {task.description}</p>
    <p><strong>Projekt:</strong> 
      <a href={`/projects/${project._id}`} class="text-decoration-underline">
        {project.title}
      </a>
    </p>
    <p><strong>Impact Level:</strong> {task.impactLevel}</p>
    <p><strong>Status:</strong> 
      {#if task.completed}
        <span class="badge bg-success">Erledigt</span>
      {:else}
        <span class="badge bg-warning text-dark">Offen</span>
      {/if}
    </p>
    <p><strong>Fällig am:</strong> 
      {task.dueDate ? new Date(task.dueDate).toLocaleDateString() : '–'}
    </p>
    <p><strong>Erstellt am:</strong> {new Date(task.createdAt).toLocaleDateString()}</p>

    <!-- Aktionen -->
    <div class="d-flex gap-2 mt-4">
      <!-- Optional: Edit-Funktion -->
      <a href={`/tasks/${task._id}/edit`} class="btn btn-primary">Bearbeiten</a>

      <form method="POST" action="?/delete" class="d-inline">
        <input type="hidden" name="id" value={task._id} />
        <button class="btn btn-danger">Delete Task</button>
      </form>
    </div>
  </div>
</div>
