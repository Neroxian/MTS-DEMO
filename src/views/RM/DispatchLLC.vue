<template>
  <auth-layout>
    <div class="main">
      <h3 class="px-1 py-2 font-weight-bold">Dispatch</h3>

      <div class="card-box">
        <h4 class="mb-3">Dispatch Product</h4>
        <!-- <table class="table table-striped text-center">
          <thead class="">
            <tr>
              <th scope="col">Tracking ID.</th>
              <th scope="col">Product</th>
              <th scope="col">Deatils</th>
              <th scope="col">Quantity</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>486512</td>
              <td>Certificate</td>
              <td>Academic</td>
              <td>100</td>
              <td class="text-center">
                <button @click="showDispatch" class="btn width-xs btn-sm btn-danger">
                  Dispatch
                </button>
              </td>
            </tr>
            <tr>
              <td>65514</td>
              <td>Books</td>
              <td>Academic</td>
              <td>5000</td>
              <td class="text-center">
                <button @click="showDispatch" class="btn width-xs btn-sm btn-danger">
                  Dispatch
                </button>
              </td>
            </tr>
            <tr>
              <td>784512</td>
              <td>Bio-metric Devices</td>
              <td>Tech</td>
              <td>200</td>
              <td class="text-center">
                <button @click="showDispatch" class="btn width-xs btn-sm btn-danger">
                  Dispatch
                </button>
              </td>
            </tr>
          </tbody>
        </table> -->

        <!-- NEW TABLE -->
        <div class="form-group">
          <b-form-select
            v-model="defaultKey"
            v-if="isSmall"
            style="width: 100%"
          >
            <option v-for="(key, idx) in fields" :key="idx" :value="key">
              {{ key }}
            </option>
          </b-form-select>
        </div>

        <b-table
          id="dataTable"
          responsive="md"
          stacked="sm"
          :striped="isSmall"
          head-variant="light"
          bordereless
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
                  <span class="font-weight-bold">{{ field }} :</span>
                  {{ row.item[field] }}
                </div>
              </template>
              <template>
                <div class="d-flex justify-content-center">
                  <button
                    @click="showDispatch"
                    class="btn btn-sm width-xs my-1 mx-1 btn-blue"
                  >
                    <i class="mdi mdi-pencil-outline"></i>
                    Dispatch
                  </button>
                  <!-- <button class="btn btn-xs btn-success mx-1">
                      <i class="mdi mdi-plus"></i>
                    </button>
                    <button class="btn btn-xs btn-danger">
                      <i class="mdi mdi-minus"></i>
                    </button> -->
                </div>
              </template>
            </b-card>
          </template>

          <!-- Actions -->

          <template #cell(actions) v-if="!isSmall">
            <button
              @click="showDispatch"
              class="btn btn-sm width-xs my-1 mx-1 btn-blue"
            >
              <i class="mdi mdi-pencil-outline"></i>
              Dispatch
            </button>
            <!-- <button class="btn btn-sm width-xs btn-danger">
            <template #cell(actions) v-if="!isSmall">
              <button @click="showDispatch" class="btn btn-sm width-xs mx-1 btn-blue">
                Dispatch
              </button>
              <button class="btn btn-sm width-xs btn-danger">
                <i class="mdi mdi-trash-can-outline"></i>Delete
              </button> -->
          </template>
        </b-table>
      </div>

      <!-- <button @click="showDispatch" class="btn width-xs btn-sm btn-danger">
                  Dispatch
                </button> -->

      <div v-if="showD">
        <div class="dispatch-detail card-box mt-4">
          <h4 class="mb-3">Dispatch Details</h4>

            <div class="row mb-1">
              <div class="px-2 col-6">
                <b-form-group
                  id="input-group-1"
                  label="Filter :"
                  label-for="input-1"
                >
                  <b-form-select
                    v-model="searchBy"
                    :options="['Center TrackingID', 'Region', 'Name']"
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

          <div class="mb-4">
            <!-- <table class="table table-bordered text-center mb-2">
            <thead class="">
              <tr>
                <th scope="col">Sr No.</th>
                <th scope="col">TrackingID</th>
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
          </table> -->

            <!-- NEW TABLE -->
            <div class="form-group">
              <b-form-select
                v-model="defaultKey2"
                v-if="isSmall"
                :options="fields2"
                style="width: 100%"
              >
              </b-form-select>
            </div>

            <b-table
              id="dataTable"
              responsive="md"
              stacked="sm"
              :striped="isSmall"
              head-variant="light"
              fixed="fixed"
              bordereless
              hover
              :items="items2"
              :fields="copy2"
              thead-tr-class="text-center"
              :tbody-tr-class="isSmall ? '' : 'text-center'"
            >
              <template v-slot:[`cell(${defaultKey2})`]="row">
                <div
                  class="d-flex justify-content-between justify-content-sm-center">
                  <div>{{ row.item[defaultKey2] }}</div>
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

              <b-table
                id="dataTable"
                responsive="md"
                stacked="sm"
                :striped="isSmall"
                head-variant="light"
                fixed="fixed"
                bordereless
                hover
                :items="items2"
                :fields="copy2"
                thead-tr-class="text-center"
                :tbody-tr-class="isSmall ? '' : 'text-center'"
              >
                <!-- <template v-slot:[`cell(${defaultKey2})`]="row">
                <div
                  class="
                    d-flex
                    justify-content-between justify-content-sm-center
                  "
                >
                  <div>{{ row.item[defaultKey2] }}</div>
                  <b-button
                    style="margin: 0% 5%"
                    class="btn btn-xs"
                    v-if="isSmall"
                    @click="row.toggleDetails"
                    ><i class="mdi mdi-plus"> </i
                    >{{ row.detailsShowing ? "Hide" : "Show" }}
                  </b-button>
                </div>
              </template> -->

                <template #row-details="row" v-if="isSmall">
                  <b-card class="text-left p-0">
                    <template
                      v-for="(field, idx) in fields2.filter(
                        (f) => f !== defaultKey2 && f !== 'actions'
                      )"
                    >
                      <div :key="idx">
                        <span class="font-weight-bold">{{ field }} :</span>
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
              </b-table>

              <!-- Actions -->

              <template #cell(select) v-if="!isSmall">
                <b-form-checkbox
                  name="checkbox-4"
                  value="accepted"
                  unchecked-value="not_accepted"
                ></b-form-checkbox>
              </template>
            </b-table>
          </div>

          <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <b-form-group
              id="fieldset-horizontal"
              
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
      </div>

      <div class="mt-4" v-if="transportMode !== ''">
        <div class="transport-detail card-box mt-4">
          <h4 class="mb-3">Transport Details</h4>

          <b-form>
            <div
              class="transport-form byRoad"
              v-if="transportMode == 'By Road'"
            >
              <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <b-form-group
                    label="Vehicle Type:"
                    label-for="vehicleType"
                    id="fieldset-horizontal"
                  >
                    <b-form-input
                      id="vehicleType"
                      v-model="email"
                      type="text"
                    ></b-form-input>
                  </b-form-group>
                </div>

                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <b-form-group
                    label="Vehicle No:"
                    label-for="vehicleNo"
                    id="fieldset-horizontal"
                  >
                    <b-form-input
                      id="vehicleNo"
                      v-model="email"
                      type="text"
                    ></b-form-input>
                  </b-form-group>
                </div>
              </div>

              <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <b-form-group
                    label="Driver Name:"
                    label-for="Driver"
                    id="fieldset-horizontal"
                  >
                    <b-form-input
                      id="Driver"
                      v-model="email"
                      type="text"
                    ></b-form-input>
                  </b-form-group>
                </div>

                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <b-form-group
                    label="Driver Contact:"
                    label-for="contact"
                    id="fieldset-horizontal"
                  >
                    <b-form-input
                      id="contact"
                      v-model="email"
                      type="text"
                    ></b-form-input>
                  </b-form-group>
                </div>
              </div>

              <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <b-form-group
                    label="Expected delivery date:"
                    label-for="input-8"
                    id="fieldset-horizontal"
                  >
                    <b-form-datepicker
                      id="input-8"
                      v-model="value"
                    ></b-form-datepicker>
                  </b-form-group>
                </div>
              </div>
            </div>

            <div
              class="transport-form byPost"
              v-if="transportMode == 'By Post'"
            >
              <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <b-form-group
                    label="ERP No:"
                    label-for="contact"
                    id="fieldset-horizontal"
                  >
                    <b-form-input
                      id="contact"
                      v-model="email"
                      type="text"
                    ></b-form-input>
                  </b-form-group>
                </div>

                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <b-form-group
                    label="Expected delivery date:"
                    label-for="input-8"
                    id="fieldset-horizontal"
                  >
                    <b-form-datepicker
                      id="input-8"
                      v-model="value"
                    ></b-form-datepicker>
                  </b-form-group>
                </div>
              </div>
            </div>

            <div
              class="transport-form byHand"
              v-if="transportMode == 'By Hand'"
            >
              <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <b-form-group
                    label="Description:"
                    label-for="contact"
                    id="fieldset-horizontal"
                  >
                    <b-form-input
                      id="contact"
                      v-model="email"
                      type="textarea"
                    ></b-form-input>
                  </b-form-group>
                </div>

                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <b-form-group
                    label="Expected delivery date:"
                    label-for="input-8"
                    id="fieldset-horizontal"
                  >
                    <b-form-datepicker
                      id="input-8"
                      v-model="value"
                    ></b-form-datepicker>
                  </b-form-group>
                </div>
              </div>
            </div>

            <div class="text-center">
              <button class="btn btn-success width-sm my-1 mx-1">Save</button>
              <button class="btn btn-danger width-sm my-1 mx-1">Cancel</button>
            </div>
          </b-form>
        </div>
      </div>
    </div>
  </auth-layout>
</template>

<style scoped>
/* .transport-form {
  width: 60%;
  margin: auto;
  padding: 1.5rem;
  text-align: center;
  border-radius: 0.4rem;
  border: 1px solid rgb(175, 175, 175);
} */
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
    margin-bottom: 0px !important;
  }
}

.inline {
  display: inline;
}
#searchBar {
  width: 50%;
  margin: auto;
}
</style>

<script>
import AuthLayout from "../../layouts/auth-layout.vue";
export default {
  name: "DispatchLLC",
  components: {
    AuthLayout,
  },
  data() {
    return {
      // NEW TABLE 1
      show: false,
      size: window.innerWidth,
      defaultKey: "product",
      fields: ["SrNo", "product", "Deatils", "quantity", "actions"],
      items: [
        {
          SrNo: "1",
          Deatils: "Klic Certificate 2021",
          product: "Certificates",
          tracking_id: "OW214",
          quantity: "100",
        },
        {
          SrNo: "2",
          Deatils: "Klic Certificate 2021",
          product: "Certificates",
          tracking_id: "OW214",
          quantity: "100",
        },
        {
          SrNo: "3",
          Deatils: "Klic Certificate 2021",
          product: "Certificates",
          tracking_id: "OW214",
          quantity: "100",
        },
      ],
      // TABLE ENDS

      // NEW TABLE 2
      defaultKey2: "TrackingID",
      fields2: [
        "TrackingID",
        "UserName",
        "Quantity",
        "region",
        "select",
      ],
      items2: [
        {
          srNo: "1",
          TrackingID: "PVQ464655",
          box: "10",

          Quantity: "100",
          packets: "13",
          loose_items: "NO",
          UserName: "LLC (Pune)",
          region: "Pune",
        },
        {
          srNo: "1",
          TrackingID: "PVQ9455",
          Quantity: "50",
          box: "10",
          packets: "13",
          loose_items: "NO",
          UserName: "LLC (Nashik)",
          region: "Nashik",
        },
        {
          srNo: "1",
          TrackingID: "PVQ00555",
          box: "10",
          Quantity: "230",
          packets: "13",
          loose_items: "NO",
          UserName: "LLC (Pune)",
          region: "Pune",
        },
      ],
      searchInput: "",
      searchBy: "",
      showD: false,
      transportMode: "",
    };
  },
  methods: {
    showDispatch() {
      this.showD = !this.showD;
    },
  },
  mounted() {
    window.addEventListener(
      "resize",
      () => {
        this.size = window.innerWidth;
      },
      true
    );
  },
  computed: {
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
    copy2() {
      if (this.isSmall) {
        const idx = this.fields2.findIndex((f) => f === this.defaultKey2);
        if (idx !== -1) {
          let copy2 = [];
          copy2.push(this.fields2[idx]);
          return copy2;
        }
      }
      return this.fields2;
    },
    isSmall() {
      return this.size < 576;
    },
  },
};
</script>