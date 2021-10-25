<template>
  <auth-layout>
<<<<<<< HEAD
      <!-- <h3 class="text-start text-uppercase p-2 bg-light my-2">
        Received Material from Vendor
      </h3> -->

      <!-- Responsive Table -->
      <div class="card-box">
        <h4 class="bg-light p-2 mb-3 text-uppercase">
          previously added material category
        </h4>
        <select v-model="defaultKey" v-if="isSmall">
          <option v-for="(key, idx) in fields" :key="idx" :value="key">
            {{ key }}
          </option>
        </select>
        <b-table
          id="dataTable"
          responsive="md"
          stacked="sm"
          :striped="isSmall"
          light
          outlined
          head-variant="light"
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
                <div>
                  <b-button size="sm" variant="primary" class="btn btn-xs"
                    >Edit</b-button
                  >
                  <b-button size="sm" variant="danger" class="m-1"
                    >Delete</b-button
                  >
                </div>
              </template>
            </b-card>
          </template>

          <!-- Actions -->
          <template #cell(actions) v-if="!isSmall">
            <div>
              <b-button size="xs" variant="primary" class="m-1">Edit</b-button>
              <b-button size="sm" variant="danger" class="m-1">Delete</b-button>
            </div>
          </template>
        </b-table>
      </div>
=======
    <h3 class="px-1 ">
        Acknowledged Material
      </h3>
    <div class="main card-box">
      <b-table
        bordered
        :items="items"
        :fields="fields"
        thead-class="thead"
        class=""
      ></b-table>
    </div>
>>>>>>> 3eb9fcd71c79a9aa9c2d2d828988be25656dd259
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
      size: window.innerWidth,
      defaultKey: "no",
      idx: 0,
      fields: [
        "no",
        "material",
        "dispatched",
        "date",
        "status",
        "acknowledge",
        "notAcknowledge",
      ],
      items: [
        {
          no: 1,
          material: "Biometric Devices",
          dispatched: "2",
          date: "4-March-2021",
          status: "Done",
          acknowledge: "2",
          notAcknowledge: "0",
        },
        {
          no: 2,
          material: "Books",
          dispatched: "21",
          date: "6-June-2021",
          status: "Not  Done",
          acknowledge: "0",
          notAcknowledge: "22",
        },
        {
          no: 3,
          material: "Certificates",
          dispatched: "44",
          date: "10-Oct-2021",
          status: "Done",
          acknowledge: "3",
          notAcknowledge: "0",
        },
        {
          no: 4,
          material: "Books",
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

<<<<<<< HEAD
<style >
.b-table-details td {
  padding: 0;
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
    width: 30% !important;
    padding: 0px !important;
  }
  div .card-body {
    padding: 0px !important; 
     padding-left: 40px !important;
    /* margin-top: -8px !important; */
  }
  .card {
    margin-bottom: 0px !important;
  }
}

.inline {
  display: inline;
=======
<style scoped>

h2 {
  font-weight: 600;
>>>>>>> 3eb9fcd71c79a9aa9c2d2d828988be25656dd259
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