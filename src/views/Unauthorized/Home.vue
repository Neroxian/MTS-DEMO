<template>
  <auth-layout>
    <div>
      <!-- <h3 class="text-start px-1">Notification</h3>
      <div class="widget-rounded-circle card-box-widget">
        <div class="row">
          <div class="col-sm-12 col-md-6 col-lg-6">
            <b-alert show dismissible variant="danger" class="m-0">
              You have 2 Acknowledgement remaining.
              <router-link variant="info" class="width-sm" to="receive-material"
                ><b><u>Show</u></b></router-link
              >
            </b-alert>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-6">
            <b-alert show dismissible variant="info" class="m-0">
              A message to all LLC's.
              <router-link
                variant="info"
                class="width-sm"
                to="receive-material"
              ></router-link>
            </b-alert>
          </div>
        </div>
      </div> -->

      <h3 class="text-start mt-3 px-1">Dashboard</h3>
      <div class="row">
        <div class="col-12 col-md-6">
          <div class="widget-rounded-circle card-box-widget">
            <div class="row">
              <div class="col-5 text-center">
                <div
                  class="
                    widget-icon
                    avatar-lg
                    rounded-circle
                    bg-soft-danger
                    border-danger border
                  "
                >
                  <i
                    class="
                      mdi mdi-cart-outline
                      font-22
                      avatar-title
                      text-danger
                    "
                  ></i>
                </div>
                <h4 class="text-dark">Material</h4>
              </div>
              <div class="col-7 mt-1 text-right">
                <div class="my-1">
                  <span class="notification text-dark">Materials added</span>
                  <span class="badge badge-primary badge-pill mx-2 setBadge"
                    >4</span
                  >
                </div>
                <div class="my-1">
                  <span class="notification text-dark">Vendor added</span>
                  <span class="badge badge-success badge-pill mx-2 setBadge"
                    >2</span
                  >
                </div>
                <div class="my-1">
                  <span class="notification text-dark">Materials received</span>

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
            <div class="row ">
              <div class="col-5 text-center">
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
                      mdi mdi-truck-delivery-outline
                      font-22
                      avatar-title
                      text-success
                    "
                  ></i>
                </div>
                <h4>Dispatched</h4>
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
        
        <div class="col-md-6 col-xl-3">
          <div class="card-box">
            <i
              class="mdi mdi-information-outline text-muted float-right"
              data-toggle="tooltip"
              data-placement="bottom"
              title=""
              data-original-title="More Info"
            ></i>
            <h4 class="mt-0">E-Devices Stocks</h4>
            <h2 class="text-success my-3 text-center">
              Bio-Metric Devices : 200
            </h2>
            <p class="text-muted mb-0">
              Total : 650
              <span class="float-right"
                ><i class="mdi mdi-arrow-bottom-right text-danger mr-1"></i>7.85%</span
              >
            </p>
          </div>
        </div>

        <div class="col-md-6 col-xl-3">
          <div class="card-box">
            <i
              class="mdi mdi-information-outline text-secondary float-right"
              data-toggle="tooltip"
              data-placement="bottom"
              title=""
              data-original-title="More Info"
            ></i>
            <h4 class="mt-0 text-dark">Books Stocks</h4>
            <h2 class="text-success my-3 text-center">
              Klic Books : 12,000
            </h2>
            <p class="text-muted mb-0">
              Total dispatched: 1000
              <span class="float-right text-muted"
                ><i class="mdi mdi-arrow-top-right text-success mr-1"></i>10.25%</span
              >
            </p>
          </div>
        </div>

      </div>

      <div class="row mt-3">
        <!-- end col-->
        <div class="col-12 col-md-6 ">
          <b-card>
            <h4>Bar Chart</h4>
            <bar-chart />
          </b-card>
        </div>

        <div class="col-12 col-md-6">
          <b-card class="">
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
  data() {
    return {};
  },
  beforeMount() {
    this.makeToast2("info");
    this.makeToast("danger");
  },
  methods: {
    makeToast(variant = null) {
      this.$bvToast.toast("Your 2 Acknowledgement is Pending", {
        title: `Reminder`,
        variant: variant,
        solid: true,
      });
    },
    makeToast2(variant = null) {
      this.$bvToast.toast("Please update your Stocks detail.", {
        title: `Message from Admin`,
        variant: variant,
        solid: true,
      });
    },
  },
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