<template>
  <div class="m-bet-content" style="position: relative">
    <div data-v-58f6aa8f="" class="m-table m-live-table marketIndicatedStripe football" style="top: 181px">
      <div data-v-58f6aa8f="" class="m-table-row m-name-row">
        <div data-v-58f6aa8f="" class="m-table-cell m-name-cell">
          <div data-v-58f6aa8f="" class="m-name">
            <div data-v-58f6aa8f="" v-for="(title, i) in markets.outcomes" :key="i" class="market-name">{{ title.name }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="m-league">
      <div class="m-league-title">
        <span class="icon-triangle"></span>
        <span class="text">{{ data.category }} - {{ data.Name }}</span>
        <span class="m-event-size"></span>
        <!---->
      </div>
      <div class="m-league-conent">
        <div class="m-table m-live-table football">
          <!---->
          <div v-for="(event, s) in data.Events" :key="s" data-op="label-event-live" class="m-event-live m-live-row">
            <div class="m-event-meta">
              <!---->
              <div data-v-33c087e8="" class="label-container event-labels"></div>
              <span class="m-event-time">{{ matchTime(event.live_data?.match_time) }}'</span>
              <span class="match-status">{{ matchStatus(event.match_status) }}</span>
              <!---->
              <div class="live-marker" data-cms-key="live" data-cms-page="common_functions">
                Live
              </div>
            </div>
            <div class="m-table-row m-live-table">
              <div class="m-table-cell m-info-cell" @click="$router.push({name:'sport-name-live-eventid',params:{name:event.sport_name.toLowerCase(),eventid:event.provider_id} })">
                <div class="team">{{ event.team_a }}</div>
                <div class="team">{{ event.team_b }}</div>
              </div>
              <div class="m-table-cell score">
                <div class="set-score">{{ liveScore(event?.score, "home") }}</div>
                <div class="set-score">{{ liveScore(event?.score, "away") }}</div>
              </div>
              <!---->
              <!---->
              <div class="m-table-cell m-market-cell">
                <div class="m-market m-event-market-default market-id-1">
                  <live-odds
                    v-for="(o, index) in markets.outcomes"
                    :key="index"
                    :active="o.active"
                    :odds="getLiveOdds(event.live_data?.markets, markets, o)"
                    :outcome="o"
                    :fixture="event"
                    :markets="markets"
                  ></live-odds>
                </div>
              </div>
            </div>
            <div class="m-event-footer">
              <div class="m-market-size">+{{ getActiveMarkets(event.live_data?.markets).length }}&gt;</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!---->
  </div>
</template>

<script>
import LiveOdds from './LiveOdds.vue';
  export default {
  components: { LiveOdds },
    name: "live-fixtures",
    props: ["data", "loading", "markets"],
  };
</script>

<style></style>
