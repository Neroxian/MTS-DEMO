<template>
  <auth-layout>
    <div>
      <div class="card-box">
        <ValidationObserver ref="form">
          <b-form @submit.prevent="onSubmit">
            <h3 class="bg-light p-2 text-uppercase">
              Create Packaging pattern
            </h3>

            <ValidationProvider
              mode="eager"
              rules="required"
              name="Category"
              v-slot="{ classes, errors }"
            >
              <b-form-group class="mb-3" id="input-group-1" label-for="input-1">
                <template v-slot:label>
                  Select category <span class="text-danger">*</span>
                </template>
                <b-form-select
                  class="control"
                  :class="classes"
                  id="input-1"
                  v-model="form.category"
                  :options="categories"
                ></b-form-select>
                <span class="highlightError">{{ errors[0] }}</span>
              </b-form-group>
            </ValidationProvider>

            <ValidationProvider
              mode="eager"
              rules="required"
              name="Sub-category"
              v-slot="{ classes, errors }"
            >
              <b-form-group class="mb-3" id="input-group-2" label-for="input-2">
                <template v-slot:label>
                  Select sub-category <span class="text-danger">*</span>
                </template>
                <b-form-select
                  class="control"
                  :class="classes"
                  id="input-2"
                  v-model="form.subCategory"
                  :options="subCategories"
                ></b-form-select>
                <span class="highlightError">{{ errors[0] }}</span>
              </b-form-group>
            </ValidationProvider>

            <ValidationProvider
              mode="eager"
              rules="required|alpha"
              name="Material"
              v-slot="{ classes, errors }"
            >
              <b-form-group class="mb-3" id="input-group-3" label-for="input-3">
                <template v-slot:label>
                  Material<span class="text-danger">*</span>
                </template>
                <b-form-input
                  class="control"
                  :class="classes"
                  id="input-3"
                  v-model="form.material"
                  placeholder="Enter name"
                ></b-form-input>
                <span class="highlightError">{{ errors[0] }}</span>
              </b-form-group>
            </ValidationProvider>

            <div class="d-flex row">
              <b-form-group
                class="mb-3 col-12 col-md-6"
                id="input-group-4"
                label="No. of packets"
                label-for="input-4"
              >
                <b-form-input
                  class="control"
                  :class="classes"
                  type="number"
                  id="input-4"
                  v-model="form.packets"
                  placeholder="No. of packets"
                ></b-form-input>
              </b-form-group>

              <b-form-group
                class="mb-3 col-12 col-md-6"
                id="input-group-5"
                label="No. of loose items"
                label-for="input-5"
              >
                <b-form-input
                  class="control"
                  :class="classes"
                  type="number"
                  id="input-5"
                  v-model="form.looseItems"
                  placeholder="Enter name"
                ></b-form-input>
              </b-form-group>
            </div>

            <div class="mb-3">
              <b-form-datepicker
                id="example-datepicker"
                placeholder="Select a date"
                v-model="form.date"
              ></b-form-datepicker>
            </div>

            <!-- Button  -->
            <div class="button-list text-center">
              <button
                type="submit"
                class="btn btn-success width-sm waves-effect waves-light"
              >
                Add sub-category
              </button>
            </div>
          </b-form>
        </ValidationObserver>
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
      form: {
        category: "",
        subCategory: "",
        material: "",
        packets: "",
        looseItems: "",
        date: "",
      },
      selected: null,
      categories: [
        { value: null, text: "Please select an option" },
        { value: "Academic", text: "Academics" },
        { value: "Marketing", text: "Marketing" },
        { value: "Administration", text: "Administration" },
      ],
      subCategories: [
        { value: null, text: "Please select an option" },
        { value: "Academic", text: "Certificates" },
        { value: "Marketing", text: "Books" },
        { value: "Administration", text: "Study materials" },
      ],
    };
  },
  components: {
    ValidationProvider,
    ValidationObserver,
    AuthLayout,
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
};
</script>

<style scoped>
/* .style {
  font-weight: 100;
  color: #6c757d;
  background-color: #f5f6f9;
} */

.card-box {
  margin: auto;
  padding: 0 12px;
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

/* Validation */

.highlightError {
  color: #eb0600;
}

.control.is-valid input {
  border: 1px #045929 solid;
}
</style>