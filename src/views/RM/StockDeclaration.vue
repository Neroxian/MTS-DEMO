<template>
  <auth-layout>
    <div>
      <div class="card-box">
        <h4 class="text-uppercase p-2 bg-light mt-0">Stock declaration</h4>
        <b-form @submit.prevent="submit">
          <div class="row">
            <b-form-group
              label="Select Material"
              label-for="material"
              class="col-12 col-md-6"
            >
              <b-form-select
                :options="materialOptions"
                class="shadow-none"
                v-model="material"
              />
            </b-form-group>
            <b-form-group
              label="Material Quantity"
              label-for="material-quantity"
              class="col-12 col-md-6"
            >
              <b-form-input
                id="material-quantity"
                type="number"
                class="shadow-none"
                min="0"
                v-model="materialQuantity"
              />
            </b-form-group>
          </div>
          <div class="text-center">
            <b-button
              type="submit"
              variant="success"
              class="width-sm shadow-none mr-2"
              >Add</b-button
            >
            <b-button
              type="button"
              variant="danger"
              class="shadow-none width-sm"
              @click="reset"
              >Reset</b-button
            >
          </div>
        </b-form>
      </div>

      <div v-if="totalRows" class="card-box mt-4">
        <div class="d-flex justify-content-end text-uppercase p-1 bg-light">
          <div class="col-6"><h4>Stock Quantity</h4></div>
          <div class="col-6 text-right">
            <b-input-group class="d-flex align-items-center">
              <div class="font-weight-normal">Entries per page :</div>
              <b-form-input
                type="number"
                min="5"
                max="50"
                step="5"
                v-model="perPage"
                class="shadow-none border-none mx-1"
              ></b-form-input>
            </b-input-group>
          </div>
        </div>
        <b-table
          id="stocks-table"
          :items="materialsData"
          class="my-2 text-center"
          :current-page="currentPage"
          :per-page="perPage"
          sort-by="time"
          sort-desc
          bordered
          responsive
        >
          <template #cell(time)="row">
            {{ row.item.time | formatTime }}
          </template>
        </b-table>
        <div class="d-flex justify-content-center">
          <b-pagination
            v-model="currentPage"
            :total-rows="totalRows"
            :per-page="perPage"
            aria-controls="stocks-table"
            class="shadow-none"
          />
        </div>
      </div>
      <div v-else class="my-2">No items to show!</div>
    </div>
  </auth-layout>
</template>

<script>
import dayjs from "dayjs";
import authLayout from "../../layouts/auth-layout.vue";

export default {
  components: { authLayout },
  name: "StockDeclaration",
  data() {
    return {
      materialOptions: ["MSCIT BOOK English Book", "MSCIT BOOK Marathi Book"],
      material: null,
      materialQuantity: 0,
      materialsData: [],
      currentPage: 1,
      perPage: 5,
    };
  },
  created() {
    for (let i = 0; i < 20; i++) {
      this.materialsData.push({
        time: Date.now(),
        material:
          this.materialOptions[
            Math.floor(Math.random() * this.materialOptions.length)
          ],
        materialQuantity: Math.round(Math.random() * 100),
        status: "approved",
        remark: "Some remark",
      });
    }
  },
  methods: {
    submit() {
      // console.log(this.material, this.materialQuantity)
      this.materialsData.push({
        time: Date.now(),
        material: this.material,
        materialQuantity: this.materialQuantity,
        status: "approved",
        remark: "Some remark",
      });
      this.reset();
    },
    reset() {
      this.material = "";
      this.materialQuantity = 0;
    },
  },
  computed: {
    totalRows() {
      return this.materialsData.length;
    },
  },
  filters: {
    formatTime(time) {
      return dayjs(time).format("DD/MM/YYYY hh:mm A");
    },
  },
};
</script>

<style>
</style>
