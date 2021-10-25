<template>
  <auth-layout>
<<<<<<< HEAD
    <div class="card-box">
    <h4 class="bg-light text-uppercase p-2 ">Add Vendor</h4>

    <!-- Parent Form -->
    <b-form @submit.prevent="add">
      <div class="text-center form-step">
        <span v-for="(step, idx) in steps" :key="idx">
          <span role="button" @click="currentStep = idx" class="width-sm" :class="{ 'text-primary': idx === currentStep }">{{ step }}</span>
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
            v-model="vendorName"
            class="shadow-none"
          />
        </b-form-group>
        <!-- Company Type -->
        <b-form-group label="Company Type: " label-for="company-type">
          <b-form-select v-model="companyType" :options="companyTypeOptions" />
        </b-form-group>
=======
    <h3 class="px-1">Add Vendor</h3>
>>>>>>> 3eb9fcd71c79a9aa9c2d2d828988be25656dd259

    <div class="card-box">
      <!-- Parent Form -->
      <b-form @submit.prevent="add">
        <div class="text-center form-step">
          <span v-for="(step, idx) in steps" :key="idx">
            <span
              role="button"
              @click="currentStep = idx"
              class="width-sm"
              :class="{ 'text-success': idx === currentStep }"
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
              placeholder=""
              v-model="vendorName"
              class="shadow-none"
            />
          </b-form-group>
          <!-- Company Type -->
          <b-form-group label="Company Type: " label-for="company-type">
            <b-form-select
              v-model="companyType"
              :options="companyTypeOptions"
            />
          </b-form-group>

          <!-- Buttons -->
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
              placeholder=""
              v-model="organisationName"
              class="shadow-none"
            />
          </b-form-group>

          <!-- Role -->
          <b-form-group label="Role" label-for="role">
            <b-form-select
              id="role"
              v-model="role"
              :options="roleOptions"
              class="shadow-none"
            />
          </b-form-group>

          <!-- Mobile Number -->
          <b-form-group label="Mobile Number: " label-for="mobile-number">
            <b-form-input
              id="mobile-number"
              type="number"
              v-model="organisationMobile"
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
              v-model="addressOne"
              class="shadow-none"
            />
          </b-form-group>

          <div class="row">
            <b-form-group
              class="col-12 col-md-4"
              label="State: "
              label-for="state"
            >
              <b-form-select
                id="state"
                v-model="state"
                :options="stateOptions"
                class="shadow-none"
              />
            </b-form-group>

            <b-form-group
              class="col-12 col-md-4"
              label="District: "
              label-for="district"
            >
              <b-form-select
                id="district"
                v-model="district"
                :options="districtOptions"
                class="shadow-none"
              />
            </b-form-group>

            <b-form-group
              label="Pincode: "
              class="col-12 col-md-4"
              label-for="pincode"
            >
              <b-form-input id="pincode" type="number" v-model="pincode" />
            </b-form-group>
          </div>

          <div class="row">
            <b-form-group
              label="Telephone 1:"
              label-for="telephone-one"
              class="col-12 col-md-6"
            >
              <b-form-input
                id="telephone-one"
                type="number"
                v-model="telephoneOne"
                placeholder=""
              />
            </b-form-group>

            <b-form-group
              label="Email"
              label-for="email"
              class="col-12 col-md-6"
            >
              <b-form-input
                type="email"
                v-model="email"
                placeholder=""
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
              variant="success width-sm"
              class="shadow-none"
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
import { mapGetters, mapMutations } from "vuex";
import AuthLayout from "@/layouts/auth-layout";

Vue.prototype.steps = ["Vendor details", "Contact details", "Vendor contact"];

export default {
  name: "AddVendor",
  components: {
    AuthLayout,
  },
  data() {
    return {
      currentStep: 0,
      vendorName: "",
      companyType: null,
      panNumber: "",
      accountNumber: "",
      organisationName: "",
      role: null,
      organisationMobile: "",
      addressOne: "",
      addressTwo: "",
      state: "",
      district: "",
      pincode: "",
      telephoneOne: "",
      telephoneTwo: "",
      faxNumber: "",
      email: "",
      companyTypeOptions: ["Industrial", "Technology", "Private"],
      roleOptions: ["Admin", "User", "Learner"],
      stateOptions: ["Maharashtra", "Goa", "Himachal Pradesh"],
      districtOptions: ["Nashik", "Pune", "Nagpur"],
    };
  },
  methods: {
    back() {
      this.$router.push("/vendors");
    },
    nextStep() {
      if (this.currentStep < this.steps.length - 1) {
        this.currentStep += 1;
      }
    },
    prevStep() {
      if (this.currentStep > 0) {
        this.currentStep -= 1;
      }
    },
    add() {
      this.addVendor({
        id: this.getID,
        vendorName: this.vendorName,
        companyType: this.companyType,
        organisationName: this.organisationName,
        role: this.role,
        organisationMobile: this.organisationMobile,
        address1: this.address1,
        state: this.state,
        district: this.district,
        pincode: this.pincode,
        telephone1: this.telephone1,
        email: this.email,
      });
      this.$router.push("/vendors");
    },
    ...mapMutations(["addVendor"]),
  },
  computed: {
    ...mapGetters(["getAllVendor"]),
    ...mapGetters(["getID"]),
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
  background-color: white;
  padding: 2rem;
  border-radius: 0.4rem;
  box-shadow: 0px 0px 5px 1px rgba(143,143,143,0.89);
-webkit-box-shadow: 0px 0px 5px 1px rgba(143,143,143,0.89);
-moz-box-shadow: 0px 0px 5px 1px rgba(143,143,143,0.89);
} */
</style>