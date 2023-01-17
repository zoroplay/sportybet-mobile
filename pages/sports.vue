<template>
  <div class="m-sports-menu">
    <div>
      <div slot="mid" class="m-sports-menu">
        <div
          data-v-045e5fcb=""
          class="m-nav-secondary m-topnav withHome"
          id="top-navbar"
        >
          <div data-v-045e5fcb="" class="m-nav-left">
            <span
              data-v-045e5fcb=""
              data-op="nav-sec-back"
              class="m-icon m-icon--back"
            ></span>
            <span data-v-045e5fcb="" data-op="nav-title" class="title"
              >Sports</span
            >
          </div>
          <div data-v-045e5fcb="" class="info-container">
            <!---->
            <div data-v-045e5fcb="" class="m-nav-right">
              <a data-v-045e5fcb="" href="/ng/m/search?source=sport_menu"
                ><span data-v-045e5fcb="" class="m-search-icon"></span
              ></a>
              <div
                @click="$router.push('/')"
                data-v-045e5fcb=""
                class="home-link"
              >
                <div data-v-045e5fcb="" class="home-icon"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="sports-menu-fixed">
          <div class="m-snap-nav-wrap m-sports-choose" style="overflow: hidden">
            <ul
              class="m-snap-nav flex"
              style="
                transform: translate(0px, 0px) translateZ(0px);
                transition-duration: 350ms;
                transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1);
              "
            >
              <li
                v-for="(sport, index) in sport_list_menu"
                @click="setActive(sport)"
                :id="'sports_' + sport.id"
                :class="sport.id == active_sport ? 'active' : ''"
                :key="index"
                class="m-sports-choose-item m-snap-nav-item"
              >
                <div
                  class="sprot-icon m-icon-football"
                  :class="'m-icon-' + sport.id"
                ></div>
                <div class="sport-text">{{ sport.name }}</div>
              </li>
            </ul>
            <i class="controls left-controls"></i>
            <i class="controls right-controls"></i>
          </div>
        </div>
        <div class="m-top-menu">
          <router-link
            :to="{
              name: 'sport-name',
              params: { name: $route.query.sport },
              query: { period: 'today' },
            }"
            class="m-menu-item text-decoration-none"
          >
            Today Games </router-link
          ><!----><router-link
            to="/ng/m/sport/football/live_list?source=sport_menu"
            class="m-menu-item d-none"
          >
            Live  </router-link
          ><router-link
            to="/ng/m/sport/football/?time=all&amp;source=sport_menu"
            class="m-menu-item"
          >
            All Football
          </router-link>
        </div>
        <div class="m-daily-menu" v-if="active_sport === 0">
          <div class="m-menu-row">
            <div
              class="m-menu-title"
              data-cms-key="daily"
              data-cms-page="sports_menu"
            >
              Daily
            </div>
          </div>
          <div class="m-menu-row">
            <a
              href="/ng/m/sport/football/?time=1&amp;source=sport_menu"
              class="m-menu-item"
            >
              Monday (Today)
            </a>
            <a
              href="/ng/m/sport/football/?time=2&amp;source=sport_menu"
              class="m-menu-item"
            >
              Tuesday (Tomorrow)
            </a>
          </div>
          <div class="m-menu-row">
            <a
              href="/ng/m/sport/football/?time=3&amp;source=sport_menu"
              class="m-menu-item"
            >
              Wednesday
            </a>
            <a
              href="/ng/m/sport/football/?time=4&amp;source=sport_menu"
              class="m-menu-item"
            >
              Thursday
            </a>
          </div>
          <div class="m-menu-row">
            <a
              href="/ng/m/sport/football/?time=5&amp;source=sport_menu"
              class="m-menu-item"
            >
              Friday
            </a>
            <a
              href="/ng/m/sport/football/?time=6&amp;source=sport_menu"
              class="m-menu-item"
            >
              Saturday
            </a>
          </div>
          <div class="m-menu-row">
            <a
              href="/ng/m/sport/football/?time=0&amp;source=sport_menu"
              class="m-menu-item"
            >
              Sunday
            </a>
            <!---->
          </div>
        </div>
        <div
          class="m-countries-panel m-sports-countries"
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
                <div
                  class="m-league-title hide"
                  @click="showChild($event, index)"
                >
                  <span class="icon-triangle"></span>
                  <span class="text">{{ country.name }}</span>
                  <!---->
                  <span class="m-event-size">{{ country.total }}</span>
                  <!---->
                </div>
                <div :id="index + '_child'" class="m-league-conent d-none">
                  <div class="m-tournament-list">
                    <ul class="m-country-row">
                      <li
                        v-for="(tournament, i) in country.tournaments"
                        :key="i"
                        class="not-top-league"
                      >
                        <router-link
                          :to="{name:'sport-name', params:{name: $route.query.sport},query:{tournament_id: tournament.sport_tournament_id}}"
                          class=""
                          ><div class="m-item-left">
                            {{ tournament.name }}
                          </div>
                          <div class="m-item-right">
                            {{ tournament.total }}
                          </div>
                        </router-link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!---->
          <!----><!---->
        </div>
      </div>
    </div>
    <!---->
  </div>
</template>

<script>
export default {
  name: "sports",
  layout: "mid",
  watch: {
    $route: {
      immediate: true,
      handler(to) {
        this.active_sport = this.getSportbyName(to.query.sport); //this.baseConverter(to.params.game_id, 36, 10);
      },
    },
  },
  data() {
    return {
      active_sport: "",
      countries: [],
      sports_list: [],
    };
  },
  methods: {
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
    showChild(e, index) {
      let y = $(e.target).hasClass("hide");
      if (y) {
        $(e.target).removeClass("hide");
      } else {
        $(e.target).addClass("hide");
      }
      $("#" + index + "_child").toggleClass("d-none");
    },
    setActive(sport) {
      this.active_sport = sport.id;
      this.$router.replace({ query: { sport: sport.name } });
      this.countries = this.sports_list.find(
        (obj) => obj.sport_id === this.active_sport
      );
      document
        .getElementById("sports_" + sport.id)
        .scrollIntoView({
          behavior: "smooth",
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
    },
  },
  mounted() {
    console.log("mounted");
  },
  created() {
    this.getCountries();
  },
};
</script>

<style></style>
