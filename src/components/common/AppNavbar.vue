<template>
  <div class="navbar-custom">
    <div class="container-fluid">
      <ul class="list-unstyled topnav-menu m-0">
        <li class="logo-lg d-none d-md-block">
          <router-link to="dashboard"><img
            src="@/assets/logo1.png"
            alt="Solar Logo"
            height="45px"
            class="ml-4 mr-2 mt-1"
          /></router-link>
        </li>

        <li>
          <button
            @click="toggleSidebar"
            class="button-menu-mobile waves-effect waves-light"
          >
            <i class="mdi mdi-menu"></i>
          </button>
        </li>

        <li class="middle">
          <a
            class="nav-link waves-effect waves-light"
            data-toggle="dropdown"
            href="#"
            role="button"
          >
              <!-- <img src="@/assets/download.png" alt="image" class="img-fluid avatar-sm rounded-circle"> -->
              <select
                class="btn btn-light"
                @change="changeRole"
                :value="user.role"
              >
                <option v-for="(role, idx) in roles" :key="idx" :value="role">
                  {{ role }}
                </option>
              </select>
          </a>
        </li>

        <li class=" notification-list float-right mr-4">
          <b-dropdown text="Left align">
            <template #button-content>
              <span>
                <img
                  src="@/assets/download.png"
                  alt="user-image"
                  class="rounded-circle"
                  style="width: 35px"
                />
                Jhon
                <i class="mdi mdi-chevron-down"></i>
              </span>
            </template>
            <b-dropdown-header>
              Welcome Jhon!
            </b-dropdown-header>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#" @click="$router.push('/login')"
              >Logout</b-dropdown-item
            >
          </b-dropdown>
          <!-- </span> -->
        </li>

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
.btn-secondary {
  background-color: #3c4854 !important;
  border-color: #3c4854 !important;
}
.btn-secondary:active,
.btn-secondary:hover,
.btn-secondary:focus {
  border: none;
  box-shadow: none;
}
.middle {
  margin-left: 25vw;
}
.dropdown-toggle::after {
  display: none !important; 
}
</style>