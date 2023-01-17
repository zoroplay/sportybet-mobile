<template>
  <div>
    <div class="m-openbet-header">
      <div v-if="!$auth.loggedIn" class="no-login">
        <span data-cms-key="register" data-cms-page="common_functions"
          >Register</span
        >
        <span data-cms-key="log_in" data-cms-page="common_functions"
          >Login</span
        >
      </div>
      <div v-else class="is-login">
        <span
          ><img src="//s.sporty.net/common/avatar/30.png" class="usr-img"
        /></span>
        <span class="balance"><span>NGN </span> <span>0.00</span></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
