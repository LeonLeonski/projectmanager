<script>
  import "./styles.css";
  let { children } = $props();
</script>

<nav class="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Project Manager</a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <a class="nav-link" href="/projects">Projects</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/projects/create">Add Project</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/tasks">Tasks</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<div class="container mt-3">
  {@render children()}
</div>
