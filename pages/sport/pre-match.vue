<template>
  <div class="m-prematch-detail">
    <div data-v-045e5fcb="" class="m-nav-secondary withHome">
      <div data-v-045e5fcb="" class="m-nav-left">
        <span
          data-v-045e5fcb=""
          data-op="nav-sec-back"
          class="m-icon m-icon--back"
        ></span>
        <span data-v-045e5fcb="" data-op="nav-title" class="title"
          >Details</span
        >
      </div>
      <div data-v-045e5fcb="" class="info-container">
        <!---->
        <div data-v-045e5fcb="" class="m-nav-right">
          <div data-v-045e5fcb="" class="home-link">
            <div data-v-045e5fcb="" class="home-icon"></div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="m-event-title">
        <div data-v-33c087e8="" class="label-container event-labels">
          <img
            data-v-33c087e8=""
            src="//s.sporty.net/global/main/modules/main/mobile/common/components/event/image/label_hot.016bf8bac3.png"
            data-op=""
            width="58"
            height="15"
          /><img
            data-v-33c087e8=""
            src="//s.sporty.net/global/main/modules/main/mobile/common/components/event/image/label_bestodds.6849c8c853.png"
            data-op=""
            width="80"
            height="15"
          />
        </div>
        <div
          class="m-event-league link"
          @click="
            $router.push({
              name: 'sport-name',
              params: { name: $route.params.name },
              query: { tournament_id: details.sport_tournament_id },
            })
          "
        >
          {{ details.sport_category_name }} -
          {{ details.sport_tournament_name }}
        </div>
        <div class="m-event-title-team">
          <div class="homeTeamName">{{ details.team_a }}</div>
          <div class="awayTeamName">{{ details.team_b }}</div>
        </div>
        <div class="m-event-time-wrap">
          <div class="m-event-time-left">
            <span class="event-date">
              <!---->
              <!---->
              <!---->
              {{ formatDate(details.schedule) }}
            </span>
            <span class="event-time">{{ details.event_time }}</span>
            <span class="live-in-play"> Live In-Play Available </span>
            <span class="event-gameid">ID {{ details.id }}</span>
          </div>
        </div>
        <!---->
      </div>
      <div style="position: relative">
        <!---->
      </div>
      <div data-v-c0b0b3a4="" class="m-tab-navs-wrap">
        <ul
          data-v-c0b0b3a4=""
          class="m-tab-navs"
          data-offset="0"
          data-new-z-index="1000"
          data-cls="undefined"
          data-disable-sticky="false"
        >
          <li data-v-c0b0b3a4="" class="m-nav-item active">
            <i data-v-c0b0b3a4="" class="m-icon m-icon-market"></i>
            <span data-v-c0b0b3a4="" class="m-text">Markets</span>
          </li>
          <li data-v-c0b0b3a4="" class="m-nav-item">
            <i data-v-c0b0b3a4="" class="m-icon m-icon-stat"></i>
            <span data-v-c0b0b3a4="" class="m-text">Stats</span>
          </li>
        </ul>
      </div>
      <div class="m-sub-tab">
        <div class="m-market-group event-detail">
          <div
            class="m-snap-nav-wrap m-group d-none"
            data-offset="46"
            data-new-z-index="1000"
            data-cls="undefined"
            data-disable-sticky="false"
            style="overflow: hidden"
          >
            <ul
              class="m-snap-nav flex"
              style="
                transform: translate(0px, 0px) translateZ(0px);
                transition-duration: 350ms;
                transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1);
                width: 589.227px;
              "
            >
              <li class="m-sport-group-item m-snap-nav-item">My Favorite</li>
              <li class="m-sport-group-item m-snap-nav-item active">All</li>
              <li class="m-sport-group-item m-snap-nav-item">Main</li>
              <li class="m-sport-group-item m-snap-nav-item">Goals</li>
              <li class="m-sport-group-item m-snap-nav-item">Half</li>
              <li class="m-sport-group-item m-snap-nav-item">Bookings</li>
              <li class="m-sport-group-item m-snap-nav-item">Corners</li>
              <li class="m-sport-group-item m-snap-nav-item">Combo</li>
              <li class="m-sport-group-item m-snap-nav-item">Player</li>
            </ul>
            <i class="controls left-controls"></i>
            <i class="controls right-controls"></i>
          </div>
          <div class="m-sport-market">
            <div
              v-for="(market, index) in markets"
              :key="index"
            >
              <div
                class="m-market m-detail-market-default"
                v-if="market.status"
              >
                <div data-v-f74cd45a="" class="m-market-title">
                  <span data-v-f74cd45a="" class="dis-icon"></span>
                  <span data-v-f74cd45a="" class="text">{{
                    market.market_name
                  }}</span>
                  <span data-v-f74cd45a="" class="m-icon-tips"></span>
                  <span data-v-f74cd45a="" class="market-right-wrap"
                    ><span
                      data-v-f74cd45a=""
                      class="market-favor market-favor-disable"
                    ></span
                  ></span>
                </div>
                <div class="m-table market-content">
                  <div
                    v-for="(group, gx) in chunks(market.selections)"
                    :key="gx"
                    class="m-table-row"
                  >
                    <div
                      v-for="(selection, odd) in group"
                      :key="odd"
                      @click="add(market, selection)"
                      class="m-table-cell m-outcome m-detail-outcome-default m-outcome-odds-des"
                      :class="[
                        market.selections.length % 2 == 0
                          ? 'm-outcome-two'
                          : 'm-outcome-three',
                        isSelected(
                          createID(
                            details.provider_id,
                            market.market_id,
                            selection.name,
                            selection.id
                          ),
                          betslip
                        )
                          ? 'm-outcome--checked'
                          : '',
                      ]"
                    >
                      <em>{{ selection.name }}</em>
                      <em>{{ selection.odds }}</em>
                    </div>
                    <!-- <div
                      v-if="
                        group.length < 3 &&
                        g == chunks(market.selections).length - 1 &&
                        g != 0
                      "
                      v-for="i in chunks(market.selections)[0].length -
                      group.length"
                      :key="i"
                      class="m-table-cell"
                      :class="
                        chunks(market.selections)[g - 1].length % 2 == 0
                          ? 'm-outcome-three'
                          : 'm-outcome-two'
                      "
                    ></div> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="event-global-loading" style="display: none">
            <div class="loading-circle"></div>
            <div class="loading-text">Loading</div>
          </div>
        </div>
      </div>
      <!---->
      <!---->
    </div>
    <!---->
  </div>
</template>

<script>
import _ from "lodash";
export default {
  name: "prematch",
  data() {
    return {
      event_id: "",
      details: {},
      markets: [],
      loading: false,
    };
  },
  watch: {
    $route: {
      immediate: true,
      handler(to) {
        // react to route changes...
        this.event_id = to.params.eventid;
        this.getMarkets();
      },
    },
  },
  methods: {
    getMarkets() {
      this.loading = true;
      this.$axios
        .get(`/sports/get-fixture/${this.event_id}`)
        .then((res) => {
          this.details = res.data.data;
          this.markets = res.data.data.markets;
          this.loading = false;
        })
        .catch((error) => {
          this.loading = false;
          console.log(error);
        });
    },
    chunks(arr) {
      if (arr % 2 == 0) {
        return arr.reduce((resultArray, item, index) => {
          const chunkIndex = Math.floor(index / 2);
          if (!resultArray[chunkIndex]) {
            resultArray[chunkIndex] = [];
          }
          resultArray[chunkIndex].push(item);
          return resultArray;
        }, []);
      } else {
        return arr.reduce((resultArray, item, index) => {
          const chunkIndex = Math.floor(index / 3);
          if (!resultArray[chunkIndex]) {
            resultArray[chunkIndex] = [];
          }
          resultArray[chunkIndex].push(item);
          return resultArray;
        }, []);
      }
    },
    add(market, outcome) {
      // console.log(outcome)
      const data = {
        fixture: this.details,
        market_id: market.market_id,
        market_name: market.market_name,
        odds: outcome.odds,
        odd_id: outcome.id,
        odd_name: outcome.name,
        ele_id: this.createID(
          this.details.provider_id,
          market.market_id,
          outcome.name,
          outcome.id
        ),
        fixture_type: 'pre'
      };
      console.log(this.createID(
        this.details.provider_id,
        market.market_id,
        outcome.name,
        outcome.id
      ),)
      this.$store.dispatch("coupon/addToCoupon", data);
    },
  },
};
</script>

<style></style>
