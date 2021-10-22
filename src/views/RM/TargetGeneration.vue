<template>
  <auth-layout>
    <div>
      <div>
        <b-form @submit.prevent="onSubmit">
          <div class="card-box">
            <h4 class="bg-light p-2 text-uppercase ">Target Generation</h4>

            <b-form-group
              label="Select Material: "
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
                placeholder="Choose a file or drop it here..."
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
                placeholder="Comment if any..."
                no-resize
              ></b-form-textarea>
            </b-form-group>

            <div class="text-center">
              <button
                class="btn width-sm btn-success"
                @click.prevent="toggleTable"
              >
                Generate Target
              </button>
            </div>
          </div>

          <div class="card-box mt-4" v-if="showTable">
            <h3 class="bg-light p-2 text-uppercase">Generated Target</h3>

            <div class="mt-2" id="addedMaterial" ref="table">
              <!-- {{ filteredTask }} -->
              <table class="table text-center table-bordered">
                <thead class="table-dark">
                  <tr>
                    <th>Sr No.</th>
                    <th>Material</th>
                    <th>From</th>
                    <th>To</th>
                    <th>Quantity</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Certificate</td>
                    <td>Pune Office</td>
                    <td>Rahul(Buldhana)</td>
                    <td>500</td>
                    <!-- <td>
              <router-link :to="`/editsub/${itm.id}`" style="color: white"
                ><button class="btn btn-primary">Edit</button></router-link
              >
            </td> -->
                    <td>
                      <button class="btn mx-1 btn-success width-sm">
                        Save
                      </button>
                      <button
                        class="btn width-sm btn-primary"
                        @click.prevent="toggleDetails"
                      >
                        Details
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="sub-table" v-if="showDetails">
                <h3>Details</h3>
                <div>
                    <span>Pune Office</span><i id="mdi-icon" class="mdi mdi-arrow-right-bold"></i><span>Rahul(Buldhana) <code> 500 Units</code></span><i id="mdi-icon" class="mdi mdi-arrow-right-bold"></i><span>Pune Learning Center,Mumbai Learning Center <code>250 Units</code> each</span><i id="mdi-icon" class="mdi mdi-arrow-right-bold"></i><span>Learner</span>
                </div>
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
  name: "TargetGeneration",
  data() {
    return {
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
.sub-table{
    margin: auto;
    border-radius: 0.2rem;
    width: 60%;
    padding: 1rem;
    border: 0.01rem solid rgb(172, 172, 172);
}
.sub-table span {
  font-size: 0.9rem;
}

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