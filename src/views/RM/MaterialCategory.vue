<template>
  <auth-layout>
   <div>
    <div>
      <ValidationObserver ref="form">
        <b-form @submit.prevent="onSubmit">
          <div class="card-box">
          <h4 class="bg-light p-2 mb-3 text-uppercase">
            Add material category
          </h4>

          <ValidationProvider
            mode="eager"
            rules="required|alpha"
            name="Sub category"
            v-slot="{ classes, errors }"
          >
            <b-form-group class="mb-2" id="input-group-2" label-for="input-2">
              <template v-slot:label>
                Sub Category Name<span class="text-danger">*</span>
              </template>
              <b-form-input
                class="control"
                :class="classes"
                id="input-2"
                v-model="form.subCategory"
                placeholder="Enter name"
              ></b-form-input>
              <span class="highlightError">{{ errors[0] }}</span>
            </b-form-group>
          </ValidationProvider>

          <b-form-group
            class=""
            id="input-group-3"
            label="Details:"
            label-for="input-2"
          >
            <b-form-textarea
              id="input-2"
              placeholder="Enter the details here..."
              v-model="form.details"
              no-resize
            ></b-form-textarea>
          </b-form-group>

          <div class="form-group">
            <b-form-group
              id="input-group-8"
              label="Select Date:"
              label-for="input-8"
            >
              <b-form-datepicker
                id="input-8"
                v-model="value"
                class="mb-2"
              ></b-form-datepicker>
            </b-form-group>
          </div>

          <!-- Button  -->
          <div class="button-list">
            <button
              type="submit"
              class="btn btn-primary waves-effect waves-light"
            >
              <b-icon-plus-circle />
              Add sub-category
            </button>
          </div>
          <br />
          </div>
        </b-form>
      </ValidationObserver>
    </div>
   
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
          <div class="d-flex justify-content-between justify-content-sm-center">
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
  </div>
  </auth-layout>
</template>

<script>
import { configure } from "vee-validate";
import { ValidationProvider, ValidationObserver } from "vee-validate";
import { extend } from "vee-validate";
import { required, email, alpha } from "vee-validate/dist/rules";
import AuthLayout from '../../layouts/auth-layout.vue';

configure({
  classes: {
    valid: "is-valid",
    invalid: "is-invalid",
    dirty: ["is-dirty", "is-dirty"],
  },
});

extend("email", {
  ...email,
  message: "This is not a valid email",
});
extend("alpha", {
  ...alpha,
  message: "{_field_} can only contain alphabets",
});
extend("required", {
  ...required,
  message: "{_field_} is the required field",
});

export default {
  name: "Form",
  data() {
    return {
           size: window.innerWidth,
      defaultKey: "category",
      fields: ["category", "subCategory", "details", "date", "actions"],
      items: [
        {
          category: "Academics",
          subCategory: "Study",
          details: "certificates",
          date: "4 Nov 2021",
        },
          {
          category: "Academics",
          subCategory: "Study",
          details: "certificates",
          date: "4 Nov 2021",
        },
          {
          category: "Academics",
          subCategory: "Study",
          details: "certificates",
          date: "4 Nov 2021",
        },
      ],
      form: {
        category: "",
        subCategory: "",
        details: "",
        date: "",
      },
      filteredTask:[
        {
          subCategory: "Certificate",
          details: "Klic Certificate 2021 October"
        }
      ],
      selected: null,
      categories: [
        { value: null, text: "Please select an option" },
        { value: "Academic", text: "Academics" },
        { value: "Marketing", text: "Marketing" },
        { value: "Administration", text: "Administration" },
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
  components: {
    ValidationProvider,
    ValidationObserver,
    AuthLayout
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate().then((success) => {
        if (!success) {
          return;
        }

        alert("Form has been submitted!");

        // Resetting Values
        this.firstName = this.lastName = this.email = "";
        // this.form = null;

        // Wait until the models are updated in the UI
        this.$nextTick(() => {
          this.$refs.form.reset();
        });
      });
    },
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
}
};
</script>

<style>
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