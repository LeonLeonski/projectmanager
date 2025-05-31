<script>
  let { data, form } = $props();
</script>

<a href="javascript:history.back()">Back</a>
<h1>Add a Task</h1>

<form method="POST" action="?/create">
  <!-- Hidden field: projectId aus URL -->
  <input type="hidden" name="projectId" value={data?.projectId} />

  <div class="mb-3">
    <label class="form-label">Title</label>
    <input name="title" class="form-control" type="text" required />
  </div>

  <div class="mb-3">
    <label class="form-label">Description</label>
    <input name="description" class="form-control" type="text" />
  </div>

  <div class="mb-3">
    <label class="form-label">Impact Level</label>
    <select name="impactLevel" class="form-select">
      <option value="niedrig">Niedrig</option>
      <option value="mittel" selected>Mittel</option>
      <option value="hoch">Hoch</option>
    </select>
  </div>

  <div class="mb-3">
    <label class="form-label">Due Date</label>
    <input name="dueDate" type="date" class="form-control" />
  </div>

  <div class="form-check mb-3">
    <input class="form-check-input" type="checkbox" name="completed" id="completed" />
    <label class="form-check-label" for="completed">Erledigt</label>
  </div>

  <button type="submit" class="btn btn-primary">Add Task</button>
</form>

{#if form?.success}
  <p class="mt-3 text-success">Task wurde erfolgreich erstellt.</p>
{/if}
