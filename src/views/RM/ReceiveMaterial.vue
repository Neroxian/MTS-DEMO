<template>
  <auth-layout>
    <div class="main-div">
      <div class="card-box">
        <div class="row">
          <div class="col-12">
            <h3 class="text-start text-uppercase p-2 bg-light">
              Received Material from Vendor
            </h3>
            <!-- <div class="text-right mb-1"></div> -->
          </div>
        </div>
        <!-- {{getReceiveMaterial}} -->
        <table class="table table-hover mb-2">
          <thead class="table-dark">
            <tr>
              <th scope="col">Sr no</th>
              <th scope="col">Material</th>
              <th scope="col">Category</th>
              <th scope="col">Vendor</th>
              <th scope="col">Received on</th>
              <th scope="col">Quantity</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(vendor, idx) in getReceiveMaterial" :key="idx">
              <td>{{ idx + 1 }}</td>
              <td>{{ vendor.material }}</td>
              <td>{{ vendor.category }}</td>
              <td>{{ vendor.vendorName }}</td>
              <td>{{ vendor.doReceipt }}</td>
              <td>{{ vendor.quantity }}</td>
            </tr>
          </tbody>
        </table>
        <div class="text-right">
          <button @click="showForm" class="btn width-sm btn-success">
            Add Entry
          </button>
        </div>

        <!-- <b-table
            class="m-0"
            id="my-table"
            :items="items"
            :per-page="perPage"
            :current-page="currentPage"
            thead-class="thead"
            small bordered hover
            ></b-table>
            
            <b-pagination
            class="paginationStyle"
            align="center"
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            aria-controls="my-table"
            ></b-pagination> -->
      </div>

      <div class="card-box mt-4" v-if="show">
        <h2 class="text-center p-2 bg-light">Add Received Material Details</h2>
        <form @submit.prevent="add">
          <div class="row">
            <div class="col-6 align-items-center">
              <b-form-group
                id="input-group-6"
                label="Vendor :"
                label-for="input-6"
              >
                <b-form-select
                  id="input-6"
                  v-model="vendorName"
                  :options="['Ramesh', 'Suresh', 'Rahul', 'Chirag']"
                ></b-form-select>
              </b-form-group>
            </div>

            <div class="col-6 align-items-center">
              <b-form-group
                id="input-group-6"
                label="Material :"
                label-for="input-6"
              >
                <b-form-select
                  id="input-6"
                  v-model="material"
                  :options="['KYP Books', 'MSCIT Certificate', 'Pamplets']"
                ></b-form-select>
              </b-form-group>
            </div>
          </div>

          <div class="row">
            <div class="col-6 align-items-center">
              <b-form-group
                id="input-group-6"
                label="Category :"
                label-for="input-6"
              >
                <b-form-select
                  id="input-6"
                  v-model="category"
                  :options="['Academic', 'Marketing Mateerial']"
                ></b-form-select>
              </b-form-group>
            </div>

            <div class="col-6 align-items-center">
              <b-form-group
                id="input-group-8"
                label="Date of Receipt :"
                label-for="input-8"
              >
                <b-form-datepicker
                  id="input-8"
                  v-model="doReceipt"
                ></b-form-datepicker>
              </b-form-group>
            </div>
          </div>

          <div class="row">
            <div class="col-6 align-items-center">
              <b-form-group
                id="input-group-1"
                label="Quantity Received :"
                label-for="input-1"
              >
                <b-form-input
                  id="input-1"
                  v-model="quantity"
                  type="text"
                ></b-form-input>
              </b-form-group>
            </div>

            <!-- <div class="col-6 align-items-center">
                        <div class="col-auto">
                            <label class="form-label">PO Date. :</label>
                        </div>
                        <div class="mb-3 col-auto">
                            <input type="date" v-model="vendorName" class="form-control">
                        </div>
                    </div> -->
          </div>
          <div class="text-center mt-2">
            <button type="submit" class="btn width-sm btn-success">Add</button>
          </div>
        </form>
      </div>
    </div>
  </auth-layout>
</template>

<style scoped>
th,
td {
  font-weight: 500;
  border: 0.001rem solid rgb(138, 138, 138);
}
label {
  margin-bottom: 0;
}
h2,
h5 {
  font-weight: 600;
  /* text-align: center; */
}
.entry-form {
  margin: auto;
  width: 80%;
  padding: 2.5rem;
  border-radius: 0.5rem;
  border: 1px solid rgb(175, 175, 175);

  /* background-color: rgba(236, 236, 236, 0.836); */
}
.hide {
  display: none;
}
.form-control:focus,
.form-select:focus,
button:focus,
button:active {
  box-shadow: none;
}
</style>

<script>
import { mapMutations, mapGetters } from "vuex";
import authLayout from "../../layouts/auth-layout.vue";
// import  getters  from "../store/getters"
// import  mutations  from "../store/mutations"

export default {
  components: { authLayout },
  name: "ReceiveMaterialHome",
  data() {
    return {
      show: false,
      vendorName: "",
      material: "",
      category: "",
      doReceipt: "",
      quantity: "",
    };
  },
  methods: {
    showForm() {
      this.show = !this.show;
    },
    add() {
      this.addReceiveMaterial({
        vendorName: this.vendorName,
        material: this.material,
        category: this.category,
        subCategory: this.subCategory,
        PoNo: this.PoNo,
        PoDate: this.PoDate,
        challanNo: this.challanNo,
        doReceipt: this.doReceipt,
        quantity: this.quantity,
        bSeries: this.bSeries,
        pSeries: this.pSeries,
        lSeries: this.lSeries,
      });
      alert("Added Materials into list"), this.showForm();
    },
    ...mapMutations(["addReceiveMaterial"]),
  },
  computed: {
    ...mapGetters(["getReceiveMaterial"]),
  },
};
</script>