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

        <!-- <li class="dropdown notification-list topbar-dropdown">
                <a class="nav-link dropdown-toggle nav-user mr-0 waves-effect waves-light" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                    <img src="@/assets/download.png" alt="user-image" class="img-fluid avatar-sm rounded-circle">
                    <span class="pro-user-name ml-1">
                        Admin <i class="mdi mdi-chevron-down"></i> 
                    </span>
                </a>
                <div class="dropdown-menu dropdown-menu-right profile-dropdown ">
                   
                    <div class="dropdown-header noti-title">
                        <h6 class="text-overflow m-0">Welcome Admin</h6>
                    </div>
    
                   
                    <a href="javascript:void(0);" class="dropdown-item notify-item">
                        <i class="mdi-shield-account-outline"></i>
                        <span>Admin</span>
                    </a>
    
                   
                    <a href="javascript:void(0);" class="dropdown-item notify-item">
                        <i class="mdi-logout"></i>
                        <span>Logout</span>
                    </a>
    
                </div>
            </li> -->

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
            <!-- <img src="@/assets/download.png" alt="image" class="img-fluid avatar-sm rounded-circle"> -->
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

           <li class="dropdown notification-list topbar-dropdown float-right">
          <b-dropdown id="dropdown-left" right>
            <template #button-content>
              <span>
                <img
                  src="@/assets/user-4.jpg"
                  alt="user-image"
                  class="rounded-circle"
                  style="width: 35px"
                /> Jhon
              </span>
            </template>
            <b-dropdown-header id="dropdown-header-label" class="text-dark">
              Welcome Jhon !
            </b-dropdown-header>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#" @click="$router.push('/login')">Logout</b-dropdown-item>
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
</style>