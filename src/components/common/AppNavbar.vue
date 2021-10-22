<template>
  <div class="navbar-custom">
    <div class="container-fluid">
      <ul class="list-unstyled topnav-menu topnav-menu-left m-0">
        <li>
          <button
            @click="toggleSidebar"
            class="button-menu-mobile waves-effect waves-light"
          >
            <i class="mdi mdi-menu"></i>
          </button>
        </li>

        <span class="logo-lg">
          <img src="@/assets/solar.png" alt="Solar Logo" height="40"  class="mt-1"/>
        </span>

        <a
          class="nav-link waves-effect waves-light float-right"
          data-toggle="dropdown"
          href="#"
          role="button"
          aria-haspopup="false"
          aria-expanded="false"
        >
          <div>
            <img src="@/assets/download.png" alt="image" class="img-fluid avatar-sm rounded-circle">
            <select
              class="btn btn-xs width-xs btn-light"
              @change="changeRole"
              :value="user.role"
            >
              <option v-for="(role, idx) in roles" :key="idx" :value="role">
                {{ role }}
              </option>
            </select>
          </div>
        </a>

        <!-- <li>
          <a
            class="navbar-toggle nav-link"
            data-toggle="collapse"
            data-target="#topnav-menu-content"
          >
            <div class="lines">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </a>
        </li> -->
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Vue from "vue";
import * as ROLES from "@/roles";

Vue.prototype.roles = Object.keys(ROLES);

export default {
  name: "AppNavbar",
  methods: {
    toggleSidebar() {
      document.querySelector("body").classList.toggle("sidebar-enable");
    },
    changeRole(e) {
      // console.log(e.target.value)
      this.$store.commit("CHANGE_ROLE", e.target.value);
    },
  },
  computed: {
    ...mapState(["user"]),
  },
};
</script>

<style>
</style>