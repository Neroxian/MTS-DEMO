<template>
  <auth-layout>
  <div class="container d-flex justify-content-center align-items-center">
    <div class="col-lg-6 col-xl-4">
      <div class="error-text-box">
        <svg viewBox="0 0 600 200">
          <!-- Symbol-->
          <symbol id="s-text">
            <text text-anchor="middle" x="50%" y="50%" dy=".35em">MTS</text>
          </symbol>
          <!-- Duplicate symbols-->
          <use class="text" xlink:href="#s-text"></use>
          <use class="text" xlink:href="#s-text"></use>
          <use class="text" xlink:href="#s-text"></use>
          <use class="text" xlink:href="#s-text"></use>
          <use class="text" xlink:href="#s-text"></use>
        </svg>
      </div>
      <!-- end row -->
    </div>
    <!-- end col -->
  </div>
  </auth-layout>
</template>

<script>
import authLayout from '../../layouts/auth-layout.vue';
export default {
  components: { authLayout },
  name: "Home",
};
</script>

<style>
</style>