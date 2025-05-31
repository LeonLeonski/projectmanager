<script>
    import TaskCard from "$lib/components/TaskCard.svelte";
  let { data } = $props();
</script>

<h1 class="mb-4">All Tasks</h1>
<div class="row mt-3">
  {#each data.tasks as task}
    <div class="col-sm-6 col-md-4 col-lg-3 mb-2 gx-2">
      <TaskCard {task}></TaskCard>
    </div>
  {/each}
</div>


