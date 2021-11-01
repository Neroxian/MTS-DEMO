<template>
  <div>
    <div id="wrapper">
      <app-navbar />
      <app-sidebar />
      <div class="content-page">
        <div class="content">
          <div class="container-fluid">
            <slot></slot>
          </div>
        </div>
      </div>
      <app-footer />
    </div>
  </div>
</template>

<script>
import AppNavbar from "@/components/common/AppNavbar";
import AppSidebar from "@/components/common/AppSidebar";
import AppFooter from "@/components/common/AppFooter";

export default {
  name: "auth-layout",
  components: {
    "app-navbar": AppNavbar,
    "app-sidebar": AppSidebar,
    "app-footer": AppFooter
  }
};
</script>

<style>
#wrapper{
  
}
</style>