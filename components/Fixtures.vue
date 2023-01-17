<template>
  <div>
    <div
      v-for="(group, index) in data"
      :key="index"
      class="m-table m-sports-table football"
    >
      <div class="m-table-row m-date-row">
        <div class="m-table-cell m-date">{{ formatDate(index) }}</div>
        <div class="m-table-cell market-title">
          <div>1</div>
          <div>X</div>
          <div>2</div>
        </div>
      </div>
      <div
        v-for="(event, s) in group"
        :key="s"
        style="height: 97px; width: 100%"
      >
        <div data-op="label-prematch" class="m-event-sport m-sports-row">
          <div class="m-event-meta">
            <div data-v-33c087e8="" class="label-container event-labels"></div>
            <span class="m-time">{{ event.event_time }}</span>
            <span class="m-game-id">ID {{ event.id }}</span>
            <span class="m-league-name"
              >{{ event.sport_category_name }} -
              {{ event.sport_tournament_name }}</span
            >
          </div>
          <div class="m-table-row m-sports-table">
            <div class="m-table-cell m-info-cell">
              <div class="team">{{ event.team_a }}</div>
              <div class="team">{{ event.team_b }}</div>
            </div>
            <div class="m-table-cell m-market-cell">
              <div class="m-market m-event-market-default market-id-1">
                <div
                  v-for="(odds, o) in event?.odds.slice(0, 3)"
                  :key="o"
                  class="m-outcome m-event-outcome-default"
                  data-op="label-odds"
                  @click="addToBetslip(event, odds, 3)"
                  :class="
                    isSelected(
                      createID(
                        event.provider_id,
                        predictions[0]?.market_id,
                        odds.name,
                        odds.id
                      ),
                      betslip
                    )
                      ? 'm-outcome--checked'
                      : ''
                  "
                >
                  <span data-op="label-odds-amount" class="m-outcome-odds">{{
                    odds.odds
                  }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="m-event-footer">
            <div class="m-market-size">+{{ event.markets_count }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "fixtures",
  props:["data", "predictions"],
  methods:{
    addToBetslip(game,odds) {
      const data = {
        fixture: game,
        market_id: this.predictions[0]?.market_id,
        market_name: this.predictions[0]?.market_name,
        odds: odds.odds,
        odd_id: odds.id,
        odd_name: odds.name,
        ele_id: this.createID(
          game.provider_id,
          this.predictions[0]?.market_id,
          odds.name,
          odds.id
        ),
        fixture_type: game.fixture_type
      };
      this.$store.dispatch("coupon/addToCoupon", data);
    }
  }
};
</script>

<style></style>
