<template>
  <div id="popupLogin" style="height: 100%">
    <div class="register-and-login">
      <div id="enterMobile" class="page-container page-fixed">
        <div class="change-region-wrap">
          <img
            src="//s.sporty.net/global/main/modules/common-wap/components/layout/pagelate/footer/image/ngLogo.7bacdd8c1b.png"
            alt="Nigeria" />
          <span class="current-country">Nigeria</span>
          <span class="change-country" data-cms-key="change" data-cms-page="common_functions">Change</span>
          <i class="m-icon-right"></i> <span @click="$router.push('/')" class="close"></span>
        </div>
        <div class="enter-mobile-container">
          <form>
            <div class="enter-mobile-label">
              <p data-cms-key="join_sportybet_with_your_mobile_number" data-cms-page="page_login">
                Join SportyBet with your mobile number
              </p>
            </div>
            <div class="verifyInputs mb-4 m-input-wap-wrapper m-input-wap-group m-input-wap-group--prepend">
              <div class="m-input-wap-prepend m-input-wap-prepend--default">
                <div>+234</div>
              </div>
              <i @click="clear" v-if="formData.phone_no != ''" class="m-input-wap-icon m-input-wap-icon--clickable m-input-wap-icon--show m-icon-delete"></i>
              <input type="tel" v-model="formData.phone_no" placeholder="Mobile Number" maxlength="18"
                class="m-input-wap fs-exclude data-hj-suppress" />
            </div>
            <div class="verifyInputs m-input-wap-wrapper">
              <i class="m-input-wap-text--icon" @click="toggleShow" v-if="showPassword"><img
                  src="//s.sporty.net/global/main/modules/common-wap/components/input/img/eye.a86db3dafb.svg" /></i>
              <i class="m-input-wap-text--icon" @click="toggleShow" v-else><img width="20px;" height="20px"
                  src="//s.sporty.net/global/main/modules/common-wap/components/input/img/eye-slash.1b289def14.svg" /></i>
              <input type="password" v-if="!showPassword" v-model="formData.password" placeholder="Password" class="m-input-wap fs-exclude data-hj-suppress" />
              <input type="text" v-else v-model="formData.password" placeholder="Password" class="m-input-wap fs-exclude data-hj-suppress" />
            </div>
            <button :class="formData.password == '' ? 'is-disabled':''" class="af-button enter-mobile-btn af-button--primary">
              <span> Create Account </span>
            </button>
          </form>
          <div class="action-label" @click="toLogin">
            Already have an account? Log In
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "register",
    layout: "main",
    data(){
      return {
        formData:{
          phone_no: '',
          password: '',
        },
        showPassword: false
      }
    },
    methods:{
      clear(){
        this.formData.phone_no = ''
      },
      toggleShow(){
        this.showPassword = !this.showPassword
      },
      register(){

      },
      toLogin(){
        return this.$router.push('/login')
      }
    }
  };
</script>

<style></style>
