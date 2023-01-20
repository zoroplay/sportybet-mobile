<template>
  <div>
    <div v-for="(game,g) in data.Events" :key="g" class="m-event-live m-live-row">
      <div class="m-event-meta">
        <div class="label-container event-labels"></div>
        <span class="m-event-time">{{ matchTime(game.live_data?.match_time) }}'</span>
        <span class="match-status">{{ matchStatus(game.match_status) }}</span>
        <span class="m-league-name">{{ game.sport_category_name }} - {{ game.sport_tournament_name }}</span>
        <div class="live-marker">Live</div>
      </div>
      <div class="m-table-row m-live-table">
        <div class="m-table-cell m-info-cell">
          <div class="team">{{ game.team_a }}</div>
          <div class="team">{{ game.team_b }}</div>
        </div>
        <div class="m-table-cell score">
          <div class="set-score">{{ liveScore(game?.score, "home") }}</div>
          <div class="set-score">{{ liveScore(game?.score, "away") }}</div>
        </div>
        <div class="m-table-cell m-market-cell">
          <div class="m-market m-event-market-default market-id-1">
            <live-odds
              v-for="(o, index) in markets.outcomes"
              :key="index"
              :active="o.active"
              :odds="getLiveOdds(game.live_data?.markets, markets, o)"
              :outcome="o"
              :fixture="game"
              :markets="markets"
            ></live-odds>
          </div>
        </div>
      </div>
      <div class="m-event-footer">
        <div class="m-market-size">
          +187&gt;
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "game",
  props: ["data","markets"],
  mounted(){
    // console.log(this.getLiveOdds(this.data.Events[0].live_data?.markets, this.markets, this.markets.outcomes))
  }
};
</script>

<style></style>
