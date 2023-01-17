<template>
  <div class="m-outcome m-event-outcome-default" :class="odds == undefined ? 'm-outcome--disabled':''" data-op="label-odds">
    <span class="m-outcome-odds"> {{ odds }} </span>
    <span v-if="odds == undefined" class="m-outcome-odds m-icon-lock"></span>
  </div>
</template>

<script>
export default {
  name: "live-odds",
  props: ["active", "odds"],
};
</script>

<style></style>
