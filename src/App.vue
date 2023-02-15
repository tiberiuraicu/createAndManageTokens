<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
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

    <div class="collapse navbar-collapse justify-content-around" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <h5>
            <router-link class="nav-link text-lg font-weight-bold" to="/create"
              >Create</router-link
            >
          </h5>
        </li>
      </ul>
      <ul class="navbar-nav">
        <li class="nav-item">
          <h5>
            <router-link class="nav-link text-lg font-weight-bold" to="/manage"
              >Manage</router-link
            >
          </h5>
        </li>
      </ul>
    </div>
  </nav>

  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
};
</script>
