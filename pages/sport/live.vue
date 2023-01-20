<template>
  <div class="m-overview">
    <div data-v-045e5fcb="" class="m-nav-secondary withHome">
      <div data-v-045e5fcb="" class="m-nav-left">
        <span
          data-v-045e5fcb=""
          data-op="nav-sec-back"
          class="m-icon m-icon--back"
        ></span>
        <span data-v-045e5fcb="" data-op="nav-title" class="title">Live</span>
      </div>
      <div data-v-045e5fcb="" class="info-container">
        <!---->
        <div data-v-045e5fcb="" class="m-nav-right">
          <div data-v-045e5fcb="" @click="$router.push('/')" class="home-link">
            <div data-v-045e5fcb="" class="home-icon"></div>
          </div>
        </div>
      </div>
    </div>
    <!---->
    <div class="m-live">
      <div class="nav-container" style="min-height: 83px">
        <div class="m-snap-nav-wrap m-sport-type" style="overflow: hidden">
          <ul
            class="m-snap-nav flex"
            style="
              transform: translate(0px, 0px) translateZ(0px);
              transition-duration: 0ms;
              transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1);
              width: 1391.56px;
            "
          >
            <li
              v-for="(sport, index) in fix"
              :key="index"
              @click.prevent="setActiveSport(sport.Id)"
              class="m-sport-type-item m-snap-nav-item"
              :class="sport.Id === active_sport ? 'active' : ''"
              :id="'live_'+sport.Id"
            >
              <span class="m-event-size">{{ sport.EventCount }}</span>
              <i
                class="m-sport-icon m-icon-football"
                :class="['m-icon-' + sport.Id]"
              ></i>
              <div class="m-sport-text">{{ sport.Name }}</div>
            </li>
          </ul>
          <i class="controls left-controls"></i>
          <i class="controls right-controls"></i>
        </div>
      </div>
      <div v-if="games.length">
        <live-fixtures
          v-for="(group, index) in games[0].Tournaments"
          :key="index"
          :data="group"
          :markets="games[0].headers.markets[0]"
          :loading="loading"
        ></live-fixtures>
      </div>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
import market_headers from "~/plugins/constants";
import LiveFixtures from "~/components/LiveFixtures.vue";

export default {
  components: { LiveFixtures },
  name: "live",
  layout: "live",
  data() {
    return {
      loading: false,
      fix: [],
      active_sport: 1,
    };
  },
  computed: {
    games() {
      return this.fix.filter((x) => x.Id == this.active_sport);
    },
  },
  methods: {
    async getLive() {
      this.loading = true;
      await this.$axios
        .get("sports/live")
        .then((res) => {
          // this.loading = false;
          // this.sports_menu = res.data.data.sports;
          // this.fix = _.groupBy(res.data.data.fixtures, 'sport_id');
          // this.$store.dispatch(
          //   "setCommitActiveSport",
          //   res.data.data.sports[0].Id
          // );
          let groupedBySport = this.groupLiveSports(res.data.data.fixtures);
          let sports = res.data.data.sports;
          if (sports.length > 0) {
            sports.forEach((item, key) => {
              item.Tournaments = [];
              item.headers = market_headers.find(
                (sport) => sport.id === item.Id
              );
              groupedBySport.forEach((tournament) => {
                if (tournament.sport_id === item.Id)
                  item.Tournaments.push(tournament);
              });
            });
            this.fix = sports;
            this.loading = false;
          }
          console.log("sfsdf");
          console.log(this.groupLiveSports(res.data.data.fixtures));
        })
        .catch((error) => {
          this.loading = false;
          this.error = error.message;
        });
    },
    setActiveSport(id) {
      this.active_sport = id;
      document.getElementById('live_'+id).scrollIntoView({behavior: "smooth", behavior: 'smooth',
        block: 'center',
        inline: 'nearest'})
      // this.$refs.id.scrollIntoView({behavior: "smooth"})
    },
  },
  mounted() {
    this.getLive();
  },
};
</script>

<style></style>
