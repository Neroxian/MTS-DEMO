<template>
  <auth-layout>
    <h3 class="p-1">Tracking</h3>
  <div class="row">
    <div class="col col-lg-6 col-md-6 col-sm-12">
      <div class="card-box">
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
                      <div class="text-center  mt-2">
            <a href="#" class="btn btn-primary width-sm">Track</a>
          </div>
      </div>

      <div class="card-box mt-3">
         <h4 class="font-weight-bold mb-2">Delivery Info</h4>
            
                                        <div class="text-center">
                                            <i class="mdi mdi-truck-fast h2 text-muted"></i>
                                            <h5><b>By Road Delivery</b></h5>
                                            <p class="mb-1"><span class="font-weight-semibold">Order ID :</span> xxxx235</p>
                                            <p class="mb-1"><span class="font-weight-semibold">Driver Name :</span> Ramesh</p>
                                            <p class="mb-0"><span class="font-weight-semibold">Contact No :</span> 7894651324</p>
                                        </div>
      </div>

    </div>
    <div class="col col-lg-6 col-md-6 col-sm-12">
    <div class="card">
      <div class="card-box">
        <h4 class="font-weight-bold mb-3">Track Material</h4>

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

        <div class="track-order-list">
          <ul class="list-unstyled">
            
            <li class="completed">
              <h5 class="mt-0 mb-1">RM (Pune)</h5>
              <p class="text-muted">
                Dispatched on October 22 2021 <small class="text-muted">12:16 AM</small>
              </p>
            </li>
            <li>
              <span class="active-dot dot"></span>
              <h5 class="mt-0 mb-1">LLC  (Solapur)</h5>
              <p class="text-muted">
                Pending at Solapur <small class="text-muted">05:16 PM</small>
              </p>
            </li>
            <li>
              <h5 class="mt-0 mb-1">ALC (Nashik)</h5>
              <p class="text-muted">Pending yet to come</p>
            </li>
          </ul>

          
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
  data(){
    return{
      track:""
    }
  }
};
</script>

<style scoped>
</style>