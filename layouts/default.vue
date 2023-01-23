<template>
  <div class="page-content page-content--ng">
    <div class="m-main m-layout-main">
      <div class="m-main-mid m-has-bottom-nav">
        <nuxt/>
        <bottom-nav :show="true"></bottom-nav>
      </div>
      <betslip-container :show_betslip="show_betslip"></betslip-container>
    </div>
  </div>
</template>

<script>
import BetslipContainer from '~/components/BetslipContainer.vue'
import BottomNav from '~/components/BottomNav.vue'
export default {
  components: { BottomNav, BetslipContainer },
  data(){
    return {
      show_betslip: false
    }
  },
  created() {
    this.$nuxt.$on('toggleBetslip', () => {
        if(!this.show_betslip){
          $('body').addClass('no-scroll')
        }else{
          $('body').removeClass('no-scroll')
        }
        this.show_betslip = !this.show_betslip;
    })
  },

}
</script>

<style>

</style>
