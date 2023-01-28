<template>
  <div class="live-container">
    <div class="m-bet-tab">
      <div class="m-live-title">
        <span>Live </span>
        <div
          class="m-snap-nav-wrap m-sport-type"
        >
          <ul
            class="m-snap-nav flex"
            style="
              transform: translate(0px, 0px) translateZ(0px);
              transition-duration: 350ms;
              transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1);
              width:100%;
              overflow:hidden;
            "
          >
            <li
              v-for="(s, index) in fixtures"
              :key="index"
              class="m-sport-type-item m-snap-nav-item text-capitalize"
              :class="active_sport === s.Id ? 'active' : ''"
              @click.prevent="setActiveSport(s.Id)"
              :id="'live_'+s.Id"
            >
              {{ s.Name }}
            </li>
          </ul>
        </div>
      </div>
      <div v-if="games.length" style="position: relative">
        <div class="m-bet-content">
          <div class="m-table m-live-table football" v-if="games.length">
            <div class="m-table-row m-name-row">
              <div class="m-table-cell m-name-cell">
                <div class="m-name">
                  <div
                    v-for="(title, index) in games[0].headers.markets[0].outcomes"
                    :key="index"
                    class="market-name"
                  >
                    {{ title.name }}
                  </div>
                </div>
              </div>
            </div>
            <game
              v-for="(event,index) in games[0].Tournaments.slice(0,2)"
              :key="index"
              :data="event"
              :markets="games[0].headers.markets[0]"
            ></game>
          </div>
          <div class="view-all">
            <a href="/sport/live" class="">
              All Live Events
            </a>
          </div>
        </div>
      </div>
      <div v-else class="m-loading-wrap"><div class="m-loading dark"><div class="loading"></div> <!----></div></div>
    </div>
  </div>
</template>

<script>
import Game from "./Game.vue";
import market_headers from "../plugins/constants";
export default {
  components: { Game },
  name: "live-container",
  data() {
    return {
      fixtures: [],
      active_sport: 1,
      loading: false
    };
  },
  computed: {
    games() {
      return this.fixtures.filter((x) => this.active_sport == x.Id);
    },
  },
  methods: {
    async getLive() {
      this.loading = true
      await this.$axios.get("sports/live").then((res) => {
        let groupedBySport = this.groupLiveSports(res.data.data.fixtures);
        let sports = res.data.data.sports;
        if (sports.length > 0) {
          sports.forEach((item, key) => {
            item.Tournaments = [];
            item.headers = market_headers.find((sport) => sport.id === item.Id);
            groupedBySport.forEach((tournament) => {
              if (tournament.sport_id === item.Id)
                item.Tournaments.push(tournament);
            });
          });
          this.fixtures = sports;
          this.active_sport = this.fixtures[0].Id
          this.loading = false;
        }
      });
    },
    setActiveSport(id) {
      this.active_sport = id;
      document.getElementById('live_'+id).scrollIntoView({behavior: "smooth", behavior: 'smooth',
        block: 'nearest',
        inline: 'center'})
      // this.$refs.id.scrollIntoView({behavior: "smooth"})
    },
  },
  mounted() {
    this.getLive();
    console.log(this.$refs)
  },
};
</script>

<style></style>
