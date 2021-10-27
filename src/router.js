import Vue from "vue";
import Router from "vue-router";

import { RM, LLC, ALC } from "./roles";

Vue.use(Router);

function load(role, view) {
  switch (role) {
    case RM:
      return () => import(`@/views/RM/${view}.vue`);
    default:
      return () => import("@/views/Unauthorized/Home.vue");
  }
}

export default new Router({
  routes: [
    {
      path: "/dashboard",
      name: "Home",
      component: load(null, "Home"),
    },
    {
      path: "/",
      name: "login",
      component: load(RM, "Login"),
    },
    {
      path: "/add-material",
      name: "Add Material",
      component: load(RM, "AddMaterial"),
    },
    {
      path: "/stock-declaration",
      name: "Stock declaration",
      component: load(RM, "StockDeclaration"),
    },
    {
      path: "/vendors",
      name: "Vendors",
      component: load(RM, "Vendors"),
    },
    {
      path: "/add-vendor",
      name: "Add Vendor",
      component: load(RM, "AddVendor"),
    },
    {
      path: "/vendorEdit/:id",
      name: "VendorEdit",
      component: load(RM, "VendorEdit"),
    },
    {
      path: "/receive-material",
      name: "ReceiveMaterialHome",
      component: load(RM, "ReceiveMaterial"),
    },
    {
      path: "/login",
      name: "Login",
      component: load(RM, "Login"),
    },
    {
      path: "/dispatch",
      name: "Dispatch",
      component: load(RM, "Dispatch"),
    },
    {
      path: "/target",
      name: "TargetGeneration",
      component: load(RM, "TargetGeneration"),
    },
    {
      path: "/dispatchLLC",
      name: "DispatchLLC",
      component: load(RM, "DispatchLLC"),
    },
    {
      path: "*",
      name: "Not found",
      component: load(null, null),
    },
    {
      path: "/demo",
      name: "Home Demo",
      component: load(RM, "HomeDemo")
    },
    {
      path: "/materialCategory",
      name: "Matcat",
      component: load(RM, "MaterialCategory"),
    },
    {
      path: "/packaging",
      name: "PackagingPattern",
      component: load(RM, "PackagingPattern"),
    },
    {
      path: "/acknowledge-report",
      name: "Acknowledge Report",
      component: load(RM, "AcknowledgeReport")
    },
    {
      path: "/acknowledge",
      name: "Acknowledge",
      component: load(RM, "Acknowledgement")
    },
    {
      path: "/acknowledgeL",
      name: "AcknowledgeL",
      component: load(RM, "Acknowledge")
    },
    {
      path: "/uicomponent",
      name: "UIcomponent",
      component: load(RM, "UIcomponent")
    },
    {
      path: "/uiforms",
      name: "UIforms",
      component: load(RM, "UIforms")
    },
    {
      path: "/track",
      name: "Track",
      component: load(RM, "Track")
    },
    {
      path: "/llcdashboard",
      name: "LlcDashBoard",
      component: load(RM, "LlcDashboard")
    },
    {
      path: "/*",
      name: "404",
      component: load(RM, "404")
    }
  ]
});
