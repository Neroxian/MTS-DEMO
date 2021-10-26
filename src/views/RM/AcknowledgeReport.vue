<template>
  <auth-layout>
    <h3 class="px-1 ">
        Acknowledged Material
      </h3>
    <div class="main card-box">
      <b-table
        bordered
        :items="items"
        :fields="fields"
        thead-class="thead"
        class=" table-striped"
      ></b-table>
    </div>
  </auth-layout>
</template>

<script>
import AuthLayout from "@/layouts/auth-layout";
export default {
  components: {
    AuthLayout,
  },
  data() {
    return {
      idx: 0,
      fields: [
        "no",
        "material",
        "dispatched",
        "date",
        "status",
        "acknowledge",
        "notAcknowledge",
      ],
      items: [
        {
          no: 1,
          material: "Biometric Devices",
          dispatched: "2",
          date: "4-March-2021",
          status: "Done",
          acknowledge: "2",
          notAcknowledge: "0",
        },
        {
          no: 2,
          material: "Books",
          dispatched: "21",
          date: "6-June-2021",
          status: "Not  Done",
          acknowledge: "0",
          notAcknowledge: "22",
        },
        {
          no: 3,
          material: "Certificates",
          dispatched: "44",
          date: "10-Oct-2021",
          status: "Done",
          acknowledge: "3",
          notAcknowledge: "0",
        },
        {
          no: 4,
          material: "Books",
          dispatched: "543",
          date: "11-Nov-2021",
          status: "Not Done",
          acknowledge: "0",
          notAcknowledge: "10",
        },
      ],
    };
  },
};
</script>

<style scoped>

h2 {
  font-weight: 600;
}
.main {
  padding: 0 12px;
}
</style>