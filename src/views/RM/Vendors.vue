<template>
  <auth-layout>
    <div>
      <div class="main card-box">
        <div>
          <h4 class="text-uppercase bg-light p-2">All Vendor</h4>
        </div>
        <div class="row d-flex justify-content-end mt-2">
          <div class="col-6 d-flex align-items-center">
            <label for="vendor-filter" class="mr-2 my-0">Search: </label>
            <b-form-input
              id="vendor-filter"
              type="text"
              class="w-100 shadow-none"
              placeholder="Search any vendor"
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
        <div class="my-2">
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
        </div>
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
      showAdd: false,
      showEdit: false,
      filteredVendors: [],
      vendorDetails: [
        {
          id: 101,
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
      fields: [
        { key: "id", label: "Vendor ID" },
        { key: "vendorName", label: "Vendor Name" },
        { key: "companyType", label: "Company Type" },
        { key: "organisationName", label: "Organisation Type" },
        { key: "organisationMobile", label: "Organisation Mobile" },
        { key: "address1", label: "Address" },
        // { key: "address2", label: "Address 2" },
        { key: "state", label: "State" },
        { key: "district", label: "District" },
        { key: "telephone1", label: "Telephone One" },
        { key: "telephone2", label: "Telephone Two" },
        { key: "faxNumber", label: "Fax Number" },
        { key: "email", label: "Vendor Email" },
        { key: "actions", label: "Actions" },
      ],
    };
  },
  mounted() {
    this.filteredVendors = this.getAllVendor;
    // console.log(this.filteredVendors)
  },
  methods: {
    toggleAdd() {
      this.showAdd = !this.showAdd;
    },
    toggleEdit() {
      this.showEdit = !this.showEdit;
    },
    filterName(e) {
      if (!e.target.value || !e.target.value.trim()) {
        this.filteredVendors = this.getAllVendor;
        return;
      }
      this.filteredVendors = this.getAllVendor.filter((vendor) => {
        if (
          vendor.vendorName
            .toLowerCase()
            .match(e.target.value.trim().toLowerCase())
        ) {
          return true;
        }
        return false;
      });
    },
    del(id) {
      this.deleteVendor(id);
    },
    ...mapMutations(["deleteVendor"]),
  },
  computed: {
    ...mapGetters(["getAllVendor"]),
  },
};
</script>
<style scoped>
.main {
  padding: 0 12px;
}
</style>