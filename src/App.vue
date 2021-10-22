<template>
  <div id="app">
    <router-view />
  </div>
</template> 

<script>
import AppNavbar from "@/components/common/AppNavbar";
import AppSidebar from "@/components/common/AppSidebar";
import AppFooter from "@/components/common/AppFooter";

export default {
  name: "App",
  components: {
    "app-navbar": AppNavbar,
    "app-sidebar": AppSidebar,
    "app-footer": AppFooter,
  },
};
</script>

<style lang="scss">
#app {
  // font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
