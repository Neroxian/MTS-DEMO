<template>
  <auth-layout>
    <div>
      <h3 class="font-weight-bold px-1">Dashboard</h3>
  
      <div class="row">
        <div class="col-12 col-md-6">
          <div class="card-dashboard bg-pattern">
            <div class="text-center">
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
                  class="mdi mdi-cart-outline font-22 avatar-title text-success"
                ></i>
              </div>
              <h4 class="mb-1 font-20">Product</h4>
              <p class="text-muted font-14">
                Product notification
              </p>
            </div>

            <div class="row mt-2 text-center">
              <div class="col-6">
                <span class="mb-1 badge badge-success badge-pill setBadge1">4</span>
                <h5 class="text-dark mt-0"><router-link to="addProduct"> Product added</router-link></h5>
              </div>
              <div class="col-6">
                <span class="mb-1 badge badge-primary badge-pill setBadge1">13</span>
                <h5 class="text-dark mt-0">Product available</h5>
              </div>
            </div>
          </div>
          <!-- end card-box -->
        </div>
        <!-- end col -->

        <div class="col-12 col-md-6">
          <div class="card-dashboard bg-pattern">
            <div class="text-center">
              <div
                class="
                  widget-icon
                  avatar-lg
                  rounded-circle
                  bg-soft-warning
                  border-warning border
                "
              >
                <i
                  class="
                    mdi mdi-truck-delivery-outline
                    font-22
                    avatar-title
                    text-warning
                  "
                ></i>
              </div>
              <h4 class="mb-1 font-20">Dispatched</h4>
              <p class="text-muted font-14">Dispatched product notification</p>
            </div>

            <div class="row mt-2 text-center">
              <div class="col-4">
                <span class="mb-1 badge badge-warning badge-pill setBadge1">20</span>
                <h5 class="text-dark mt-0">Dispatched</h5>
              </div>
              <div class="col-4">
                <span class="mb-1 badge badge-primary badge-pill setBadge1">13</span>
                <h5 class="text-dark mt-0">Pending</h5>
              </div>
              <div class="col-4">
                <span class="mb-1 badge badge-danger badge-pill setBadge1">7</span>
                <h5 class="text-dark mt-0">Acknowledged</h5>
              </div>
            </div>
          </div>
          <!-- end card-box -->
        </div>
        <!-- end col -->
      </div>
      <!-- end row -->

      <div class="row">
        <div class="col-12 col-md-6">
          <div class="card-dashboard bg-pattern">
            <div class="text-center">
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
                    mdi mdi-map-marker-radius
                    font-28
                    avatar-title
                    text-primary
                    p-0
                  "
                ></i>
              </div>
              <h4 class="font-20">Track your Shipment</h4>
              <!-- <p class="text-muted font-14">Product added/available notification</p> -->
            </div>

            <div class="row mt-2 text-center">
              <div class="col-12">
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
          </div>
          <!-- end card-box -->
        </div>
        <!-- end col -->

        <div class="col-12 col-md-6">
          <div class="card-dashboard bg-pattern">
            <div class="text-center">
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
              </div>
              <h4 class="font-20">Books Stocks</h4>
              <!-- <p class="text-muted font-14">Dispatched material notification</p> -->
            </div>

            <div class="row mt-2 text-center">
              <div class="col-12">
                <h2 class="text-success mb-3 text-center">
                  Klic Books : 12,000
                </h2>
                <p class="text-muted mb-1 text-center">
                  Total dispatched: 1000
                  <!-- <span class="float-right text-muted"
                ><i class="mdi mdi-arrow-top-right text-success mr-1"></i
                >10.25%</span
              > -->
                </p>
              </div>
              <!-- <div class="col-4">
                   <p class="badge badge-primary badge-pill setBadge1">13</p>
                  <h5 class="text-dark mt-0">Pending</h5>
              </div>
               <div class="col-4">
                   <p class="badge badge-primary badge-pill setBadge1">7</p>
                  <h5 class="text-dark mt-0">Acknowledged</h5>
              </div> -->
            </div>
          </div>
          <!-- end card-box -->
        </div>
        <!-- end col -->
      </div>
      <!-- end row -->


      <div class="row">
        <!-- end col-->
        <div class="col-12 col-md-6 mb-3">
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
  font-size: 14px;
}
</style>