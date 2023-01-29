<template>
  <div data-v-558768ad="" class="m-azmenu" style="height: calc(848px)">
    <!---->
    <div data-v-558768ad="" class="top">
      <a
        data-v-558768ad=""
        href="/ng/m/search?source=azmenu"
        class="azmenu-search-wrap"
        ><span data-v-558768ad="">Teams/Players, Leagues, Game ID</span>
        <span data-v-558768ad="" class="m-icon m-icon-search"></span
      ></a>
      <div
        data-v-558768ad=""
        class="m-snap-nav-wrap m-azmenu-nav"
        style="overflow: hidden"
      >
        <ul
          class="m-snap-nav flex"
          style="
            transform: translate(0px, 0px) translateZ(0px);
            transition-duration: 350ms;
            transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1);
            width: 490.859px;
          "
        >
          <li
            data-v-558768ad=""
            class="m-azmenu-nav-item m-snap-nav-item active"
            data-op="az-menu-virtuals"
          >
            <a data-v-558768ad=""
              ><span
                data-v-558768ad=""
                class="sprot-icon m-icon-virtual-new-hallow"
              ></span>
              <span data-v-558768ad="" class="sport-text"> Virtuals </span></a
            >
          </li>
          <li data-v-558768ad="" class="m-azmenu-nav-item m-snap-nav-item">
            <a data-v-558768ad=""
              ><span
                data-v-558768ad=""
                class="sprot-icon m-load-code-icon"
              ></span>
              <span data-v-558768ad="" class="sport-text"> Load Code </span></a
            >
          </li>
          <li
            data-v-558768ad=""
            class="m-azmenu-nav-item m-snap-nav-item"
            data-op="az-menu-live-jackpot"
          >
            <a data-v-558768ad=""
              ><span
                data-v-558768ad=""
                class="sprot-icon m-jackpot-icon"
              ></span>
              <span data-v-558768ad="" class="sport-text"> Jackpot </span></a
            >
          </li>
          <li
            data-v-558768ad=""
            class="m-azmenu-nav-item m-snap-nav-item"
            data-op="az-menu-live-score"
          >
            <a data-v-558768ad=""
              ><span
                data-v-558768ad=""
                class="sprot-icon m-livescore-icon"
              ></span>
              <span data-v-558768ad="" class="sport-text"> Livescore </span></a
            >
          </li>
          <li
            data-v-558768ad=""
            class="m-azmenu-nav-item m-snap-nav-item"
            data-op="az-menu-result"
          >
            <a data-v-558768ad=""
              ><span data-v-558768ad="" class="sprot-icon m-result-icon"></span>
              <span data-v-558768ad="" class="sport-text"> Results </span></a
            >
          </li>
          <li
            data-v-558768ad=""
            class="m-azmenu-nav-item m-snap-nav-item"
            data-op="az-menu-app"
          >
            <a data-v-558768ad=""
              ><span data-v-558768ad="" class="sprot-icon m-mobile-icon"></span>
              <span data-v-558768ad="" class="sport-text"> App </span></a
            >
          </li>
        </ul>
      </div>
    </div>
    <div data-v-558768ad="" class="sport-menu" style="position: relative">
      <div data-v-558768ad="" class="tab-wrap">
        <div
          data-v-558768ad=""
          class="az-tabs m-tabs m-tabs-mini m-tabs-no-animation"
          style="overflow: hidden"
        >
          <div
            class="m-tabs-nav"
            style="
              transform: translate(0px, 0px);
              transition-duration: 0s;
              transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
              width: 414px;
            "
          >
            <div data-op="az-menu-sport" class="m-tabs-tab">Sports</div>
            <!-- <div data-op="az-menu-live-tab" class="m-tabs-tab">
              Live (217)
            </div> -->
          </div>
          <div
            class="m-tabs-content"
            style="transform: translateX(0%) translateZ(0px)"
          >
            <div data-v-558768ad="" class="m-tabs-tabpane">
              <div data-v-558768ad="" class="tab-pane-content">
                <div data-v-558768ad="" class="tab-pane-left">
                  <div
                    data-v-558768ad=""
                    class="right-panel-item"
                    :class="sport.sport_id == active_sport ? 'active':''"
                    v-for="(sport, index) in sports_list"
                    :key="index"
                    @click="setActive(sport.sport_id)"
                  >
                    <span data-v-558768ad="">{{ sport.name }}</span>
                  </div>
                </div>
                <div data-v-558768ad="" class="tab-pane-right">
                  <!-- <div
                    data-v-558768ad=""
                    data-op="prematch-all"
                    class="right-panel-item__header"
                  >
                    <a
                      data-v-558768ad=""
                      href="/ng/m/sport/football?source=azmenu"
                      class=""
                      ><span data-v-558768ad="">Football</span>
                      <span data-v-558768ad="" class="all"
                        >All<span
                          data-v-558768ad=""
                          class="right-chevron"
                        ></span></span
                    ></a>
                  </div> -->
                  <div data-v-558768ad="" class="right-panel-item__header">
                    A-Z
                  </div>
                  <div v-for="(category, i) in countries.categories" :key="i" data-v-558768ad="" class="right-panel-item">
                    <span data-v-558768ad="">{{ category.name }}</span>
                    <span data-v-558768ad="">{{ category.total }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "menu",
  data() {
    return {
      countries: [],
      sports_list: [],
      active_sport: 1,
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
    setActive(id) {
      this.active_sport = id;
      this.countries = this.sports_list.find(
        (obj) => obj.sport_id === this.active_sport
      );
    },
  },
  mounted() {
    this.getCountries();
  },
};
</script>

<style type="text/css">
.m-azmenu[data-v-558768ad] {
  background: #ffffff;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  color: #353a45;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}
.m-azmenu .tab-pane-content[data-v-558768ad] {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  height: 100%;
  overflow: hidden;
}
.m-azmenu .tab-pane-content.tab-pane-promotions[data-v-558768ad] {
  height: 91%;
  overflow: auto;
}
.m-azmenu .m-tabs-tabpane[data-v-558768ad] {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  height: 100%;
  overflow: hidden;
}
.m-azmenu .tab-pane-left[data-v-558768ad] {
  border-right: solid 1px #eaecef;
  color: #353a45;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  font-size: 1.33333333rem;
  height: 91%;
  overflow-y: auto;
  width: 40%;
}
.m-azmenu .tab-pane-right[data-v-558768ad] {
  color: #353a45;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  font-size: 1.16666667rem;
  height: 91%;
  overflow-y: auto;
  width: 60%;
}
.m-azmenu .tab-pane-right .no-odds[data-v-558768ad] {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  color: #353a45;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  height: 100%;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.m-azmenu .sport-item[data-v-558768ad] {
  padding: 0.83333333rem;
}
.m-azmenu .sport-item.active[data-v-558768ad] {
  color: #e41827;
}
.m-azmenu .right-panel-item[data-v-558768ad] {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 0.83333333rem;
}
.m-azmenu .right-panel-item.active[data-v-558768ad] {
  color: #e41827;
}
.m-azmenu .right-panel-item__header[data-v-558768ad] {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  font-weight: bold;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 0.83333333rem;
}
.m-azmenu .right-panel-item__header .all[data-v-558768ad] {
  font-weight: normal;
}
.m-azmenu .right-panel-item__header a[data-v-558768ad]:hover,
.m-azmenu .right-panel-item__header a[data-v-558768ad]:visited,
.m-azmenu .right-panel-item__header a[data-v-558768ad]:active,
.m-azmenu .right-panel-item__header a[data-v-558768ad] {
  color: #353a45;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  text-decoration: none;
  width: 100%;
}
.m-azmenu .right-panel-item__header .right-chevron[data-v-558768ad]:before {
  content: "\e608";
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.m-azmenu .right-panel-item__header .right-chevron[data-v-558768ad]::before {
  font-size: 0.83333333rem;
  font-weight: normal;
  margin-left: 0.41666667rem;
}
.m-azmenu .no-data[data-v-558768ad] {
  color: #9ca0ab;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  margin-top: 30%;
  text-align: center;
}
.m-azmenu .no-data[data-v-558768ad]:before {
  content: "\e624";
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.m-azmenu .no-data p[data-v-558768ad] {
  font-size: 1.16666667rem;
}
.m-azmenu .no-data[data-v-558768ad]:before {
  color: #dcdee5;
  font-size: 2.5rem;
}
.m-azmenu .top[data-v-558768ad] {
  background: #e41827;
  border-top: 1px solid transparent;
  padding: 0;
}
.m-azmenu .top a[data-v-558768ad]:hover,
.m-azmenu .top a[data-v-558768ad]:visited,
.m-azmenu .top a[data-v-558768ad]:active,
.m-azmenu .top a[data-v-558768ad] {
  color: #ffffff;
  text-decoration: none;
}
.m-azmenu .top .azmenu-search-wrap[data-v-558768ad] {
  background-color: #ffffff;
  border-radius: 0.16666667rem;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  font-size: 1rem;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  line-height: 1.33333333rem;
  margin: 1.66666667rem 1.25rem 0;
  padding: 0.5rem 0.66666667rem;
}
.m-azmenu .top .azmenu-search-wrap span[data-v-558768ad] {
  color: #9ca0ab;
}
.m-azmenu .top .azmenu-search-wrap .m-icon-search[data-v-558768ad] {
  display: inline-block;
  vertical-align: middle;
}
.m-azmenu .top .azmenu-search-wrap .m-icon-search[data-v-558768ad]:before {
  content: "\e613";
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.m-azmenu .top .azmenu-search-wrap .m-icon-search[data-v-558768ad]::before {
  font-size: 1.33333333rem;
  padding-right: 0.33333333rem;
}
.m-azmenu .top .m-azmenu-nav[data-v-558768ad] {
  color: #353a45;
  margin-top: 0.25rem;
}
.m-azmenu .top .m-azmenu-nav .m-azmenu-nav-item[data-v-558768ad] {
  padding: 0;
  text-align: center;
  overflow-wrap: break-word;
  -webkit-hyphens: manual;
  -ms-hyphens: manual;
  hyphens: manual;
}
.m-azmenu
  .top
  .m-azmenu-nav
  .m-azmenu-nav-item[data-v-558768ad]:not(:last-child) {
  padding-right: 5px;
}
.m-azmenu .top .m-azmenu-nav .m-azmenu-nav-item[data-v-558768ad]:first-child {
  padding-left: 0.83333333rem;
}
.m-azmenu .top .m-azmenu-nav .m-azmenu-nav-item[data-v-558768ad]:last-child {
  padding-right: 0.83333333rem;
}
.m-azmenu .top .m-azmenu-nav .m-azmenu-nav-item > a[data-v-558768ad] {
  display: block;
  padding: 1rem 0.33333333rem;
  white-space: pre-line;
  width: 5rem;
}
.m-azmenu .top .m-azmenu-nav .m-azmenu-nav-item .sprot-icon[data-v-558768ad] {
  display: block;
  text-align: center;
}
.m-azmenu
  .top
  .m-azmenu-nav
  .m-azmenu-nav-item
  .sprot-icon.m-virtual-icon[data-v-558768ad]:before {
  content: "\e68a";
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.m-azmenu
  .top
  .m-azmenu-nav
  .m-azmenu-nav-item
  .sprot-icon.m-fantasy-icon[data-v-558768ad]:before {
  content: "\e69e";
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.m-azmenu
  .top
  .m-azmenu-nav
  .m-azmenu-nav-item
  .sprot-icon.m-instant-icon[data-v-558768ad]:before {
  content: "\e69d";
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.m-azmenu
  .top
  .m-azmenu-nav
  .m-azmenu-nav-item
  .sprot-icon.m-live_games-icon[data-v-558768ad]:before {
  content: "\e6bf";
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.m-azmenu
  .top
  .m-azmenu-nav
  .m-azmenu-nav-item
  .sprot-icon.m-live_games-icon[data-v-558768ad]:before {
  content: "\e6bf";
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.m-azmenu
  .top
  .m-azmenu-nav
  .m-azmenu-nav-item
  .sprot-icon.m-jackpot-icon[data-v-558768ad]:before {
  content: "\e629";
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.m-azmenu
  .top
  .m-azmenu-nav
  .m-azmenu-nav-item
  .sprot-icon.m-icon-virtual-new-hallow[data-v-558768ad]:before {
  content: "\e62f";
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.m-azmenu
  .top
  .m-azmenu-nav
  .m-azmenu-nav-item
  .sprot-icon.m-livescore-icon[data-v-558768ad]:before {
  content: "\e62c";
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.m-azmenu
  .top
  .m-azmenu-nav
  .m-azmenu-nav-item
  .sprot-icon.m-result-icon[data-v-558768ad]:before {
  content: "\e62a";
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.m-azmenu
  .top
  .m-azmenu-nav
  .m-azmenu-nav-item
  .sprot-icon.m-mobile-icon[data-v-558768ad]:before {
  content: "\e630";
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.m-azmenu
  .top
  .m-azmenu-nav
  .m-azmenu-nav-item
  .sprot-icon.m-load-code-icon[data-v-558768ad]:before {
  content: "\e661";
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.m-azmenu
  .top
  .m-azmenu-nav
  .m-azmenu-nav-item
  .sprot-icon[data-v-558768ad]:before {
  display: inline-block;
  font-size: 1.66666667rem !important;
  height: 1.66666667rem;
  width: 1.66666667rem;
}
.m-azmenu .top .m-azmenu-nav .m-azmenu-nav-item .sport-text[data-v-558768ad] {
  display: block;
  font-size: 0.83333333rem;
  line-height: 0.91666667rem;
}
.m-azmenu .tournament-pop[data-v-558768ad] {
  height: 100%;
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 225;
}
.m-azmenu .tournament-pop--header[data-v-558768ad] {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  background: #e41827;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  color: #ffffff;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  font-size: 1.66666667rem;
  height: 3.66666667rem;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding-left: 1.66666667rem;
  width: 100%;
}
.m-azmenu .tournament-pop--header .back[data-v-558768ad] {
  margin-right: 1.66666667rem;
}
.m-azmenu .tournament-pop--header .back[data-v-558768ad]:before {
  content: "\e620";
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.m-azmenu .tournament-pop--header .home-icon[data-v-558768ad] {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  height: 100%;
  padding: 0 1rem;
}
.m-azmenu .tournament-pop--header .home-icon[data-v-558768ad]:before {
  content: "\e6cb";
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.m-azmenu .tournament-pop--header .home-icon[data-v-558768ad]:before {
  font-size: 1.5rem;
}
.m-azmenu .tournament-pop--body[data-v-558768ad] {
  background: #ffffff;
  overflow-y: auto;
  padding: 1rem 0;
  width: 100%;
}
.m-azmenu .tournament-pop--body .tournament[data-v-558768ad] {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  color: #353a45;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  font-size: 1.33333333rem;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 0.83333333rem 2.08333333rem;
}
.m-azmenu .tournament-pop--body .tournament .name[data-v-558768ad] {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
}
.m-azmenu .tournament-pop--body .tournament .checkbox[data-v-558768ad] {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  height: 100%;
  margin-right: 0.83333333rem;
  padding-bottom: 0.16666667rem;
  width: 10%;
}
.m-azmenu .tournament-pop--body .tournament .checkbox[data-v-558768ad]::before {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border: 1px solid #dcdee5;
  border-radius: 0.25rem;
  content: "";
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  font-family: "iconfont";
  font-size: 1rem;
  height: 1.25rem;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 1.25rem;
}
.m-azmenu
  .tournament-pop--body
  .tournament.checked
  .checkbox[data-v-558768ad]::before {
  background-color: #0d9737;
  border: 1px solid #0d9737;
  color: #ffffff;
  content: "\e611";
  font-size: 0.83333333rem;
}
.m-azmenu .tournament-pop--footer[data-v-558768ad] {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  height: 4rem;
  width: 100%;
}
.m-azmenu .tournament-pop--footer__display-btn[data-v-558768ad] {
  background: #0d9737;
  color: #ffffff;
  font-size: 1.33333333rem;
  line-height: 4rem;
  text-align: center;
  width: 100%;
}
.m-azmenu .tournament-pop--footer__display-btn.inactive[data-v-558768ad] {
  background: #eaecef;
  color: #9ca0ab;
}
.m-azmenu .tab-wrap {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  height: 100%;
  overflow: hidden;
  width: 100vw;
}
.m-azmenu .tab-wrap .az-tabs {
  width: 100%;
}
.m-azmenu .tab-wrap .az-tabs.m-tabs {
  height: 100%;
  position: relative;
}
.m-azmenu .tab-wrap .az-tabs.m-tabs .m-tabs-nav {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0 auto;
  position: relative;
  width: 100%;
}
.m-azmenu .tab-wrap .az-tabs.m-tabs .m-tabs-nav .m-tabs-tab {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  color: #353a45;
  font-size: 1.16666667rem;
  font-weight: 500;
  line-height: 3.66666667rem;
  margin: 0;
  padding: 0;
  width: 3.33333333rem;
}
.m-azmenu .tab-wrap .az-tabs.m-tabs .m-tabs-nav .m-tabs-ink-bar {
  background: #e41827;
  bottom: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.m-azmenu .tab-wrap .az-tabs .m-tabs-tabpane {
  border-top: 1px #eaecef solid;
  height: 100%;
  overflow: hidden;
}
.m-azmenu .tab-wrap .m-tabs-content {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  height: 100%;
  position: relative;
}
.m-azmenu .sport-menu {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  height: 100%;
  overflow: hidden;
  z-index: 3;
}
.m-azmenu .sport-menu .m-loading-wrap {
  margin: auto;
}
</style>
