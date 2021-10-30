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
        <div class="transport-detail mt-3 mb-3">
          <h4 class="mb-3">By Road</h4>
          <b-form-group
            label="Feedback: "
            label-cols-sm="2"
            label-cols-lg="2"
            label-cols-md="2"
            content-cols-sm
            content-cols-lg="10"
          >
            <b-form-textarea
              id="contact"
              type="textarea"
              rows="2"
            ></b-form-textarea>
          </b-form-group>
          <div class="text-center">
            <button class="btn width-sm btn-success">Send</button>
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
        "Material_Name",
        "Dispatch_From",
        "Expected_date_of_delivery",
        "Status",
        "Action",
      ],
      items: [
        {
          Sr_no: 1,
          Material_Name: "Biometric Devices",
          Dispatch_From: "RM (Pune)",
          Expected_date_of_delivery: "4-March-2021",
          Status: "Dispatched",
        },
        {
          Sr_no: 2,
          Material_Name: "Books",
          Dispatch_From: "RM (Pune)",
          Expected_date_of_delivery: "6-June-2021",
          Status: "Dispatched",
        },
        {
          Sr_no: 3,
          Material_Name: "Certificates",
          Dispatch_From: "RM (Pune)",
          Expected_date_of_delivery: "10-Oct-2021",
          Status: "Dispatched",
        },
        {
          Sr_no: 4,
          Material_Name: "Books",
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
.transport-detail {
  width: 60%;
  margin: auto;
  padding: 2rem;
  text-align: center;
  border-radius: 0.4rem;
  /* border: 1px solid rgb(175, 175, 175); */
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}
</style>