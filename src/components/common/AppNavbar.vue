<template>
  <div class="navbar-custom">
    <div class="container-fluid">
      <ul class="list-unstyled topnav-menu m-0">
        <li class="logo-lg mt-1">
          <!-- <img
            src="@/assets/logo1.png"
            alt="Solar Logo"
            height="45px"
            class="ml-4 mr-2 mt-1"
          /> -->
          <i class="mdi mdi-map-marker-radius"></i>
          <span id="logo-text">Material Tracking</span>
          <!-- <span id="logo-text">MTS</span> -->
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

        <li class="dropdown notification-list topbar-dropdown float-right">
          <b-dropdown class="mt-1" id="dropdown-left" right  no-caret>
            <template #button-content>
              <!-- <span> -->
              <img
                src="@/assets/user-4.jpg"
                alt="user-image"
                class="rounded-circle"
                style="width: 35px;"
              /><span id="hide" class="text-light"> Jhon</span>
              <span class="mdi mdi-chevron-down ml-1"></span>
              <!-- </span> -->
            </template>
            <b-dropdown-header id="dropdown-header-label" class="text-primary">
              Welcome Jhon !
            </b-dropdown-header>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#" @click="$router.push('/login')"
              >Logout</b-dropdown-item
            >
          </b-dropdown>
          <!-- </span> -->
        </li>

       
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
@import url('https://fonts.googleapis.com/css2?family=Archivo:wght@500;600&family=Poppins&family=Rubik:ital,wght@0,700;0,800;1,700&display=swap');

.btn-secondary {
  background-color: #3c4854 !important;
  border-color: #3c4854 !important;
}

.btn-secondary:active,
.btn-secondary:hover,
.btn-secondary:focus {
  box-shadow: none;
}

.middle {
  margin-left: 24%;
}

@media(max-width: 500px) {
  #hide {
    display: none;
  }
  #logo-text {
    display: none;
  }
}

.mdi-map-marker-radius {
  font-size: 28px;
/* background: linear-gradient(to right, #b1a8a8, #4286f4, #4d5669); */
background: linear-gradient(to right, #b1a8a8, #4286f4, #f9f9fa);
  background-clip: inherit;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  padding-left: 10px;
  padding-right: 2px;
}

#logo-text {
  font-family: 'Archivo', sans-serif;
  font-size: 25px;
  color: rgb(244, 246, 248);
}
</style>