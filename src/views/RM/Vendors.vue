<template>
  <auth-layout>
    <div>
      <h3 class="px-1 font-weight-bold">Vendor</h3>
      <div class="main card-box">
        <div class="row d-flex justify-content-end mt-2">
          <div class="col-6 d-flex align-items-center">
            <label for="vendor-filter" class="mr-2 my-0">Search: </label>
            <b-form-input
              id="vendor-filter"
              type="text"
              class="w-100 shadow-none"
              v-model="filterN"
            />
          </div>
          <div class="col-6 text-right">
            <b-button
              variant="success"
              to="/add-vendor"
              class="shadow-none width-sm mx-2"
              @click.prevent="toggleAdd"
              >Add Vendor</b-button
            >
          </div>
        </div>
        <!-- NEW TABLE -->
        <div class="my-2">
          <select v-model="defaultKey" v-if="isSmall">
            <option v-for="(key, idx) in fields" :key="idx" :value="key">
              {{ key }}
            </option>
          </select>
          <b-table
            id="dataTable"
            responsive
            stacked="sm"
            :striped="isSmall"
            head-variant="light"
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
                  <div class="d-flex justify-content-start">
                    <button class="btn btn-xs btn-light mx-1">
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
            <template #cell(actions)="row" v-if="!isSmall">
              <!-- <button class="btn btn-sm width-sm btn-light mx-1"><i class="mdi mdi-plus"></i>Edit</button> -->

              <router-link
                :to="`/vendorEdit/${row.item.id - 1}`"
                class="btn btn-sm width-xs btn-primary my-1 mx-1"
                >Edit</router-link
              >
              <b-button
                class="btn btn-sm width-xs btn-primary"
                variant="danger"
                @click.prevent="del(id)"
                >Delete</b-button
              >
            </template>
          </b-table>
          <!--  TABLE ENDS -->
        </div>

        <!-- OLD TABLE -->

        <!-- <div class="my-2">
          <b-table
            bordered
            :items="filteredVendors"
            :fields="fields"
            responsive
          >
            <template #cell(actions)="row">
              <div>
                <router-link
                  :to="`/vendorEdit/${row.item.id - 1}`"
                  class="btn width-sm btn-primary my-1"
                  >Edit</router-link
                >
              </div>
              <div>
                <b-button
                  class="width-sm my-1"
                  variant="danger"
                  @click.prevent="del(id)"
                  >Delete</b-button
                >
              </div>
            </template>
          </b-table>
        </div> -->
      </div>
    </div>
  </auth-layout>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import authLayout from "../../layouts/auth-layout.vue";

export default {
  components: { authLayout },
  name: "Vendors",
  data() {
    return {
      // NEW TABLE
      size: window.innerWidth,
      defaultKey: "vendorName",
      fields: [
        { key: "id", label: "Vendor ID" },
        "vendorName",
        "companyType",
        "organisationName",
        "organisationMobile",
        "state",
        "district",
        "telephone1",
        "telephone2",
        "faxNumber",
        "email",
        "Actions",
      ],
      items: [
        {
          id: 1,
          vendorName: "Suresh",
          companyType: "Pvt Ltd.",
          organisationName: "MKCL",
          organisationMobile: "9876543210",
          address1: "PQR Park",
          // address2: "",
          state: "Maharashtra",
          district: "Pune",
          telephone1: "1234567890",
          telephone2: "0987654321",
          faxNumber: "9283746501",
          email: "vendor@vendor.com",
        },
        {
          id: 2,
          vendorName: "Virat",
          companyType: "ORG",
          organisationName: "MKCL",
          organisationMobile: "9876543210",
          address1: "PQR Park",
          // address2: "",
          state: "Maharashtra",
          district: "Pune",
          telephone1: "1234567890",
          telephone2: "0987654321",
          faxNumber: "9283746501",
          email: "vendor@vendor.com",
        },
      ],
      // NEW TABLE ENDS

      showAdd: false,
      showEdit: false,
      filterN: "",
      filteredVendors: [],
      vendorDetails: [
        {
          id: 1,
          vendorName: "XYZ",
          companyType: "ORG",
          organisationName: "MKCL",
          organisationMobile: "9876543210",
          address1: "PQR Park",
          // address2: "",
          state: "Maharashtra",
          district: "Pune",
          telephone1: "1234567890",
          telephone2: "0987654321",
          faxNumber: "9283746501",
          email: "vendor@vendor.com",
        },
      ],
      // fields: [
      //   { key: "id", label: "Vendor ID" },
      //   { key: "vendorName", label: "Vendor Name" },
      //   { key: "companyType", label: "Company Type" },
      //   { key: "organisationName", label: "Organisation Type" },
      //   { key: "organisationMobile", label: "Organisation Mobile" },
      //   { key: "address1", label: "Address" },
      //   { key: "state", label: "State" },
      //   { key: "district", label: "District" },
      //   { key: "telephone1", label: "Telephone" },
      //   { key: "email", label: "Vendor Email" },
      //   { key: "actions", label: "Actions" },
      // ],
    };
  },
  mounted() {
    this.filteredVendors = this.getAllVendor;
    console.log(this.filteredVendors);
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
  methods: {
    toggleAdd() {
      this.showAdd = !this.showAdd;
    },
    toggleEdit() {
      this.showEdit = !this.showEdit;
    },
    del(id) {
      this.deleteVendor(id);
      alert("Vendor Deleted!");
    },
    ...mapMutations(["deleteVendor"]),
  },
  computed: {
    ...mapGetters(["getAllVendor"]),
    filterName() {
      if (!this.filterN || !this.filterN.trim()) {
        this.filteredVendors = this.getAllVendor;
        return;
      }
      return (this.filteredVendors = this.getAllVendor.filter((vendor) => {
        if (
          vendor.vendorName
            .toLowerCase()
            .match(this.filterN.trim().toLowerCase())
        ) {
          return true;
        }
        return false;
      }));
    },

    // NEW TABLE
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
};
</script>
<style scoped>
.main {
  padding: 0 12px;
}
</style>