<template>
  <div class="d-flex justify-content-center align-items-center mt-5">
    <div class="form-group col-12 col-md-4 col-lg-4 col-xl-4">
      <div class="card shadow-sm">
        <div class="card-body">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardWrapper",
};
</script>
