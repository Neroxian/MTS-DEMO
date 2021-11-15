<template>
  <auth-layout>
    <div class="main">
      <h3 class="px-1 py-2 font-weight-bold">
          Acknowledge 
        </h3>
      <div class="card-box">
        <h4 class="mb-2">
          Acknowledge Material
        </h4>
        <b-table
          :items="items"
          :fields="fields"
          borderless
          hover
          head-variant="light"

          thead-class="thead"
          class=" text-center"
          bordered
        >
          <template #cell(Action)="" class="row">
            <b-button
              variant="blue"
              class="shadow-none btn-sm width-sm"
              @click="toggleShow"
            >
              Details
            </b-button>
          </template>
        </b-table>
      </div>

      <div v-if="show" class="card-box mt-4">
        <h4 class="mb-2">
          Transport Details
        </h4>
        <div class=" mt-3 mb-3">
          <b-form-group
            label="Feedback: (By Road) "
          
          >
            <b-form-textarea
              id="contact"
              type="textarea"
              rows="2"
            ></b-form-textarea>
          </b-form-group>
          <div class="text-center">
            <button class="btn width-sm btn-success">Acknowledge</button>
          </div>
        </div>
      </div>
    </div>
  </auth-layout>
</template>

<script>
import AuthLayout from "@/layouts/auth-layout"

export default {
  name: "Acknowledgement",
  components: {
    AuthLayout
  },
  data() {
    return {
      show: false,
      idx: 0,
      fields: [
        "Sr_no",
        "Product_Name",
        "Dispatch_From",
        "Expected_date_of_delivery",
        "Status",
        "Action",
      ],
      items: [
        {
          Sr_no: 1,
          Product_Name: "Biometric Devices",
          Dispatch_From: "RM (Pune)",
          Expected_date_of_delivery: "4-March-2021",
          Status: "Dispatched",
        },
        {
          Sr_no: 2,
          Product_Name: "Books",
          Dispatch_From: "RM (Pune)",
          Expected_date_of_delivery: "6-June-2021",
          Status: "Dispatched",
        },
        {
          Sr_no: 3,
          Product_Name: "Certificates",
          Dispatch_From: "RM (Pune)",
          Expected_date_of_delivery: "10-Oct-2021",
          Status: "Dispatched",
        },
        {
          Sr_no: 4,
          Product_Name: "Books",
          Dispatch_From: "RM (Buldhana)",
          Expected_date_of_delivery: "11-Nov-2021",
          Status: "Dispatched",
        },
      ],
    };
  },
  methods:{
      toggleShow(){
          this.show = !this.show
      }
  }
};
</script>

<style scoped>

.main {
  padding: 0 12px;
}
</style>