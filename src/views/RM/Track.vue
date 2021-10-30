<template>
  <auth-layout>
    <h3 class="py-2 font-weight-bold px-1">Tracking</h3>
    <div class="row">
      <div class="col col-lg-6 col-md-6 col-sm-6 col-12">
        <div class="card-box mb-3">
          <b-form-group
            id="input-group-1"
            label="Enter Tracking ID:"
            label-for="input-1"
            class="header-title"
          >
            <b-form-input
              id="input-1"
              v-model="track"
              type="text"
            ></b-form-input>
          </b-form-group>
          <div class="text-center mt-2">
            <a href="#" class="btn btn-primary width-sm">Track</a>
          </div>
        </div>

        <div class="card-box mb-3">
          <h4 class="mb-2">Delivery Info</h4>

          <div class="text-center">
            <i class="mdi mdi-truck-fast h2 text-muted"></i>
            <h5><b>By Road Delivery</b></h5>
            <p class="mb-1">
              <span class="font-weight-semibold">Order ID :</span> xxxx235
            </p>
            <p class="mb-1">
              <span class="font-weight-semibold">Driver Name :</span> Ramesh
            </p>
            <p class="mb-0">
              <span class="font-weight-semibold">Contact No :</span> 7894651324
            </p>
          </div>
        </div>
      </div>
      <div class="col col-lg-6 col-md-6 col-sm-6 col-12">
        <div class="card">
          <div class="card-box">
            <h4 class=" mb-3">Track Material</h4>

            <div class="row">
              <div class="col-lg-6">
                <div class="mb-4">
                  <h5 class="mt-0">Order ID:</h5>
                  <p>#VL2537</p>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="mb-4">
                  <h5 class="mt-0">Tracking ID:</h5>
                  <p>894152012012</p>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-6">
                <ul class="list-unstyled">
                  <li style="visibility: hidden">
                    <h5 class="mt-0 mb-1 font-weight-bold">RM (Pune)</h5>
                    <p class="text-muted">
                      Dispatched on October 22 2021
                      <small class="text-muted">12:16 AM</small>
                    </p>
                  </li>
                  <li class="text-right">
                    <span class=""></span>
                    <h5 class="mt-4 mb-1 font-weight-bold">
                      LLC (Pune Office)
                    </h5>
                    <p class="text-muted">Pending at Pune Office</p>
                  </li>
                  <li style="visibility: hidden">
                    <h5 class="mt-3 mb-1 font-weight-bold">
                      ALC (Computer center)
                    </h5>
                    <p class="text-muted">Pending (Yet to come).</p>
                  </li>
                </ul>
              </div>

              <div class="track-order-list col-6">
                <ul class="list-unstyled">
                  <li class="completed">
                    <h5 class="mt-0 mb-1 font-weight-bold">RM (Pune)</h5>
                    <p class="text-muted">
                      Dispatched on October 22 2021
                      <small class="text-muted">12:16 AM</small>
                    </p>
                  </li>
                  <li>
                    <span class="active-dot dot"></span>
                    <div style="visibility: hidden">
                      <h5 class="mt-0 mb-1 font-weight-bold">
                        LLC (Pune Office)
                      </h5>
                      <p class="text-muted">Pending at Pune Office</p>
                    </div>
                  </li>
                  <li>
                    <h5 class="mt-0 mb-1 font-weight-bold">
                      ALC (Computer center)
                    </h5>
                    <p class="text-muted">Pending (Yet to come).</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </auth-layout>
</template>

<script>
import authLayout from "../../layouts/auth-layout.vue";

export default {
  components: { authLayout },
  name: "Track",
  data() {
    return {
      track: "",
    };
  },
};
</script>

<style scoped>
</style>