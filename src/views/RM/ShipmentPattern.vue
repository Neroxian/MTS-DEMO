<template>
  <auth-layout>
    <div>
      <div>
        <b-form @submit.prevent="onSubmit">
          <h3 class="px-1 py-2 font-weight-bold">Shipment Pattern</h3>

          <div class="card-box">
            <b-form-group
              label="Select Product: "
              label-for="material"
              class="col-12 p-0"
            >
              <b-form-select
                id="material"
                class="shadow-none"
                :options="['Certificate', 'Books', 'Bio-Metric devices']"
              />
            </b-form-group>

            <b-form-group
              label="Upload Target File:"
              label-for="file-slect"
              class="col-12 p-0"
            >
              <b-form-file
                id="file-slect"
              ></b-form-file>
            </b-form-group>

            <b-form-group
              class=""
              id="input-group-3"
              label="Comment:"
              label-for="input-2"
            >
              <b-form-textarea
                id="input-2"
                placeholder=""
                no-resize
              ></b-form-textarea>
            </b-form-group>

            <div class="text-center">
              <button
                class="btn width-sm btn-success"
                @click.prevent="toggleTable"
              >
                Generate Pattern
              </button>
            </div>
          </div>

          <div v-if="showTable" class="mt-4">
q
            <div class="card-box">
            <h4 class="mb-2">Generated Pattern</h4>
              <!-- NEW TABLE -->
              
              <!--  TABLE ENDS -->

              <!-- OLD TABLE -->

              <div class="mt-2" id="addedMaterial" ref="table">
              <table class="table table-hover text-center">
                <thead class="table-light">
                  <tr>
                    <th>Sr No.</th>
                    <th>Product</th>
                    <th>From</th>
                    <th>To</th>
                    <th>Quantity</th>
                    <th style="width:12rem">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Certificate</td>
                    <td>Pune Office</td>
                    <td>Rahul(Buldhana)</td>
                    <td>5000</td>
              
                    <td>
                      <button class="btn m-1 btn-blue btn-sm width-xs">
                       <i class="mdi mdi-content-save-outline text-white"></i> Save
                      </button>
                      <button
                        class="btn m-1 waves-effect waves-light btn-sm btn-secondary"
                        @click.prevent="toggleDetails"
                      >
                       <span v-if="showDetails == false"><i class="mdi mdi-plus-thick text-white"></i></span>
                       <span v-if="showDetails == true"><i class="mdi mdi-minus-thick text-white"></i></span>
                      </button>
                    </td>
                  </tr>
                  <tr v-if="showDetails">
                    <td></td>
                    <td><i class="mdi mdi-subdirectory-arrow-right"></i></td>
                    <td>Rahul(Buldhana) </td>
                    <td>ALC's of Buldhana (20)</td>
                    <td>100 each</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>

              <!-- <div class="sub-table" v-if="showDetails">
                <h3 class="font-weight-bold text-center mb-1 p-0">Details</h3>
                <div>
                    <span>Pune Office</span><i id="mdi-icon" class="mdi mdi-arrow-right-bold"></i><span>Rahul(Buldhana) <code> 500 Units</code></span><i id="mdi-icon" class="mdi mdi-arrow-right-bold"></i><span>Pune Learning Center,Mumbai Learning Center <code>250 Units</code> each</span><i id="mdi-icon" class="mdi mdi-arrow-right-bold"></i><span>Learner</span>
                </div>
            </div> -->
            </div>
          </div>
        </b-form>
      </div>
    </div>
  </auth-layout>
</template>

<script>
import authLayout from "../../layouts/auth-layout.vue";

export default {
  components: { authLayout },
  name: "ShipmentPattern",
  data() {
    return {
      size: window.innerWidth,
      defaultKey: "sr",
      fields: [
        { key: "sr", label: "Sr No." },
        "material",
        "from",
        "to",
        "quantity",
        "actions",
      ],
      items: [
        {
          sr: 1,
          material: "Books",
          from: "Pune",
          to: "Nashik (LLC)",
          quantity: 100,
        },
        {
          sr: 1,
          material: "Books",
          from: "Pune",
          to: "Nashik (LLC)",
          quantity: 100,
        },
      ],
      // NEW TABLE ENDS
      showTable: false,
      showDetails: false,
    };
  },
  methods: {
    toggleTable() {
      this.showTable = !this.showTable;
    },
    toggleDetails() {
      this.showDetails = !this.showDetails;
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
    isSmall() {
      return this.size < 576;
    },
  },
  // TABLE ENDS
};
</script>

<style scoped>
/* .style {
  font-weight: 100;
  color: #6c757d;
  background-color: #f5f6f9;
} */
tr,
td {
  vertical-align: middle;
}
i {
  color: black;
}
/* .sub-table{
    margin: auto;
    border-radius: 0.2rem;
    width: 60%;
    padding: 1rem;
    border: 0.01rem solid rgb(172, 172, 172);
}
code,.sub-table span {
  font-size: 0.9rem;
  font-weight: 600;
} */

.card-box {
  margin: auto;
  padding: 0px 12px;
}

@media (max-width: 700px) {
  .card-box {
    width: 90%;
  }
}
@media (max-width: 500px) {
  .card-box {
    width: 100%;
  }
}
.inline {
  display: inline;
}
#searchBar {
  width: 50%;
  margin: auto;
}

/* Validation */

.highlightError {
  color: #eb0600;
}

.control.is-valid input {
  border: 1px #045929 solid;
}
</style>