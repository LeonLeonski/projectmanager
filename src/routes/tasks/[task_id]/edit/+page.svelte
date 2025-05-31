<script>
  let { data, form } = $props();
  let task = data.task;
</script>

<a href=javascript:history.back()>Back</a>
<h1>Edit Task</h1>

<form method="POST" action="?/update">
  <input type="hidden" name="id" value={task._id} />

  <div class="mb-3">
    <label class="form-label">Title</label>
    <input class="form-control" type="text" name="title" value={task.title} required />
  </div>

  <div class="mb-3">
    <label class="form-label">Description</label>
    <input class="form-control" type="text" name="description" value={task.description} />
  </div>

  <div class="mb-3">
    <label class="form-label">Impact Level</label>
    <select name="impactLevel" class="form-select">
      <option value="niedrig" selected={task.impactLevel === "niedrig"}>Niedrig</option>
      <option value="mittel" selected={task.impactLevel === "mittel"}>Mittel</option>
      <option value="hoch" selected={task.impactLevel === "hoch"}>Hoch</option>
    </select>
  </div>

  <div class="mb-3">
    <label class="form-label">Due Date</label>
    <input class="form-control" type="date" name="dueDate"
      value={task.dueDate ? new Date(task.dueDate).toISOString().slice(0, 10) : ""} />
  </div>

  <div class="form-check mb-3">
    <input class="form-check-input" type="checkbox" name="completed" id="completed"
      checked={task.completed} />
    <label class="form-check-label" for="completed">Done</label>
  </div>

  <button class="btn btn-primary">Save</button>
</form>

{#if form?.success}
  <p class="text-success mt-2">Changes saved.</p>
{/if}
