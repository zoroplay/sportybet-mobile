<template>
  <div @click="addToBetslip" class="m-outcome m-event-outcome-default" :class="[odds == undefined ? 'm-outcome--disabled':'', isSelected(createID(fixture.provider_id, markets.id, outcome.name.toLowerCase(), outcome.id ), betslip ) ? 'm-outcome--checked' : '']" data-op="label-odds">
    <span class="m-outcome-odds"> {{ odds }} </span>
    <span v-if="odds == undefined" class="m-outcome-odds m-icon-lock"></span>
  </div>
</template>

<script>
export default {
  name: "live-odds",
  props: ["markets", "odds", "outcome","name","fixture"],
  methods:{
    addToBetslip() {
      const data = {
        fixture: this.fixture,
        market_id: this.markets.id,
        market_name: this.markets.name,
        odds: this.odds,
        odd_id: this.outcome.id,
        odd_name: this.outcome.type,
        ele_id: this.createID(
          this.fixture.provider_id,
          this.markets.id,
          this.outcome.type,
          this.outcome.id
        ),
        fixture_type: 'live'
      };
      this.$store.dispatch("coupon/addToCoupon", data);
    }
  }
};
</script>

<style></style>
