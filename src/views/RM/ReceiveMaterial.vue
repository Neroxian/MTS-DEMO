<template>
  <auth-layout>
    <div class="main-div">
      <h3 class="px-1 py-2 font-weight-bold">Received Product</h3>

      <div class="mb-4" v-if="show">
        <div class="card-box">
          <h4 class="mb-2">Add Received Product Details</h4>

          <form @submit.prevent="add">
            <div class="row">
              <div class="col-6 align-items-center">
                <b-form-group
                  id="input-group-6"
                  label="Vendor name:"
                  label-for="input-6"
                >
                  <b-form-input
                    id="input-6"
                    v-model="vendorName"
                  ></b-form-input>
                </b-form-group>
              </div>

              <div class="col-6 align-items-center">
                <b-form-group
                  id="input-group-6"
                  label="Product :"
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

            <div class="text-center mt-2">
              <button type="submit" class="btn width-sm btn-success">
                <i class="mdi mdi-plus-thick"></i>Add
              </button>
            </div>
          </form>
        </div>
      </div>

      <div class="card-box">
        <div class="row mb-2">
          <h4 class="col-6">Received Product from Vendor</h4>
          <div class="col-6 text-right">
            <button @click="showForm" class="btn width-sm btn-success">
              Add Entry
            </button>
          </div>
        </div>

        <!-- NEW TABLE -->

        <div class="form-group">
          <b-form-group label="Sort by :" v-if="isSmall">
            <b-form-select v-model="defaultKey" style="width: 100%">
              <option v-for="(key, idx) in fields" :key="idx" :value="key">
                {{ key }}
              </option>
            </b-form-select>
          </b-form-group>
        </div>

        <b-table
          id="dataTable"
          responsive="md"
          stacked="sm"
          :striped="isSmall"
          head-variant="light"
            fixed="fixed"
          borderless
          hover
          :items="items"
          :fields="copy"
          thead-tr-class="text-center"
          :tbody-tr-class="isSmall ? '' : 'text-center'"
        >
          <template v-slot:[`cell(${defaultKey})`]="row">
            <div
              class="d-flex justify-content-between justify-content-sm-center"
            >
              <div>{{ row.item[defaultKey] }}</div>
              <b-button
                style="margin: 0% 5%"
                class="btn btn-xs"
                v-if="isSmall"
                @click="row.toggleDetails"
                ><i class="mdi mdi-plus"> </i
                >{{ row.detailsShowing ? "Hide" : "Show" }}
              </b-button>
            </div>
          </template>

          <template #row-details="row" v-if="isSmall">
            <b-card class="text-left p-0">
              <template
                v-for="(field, idx) in fields.filter(
                  (f) => f !== defaultKey && f !== 'actions'
                )"
              >
                <div :key="idx">
                  <span class="font-weight-bold">{{ field }}:</span>
                  {{ row.item[field] }}
                </div>
              </template>
              <template>
                <div class="d-flex justify-content-center">
                  <button class="btn btn-xs btn-success mx-1">
                    <i class="mdi mdi-plus"></i>
                  </button>
                  <button class="btn btn-xs btn-danger">
                    <i class="mdi mdi-minus"></i>
                  </button>
                </div>
              </template>
            </b-card>
          </template>

          <!-- Actions -->
          <template #cell(actions) v-if="!isSmall">
            <button class="btn btn-primary btn-sm width-xs my-1 mx-1">
              Edit
            </button>
            <button class="btn btn-danger btn-sm width-xs">Delete</button>
          </template>
        </b-table>
        <!--  TABLE ENDS -->

        <!-- OLD TABLE -->

        <!-- <table class="table table-bordered mb-2">
          <thead class="">
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
        </table> -->

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
    </div>
  </auth-layout>
</template>

<style scoped>
.back {
  width: 13rem;
}
.b-table-details td {
  padding: 0;
}
tr {
  border: none !important;
}
td {
  padding: 0.4rem !important;
  border: none !important;
}

@media (max-width: 700px) {
  .card-box {
    width: 100%;
  }
}
@media (max-width: 575.98px) {
  .card-box {
    width: 100%;
  }
  #dataTable td::before {
    /* width: 30% !important; */
    text-align: left !important;
    padding-left: 1.5rem;
  }
  div .card-body {
    padding: 0.2rem 2rem !important;
    /* margin-top: -8px !important; */
  }
  .card {
    margin-bottom: 0px !important;
  }
}
.hide {
  display: none;
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
      size: window.innerWidth,
      defaultKey: "product",
      fields: [
        "srNo",
        "product",
        "Details",
        "vendor",
        "received_on",
        "quantity",
      ],
      items: [
        {
          srNo: 1,
          product: "Books",
          Details: "Academics",
          vendor: "Jhon",
          received_on: "25 Oct 2021",
          quantity: 100,
        },
        {
          srNo: 3,
          product: "Certificates",
          Details: "Academics",
          vendor: "Jhon",
          received_on: "25 Oct 2021",
          quantity: 100,
        },
      ],
      // NEW TABLE ENDS

      show: false,
      vendorName: "",
      product: "",
      Details: "",
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
        product: this.product,
        Details: this.Details,
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
    handleDropDownChange(e) {
      console.log(e)
    },
    ...mapMutations(["addReceiveMaterial"]),
  },
  computed: {
    ...mapGetters(["getReceiveMaterial"]),
    copy() {
      if (this.isSmall) {
        const idx = this.fields.findIndex((f) => f === this.defaultKey);
        if (idx !== -1) {
          let copy = [];
          copy.push(this.fields[idx]);
          return copy;
        }
      }
      return this.fields;
    },
    isSmall() {
      return this.size < 576;
    },
  },
  // NEW TABLE
  mounted() {
    window.addEventListener(
      "resize",
      () => {
        this.size = window.innerWidth;
      },
      true
    );
  },
  // TABLE ENDS
};
</script>