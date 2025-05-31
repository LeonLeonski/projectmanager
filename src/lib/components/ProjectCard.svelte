<script>
  let { project } = $props();
</script>

<div class="card h-100 shadow-sm border-0 bg-dark text-light">
  <div class="card-body">
    <h5 class="card-title">
      <a href={`/projects/${project._id}`} class="text-decoration-none text-info">
        {project.title}
      </a>
    </h5>

    {#if project.description}
      <p class="card-text mb-2">{project.description}</p>
    {/if}

    {#if project.createdAt}
      <p class="text-muted small">Erstellt am: {new Date(project.createdAt).toLocaleDateString()}</p>
    {/if}

    <hr />

    <h6>Tasks</h6>
    {#if project.tasks.length === 0}
      <p class="text-muted">Keine Tasks vorhanden.</p>
    {:else}
      <ul class="list-unstyled mb-0">
        {#each project.tasks as task}
          <li>
            <a href={`/tasks/${task._id}`} class="text-light text-decoration-underline">{task.title}</a>
          </li>
        {/each}
      </ul>
    {/if}
  </div>
</div>
