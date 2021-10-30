<template>
  <auth-layout>
    <div>
      <h3 class="text-start mt-2 px-1">Dashboard</h3>
      <div class="row">
        <div class="col-12 col-md-6">
          <div class="widget-rounded-circle card-dashboard">
            <div class="row">
              <div class="col-4">
                <h4 class="text-dark mt-0 font-16">Materials</h4>
                <div
                  class="
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
              </div>
              <div class="col-4 text-center mt-4 pt-2">
                <div>
                  <p class="badge badge-warning badge-pill setBadge1">4</p>
                  <h5 class="text-dark mt-0">Materials added</h5>
                </div>
              </div>
            
              <div class="col-4 text-center mt-4 pt-2">
                <div>
                  <p class="badge badge-success badge-pill setBadge1">10</p>
                  <h5 class="text-dark mt-0">Materials received</h5>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div class="col-12 col-md-6">
          <div class="widget-rounded-circle card-box">
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
                <h4>Materials</h4>
              </div>
              <div class="col-7 mt-1 text-right">
                <div class="text-start my-1">
                  <div class="text-start my-1">
                    <span class="notification">Materials received</span>

                    <span class="badge badge-primary badge-pill mx-2 setBadge"
                      >13</span
                    >
                  </div>
                  <div class="text-start my-1">
                    <span class="notification">Materials available</span>

                    <span class="badge badge-success badge-pill mx-2 setBadge"
                      >15</span
                    >
                  </div>
                  <!-- <div class="text-start my-1">
                    <span class="notification">Pending</span>

                    <span class="badge badge-warning badge-pill mx-2 setBadge"
                      >4</span
                    >
                  </div> -->
                </div>
              </div>
            </div>
          </div>
        </div>


        <div class="col-12 col-md-6">
          <div class="widget-rounded-circle card-box">
            <div class="row">
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
                      >10</span
                    >
                  </div>
                  <div class="text-start my-1">
                    <span class="notification">Acknowledged</span>

                    <span class="badge badge-success badge-pill mx-2 setBadge"
                      >6</span
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
          </div>
        </div>
      </div>


      <div class="row mt-3">
        <div class="col-md-6 col-xl-3">
          <div class="card-box">
            <h4 class="mt-0">Track Your Shipment</h4>
            <b-form @submit.prevent="track">
              <div class="mt-2 mb-1 text-center">
                <b-form-input
                  v-model="text"
                  placeholder="Enter the Tracking-ID"
                ></b-form-input>
              </div>
              <button
                type="submit"
                class="btn btn-primary waves-effect waves-light mt-1 mb-0"
              >
                Track
              </button>
            </b-form>
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
            <h2 class="text-success my-3 text-center">Klic Books : 12,000</h2>
            <p class="text-muted mb-0">
              Total dispatched: 1000
              <span class="float-right text-muted"
                ><i class="mdi mdi-arrow-top-right text-success mr-1"></i
                >10.25%</span
              >
            </p>
          </div>
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
  name: "LlcDashBoard",
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
    track() {
      this.$router.push("/track");
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

.setBadge1 {
  font-size: 15px;
}
</style>