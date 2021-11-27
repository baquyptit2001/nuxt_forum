<template>
  <div>
    <section class="error-area section-padding position-relative">
      <span class="icon-shape icon-shape-1"></span>
      <span class="icon-shape icon-shape-2"></span>
      <span class="icon-shape icon-shape-3"></span>
      <span class="icon-shape icon-shape-4"></span>
      <span class="icon-shape icon-shape-5"></span>
      <span class="icon-shape icon-shape-6"></span>
      <span class="icon-shape icon-shape-7"></span>
      <div class="container">
        <div class="text-center">
          <img src="~assets/images/error-img.png" alt="error-image" class="img-fluid mb-40px">
          <h2 class="section-title pb-3">Oops! Page not found!</h2>
          <p class="section-desc pb-4">We're sorry, we couldn't find the page you requested.</p>
          <NuxtLink to="/"><a class="btn theme-btn" href="#"> Go to homepage </a></NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "error.vue"
}
</script>

<style>
.page-enter-active,
.page-leave-active,
.layout-enter-active,
.layout-leave-active {
  transition: opacity .5s
}

.page-enter,
.page-leave-active,
.layout-enter,
.layout-leave-active {
  opacity: 0
}
</style>
