<template>
  <auth-layout>
    <div class="card-box">
      <h4 class="bg-light p-2 text-uppercase">Edit Vendor</h4>

      <!-- Parent Form -->
      <b-form @submit.prevent="edit">
        <div class="text-center form-step">
          <span v-for="(step, idx) in steps" :key="idx">
            <span
              role="button"
              @click="currentStep = idx"
              :class="{ 'text-primary': idx === currentStep }"
              >{{ step }}</span
            >
            <span v-if="idx !== steps.length - 1"> > </span>
          </span>
        </div>

        <!-- FORM 1 / Vendor Details -->
        <div :class="{ hidden: currentStep !== 0 }">
          <!-- Vendor Name -->
          <b-form-group label="Vendor Name: " label-for="vendor-name">
            <b-form-input
              id="vendor-name"
              type="text"
              placeholder="Vendor Name"
              v-model="data.vendorName"
              class="shadow-none"
            />
          </b-form-group>
          <!-- Company Type -->
          <b-form-group label="Company Type: " label-for="company-type">
            <b-form-select
              v-model="data.companyType"
              :options="companyTypeOptions"
            />
          </b-form-group>

          <!-- Pan Number -->
          <b-form-group label="Pan Number: " label-for="pan-number">
            <b-form-input
              id="pan-number"
              type="text"
              placeholder="PAN Number"
              v-model="data.panNumber"
              class="shadow-none"
            >
            </b-form-input>
          </b-form-group>

          <!-- Account Number -->
          <b-form-group label="Account Number: " label-for="account-number">
            <b-form-input
              id="account-number"
              type="text"
              placeholder="Account Number"
              v-model="data.accountNumber"
              class="shadow-none"
            />
          </b-form-group>

          <!-- Buttons -->
          <!-- <div class="d-flex my-2">
          <div class="flex-fill" />
          <b-button
            variant="primary"
            class="shadow-none width-sm"
            @click="nextStep"
            >Next</b-button
          >
        </div> -->

          <div class="d-flex justify-content-between my-2">
            <b-button
              variant="danger"
              class="shadow-none width-sm"
              @click="back"
              >Cancel</b-button
            >
            <b-button
              variant="primary"
              class="shadow-none width-sm"
              @click="nextStep"
              >Next <i class="mdi mdi-arrow-right-bold"></i
            ></b-button>
          </div>
        </div>

        <!-- FORM 2 / Contact Details -->
        <div :class="{ hidden: currentStep !== 1 }">
          <!-- Organisation Name -->
          <b-form-group label="Organisation Name" label-for="organisation-name">
            <b-form-input
              id="organisation-name"
              type="text"
              placeholder="Organisation Name"
              v-model="data.organisationName"
              class="shadow-none"
            />
          </b-form-group>

          <!-- Role -->
          <b-form-group label="Role" label-for="role">
            <b-form-select
              id="role"
              v-model="data.role"
              :options="roleOptions"
              class="shadow-none"
            />
          </b-form-group>

          <!-- Mobile Number -->
          <b-form-group label="Mobile Number: " label-for="mobile-number">
            <b-form-input
              id="mobile-number"
              type="number"
              v-model="data.organisationMobile"
              class="shadow-none"
            ></b-form-input>
          </b-form-group>

          <div class="d-flex justify-content-between my-2">
            <b-button
              variant="primary"
              class="shadow-none width-sm"
              @click="prevStep"
              ><i class="mdi mdi-arrow-left-bold"></i> Prev</b-button
            >
            <b-button
              variant="primary"
              class="shadow-none width-sm"
              @click="nextStep"
              >Next <i class="mdi mdi-arrow-right-bold"></i
            ></b-button>
          </div>
        </div>

        <!-- FORM 3 / Contact Details -->
        <div :class="{ hidden: currentStep !== 2 }">
          <b-form-group label="Address 1" label-for="address-one">
            <b-form-textarea
              id="address-one"
              v-model="data.addressOne"
              class="shadow-none"
            />
          </b-form-group>

          <b-form-group label="Address 2" label-for="address-two">
            <b-form-textarea
              id="address-two"
              v-model="data.addressTwo"
              class="shadow-none"
            />
          </b-form-group>

          <div class="row">
            <b-form-group
              class="col-12 col-md-6"
              label="State: "
              label-for="state"
            >
              <b-form-select
                id="state"
                v-model="data.state"
                :options="stateOptions"
                class="shadow-none"
              />
            </b-form-group>
            <b-form-group
              class="col-12 col-md-6"
              label="District: "
              label-for="district"
            >
              <b-form-select
                id="district"
                v-model="data.district"
                :options="districtOptions"
                class="shadow-none"
              />
            </b-form-group>
          </div>

          <b-form-group label="Pincode: " label-for="pincode">
            <b-form-input id="pincode" type="number" v-model="data.pincode" />
          </b-form-group>

          <div class="row">
            <b-form-group
              label="Telephone 1:"
              label-for="telephone-one"
              class="col-12 col-md-6"
            >
              <b-form-input
                id="telephone-one"
                type="number"
                v-model="data.telephoneOne"
                placeholder="STD - Phone Number"
              />
            </b-form-group>
            <b-form-group
              label="Telephone 2:"
              label-for="telephone-two"
              class="col-12 col-md-6"
            >
              <b-form-input
                id="telephone-two"
                type="number"
                v-model="data.telephoneTwo"
                placeholder="STD - Phone Number"
              />
            </b-form-group>
            <b-form-group
              label="Fax Number"
              label-for="fax-number"
              class="col-12 col-md-6"
            >
              <b-form-input
                id="fax-number"
                type="number"
                v-model="data.faxNumber"
                placeholder="Fax Number"
              />
            </b-form-group>
            <b-form-group
              label="Email"
              label-for="email"
              class="col-12 col-md-6"
            >
              <b-form-input
                type="email"
                v-model="data.email"
                placeholder="example@example.com"
                class="shadow-none"
              />
            </b-form-group>
          </div>

          <div class="d-flex my-2">
            <b-button
              variant="primary"
              class="shadow-none width-sm"
              @click="prevStep"
              ><i class="mdi mdi-arrow-left-bold"></i> Prev</b-button
            >
            <div class="flex-fill" />
            <b-button
              type="submit"
              variant="success"
              class="shadow-none width-sm"
              >Submit</b-button
            >
          </div>
        </div>
      </b-form>
    </div>
  </auth-layout>
</template>

<script>
import Vue from "vue";
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";
import AuthLayout from '../../layouts/auth-layout.vue';
// import  getters  from "../store/getters"
// import  mutations  from "../store/mutations"

Vue.prototype.steps = ["Vendor details", "Contact details", "Vendor contact"];


export default {
  name: "VendorEdit",
  components: {
    AuthLayout
  },
  data() {
    return {  
      currentStep: 0,
      data: null,
      companyTypeOptions: ["Industrial", "Technology", "Private"],
      roleOptions: ["ADMIN", "RM", "LLC", "ALC"],
      stateOptions: ["Maharashtra", "Goa", "Himachal Pradesh"],
      districtOptions: ["Nashik", "Pune", "Nagpur"],
    };
  },
  methods: {
    back(){
      this.$router.push("/vendors");
    },
    nextStep() {
      if (this.currentStep < 2) {
        this.currentStep += 1;
      }
    },
    prevStep() {
      if (this.currentStep > 0) {
        this.currentStep -= 1;
      }
    },
    edit() {
      console.log(this.data)
      this.editVendor({
        newVendor: {
          id: this.data.id,
          vendorName: this.data.vendorName,
          companyType: this.data.companyType,
          panNumber: this.data.panNumber,
          accountNumber: this.data.accountNumber,
          organisationName: this.data.organisationName,
          role: this.data.role,
          organisationMobile: this.data.organisationMobile,
          address1: this.data.address1,
          address2: this.data.address2,
          state: this.data.state,
          district: this.data.district,
          pincode: this.data.pincode,
          telephone1: this.data.telephone1,
          telephone2: this.data.telephone2,
          faxNumber: this.data.faxNumber,
          email: this.data.email,
        },
        id: this.$route.params.id
      });
      this.$router.push("/vendors");
    },
    ...mapMutations(["editVendor"]),
  },
  computed: {
    ...mapGetters(["getAllVendor"]),
    ...mapGetters(["getID"]),
  },
  mounted() {
    console.log(this.$route.params.id)
    this.data = { ...this.getAllVendor[parseInt(this.$route.params.id, 10)] };
    console.log(this.data)
  },
};
</script>

<style scoped>
.hidden {
  display: none;
}
.form-step {
  font-size: 1rem;
  font-weight: 600;
}
/* .mainform{
  width: 70%;
  margin: auto;
  padding: 2rem;
  border-radius: 0.4rem;
  background-color: white;
  box-shadow: 0px 0px 5px 1px rgba(143,143,143,0.89);
-webkit-box-shadow: 0px 0px 5px 1px rgba(143,143,143,0.89);
-moz-box-shadow: 0px 0px 5px 1px rgba(143,143,143,0.89);
} */
</style>