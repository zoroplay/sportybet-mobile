<template>
  <div id="popupLogin" style="height: 100%">
    <div class="register-and-login">
      <div id="loginStep" class="page-container page-fixed">
        <div class="change-region-wrap">
          <img
            src="//s.sporty.net/global/main/modules/common-wap/components/layout/pagelate/footer/image/ngLogo.7bacdd8c1b.png"
            alt="Nigeria"
          />
          <span class="current-country">Nigeria</span>
          <span
            class="change-country"
            data-cms-key="change"
            data-cms-page="common_functions"
            >Change</span
          >
          <i class="m-icon-right"></i>
          <span @click="$router.go(-1)" class="close"></span>
        </div>
        <div class="login-container">
          <form style="width: 100%">
            <div
              class="verifyInputs m-input-wap-wrapper m-input-wap-group m-input-wap-group--prepend"
              data-op="login-phone"
            >
              <div class="m-input-wap-prepend m-input-wap-prepend--default">
                <div>+234</div>
              </div>
              <i
                class="m-input-wap-icon m-input-wap-icon--clickable m-input-wap-icon--show m-icon-delete"
              ></i>
              <input
                type="tel"
                v-model="formData.phone_no"
                placeholder="Mobile Number"
                maxlength="18"
                class="m-input-wap fs-exclude data-hj-suppress"
              />
            </div>
            <div data-op="login-phone-err" class="error-message"></div>
            <div class="verifyInputs m-input-wap-wrapper" data-op="login-pswd">
              <i class="m-input-wap-text--icon" style="display: none"
                ><img
                  src="//s.sporty.net/global/main/modules/common-wap/components/input/img/eye.a86db3dafb.svg"
              /></i>
              <i class="m-input-wap-text--icon" style=""
                ><img
                  width="20px;"
                  height="20px"
                  src="//s.sporty.net/global/main/modules/common-wap/components/input/img/eye-slash.1b289def14.svg"
              /></i>
              <input
                type="password"
                v-model="formData.password"
                placeholder="Password"
                class="m-input-wap fs-exclude data-hj-suppress"
              />
            </div>
            <div data-op="login-pswd-err" class="error-message"></div>
            <button
              @click.prevent="loginUser($event)"
              class="af-button login-btn af-button--primary"
              :class="loading ? 'is-loading':''"
            >
              <span v-if="!loading"> Login </span>
              <span
                v-if="loading"
                ><div class="spinner-border spinner-border-sm" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
                Loading
              </span
              >
            </button>
          </form>
          <div class="action-wrap">
            <div data-op="login-forgot-pswd">
              <span
                data-cms-key="forgot_password"
                data-cms-page="common_functions"
                >Forgot Password</span
              >
              ?
            </div>
            <div class="blank-block"></div>
            <div
              data-op="login-create-account"
              data-cms-key="create_new_account"
              data-cms-page="page_login"
            >
              Create New Account
            </div>
          </div>
        </div>
        <div class="or-area">
          <div data-cms-key="or" data-cms-page="page_login">Or</div>
        </div>

        <div class="activate-setting">
          <span
            >To deactivate or reactivate your account
            <span
              class="action"
              data-cms-key="click_here"
              data-cms-page="page_deactivate"
              >click here</span
            >.</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  layout: "main",
  data() {
    return {
      formData: {
        username: "09084780270",
        password: "password",
      },
      showError: false,
      errorMsg: "",
      loading: false,
      showBalance: true,
    };
  },
  methods: {
    async loginUser() {
      this.loading = true;
      await this.$auth
        .loginWith("local", { data: this.formData })
        .then(async (res) => {
          // const data = res.data.data.user
          // this.$auth.setUser(data)
          // this.$auth.$storage.setUniversal('user', data, true)
          this.$router.push("/");
        })
        .catch((error) => {
          $("#loginBtn").text("Login").attr("disabled", false);
          this.error = true;
          console.log(error);
        });
    },
    toggleBalance() {
      this.showBalance = !this.showBalance;
    },
    async logout() {
      await this.$auth.logout();
      this.$auth.$storage.removeCookie("auth.user", true);
    },
  },
};
</script>

<style></style>
