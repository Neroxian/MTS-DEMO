<template>
  <auth-layout>
    <div>
      <div class="card-box">
        <b-form>
          <h3 class="bg-light p-2 text-uppercase">Dispatch Details</h3>
          <div class="row">
            <b-form-group
              label="Through Channel: "
              label-for="through-channel"
              class="col-12 col-md-6"
            >
              <b-form-select
                v-model="throughChannel"
                :options="throughChannelOptions"
                class="shadow-none"
              />
            </b-form-group>
            <b-form-group
              label="Financial Year: "
              label-for="financial-year"
              class="col-12 col-md-6"
            >
              <b-form-select
                v-model="financialYear"
                :options="[2020, 2021, 2022]"
                class="shadow-none"
              />
            </b-form-group>
          </div>
          <div class="row">
            <b-form-group
              label="Country: "
              label-for="country"
              class="col-12 col-md-6"
            >
              <b-form-select
                id="country"
                v-model="country"
                :options="['India', 'Dubai', 'USA']"
              />
            </b-form-group>
            <b-form-group
              label="State: "
              label-for="state"
              class="col-12 col-md-6"
            >
              <b-form-select
                id="state"
                v-model="state"
                :options="['Maharashtra', 'Goa', 'Haryana']"
              />
            </b-form-group>
          </div>
          <div class="row">
            <b-form-group
              label="District: "
              label-for="district"
              class="col-12 col-md-6"
            >
              <b-form-select
                id="district"
                v-model="district"
                :options="['Nashik', 'Pune', 'Nagpur']"
              />
            </b-form-group>
            <b-form-group
              label="Channel partner for dispatch: "
              label-for="channel-partner"
              class="col-12 col-md-6"
            >
              <b-form-select
                id="channel-partner"
                v-model="channelPartner"
                class="shadow-none"
                :options="['RM', 'LLC', 'ALC']"
              />
            </b-form-group>
          </div>
          <div class="row">
            <b-form-group
              label="Dispatch Mode: "
              label-for="dispatch-mode"
              class="col-12 col-md-6"
            >
              <b-form-select
                id="dispatch-mode"
                v-model="dispatchMode"
                class="shadow-none"
                :options="['Regular', 'E-Store']"
              />
            </b-form-group>
            <b-form-group
              label="Description: "
              label-for="description"
              class="col-12 col-md-6"
            >
              <b-form-textarea
                id="description"
                class="shadow-none"
                placeholder="Description"
                v-model="description"
              />
            </b-form-group>
          </div>
          <!-- <div class="text-right">
        <b-button type="submit" variant="success" class="shadow-none">SUBMIT</b-button>
      </div> -->
        </b-form>

        <div class="text-center mt-2">
          <button @click="showMaterial" class="btn btn-primary width-sm">
            View Material Details
          </button>
        </div>
      </div>

      <div v-if="showAvailable" class="card-box mt-4">
        <h2 class="bg-light p-2 text-uppercase">Available Material</h2>
        <table class="table table-bordered text-center mb-3">
          <thead class="table-dark">
            <tr>
              <th scope="col">Sr No.</th>
              <th scope="col">Material</th>
              <th scope="col">Category</th>
              <th scope="col">Quantity</th>
              <th scope="col">
                Action
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
              <td>Certificate</td>
              <td>Academic</td>
              <td>100</td>
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
              <td>Books</td>
              <td>Academic</td>
              <td>500</td>
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
              <td>Bio-metric Devices</td>
              <td>Tech</td>
              <td>20</td>
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
          </tbody>
        </table>
        <div class="text-center">
          <button @click="showDetail" class="btn width-sm btn-danger">
            Dispatch
          </button>
        </div>
      </div>

      <div v-if="showDispatch" class="card-box mt-4">
        <h2 class="bg-light p-2 text-uppercase">Dispatch Details</h2>
        <div>
          <h5>Selected Material : { }</h5>
          <form>
            <div class="row mt-4">
              <div class="col-6 align-items-center p-0">
                <b-form-group
                  class="col-auto"
                  id="input-group-9"
                  label="Select Quantity:"
                  label-for="input-9"
                >
                  <b-form-input
                    id="input-9"
                    v-model="email"
                    type="number"
                  ></b-form-input>
                </b-form-group>
              </div>

              <div class="col-6 align-items-center">
                <b-form-group
                  class="col-auto"
                  id="input-group-6"
                  label="Select District:"
                  label-for="input-6"
                >
                  <b-form-select
                    id="input-6"
                    v-model="email"
                    :options="options"
                  ></b-form-select>
                </b-form-group>
              </div>
            </div>

            <div class="row">
              <div class="col-6 align-items-center p-0">
                <b-form-group
                  class="col-auto"
                  id="input-group-6"
                  label="Select Center:"
                  label-for="input-6"
                >
                  <b-form-select
                    id="input-6"
                    v-model="email"
                    :options="options"
                  ></b-form-select>
                </b-form-group>
              </div>

              <div class="col-6 align-items-center">
                <b-form-group
                  class="col-auto"
                  id="input-group-6"
                  label="Select Mode of transport:"
                  label-for="input-6"
                >
                  <b-form-select
                    id="input-6"
                    v-model="email"
                    :options="options"
                  ></b-form-select>
                </b-form-group>
              </div>
            </div>
            <div class="text-center mt-2">
              <button class="btn width-sm btn-danger">Dispatch</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </auth-layout>
</template>

<script>
import authLayout from "../../layouts/auth-layout.vue";
export default {
  components: { authLayout },
  name: "Dispatch",
  data() {
    return {
      showAvailable: false,
      showDispatch: false,
      throughChannel: null,
      financialYear: null,
      country: null,
      state: null,
      district: null,
      channelPartner: null,
      dispatchMode: null,
      description: "",
      throughChannelOptions: [
        "RM>LLC>ALC",
        "RM>LLC>ALC>Learner",
        "RM>MCC>ALC>Learner",
      ],
      options: [
        { value: "a", text: "Palghar" },
        { value: "b", text: "Mumbai" },
        { value: "c", text: "Pune" },
        { value: "d", text: "Thane" },
      ],
    };
  },
  methods: {
    showMaterial() {
      this.showAvailable = !this.showAvailable;
      console.log(this.showAvailable);
    },
    showDetail() {
      this.showDispatch = !this.showDispatch;
      console.log(this.showDispatch);
    },
  },
};
</script>

<style scoped>
.card-box {
  margin: auto;
  padding: 0 12px;
  background-color: white;
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
</style>