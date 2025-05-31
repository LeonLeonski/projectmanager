<script>
  let { form } = $props();
</script>

<a href="javascript:history.back()">Back</a>
<h1>Add a Project</h1>
<form method="POST" action="?/create">
  <div class="mb-3">
    <label for="" class="form-label">Title</label>
    <input name="title" class="form-control" type="text" />
  </div>
  <div class="mb-3">
    <label for="" class="form-label">Description</label>
    <input name="description" class="form-control" type="text" />
  </div>
  <button type="submit" class="btn btn-primary">Add project</button>
</form>

{#if form?.success}
  <p>Project created</p>
{/if}
