<template>
  <auth-layout>
    <div>
      <div>
        <ValidationObserver ref="form">
          <b-form @submit.prevent="onSubmit">
            <div class="card-box">
              <h4 class="bg-light p-2 text-uppercase">Add material Category</h4>

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
                  <template v-slot:label>
                    Name
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
                label="Description:"
                label-for="input-2"
              >
                <b-form-textarea
                  id="input-2"
                  placeholder="Enter the details here..."
                  v-model="form.details"
                  no-resize
                ></b-form-textarea>
              </b-form-group>
              <div class="text-center">
                <button class="btn width-sm btn-success">Add Category</button>
              </div>
            </div>

            <div class="card-box mt-4">
              <h4 class="bg-light p-2 text-uppercase">
                Previously Added Materials
              </h4>

              <!-- <input type="text" @input="search" placeholder="" /> -->
              <div class="input-group mb-1" id="searchBar">
                <input
                  @input="search"
                  type="text"
                  class="form-control"
                  placeholder="Search categories and details.."
                />
                <div class="input-group-append border">
                  <!-- <button class="btn btn-primary" type="button">OK</button> -->
                  <i
                    class="mdi mdi-magnify px-2 pt-1"
                    style="color: black; font-size: 20px"
                  ></i>
                </div>
              </div>

              <div class="mt-2" id="addedMaterial" ref="table">
                <!-- {{ filteredTask }} -->
                <table class="table text-center table-bordered">
                  <thead class="table-dark">
                    <tr>
                      <th>Sr No.</th>
                      <th>Category</th>
                      <th>Details</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody v-for="(itm, idx) in filteredTask" :key="itm.task">
                    <tr>
                      <td>{{ idx + 1 }}</td>
                      <td>{{ itm.subCategory }}</td>
                      <!-- <td>{{ idx + 1 }}</td> -->
                      <td>{{ itm.details }}</td>
                      <!-- <td>
              <router-link :to="`/editsub/${itm.id}`" style="color: white"
                ><button class="btn btn-primary">Edit</button></router-link
              >
            </td> -->
                      <td>
                        <button
                          @click="openModal(itm.id)"
                          class="btn mx-1 btn-primary width-sm"
                        >
                          Edit
                        </button>
                        <button
                          @click="deleteObj(itm.id)"
                          class="btn width-sm btn-danger"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div class="overlay" v-if="isModalOpen">
              <div tabindex="-1" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-body">
                      <h3 class="text-center borderBtm text-primary">
                        Edit category details..
                      </h3>
                      <form
                        style="background-color: white"
                        class="p-3 border"
                        @submit.prevent="update()"
                      >
                        <div class="form-group">
                          <label
                            for="text"
                            style="float: left"
                            class="text-dark"
                            >Sub-Category:</label
                          >
                          <input
                            type="text"
                            class="form-control"
                            :placeholder="materialToBeUpdated.material"
                            v-model="materialToBeUpdated.material"
                            id="text"
                          />
                        </div>
                        <div class="form-group">
                          <label
                            for="details"
                            style="float: left"
                            class="text-dark"
                            >Sub-Category Details:</label
                          ><br />
                          <textarea
                            name="details"
                            id="details"
                            v-model="materialToBeUpdated.details"
                          >
              materialToBeUpdated.details</textarea
                          >
                        </div>

                        <!-- <button type="submit" class="btn btn-dark"> -->
                        <!-- <router-link to="/about" style="color: white">Submit</router-link> -->
                        <button
                          type="button"
                          class="btn btn-dark width-sm border"
                          @click="isModalOpen = false"
                        >
                          Submit
                        </button>
                        <button
                          class="btn btn-danger width-sm text-light mx-4"
                          @click="isModalOpen = false"
                        >
                          Close
                        </button>
                        <!-- </button> -->
                      </form>
                    </div>
                  </div>
                </div>
                <!-- Button  -->
                <div class="button-list">
                  <button
                    type="submit"
                    class="btn btn-primary waves-effect width-sm waves-light"
                  >
                    <b-icon-plus-circle />
                    Add sub-category
                  </button>
                </div>
              </div>
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