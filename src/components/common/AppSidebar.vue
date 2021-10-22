<template>
  <div class="left-side-menu">
    <div class="h-100" v-bar>
      <div id="sidebar-menu">
        <ul id="side-menu">
          <!-- <li class="menu-title">Navigation</li> -->
          <li v-for="(link, i) in links" :key="i">
            <a
              href="#"
              v-b-toggle="
                link.name
                  .split(' ')
                  .map((l) => l.toLowerCase())
                  .join('-')
              "
            >
            <i id="mdi-icon" :class="link.icon"></i>
              {{ link.name }}
              <span class="menu-arrow"></span>
            </a>
            <b-collapse
              :id="
                link.name
                  .split(' ')
                  .map((l) => l.toLowerCase())
                  .join('-')
              "
              class="collapse"
            >
              <ul class="nav-second-level">
                <li v-for="(subLink, j) in link.subLinks" :key="j">
                  <router-link id="icon-padding" :to="subLink.path"
                    >
                    <span>{{ subLink.name }}</span></router-link
                  >
                </li>
              </ul>
            </b-collapse>
          </li>
        </ul>
      </div>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";

import links from "./links.json";

export default {
  name: "AppSidebar",
  data() {
    return {
      links: [],
    };
  },
  created() {
    if (this.user) {
      this.links = links[this.user.role];
    } else {
      this.links = links["DEFAULT"];
    }
  },
  watch: {
    getRole() {
      if (this.user) {
        this.links = links[this.getRole];
      } else {
        this.links = links["DEFAULT"];
      }
    },
  },
  computed: {
    ...mapState(["user"]),
    ...mapGetters(["getRole"])  
  },
};
</script>

<style>
.accordian-open,
.accordian-close {
  width: 24px;
  height: 24px;
  text-align: center;
}
.collapsed > .accordian-open,
.not-collapsed > .accordian-close {
  display: none;
}
</style>