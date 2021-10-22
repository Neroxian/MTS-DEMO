<template>
  <auth-layout>
    <div>
        <h4 class="text-start text-uppercase ">
              Dashboard
            </h4>
      <div class="row">

        <div class="col-12 col-md-6">
          <div class="widget-rounded-circle card-box-widget">
            <div class="row">
              <div class="col-5">
                <div
                  class="
                    widget-icon
                    avatar-lg
                    rounded-circle
                    bg-soft-primary
                    border-primary border
                  "
                >
                  <i
                    class="
                      mdi mdi-cart-outline
                      font-22
                      avatar-title
                      text-primary
                    "
                  ></i>
                  <h4>Material</h4>
                </div>
              </div>
              <div class="col-7 mt-1 text-right">
                <div class="my-1">
                  <span class="notification">Materials added</span>
                  <span class="badge badge-primary badge-pill mx-2 setBadge"
                    >4</span
                  >
                </div>
                <div class="my-1">
                  <span class="notification">Vendor added</span>
                  <span class="badge badge-success badge-pill mx-2 setBadge"
                    >2</span
                  >
                </div>
                <div class="my-1">
                  <span class="notification">Materials received</span>

                  <span class="badge badge-warning badge-pill mx-2 setBadge"
                    >4</span
                  >
                </div>
              </div>
            </div>
            <!-- end row-->
          </div>
          <!-- end widget-rounded-circle-->
        </div>
        <!-- end col-->

        <div class="col-12 col-md-6">
          <div class="widget-rounded-circle card-box-widget">
            <div class="row">
              <div class="col-5">
                <div
                  class="
                    widget-icon
                    avatar-lg
                    rounded-circle
                    bg-soft-success
                    border-success border
                  "
                >
                  <i
                    class="
                      mdi mdi-package-variant-closed
                      font-22
                      avatar-title
                      text-success
                    "
                  ></i>
                  <h4>Dispatched</h4>
                </div>
              </div>
              <div class="col-7 mt-1 text-right">
                <div class="text-start my-1">
                  <div class="text-start my-1">
                    <span class="notification">Dispatched material</span>

                    <span class="badge badge-primary badge-pill mx-2 setBadge"
                      >1</span
                    >
                  </div>
                  <div class="text-start my-1">
                    <span class="notification">Acknowledged</span>

                    <span class="badge badge-success badge-pill mx-2 setBadge"
                      >2</span
                    >
                  </div>
                  <div class="text-start my-1">
                    <span class="notification">Pending</span>

                    <span class="badge badge-warning badge-pill mx-2 setBadge"
                      >4</span
                    >
                  </div>
                </div>
              </div>
            </div>
            <!-- end row-->
          </div>
          <!-- end widget-rounded-circle-->
        </div>
      </div>

      <div class="row mt-3">
        <!-- end col-->
        <div class="col-12 col-md-6">
          <b-card>
            <h4>Bar Chart</h4>
            <bar-chart />
          </b-card>
        </div>

        <div class="col-12 col-md-6">
          <b-card>
            <h4>Pie Chart</h4>
            <pie-chart />
          </b-card>
        </div>
      </div>
    </div>
  </auth-layout>
</template>

<script>
import authLayout from "../../layouts/auth-layout.vue";
import BarChart from "@/components/BarChart";
import PieChart from "@/components/PieChart";
export default {
  components: { authLayout, PieChart, BarChart },
  name: "Home",
};
</script>

<style>
.setBadge {
  margin-top: 2px;
}

.widget-icon {
  margin: auto;
}
.notification {
  /* margin-left: 4vw; */
  font-size: 0.8rem;
  /* font-weight: bold; */
}
</style>