<template>
  <auth-layout>
    <div>
      <b-toaster name="toaster"></b-toaster>
      <h3 class="px-1 py-2 font-weight-bold">Product</h3>

      <b-form @submit.prevent="submit" class="card-box mb-4" v-if="show">
        <h4 class="mb-2">Add Product</h4>
        <b-form-group label-for="material-name">
          <template v-slot:label> Product name :</template>
          <b-form-input
            id="material-name"
            type="text"
            class="shadow-none form-control"
            placeholder=""
            v-model="name"
            required
          />
        </b-form-group>
        <b-form-group label-for="material-details">
          <template v-slot:label> Product description :</template>
          <b-form-textarea
            id="material-details"
            class="shadow-none"
            placeholder=""
            v-model="details"
            no-resize
            required
          />
        </b-form-group>

        <div class="row">
          <b-form-group
            label="Product Category :"
            label-for="category"
            class="col-12 col-md-6"
          >
            <b-form-select
              id="category"
              class="shadow-none"
              v-model="category"
              :options="categories"
            />
          </b-form-group>
          <b-form-group
            label="Upload image :"
            label-for="file-slect"
            class="col-12 col-md-6"
          >
            <b-form-file id="file-slect" v-model="file"></b-form-file>
          </b-form-group>
        </div>

        <div class="text-center mt-2">
          <b-button
            type="submit"
            class="shadow-none width-sm"
            variant="success"
          >
            <i class="mdi mdi-plus-thick"></i> Add
          </b-button>
        </div>
      </b-form>

      <div class="card-box">
        <div class="row">
          <h4 class="col-6">All Product</h4>
          <div class="col-6 text-right">
            <b-button
              type="submit"
              class="shadow-none width-sm"
              variant="success"
              @click="toggleAdd"
            >
              Add Product
            </b-button>
          </div>
        </div>

        <div class="d-flex justify-content-end row mb-3" v-if="!isSmall">
          <div class="col-12 col-md-6 my-1">
            <b-form-select
              v-model="searchBy"
              :options="searchByOptions"
              class="shadow-none"
            />
          </div>
          <div class="col-12 col-md-6 my-1">
            <b-form-input
              :placeholder="`Search by ${this.searchBy}`"
              class="shadow-none"
              v-model="searchInput"
            />
          </div>
        </div>
        <!-- <div>
          <b-table
            :items="filteredMaterials"
            :fields="fields"
            bordered
            responsive
            striped
            class="text-center"
          >
            <template #cell(actions)="row" class="">
              <b-button
                variant="success"
                class="shadow-none mx-1 width-sm"
                @click="setEditMaterial(row.item.id)"
              >
                Edit
              </b-button>
              <b-button
                variant="danger"
                class="shadow-none mx-1 width-sm"
                @click="setDeleteMaterial(row.item.id)"
              >
                Delete
              </b-button>
            </template>
          </b-table>
        </div> -->

        <!-- NEW TABLE -->

        <div class="form-group">
          <b-form-group label="Sort by :" v-if="isSmall">
            <b-form-select v-model="defaultKey" style="width: 100%">
              <option v-for="(key, idx) in fields" :key="idx" :value="key">
                {{ key }}
              </option>
            </b-form-select>
          </b-form-group>
        </div>

        <b-table
          id="dataTable"
          responsive
          stacked="sm"
          :striped="isSmall"
          head-variant="light"
            fixed="fixed"
          borderless
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

          <template #row-details="row" v-if="isSmall" >
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

          <!-- Actions -->
          <template #cell(actions) v-if="!isSmall" class="special">
            <button class="btn btn-info btn-sm width-xs my-1 mx-1">
              <i class="mdi mdi-pencil-outline"></i> Edit
            </button>
            <button class="btn btn-danger btn-sm width-xs">
              <i class="mdi mdi-trash-can-outline"></i>Delete
            </button>
          </template>
        </b-table>
        <!--  TABLE ENDS -->
      </div>

      <!-- Edit Modal -->
      <b-modal ref="edit-modal" hide-footer centered>
        <template #modal-title> Edit Product </template>
        <div v-if="materialToBeUpdated">
          <b-form>
            <b-form-group label="Product name: " label-for="update-name">
              <b-form-input
                id="update-name"
                type="text"
                class="shadow-none"
                v-model="materialToBeUpdated.name"
              />
            </b-form-group>
            <b-form-group
              label="Product details: "
              label-for="material-details"
            >
              <b-form-textarea
                id="material-details"
                class="shadow-none"
                placeholder="Enter details about the material"
                v-model="materialToBeUpdated.details"
                no-resize
                required
              />
            </b-form-group>

            <div class="row">
              <b-form-group
                label="Select Category"
                label-for="category"
                class="col-12 col-md-6"
              >
                <b-form-select
                  id="category"
                  class="shadow-none"
                  v-model="materialToBeUpdated.category"
                  :options="categories"
                />
              </b-form-group>
              <b-form-group
                label="Select Vendor"
                label-for="vendor"
                class="col-12 col-md-6"
              >
                <b-form-select
                  id="vendor"
                  class="shadow-none"
                  v-model="materialToBeUpdated.vendor"
                  :options="vendors"
                />
              </b-form-group>
            </div>
            <div class="text-right my-2">
              <b-button
                variant="success"
                class="shadow-none mr-1 width-sm"
                @click="editMaterial"
                >Update</b-button
              >
              <b-button
                variant="danger"
                class="shadow-none width-sm"
                @click="closeModal('edit-modal')"
                >Close</b-button
              >
            </div>
          </b-form>
        </div>
      </b-modal>
      <!-- Delete Modal -->
      <b-modal ref="confirm-delete-modal" hide-footer centered>
        <template #modal-title> Confirm delete? </template>
        <p>Are you sure you want to delete material?</p>
        <div class="d-flex justify-content-end">
          <b-button
            variant="danger"
            class="shadow-none mr-1 width-sm"
            @click="deleteMaterial"
            >Delete</b-button
          >
          <b-button
            variant="secondary"
            class="shadow-none width-sm"
            @click="closeModal('confirm-delete-modal')"
            >Close</b-button
          >
        </div>
      </b-modal>
    </div>
  </auth-layout>
</template>

<script>
import AuthLayout from "@/layouts/auth-layout";
import { mapMutations } from "vuex";

export default {
  name: "AddProduct",
  components: {
    AuthLayout,
  },
  data() {
    return {
      // NEW TABLE
      show: false,
      size: window.innerWidth,
      defaultKey: "category",
      fields: [
        "materialID",
        "name",
        "details",
        "category",
        "actions"
      ],
      items: [
        {
          materialID: "P25M31",
          id: 1,
          name: "Books",
          details: "Books from XYZ",
          category: "Academic",
          subCategory: "MSCIT",
          price: 100,
        },
        {
          materialID: "X25M31",
          id: 2,
          name: "Pens",
          details: "Pen from ABC",
          category: "Exams",
          subCategory: "ERA",
          price: 500,
        },
      ],
      // NEW TABLE ENDS
      name: "",
      details: "",
      manufacturingDate: "",
      expiryDate: "",
      category: "",
      subCategory: "",
      price: 0,
      // fields: [
      //   { key: "id", label: "Sr no." },
      //   { key: "name", label: "Name" },
      //   { key: "details", label: "Details" },
      //   { key: "vendor", label: "Vendor" },
      //   { key: "category", label: "Category" },
      //   { key: "actions", label: "Actions" },
      // ],
      // materials: [
      //   {
      //     id: 1,
      //     name: "Books",
      //     details: "Books from XYZ",
      //     manufacturingDate: "2021-08-01",
      //     expiryDate: "2021-10-31",
      //     vendor: "XYZ",
      //     category: "Academic",
      //     subCategory: "MSCIT",
      //     price: 100,
      //   },
      //   {
      //     id: 2,
      //     name: "Pens",
      //     details: "Pen from ABC",
      //     manufacturingDate: "2021-08-01",
      //     expiryDate: "2021-10-31",
      //     vendor: "ABC",
      //     category: "Exams",
      //     subCategory: "ERA",
      //     price: 500,
      //   },
      // ],
      searchBy: "",
      searchInput: "",
      editModal: {
        id: "edit-modal",
        title: "Edit material",
      },
      categories: ["Certificate", "Books"],
      vendors: ["XYZ Company", "ABC Vendors"],
      searchByOptions: [" ", "name", "category"],
      materialToBeUpdated: null,
      materialToBeDeleted: null,
    };
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
  // TABLE ENDS
  methods: {
    toggleAdd() {
      this.show = !this.show;
    },
    submit() {
      this.materials.push({
        id: Date.now(),
        name: this.name.trim(),
        details: this.details.trim(),
        manufacturingDate: this.manufacturingDate,
        expiryDate: this.expiryDate,
        vendor: this.vendor,
        category: this.category,
        subCategory: this.subCategory,
        price: this.price,
      });
      // Clear form
      this.reset();
      this.$bvToast.toast("Material added successfully!", {
        title: "Success",
        variant: "success",
        solid: true,
        autoHideDelay: 2000,
      });
    },
    reset() {
      this.name = "";
      this.details = "";
      this.manufacturingDate = "";
      this.expiryDate = "";
      this.category = "";
      this.vendor = "";
    },
    setEditMaterial(id) {
      const foundMaterial = this.materials.find(
        (material) => material.id === id
      );
      // Copy
      this.materialToBeUpdated = { ...foundMaterial };
      this.showModal("edit-modal");
    },
    setDeleteMaterial(id) {
      // console.log(id)
      this.materialToBeDeleted = id;
      this.$refs["confirm-delete-modal"].show();
    },
    showModal(modalRefName) {
      this.$refs[modalRefName].show();
    },
    closeModal(modalRefName) {
      this.$refs[modalRefName].hide();
    },
    editMaterial() {
      // console.log(this.materialToBeUpdated);
      this.$refs["edit-modal"].hide();
    },
    deleteMaterial() {
      this.materials.splice(
        this.materials.findIndex(
          (material) => material.id === this.materialToBeDeleted
        ),
        1
      );
      this.$refs["confirm-delete-modal"].hide();
    },
    ...mapMutations(["addMaterial"]),
  },
  computed: {
    filteredMaterials() {
      if (!this.searchInput || !this.searchInput.trim()) {
        return this.materials;
      }
      return this.materials.filter((material) => {
        if (
          material[this.searchBy]
            .toLowerCase()
            .match(this.searchInput.trim().toLowerCase())
        ) {
          return true;
        }
        return false;
      });
    },
    isValidExpiryDate() {
      if (!this.manufacturingDate || !this.expiryDate) {
        return true;
      }
      const manufacturingDate = new Date(this.manufacturingDate);
      const expiryDate = new Date(this.expiryDate);

      return expiryDate.getTime() > manufacturingDate.getTime();
    },
    // NEW TABLE
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
    isLarge() {
      return this.size < 691;
    },
  },
};
</script>

<style scoped>
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
    padding: 0.2rem 2rem !important;
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
