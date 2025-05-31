<script>
  let { task } = $props();
</script>

<div class="card h-100 shadow-sm border-0 bg-dark text-light">
  <div class="card-body">
    <h5 class="card-title">
      <a href={`/tasks/${task._id}`} class="text-info text-decoration-none">
        {task.title}
      </a>
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
      {task.dueDate ? new Date(task.dueDate).toLocaleDateString() : 'Kein Datum'}
    </p>

    <p>
      <strong>Status:</strong>
      {#if task.completed}
        <span class="badge bg-success">Erledigt</span>
      {:else}
        <span class="badge bg-warning text-dark">Offen</span>
      {/if}
    </p>
  </div>
</div>
