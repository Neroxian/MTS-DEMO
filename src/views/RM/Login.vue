<template>
  <div class="mainform">
    <b-form @submit.prevent="login">
      <div class="mb-3 d-flex justify-content-center">
        <img src="@/assets/solar.png" alt="logo" width="200" />
      </div>
      <b-form-group label="Login ID: " label-for="login-id">
        <b-form-input
          id="login-id"
          type="text"
          placeholder="Login ID"
          v-model="loginID"
          class="shadow-none"
          required
        />
      </b-form-group>
      <b-form-group label="Password: " label-for="passsword">
        <b-form-input
          id="password"
          type="password"
          placeholder="password"
          v-model="password"
          class="shadow-none"
          required
        />
      </b-form-group>
      <b-form-checkbox
        id="remember-me"
        v-model="rememberMe"
        class="shadow-none"
      >
        Remember me
      </b-form-checkbox>
      <div class="my-2 text-right">
        <b-button type="submit" variant="success" class="width-sm shadow-none"
          >Login</b-button
        >
      </div>
    </b-form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      loginID: "",
      password: "",
      rememberMe: false,
    };
  },
  methods: {
    login() {
      console.log(this.email, this.password, this.rememberMe);
    },
  },
};
</script>

<style scoped>
.mainform {
  width: 50%;
  padding: 1rem 3rem;
  border-radius: 0.4rem;
  /* margin: auto; */
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* box-shadow: 0px 0px 5px 1px rgba(143,143,143,0.89);
-webkit-box-shadow: 0px 0px 5px 1px rgba(143,143,143,0.89);
-moz-box-shadow: 0px 0px 5px 1px rgba(143,143,143,0.89); */
}
@media only screen and (max-width: 600px) {
  .mainform {
    width: 90%;
    padding: 1rem 3rem;
    border-radius: 0.4rem;
    margin: auto;
    background-color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* box-shadow: 0px 0px 5px 1px rgba(143,143,143,0.89);
-webkit-box-shadow: 0px 0px 5px 1px rgba(143,143,143,0.89);
-moz-box-shadow: 0px 0px 5px 1px rgba(143,143,143,0.89); */
  }
}
</style>