<template>
  <div class="page-content page-content--ng">
    <div class="m-main m-layout-main">
      <div class="m-main-mid m-has-bottom-nav">
        <nuxt/>
        <bottom-nav></bottom-nav>
      </div>
    </div>
  </div>
</template>

<script>
import BottomNav from '~/components/BottomNav.vue'
export default {
  components: { BottomNav },

}
</script>

<style>

</style>
