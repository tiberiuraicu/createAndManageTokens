<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
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
