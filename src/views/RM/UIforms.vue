<template>
  <div>
    <div>
      <div>
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-body">
                <div class="row">
                  <div class="col-lg-6">
                    <div class="form-group mb-3">
                      <b-form-group
                        id="input-group-1"
                        label="Text:"
                        label-for="input-1"
                      >
                        <b-form-input
                          id="input-1"
                          v-model="email"
                          type="text"
                        ></b-form-input>
                      </b-form-group>
                    </div>

                    <div class="form-group mb-3">
                      <b-form-group
                        id="input-group-2"
                        label="Email:"
                        label-for="input-2"
                      >
                        <b-form-input
                          id="input-2"
                          v-model="email"
                          type="email"
                        ></b-form-input>
                      </b-form-group>
                    </div>

                    <div class="form-group mb-3">
                      <b-form-group
                        id="input-group-3"
                        label="Password:"
                        label-for="input-3"
                      >
                        <b-form-input
                          id="input-3"
                          v-model="email"
                          type="password"
                        ></b-form-input>
                      </b-form-group>
                    </div>

                    <div class="form-group mb-3">
                      <b-form-group
                        id="input-group-4"
                        label="Textarea:"
                        label-for="input-4"
                      >
                        <b-form-textarea
                          id="input-4"
                          v-model="text"
                          placeholder="Enter something..."
                          rows="3"
                        ></b-form-textarea>
                      </b-form-group>
                    </div>

                    <div class="form-group mb-3">
                      <b-form-group
                        id="input-group-5"
                        label="Read only:"
                        label-for="input-5"
                      >
                        <b-form-input
                          id="input-5"
                          v-model="email"
                          type="text"
                          readonly=""
                        ></b-form-input>
                      </b-form-group>
                    </div>
                  </div>

                  <div class="col-lg-6">
                    <b-form>
                      <div class="form-group mb-3">
                        <b-form-group
                          id="input-group-6"
                          label="Select input:"
                          label-for="input-6"
                        >
                          <b-form-select
                            id="input-6"
                            v-model="email"
                            :options="options"
                          ></b-form-select>
                        </b-form-group>
                      </div>

                      <div class="form-group mb-3">
                        <b-form-group
                          id="input-group-7"
                          label="Select file:"
                          label-for="input-7"
                        >
                          <b-form-file
                            id="input-7"
                            v-model="email"
                            placeholder="Choose a file or drop it here..."
                          ></b-form-file>
                        </b-form-group>
                      </div>

                      <div class="form-group mb-3">
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

                      <div class="form-group mb-3">
                        <b-form-group
                          id="input-group-9"
                          label="Number:"
                          label-for="input-9"
                        >
                          <b-form-input
                            id="input-9"
                            v-model="email"
                            type="number"
                          ></b-form-input>
                        </b-form-group>
                      </div>

                      <div class="">
                        <h4 class="header-title mt-5 mt-sm-0">
                          Checkboxes and radios
                        </h4>
                        <div class="mt-2">
                          <div class="custom-control custom-checkbox">
                            <b-form-checkbox
                              id="checkbox-1"
                              v-model="not"
                              name="checkbox-1"
                              value="accepted"
                              unchecked-value="not_accepted"
                            >
                              I accept the terms and use
                            </b-form-checkbox>
                          </div>
                        </div>

                        <div class="custom-control custom-radio mt-3">
                          <b-form-group label="Radios">
                            <b-form-radio
                              v-model="selected"
                              name="some-radios"
                              value="A"
                              >Option A</b-form-radio
                            >
                            <b-form-radio
                              v-model="selected"
                              name="some-radios"
                              value="B"
                              >Option B</b-form-radio
                            >
                          </b-form-group>
                        </div>
                      </div>
                    </b-form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>

<script>
export default {
  name: "UIforms",
  data() {
    return {
      email: "",
      selected: null,
      options: [
        { value: "a", text: "This is First option" },
        { value: "b", text: "Selected Option" },
        { value: "d", text: "This one is disabled", disabled: true },
      ],
    };
  },
};
</script>