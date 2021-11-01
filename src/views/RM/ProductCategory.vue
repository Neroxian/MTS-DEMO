<template>
  <auth-layout>
    <div>
      <div>
        <h3 class="px-1 py-2 font-weight-bold">Product Category</h3>

        <div class="card-box mb-4" v-if="show">
          <h4 class="mb-2">Add Product Category</h4>
          <ValidationObserver ref="form">
            <b-form @submit.prevent="onSubmit">
              <div>
                <ValidationProvider
                  mode="eager"
                  rules="required|alpha"
                  name="Sub category"
                  v-slot="{ classes, errors }"
                >
                  <b-form-group
                    class="mb-2"
                    id="input-group-2"
                    label-for="input-2"
                  >
                    <template v-slot:label> Category Name :</template>
                    <b-form-input
                      class="control"
                      :class="classes"
                      id="input-2"
                      v-model="form.subCategory"
                    ></b-form-input>
                    <span class="highlightError">{{ errors[0] }}</span>
                  </b-form-group>
                </ValidationProvider>

                <b-form-group
                  class="mb-3"
                  id="input-group-3"
                  label="Details :"
                  label-for="input-2"
                >
                  <b-form-textarea
                    id="input-2"
                    v-model="form.details"
                    no-resize
                  ></b-form-textarea>
                </b-form-group>

                <!-- Button  -->
                <div class="button-list text-center">
                  <button
                    type="submit"
                    class="btn width-sm btn-success waves-effect waves-light"
                  >
                    <i class="mdi mdi-plus-thick"></i> Add
                  </button>
                </div>
              </div>
            </b-form>
          </ValidationObserver>
        </div>

        <!-- Responsive Table -->

        <div class="card-box">
          <div class="d-flex align-items-center row mb-2">
            <h4 class="mb-2 col-6">All Product Category</h4>
            <div class="col-6 button-list text-right">
              <button
                type="submit"
                class="btn btn-success waves-effect waves-light"
                @click="toggleAdd"
              >
               Add Category
              </button>
            </div>
          </div>

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
            responsive
            stacked="sm"
            :striped="isSmall"
            head-variant="light"
            fixed="fixed"
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

            <!-- Actions -->

            <template #cell(actions) v-if="!isSmall" class="special">
              <button class="btn btn-sm width-xs my-1 mx-1 btn-info">
                <i class="mdi mdi-pencil-outline"></i>
                Edit
              </button>
              <button class="btn btn-sm width-xs btn-danger">
                <i class="mdi mdi-trash-can-outline"></i>Delete
              </button>
            </template>
          </b-table>
        </div>
      </div>
    </div>
  </auth-layout>
</template>

<script>
import { configure } from "vee-validate";
import { ValidationProvider, ValidationObserver } from "vee-validate";
import { extend } from "vee-validate";
import { required, email, alpha } from "vee-validate/dist/rules";
import AuthLayout from "../../layouts/auth-layout.vue";

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
      show: false,
      size: window.innerWidth,
      defaultKey: "category",
      fields: [
        "category",
        "subCategory",
        "details",
        "date",
        "actions"
      ],
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
      filteredTask: [
        {
          subCategory: "Certificate",
          details: "Klic Certificate 2021 October",
        },
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
    AuthLayout,
  },
  methods: {
    toggleAdd() {
      this.show = !this.show;
    },
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
  },
};
</script>

<style>
.special{
  background-color: black;
}
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

/* Validation */

.highlightError {
  color: #eb0600;
}

.control.is-valid input {
  border: 1px #045929 solid;
}
</style>