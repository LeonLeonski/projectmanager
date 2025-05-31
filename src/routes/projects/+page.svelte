<script>
  import ProjectCard from "$lib/components/ProjectCard.svelte";
  let { data } = $props();
</script>

<h1 class="mb-4">All Projects</h1>

<div class="row mt-3">
  {#each data.projects as project}
    <div class="col-sm-6 col-md-4 col-lg-3 mb-2 gx-2">
      <ProjectCard {project} />
    </div>
  {/each}
</div>

<div class="mt-4">
  <a href="/projects/create" class="btn btn-primary">Add New Project</a>
</div>
