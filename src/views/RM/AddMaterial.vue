<template>
  <auth-layout>
    <div>
      <b-toaster name="toaster"></b-toaster>
          <h3 class="px-1">Add Material</h3>

      <b-form @submit.prevent="submit" class="card-box">
        <b-form-group label-for="material-name">
          <template v-slot:label>
            Material name <span class="text-danger">*</span>
          </template>
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
          <template v-slot:label>
            Material description <span class="text-danger">*</span>
          </template>
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
            label="Material Category"
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
            label="Select Vendor: "
            label-for="vendor"
            class="col-12 col-md-6"
          >
            <b-form-select
              id="vendor"
              class="shadow-none"
              v-model="vendor"
              :options="vendors"
            />
          </b-form-group>
        </div>

        <div class="row">
          <b-form-group
            label="Upload image:"
            label-for="file-slect"
            class="col-12 col-md-6"
          >
            <b-form-file
              id="file-slect"
              v-model="file"
              placeholder="Choose a file or drop it here..."
            ></b-form-file>
          </b-form-group>
        </div>

        <div class="text-center mt-2">
          <b-button
            type="submit"
            class="shadow-none width-sm"
            variant="success"
          >
            Add Material
          </b-button>
        </div>
      </b-form>

          <h3 class="px-1 mt-4">All Materials</h3>
      <div class="card-box">
        <div class="d-flex justify-content-end row">
          <div class="col-12 col-md-6 my-2">
            <b-form-select
              v-model="searchBy"
              :options="searchByOptions"
              class="shadow-none"
            />
          </div>
          <div class="col-12 col-md-6 my-2">
            <b-form-input
              :placeholder="`Search by ${this.searchBy}`"
              class="shadow-none"
              v-model="searchInput"
            />
          </div>
        </div>
        <div>
          <b-table
            :items="filteredMaterials"
            :fields="fields"
            bordered
            responsive
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
        </div>
      </div>

      <!-- Edit Modal -->
      <b-modal ref="edit-modal" hide-footer centered>
        <template #modal-title> Edit Material </template>
        <div v-if="materialToBeUpdated">
          <b-form>
            <b-form-group label="Material name: " label-for="update-name">
              <b-form-input
                id="update-name"
                type="text"
                class="shadow-none"
                v-model="materialToBeUpdated.name"
              />
            </b-form-group>
            <b-form-group
              label="Material details: "
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
  name: "AddMaterial",
  components: {
    AuthLayout,
  },
  data() {
    return {
      name: "",
      details: "",
      manufacturingDate: "",
      expiryDate: "",
      vendor: "",
      category: "",
      subCategory: "",
      price: 0,
      fields: [
        { key: "id", label: "Sr no." },
        { key: "name", label: "Name" },
        { key: "details", label: "Details" },
        // { key: "manufacturingDate", label: "Manufacturing Date" },
        // { key: "expiryDate", label: "Expiry Date" },
        { key: "vendor", label: "Vendor" },
        { key: "category", label: "Category" },
        // { key: "subCategory", label: "Sub Category" },
        // { key: "price", label: "Price" },
        { key: "actions", label: "Actions" },
      ],
      materials: [
        {
          id: 1,
          name: "Books",
          details: "Books from XYZ",
          manufacturingDate: "2021-08-01",
          expiryDate: "2021-10-31",
          vendor: "XYZ",
          category: "Academic",
          subCategory: "MSCIT",
          price: 100,
        },
        {
          id: 2,
          name: "Pens",
          details: "Pen from ABC",
          manufacturingDate: "2021-08-01",
          expiryDate: "2021-10-31",
          vendor: "ABC",
          category: "Exams",
          subCategory: "ERA",
          price: 500,
        },
      ],
      searchBy: "name",
      searchInput: "",
      editModal: {
        id: "edit-modal",
        title: "Edit material",
      },
      categories: ["Certificate", "Books"],
      vendors: ["XYZ Company", "ABC Vendors"],
      searchByOptions: ["name", "vendor", "category"],
      materialToBeUpdated: null,
      materialToBeDeleted: null,
    };
  },
  methods: {
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
  },
};
</script>

<style scoped>
.card-box {
  margin: auto;
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
