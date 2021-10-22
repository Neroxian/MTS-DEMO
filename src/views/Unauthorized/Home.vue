<template>
  <auth-layout>
    <div>
      <div class="row">
        <div class="col-12 col-md-6">
          <div class="widget-rounded-circle card-box">
            <div class="row">
              <div class="col-6 pb-2">
                <div
                  class="
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
              <div class="col-6 mt-1">
                <div class="text-start my-1">
                  <span
                    class="badge badge-primary badge-pill float-right setBadge"
                    >4</span
                  >
                  <span class="notification">Materials added</span>
                </div>
                <div class="text-start my-1">
                  <span
                    class="badge badge-success badge-pill float-right setBadge"
                    >2</span
                  >
                  <span class="notification">Vendor added</span>
                </div>
                <div class="text-start my-1">
                  <span
                    class="badge badge-warning badge-pill float-right setBadge"
                    >4</span
                  >
                  <span class="notification">Materials received</span>
                </div>
              </div>
            </div>
            <!-- end row-->
          </div>
          <!-- end widget-rounded-circle-->
        </div>
        <!-- end col-->

        <div class="col-12 col-md-6">
          <div class="widget-rounded-circle card-box">
            <div class="row">
              <div class="col-6 pb-2">
                <div
                  class="
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
              <div class="col-6 mt-1">
                <div class="text-start my-1">
                  <div class="text-start my-1">
                    <span
                      class="
                        badge badge-primary badge-pill
                        float-right
                        setBadge
                      "
                      >4</span
                    >
                    <span class="notification">Dispatched material</span>
                  </div>
                  <div class="text-start my-1">
                    <span
                      class="
                        badge badge-success badge-pill
                        float-right
                        setBadge
                      "
                      >2</span
                    >
                    <span class="notification">Acknowledged</span>
                  </div>
                  <div class="text-start my-1">
                    <span
                      class="
                        badge badge-warning badge-pill
                        float-right
                        setBadge
                      "
                      >4</span
                    >
                    <span class="notification">Pending</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- end row-->
          </div>
          <!-- end widget-rounded-circle-->
        </div>
      </div>

      <div class="row mt-2">
        <!-- end col-->
        <div class="col-12 col-md-6">
          <b-card>
            <h2>BAR CHART</h2>
            <bar-chart />
          </b-card>
        </div>

        <div class="col-12 col-md-6">
          <b-card>
            <h2>PIE CHART</h2>
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
.notification {
  margin-left: 4vw;
  font-size: 13.28px;
  font-weight: bold;
}

@media (max-width: 1310px) {
  .notification {
    margin-left: 1vw;
  }
}
@media (max-width: 1098px) {
  .notification {
    margin-left: -3px;
  }
}

@media (max-width: 765px) {
  .notification {
    margin-left: 50px;
  }
}
@media (max-width: 535px) {
  .notification {
    margin-left: 4px;
  }
}
@media (max-width: 430px) {
  .notification {
    margin-left: -5px;
    font-size: 12.7px;
  }
}
@media (max-width: 400px) {
  .notification {
    margin-left: -20px;
    font-size: 12.7px;
  }
}
</style>