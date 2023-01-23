<template>
  <div class="m-sports">
    <div class="m-sports-title">
      <span class="m-title-sport">Sports </span>
      <div class="m-snap-nav-wrap m-sport-type" style="overflow: hidden">
        <ul
          class="m-snap-nav flex"
          style="
            transform: translate(0px, 0px) translateZ(0px);
            transition-duration: 350ms;
            transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1);
            width: 1900.98px;
          "
        >
          <li
            v-for="(sport, index) in sport_list_menu"
            @click="setActive(sport.id)"
            :key="index"
            :id="'highlights_'+sport.id"
            :class="sport.id == active_sport ? 'active' : ''"
            class="m-sport-type-item m-snap-nav-item"
            data-op="home_prematch-tabFootball "
          >
            {{ sport.name }}
          </li>
        </ul>
        <i class="controls left-controls"></i>
        <i class="controls right-controls"></i>
      </div>
      <div class="filter-control">
        <!---->
        <svg viewBox="0 0 20 20">
          <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g transform="translate(2.000000, 3.000000)">
              <g transform="translate(0.500000, 0.075269)">
                <rect
                  fill="#353A45"
                  x="5.5"
                  y="10"
                  width="9"
                  height="1.5"
                ></rect>
                <circle
                  stroke="#353A45"
                  stroke-width="1.4"
                  cx="3.3"
                  cy="10.8"
                  r="2.1"
                ></circle>
                <rect
                  fill="#353A45"
                  x="0.5"
                  y="2.25806452"
                  width="9"
                  height="1.5"
                ></rect>
                <circle
                  stroke="#353A45"
                  stroke-width="1.4"
                  cx="11.8"
                  cy="3.05806452"
                  r="2.1"
                ></circle>
              </g>
            </g>
          </g>
        </svg>
      </div>
    </div>
    <div
      class="m-tabs m-tabs-mini m-tabs-no-animation m-pre-opts full-width"
      style="overflow: hidden"
    >
      <nav
        class="m-tabs-nav"
        id="myTab"
        role="tablist"
        style="
          transform: translate(0px, 0px);
          transition-duration: 0s;
          transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
          width: 414px;
        "
      >
        <!-- <div class="m-tabs-ink-bar" style="display: block; width: 130px; left: 0px;"></div> -->
        <div
          class="m-tabs-tab"
          data-bs-toggle="tab"
          data-bs-target="#nav-highlights"
          type="button"
          role="tab"
          aria-controls="nav-highlights"
          aria-selected="true"
        >
          Highlights
        </div>
        <div
          class="m-tabs-tab active"
          data-bs-toggle="tab"
          data-bs-target="#nav-today"
          type="button"
          role="tab"
          aria-controls="nav-today"
          aria-selected="true"
        >
          Today
        </div>
        <div
          class="m-tabs-tab"
          data-bs-toggle="tab"
          data-bs-target="#nav-countries"
          type="button"
          role="tab"
          aria-controls="nav-countries"
          aria-selected="true"
        >
          Countries
        </div>
        <!---->
      </nav>
      <div
        class="tab-content"
        id="nav-tabContent"
        style="transform: translateX(0%) translateZ(0px)"
      >
        <div
          class="tab-pane"
          id="nav-highlights"
          role="tabpanel"
          aria-labelledby="nav-highlights-tab"
          tabindex="0"
          style=""
        >
          <div class="m-highlights-wrap" style="position: relative">
            <div class="m-bet-content">
              <div
                v-for="(group, index) in highlights"
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
                  <div
                    data-op="label-prematch"
                    class="m-event-sport m-sports-row"
                  >
                    <div class="m-event-meta">
                      <div
                        data-v-33c087e8=""
                        class="label-container event-labels"
                      ></div>
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
                        <div
                          class="m-market m-event-market-default market-id-1"
                        >
                          <div
                            v-for="(odds, o) in event?.odds.slice(0, 3)"
                            :key="o"
                            class="m-outcome m-event-outcome-default"
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
                            data-op="label-odds"
                            @click="addToBetslip(event, odds, 3)"
                          >
                            <span
                              data-op="label-odds-amount"
                              class="m-outcome-odds"
                              >{{ odds.odds }}</span
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="m-event-footer">
                      <div class="m-market-size">
                        +{{ event.markets_count }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- <div class="m-league-list">
                <div class="m-league">
                  <div class="m-league-title hide">
                    <span class="icon-triangle"></span>
                    <span class="text"
                      >International Clubs - UEFA Europa Conference League</span
                    >

                    <span class="m-event-size">8</span>

                  </div>
                  <div class="m-league-conent" style="display: none">
                    <div class="m-league-loading">
                      <div class="loading"></div>

                    </div>
                  </div>
                </div>
              </div> -->
              <div class="view-all">
                <a
                  href="/ng/m/sport/football?source=home_list&amp;time=all"
                  class=""
                >
                  View More
                </a>
              </div>
            </div>
            <!---->
          </div>
        </div>
        <div
          class="tab-pane show active"
          id="nav-today"
          role="tabpanel"
          aria-labelledby="nav-today-tab"
          tabindex="0"
        >
          <div style="position: relative">
            <div v-if="today" class="m-bet-content">
              <div
                v-for="(group, index) in today"
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
                  <div
                    data-op="label-prematch"
                    class="m-event-sport m-sports-row"
                  >
                    <div class="m-event-meta">
                      <div
                        data-v-33c087e8=""
                        class="label-container event-labels"
                      ></div>
                      <span class="m-time">{{ event.event_time }}</span>
                      <span class="m-game-id">ID {{ event.id }}</span>
                      <span class="m-league-name"
                        >{{ event.sport_category_name }} -
                        {{ event.sport_tournament_name }}</span
                      >
                    </div>
                    <div class="m-table-row m-sports-table">
                      <div class="m-table-cell m-info-cell" @click="$router.push({name:'sport-name-pre-eventid',params:{name:event.sport_name,eventid:event.provider_id} })">
                        <div class="team">{{ event.team_a }}</div>
                        <div class="team">{{ event.team_b }}</div>
                      </div>
                      <div class="m-table-cell m-market-cell">
                        <div
                          class="m-market m-event-market-default market-id-1"
                        >
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
                            <span
                              data-op="label-odds-amount"
                              class="m-outcome-odds"
                              >{{ odds.odds }}</span
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="m-event-footer">
                      <div class="m-market-size">
                        +{{ event.markets_count }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="view-all">
                <a
                  href="/ng/m/sport/football?source=home_list&amp;time=all"
                  class=""
                  >View More</a
                >
              </div>
            </div>
            <div v-else class="m-loading-wrap"><div class="m-loading dark"><div class="loading"></div> <!----></div></div>
            <!---->
          </div>
        </div>
        <div
          class="tab-pane"
          id="nav-countries"
          role="tabpanel"
          aria-labelledby="nav-countries-tab"
          tabindex="0"
        >
          <div
            class="m-countries-panel"
            isshowall="true"
            style="position: relative"
          >
            <div class="m-countries-block">
              <div
                class="m-countries-block-title"
                data-cms-key="a_z"
                data-cms-page="common_functions"
              >
                A-Z
              </div>
              <div class="m-country-list">
                <div
                  v-for="(country, index) in countries.categories"
                  :key="index"
                  class="m-league"
                >
                  <div class="m-league-title hide" @click="showChild($event, index)">
                    <span class="icon-triangle"></span>
                    <span class="text"> {{ country.name }} </span>
                    <!---->
                    <span class="m-event-size"> {{ country.total }} </span>
                    <!---->
                  </div>
                  <div
                    :id="index + '_child'"
                    class="m-league-conent d-none"
                  >
                    <div class="m-tournament-list">
                      <ul class="m-country-row">
                        <li
                          v-for="(tournament, i) in country.tournaments"
                          :key="i"
                          class="not-top-league"
                        >
                          <a
                            class=""
                            ><div class="m-item-left">
                              {{ tournament.name }}
                            </div>
                            <div class="m-item-right">
                              {{ tournament.total }}
                            </div></a
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="m-countries-panel" isshowall="true" style="position: relative;">

            <div class="m-countries-block">

              <div class="m-country-list"></div>
            </div>
            <div class="no-data">
              <p data-cms-key="no_games_tip" data-cms-page="common_feedback" style="white-space: pre-line;">Sorry, there
                are no games currently<br>available in this category. Please try later.<br>Thank you.</p>
            </div>


          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
export default {
  name: "highlights-container",
  data() {
    return {
      highlights: [],
      today: [],
      countries: [],
      sports_list: [],
      active_sport: 1,
      predictions: []
    };
  },
  computed: {
    date() {
      let today = new Date();
      return (
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate()
      );
    },
  },
  methods: {
    getHighlights() {
      this.$axios
        .get(
          "sports/get-fixtures-by-sport-date?date=" +
            this.start_date +
            "&end_date=" +
            this.end_date +
            "&sid=" +
            this.active_sport +
            "&channel=website"
        )
        .then((res) => {
          this.highlights = _.groupBy(
            res.data.fixtures.slice(0, 15),
            "event_date"
          );
          this.predictions = res.data.predictions
        });
    },
    getToday() {
      this.$axios
        .get(
          "sports/get-fixtures-by-sport-date?date=" +
            this.date +
            "&sid=" +
            this.active_sport +
            "&channel=website"
        )
        .then((res) => {
          this.today = _.groupBy(res.data.fixtures.slice(0, 15), "event_date");
          this.predictions = res.data.predictions
        });
    },
    getCountries() {
      this.$axios
        .get("sports/get-menu?period=all&start=null&end=null")
        .then((res) => {
          this.sports_list = res.data.menu;
          if (this.countries.length == 0) {
            this.countries = res.data.menu.find(
              (obj) => obj.sport_id === this.active_sport
            );
          }
        });
    },
    setActive(id) {
      this.active_sport = id;
      this.getHighlights();
      this.getToday();
      this.countries = this.sports_list.find(
        (obj) => obj.sport_id === this.active_sport
      );
      document.getElementById('highlights_'+id).scrollIntoView({behavior: "smooth", behavior: 'smooth',
        block: 'nearest',
        inline: 'center'})
    },
    showChild(e, index) {
      let y = $(e.target).hasClass("hide");
      if (y) {
        $(e.target).removeClass("hide");
      } else {
        $(e.target).addClass("hide");
      }
      $("#" + index + "_child").toggleClass("d-none");
    },
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
        fixture_type: 'pre'
      };
      this.$store.dispatch("coupon/addToCoupon", data);
    }
  },
  mounted() {
    this.getHighlights();
    this.getToday();
    this.getCountries();
  },
};
</script>

<style>
.m-sports-title {
  top: 3.66666667rem;
  position: sticky;
  background-color: white;
  z-index: 220;
}

.m-tabs-tab.active {
  border-bottom: 0.3333333rem solid #0d9737;
}
</style>
