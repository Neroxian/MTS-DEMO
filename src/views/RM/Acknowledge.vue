<template>
  <div class="main card-box">
    <h3 class="text-start text-uppercase p-2 bg-light my-2">Received Material from Vendor</h3>
    <b-table
      hover
      :items="items"
      :fields="fields"
      thead-class="thead"
      class="border"
    ></b-table>
  </div>
</template>

<script>
export default {
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
.thead {
  background-color: rgb(2, 117, 216);
  color: white;
}
h2{
  font-weight: 600;
}
.main{
  padding: 0 12px;
}
</style>