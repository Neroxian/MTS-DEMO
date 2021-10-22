<template>
  <auth-layout>
    <div class="main">
      <div class="card-box">
        <h3 class="bg-light p-2 text-uppercase">Dispatch Material</h3>
        <table class="table table-bordered text-center">
          <thead class="table-dark">
            <tr>
              <th scope="col">Sr No.</th>
              <th scope="col">Material</th>
              <th scope="col">Category</th>
              <th scope="col">Quantity</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Certificate</td>
              <td>Academic</td>
              <td>100</td>
              <td class="text-center">
                <button @click="showDispatch" class="btn width-sm btn-danger">
                  Dispatch
                </button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Books</td>
              <td>Academic</td>
              <td>5000</td>
              <td class="text-center">
                <button @click="showDispatch" class="btn width-sm btn-danger">
                  Dispatch
                </button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Bio-metric Devices</td>
              <td>Tech</td>
              <td>200</td>
              <td class="text-center">
                <button @click="showDispatch" class="btn width-sm btn-danger">
                  Dispatch
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="dispatch-detail card-box mt-4" v-if="showD">
        <div>
          <h3 class="bg-light p-2 text-uppercase">Dispatch Details</h3>
          <div class="row">
            <div class="px-2 col-6">
              <b-form-group
                id="input-group-1"
                label="Filter :"
                label-for="input-1"
              >
                <b-form-select
                  v-model="searchBy"
                  :options="['Center Code', 'Region', 'Name']"
                  class="shadow-none"
              /></b-form-group>
            </div>
            <div class="px-2 col-6">
              <b-form-group
                id="input-group-2"
                label="Search :"
                label-for="input-2"
              >
                <b-form-input
                  :placeholder="`Search by ${this.searchBy}`"
                  class="shadow-none"
                  v-model="searchInput"
              /></b-form-group>
            </div>
          </div>
        </div>

        <div>
          <table class="table table-bordered text-center mb-2">
            <thead class="table-dark">
              <tr>
                <th scope="col">Sr No.</th>
                <th scope="col">Code</th>
                <th scope="col">Box</th>
                <th scope="col">Packet</th>
                <th scope="col">Loose Items</th>
                <th scope="col">Center Name</th>
                <th scope="col">Region</th>
                <th scope="col">
                  <b-form-checkbox
                    id="checkbox-0"
                    v-model="not0"
                    name="checkbox-0"
                    value="accepted"
                    unchecked-value="not_accepted"
                    >Select all</b-form-checkbox
                  >
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>846512</td>
                <td>NO</td>
                <td>NO</td>
                <td>NO</td>
                <td>Magitech Computers</td>
                <td>Palghar</td>
                <td class="text-center">
                  <b-form-checkbox
                    id="checkbox-1"
                    v-model="not"
                    name="checkbox-1"
                    value="accepted"
                    unchecked-value="not_accepted"
                  ></b-form-checkbox>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>965211</td>
                <td>NO</td>
                <td>NO</td>
                <td>NO</td>
                <td>SunTech Labs</td>
                <td>Mumbai</td>
                <td class="text-center">
                  <b-form-checkbox
                    id="checkbox-2"
                    v-model="not1"
                    name="checkbox-2"
                    value="accepted"
                    unchecked-value="not_accepted"
                  ></b-form-checkbox>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>465165</td>
                <td>NO</td>
                <td>NO</td>
                <td>NO</td>
                <td>Elite Computers</td>
                <td>Pune</td>
                <td class="text-center">
                  <b-form-checkbox
                    id="checkbox-3"
                    v-model="not3"
                    name="checkbox-3"
                    value="accepted"
                    unchecked-value="not_accepted"
                  ></b-form-checkbox>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>16842</td>
                <td>NO</td>
                <td>NO</td>
                <td>NO</td>
                <td>Deep Classes</td>
                <td>Palghar</td>
                <td class="text-center">
                  <b-form-checkbox
                    id="checkbox-4"
                    v-model="not4"
                    name="checkbox-4"
                    value="accepted"
                    unchecked-value="not_accepted"
                  ></b-form-checkbox>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <b-form-group
            id="fieldset-horizontal"
            label-cols-sm="auto"
            label-cols-lg="auto"
            content-cols-sm
            content-cols-lg="5"
            label="Select mode of transport:"
            label-for="input-horizontal"
          >
            <b-form-select
              v-model="transportMode"
              :options="['By Road', 'By Post', 'By Hand']"
              class="shadow-none"
          /></b-form-group>
        </div>
      </div>

      <div class="transport-detail card-box mt-4" v-if="transportMode !== ''">
        <b-form>
          <h3 class="bg-light p-2 text-uppercase">Transport Details</h3>
          <div class="transport-form byRoad" v-if="transportMode == 'By Road'">
            <h4 class="bg-light p-1">Enter Details</h4>
            <b-form-group
              label="Vehicle Type:"
              label-for="vehicleType"
              id="fieldset-horizontal"
              label-cols-sm="4"
              label-cols-lg="4"
              content-cols-sm
              content-cols-lg="7"
            >
              <b-form-input
                id="vehicleType"
                v-model="email"
                type="text"
              ></b-form-input>
            </b-form-group>

            <b-form-group
              label="Vehicle No:"
              label-for="vehicleNo"
              id="fieldset-horizontal"
              label-cols-sm="4"
              label-cols-lg="4"
              content-cols-sm
              content-cols-lg="7"
            >
              <b-form-input
                id="vehicleNo"
                v-model="email"
                type="text"
              ></b-form-input>
            </b-form-group>

            <b-form-group
              label="Driver Name:"
              label-for="Driver"
              id="fieldset-horizontal"
              label-cols-sm="4"
              label-cols-lg="4"
              content-cols-sm
              content-cols-lg="7"
            >
              <b-form-input
                id="Driver"
                v-model="email"
                type="text"
              ></b-form-input>
            </b-form-group>

            <b-form-group
              label="Driver Contact:"
              label-for="contact"
              id="fieldset-horizontal"
              label-cols-sm="4"
              label-cols-lg="4"
              content-cols-sm
              content-cols-lg="7"
            >
              <b-form-input
                id="contact"
                v-model="email"
                type="text"
              ></b-form-input>
            </b-form-group>
          </div>

          <div
            class="transport-form mt-3 byPost"
            v-if="transportMode == 'By Post'"
          >
            <h4 class="bg-light p-1">Enter Details</h4>
            <b-form-group
              label="ERP No:"
              label-for="contact"
              id="fieldset-horizontal"
              label-cols-sm="4"
              label-cols-lg="4"
              content-cols-sm
              content-cols-lg="7"
            >
              <b-form-input
                id="contact"
                v-model="email"
                type="text"
              ></b-form-input>
            </b-form-group>
          </div>

          <div
            class="transport-form mt-3 byHand"
            v-if="transportMode == 'By Hand'"
          >
            <h4 class="bg-light p-1">Enter Details</h4>
            <b-form-group
              label="Description:"
              label-for="contact"
              id="fieldset-horizontal"
              label-cols-sm="4"
              label-cols-lg="4"
              content-cols-sm
              content-cols-lg="7"
            >
              <b-form-input
                id="contact"
                v-model="email"
                type="textarea"
              ></b-form-input>
            </b-form-group>
          </div>

          <div class="d-flex justify-content-center mt-2">
            <b-form-group
              label="Expected delivery date:"
              label-for="input-8"
              id="fieldset-horizontal"
              label-cols-sm="auto"
              label-cols-lg="auto"
              content-cols-sm
              content-cols-lg="auto"
            >
              <b-form-datepicker
                id="input-8"
                v-model="value"
              ></b-form-datepicker>
            </b-form-group>
          </div>

          <div class="text-center">
            <button class="btn btn-primary width-sm mx-2">Save</button>
            <button class="btn btn-danger width-sm mx-2">Cancel</button>
          </div>
        </b-form>
      </div>
    </div>
  </auth-layout>
</template>

<style scoped>
.transport-form {
  width: 50%;
  margin: auto;
  padding: 1.5rem;
  text-align: center;
  border-radius: 0.4rem;
  border: 1px solid rgb(175, 175, 175);
  /* box-shadow: 0px 0px 5px 1px rgba(143, 143, 143, 0.89);
  -webkit-box-shadow: 0px 0px 5px 1px rgba(143, 143, 143, 0.89);
  -moz-box-shadow: 0px 0px 5px 1px rgba(143, 143, 143, 0.89); */
}
td,
th {
  padding: 0.7rem;
  vertical-align: middle;
}
</style>

<script>
import AuthLayout from '../../layouts/auth-layout.vue';
export default {
  name: "DispatchLLC",
  components: {
    AuthLayout
  },
  data(){
    return {
      searchInput: "",
      searchBy: "",
      showD: false,
      transportMode: "",
    };
  },
  methods:{
    showDispatch(){
      this.showD = !this.showD
    }
  },
};
</script>