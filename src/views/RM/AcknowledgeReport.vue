<template>
  <auth-layout>
    <!-- Responsive Table -->
    <h3 class="px-1 font-weight-bold">Report</h3>
    <div class="card-box">
      <h4 class="mb-2">Acknowledge History</h4>

      <div class="form-group">
        <b-form-select v-model="defaultKey" v-if="isSmall" style="width: 100%">
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
        borderless
        hover
        :items="items"
        :fields="copy"
        thead-tr-class="text-center"
        :tbody-tr-class="isSmall ? '' : 'text-center'"
      >
        <template v-slot:[`cell(${defaultKey})`]="row">
          <div class="d-flex justify-content-between justify-content-sm-center">
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
      </b-table>
    </div>
  </auth-layout>
</template>

<script>
import AuthLayout from "@/layouts/auth-layout";

export default {
  name: "Acknowledge",
  components: {
    AuthLayout,
  },
  data() {
    return {
      plus:"<span><i class='mdi mdi-plus'></i></span>",
      minus:"<span><i class='mdi mdi-minus'></i></span>",
      size: window.innerWidth,
      defaultKey: "product",
      idx: 0,
      fields: [
        "no",
        "product",
        "dispatched",
        "date",
        "status",
        "acknowledge",
        "notAcknowledge",
      ],
      items: [
        {
          no: 1,
          product: "Biometric Devices",
          dispatched: "2",
          date: "4-March-2021",
          status: "Done",
          acknowledge: "2",
          notAcknowledge: "0",
        },
        {
          no: 2,
          product: "Books",
          dispatched: "21",
          date: "6-June-2021",
          status: "Not  Done",
          acknowledge: "0",
          notAcknowledge: "22",
        },
        {
          no: 3,
          product: "Certificates",
          dispatched: "44",
          date: "10-Oct-2021",
          status: "Done",
          acknowledge: "3",
          notAcknowledge: "0",
        },
        {
          no: 4,
          product: "Books",
          dispatched: "543",
          date: "11-Nov-2021",
          status: "Not Done",
          acknowledge: "0",
          notAcknowledge: "10",
        },
      ],
    };
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
    isSmall() {
      return this.size < 576;
    },
  },
};
</script>

<style>
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

/* #mobileTable {
  color: blue !important
} */
</style>