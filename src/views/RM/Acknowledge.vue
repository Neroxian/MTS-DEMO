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
          head-variant="light"
            borderless
            hover
          :items="items"
          :fields="fields"
          thead-class="thead"
          class=" text-center"
          bordered
        >
          <template #cell(Action)="" class="row">
            <b-button
              variant="primary"
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
        <div class="transport-detail mt-2">
          <h4 class="bg-light p-1">By Hand</h4>
          <b-form-group
            label="Feedback:"
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
  name: "AcknowledgeL",
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
          Material_Name: "Books",
          Dispatch_From: "LLC (Pune office)",
          Expected_date_of_delivery: "6-Nov-2021",
          Status: "Dispatched",
        },
        {
          Sr_no: 2,
          Material_Name: "Certificates",
          Dispatch_From: "LLC (Pune office)",
          Expected_date_of_delivery: "29-Oct-2021",
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
  width: 50%;
  margin: auto;
  padding: 1rem;
  text-align: center;
  border-radius: 0.4rem;
  border: 1px solid rgb(175, 175, 175);
}
</style>