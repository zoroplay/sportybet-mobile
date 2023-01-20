<template>
  <div>
    <div data-v-045e5fcb="" class="m-nav-secondary m-navbar withHome">
      <div data-v-045e5fcb="" class="m-nav-left">
        <span data-v-045e5fcb="" data-op="nav-sec-back" class="m-icon m-icon--back"></span>
        <span data-v-045e5fcb="" data-op="nav-title" class="title">Details</span>
      </div>
      <div data-v-045e5fcb="" class="info-container">
        <div data-v-045e5fcb="" class="m-nav-right">
          <span data-v-045e5fcb="" tabindex="0" class="nav-change"><span data-v-045e5fcb="">Change</span>
            <span data-v-045e5fcb="" class="change-icon"></span></span>
          <div data-v-045e5fcb="" @click="$router.push('/')" class="home-link">
            <div data-v-045e5fcb="" class="home-icon"></div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="details" data-sport-name="football" class="m-event-detail-wrap">
      <div class="m-broadcast" data-offset="0" data-new-z-index="1000" data-cls="undefined" data-disable-sticky="true">
        <div class="chat-button with-border">
          <i class="chat-icon"></i> <span> Chat</span>
        </div>
      </div>
      <div class="m-match-tracker-icons-above-wrapper" style="height: auto">
        <div class="m-event-title">
          <div class="change-match-overly" style="display: none"></div>
          <div>
            <div class="m-event-league">
              <div class="m-event-title-time">
                <!---->
                <p class="category-league">
                  {{ details.event_name }}
                </p>
              </div>
              <div class="event-time">
                <span>{{ matchTime(details.live_data?.match_time) }}'</span>
                <span>{{ matchStatus(details.match_status) }}</span>
              </div>
              <div class="change-match">
                <div class="change-match-content-wrap" style="display: none">
                  <div class="change-match-content">
                    <dl>
                      <dt>Australia - A-League</dt>
                      <dd>
                        <span class="time"><em>2:41</em> <em>H1</em></span>
                        <span class="team"><em>Western Sydney Wanderers</em>
                          <em>Melbourne City FC</em></span>
                        <span class="set-score"><em class="set-score"> 0 </em><em class="set-score"> 0 </em></span>
                        <!---->
                        <!---->
                      </dd>
                    </dl>
                    <dl>
                      <dt>Mexico - Liga MX, Clausura</dt>
                      <dd>
                        <span class="time"><em>45:00</em> <em>HT</em></span>
                        <span class="team"><em>Club Santos Laguna</em> <em>Pumas UNAM</em></span>
                        <span class="set-score"><em class="set-score"> 1 </em><em class="set-score"> 0 </em></span>
                        <!---->
                        <!---->
                      </dd>
                    </dl>
                    <dl>
                      <dt>India - Santosh Trophy</dt>
                      <dd>
                        <span class="time"><em>47:06</em> <em>H2</em></span>
                        <span class="team"><em>Daman &amp; Diu</em> <em>Haryana FT</em></span>
                        <span class="set-score"><em class="set-score"> 0 </em><em class="set-score"> 2 </em></span>
                        <!---->
                        <!---->
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
            <div class="m-event-team-wrap">
              <div class="home-team-name">
                <span class="team">{{ details.team_a }}</span>
                <span class="score"><em class="setScore">{{
                    liveScore(details?.score, "home")
                    }}</em>
                  <!---->
                </span>
              </div>
              <div class="away-team-name">
                <span class="team">{{ details.team_b }}</span>
                <span class="score"><em class="setScore">{{
                    liveScore(details?.score, "away")
                    }}</em>
                  <!---->
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="m-event-tracker">
          <!---->
          <div class="event-tracker-button-wrapper">
            <span class="live-stream"></span>
            <span class="match-tracker"></span>
            <!---->
            <span class="match-statistics"></span>
          </div>
        </div>
      </div>
      <!---->
      <div v-if="details.match_status != 'ended'" class="live-match event-detail">
        <div class="m-sport-market">
          <div v-for="(i, o) in details.live_data?.markets" :key="o" class="m-market m-detail-market-default" :market="i.name">
            <div v-if="i.active == '1'" data-v-f74cd45a="" class="m-market-title">
              <!-- <span data-v-f74cd45a="" class="dis-icon"></span> -->
              <span data-v-f74cd45a="" class="text">{{ i.name }} <span v-if="i.type_id == '5'"
                >O/U {{ i.specialOddsValue }}</span
              ></span>
              <!-- <span data-v-f74cd45a="" class="m-icon-tips"></span> -->
              <!---->
              <span data-v-f74cd45a="" class="market-right-wrap"><span data-v-f74cd45a=""
                  class="market-favor market-favor-disable"></span></span>
            </div>
            <div v-if="i.active == '1'" class="m-table market-content">
              <div class="m-table-row">
                <div
                  v-for="(x, y) in i.odds" :key="y"
                  class="m-table-cell m-outcome m-detail-outcome-default m-outcome-odds-des" :class="i.odds.length % 2 === 0 ? 'm-outcome-two' : 'm-outcome-three'">
                  <em class="text-capitalize">{{ x.type }}</em> <em> {{ x.odds }}</em>
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
      <div v-else class="m-sport-market-no-data">
        <div style="white-space: pre-line;">
          <p>Sorry, this game is no longer available. Betting has </p>
          <p>closed or has been suspended. Please choose other </p>
          <p>games.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "match",
    layout: "live",
    data() {
      return {
        event_id: "",
        details: null,
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
          .get(`sports/live/${this.event_id}/en`)
          .then((res) => {
            this.details = res.data.data;
            var live_data = JSON.parse(res.data.data.live_data);
            this.details.live_data = live_data;
            this.loading = false;
          })
          .catch((error) => {
            this.loading = false;
            console.log(error);
          });
      },
    },
    mounted() { },
  };
</script>

<style>
  .m-sport-market-no-data {
    color: #9CA0AB;
    margin-top: 5%;
    padding: 2.33333333rem;
    text-align: center;
  }

  .block-clicks {
    pointer-events: none;
  }

  .m-navbar.m-nav-secondary .home-link {
    border-left: solid #af271d 0.08333333rem;
    height: 100%;
    padding: 0 1rem;
  }

  .m-navbar .nav-change {
    border: none;
    font-size: 1.16666667rem;
    outline: 0;
    padding-right: 1rem;
  }

  .m-navbar .nav-change .change-icon {
    display: inline-block;
    margin-left: 0.5rem;
  }

  .m-navbar .nav-change .change-icon:before {
    content: "\e6a3";
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .m-navbar .nav-change .change-icon:before {
    font-size: 0.83333333rem;
  }

  .m-navbar .nav-change .change-icon.active {
    -webkit-transform: rotate(-180deg);
    -ms-transform: rotate(-180deg);
    transform: rotate(-180deg);
  }

  .liveMatch-eventView-loading {
    min-height: 15rem;
  }

  .m-event-detail-wrap {
    background-color: #1b1e25;
    color: #ffffff;
  }

  .m-event-detail-wrap .m-match-tracker-icons-above-wrapper {
    overflow: auto;
  }

  .m-event-detail-wrap .m-match-tracker-icons-above-wrapper.overflow-visible {
    overflow: initial;
  }

  .m-event-detail-wrap .m-broadcast {
    background-color: #1b1e25;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    line-height: 2rem;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    width: 100%;
    z-index: 1001 !important;
  }

  .m-event-detail-wrap .m-broadcast .gift-bar {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    padding: 0.58333333rem 1rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    border-right: 1px solid #50545f;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .m-event-detail-wrap .m-broadcast .gift-bar .gift-bar__left {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    margin-right: 1.41666667rem;
  }

  .m-event-detail-wrap .m-broadcast .gift-bar .gift-bar__left .gift-bar__title {
    margin-bottom: 0.58333333rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    line-height: initial;
  }

  .m-event-detail-wrap .m-broadcast .gift-bar .gift-bar__left .gift-bar__title .title__text {
    margin-right: 0.41666667rem;
  }

  .m-event-detail-wrap .m-broadcast .gift-bar .gift-bar__right .btn-grab-gift {
    padding: 0.625rem 1.08333333rem;
    background: #3a3c42;
    color: rgba(255, 255, 255, 0.5);
    border: none;
    border-radius: 0px;
    line-height: auto;
    width: 6.75rem;
    height: 2.58333333rem;
    display: -webkit-inline-box;
    display: -webkit-inline-flex;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    line-height: initial;
  }

  .m-event-detail-wrap .m-broadcast .gift-bar .gift-bar__right .btn-grab-gift.active {
    background: #32ce62;
    color: #1b1e25;
    opacity: 1;
  }

  .m-event-detail-wrap .m-broadcast .gift-bar .gift-bar__right .btn-grab-gift .spinner {
    -webkit-animation: loading-rotate 2s linear infinite;
    animation: loading-rotate 2s linear infinite;
  }

  .m-event-detail-wrap .m-broadcast .chat-button {
    padding: 0.66666667rem 1rem;
    color: #32ce62;
    display: inline-block;
    height: 1.83333333rem;
    line-height: 1.83333333rem;
    margin-left: auto;
  }

  .m-event-detail-wrap .m-broadcast .chat-button.with-border {
    border: 1px solid #32ce62;
    border-radius: 1rem;
    padding: 0 1rem;
    margin: 0.83333333rem 0.83333333rem 0.83333333rem auto;
  }

  .m-event-detail-wrap .m-broadcast .chat-button .chat-icon {
    margin-right: 0.33333333rem;
  }

  .m-event-detail-wrap .m-broadcast .chat-button .chat-icon:before {
    content: "\e66c";
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .m-event-detail-wrap .m-broadcast .chat-button .chat-icon::before {
    color: #32ce62;
  }

  .m-event-detail-wrap .m-event-tracker {
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    font-size: 1rem;
    margin: 0 0.83333333rem 1.41666667rem 0.83333333rem;
  }

  .m-event-detail-wrap .m-event-tracker .event-tracker-button-wrapper {
    margin-left: auto;
  }

  .m-event-detail-wrap .m-event-tracker .event-tracker-button-wrapper>span {
    border-radius: 2px;
    color: #dcdee5;
    display: inline-block;
    height: 1.66666667rem;
    line-height: 1.66666667rem;
    padding: 0.33333333rem 1.08333333rem;
  }

  .m-event-detail-wrap .m-event-tracker .event-tracker-button-wrapper>span:last-child {
    margin-right: 0px;
  }

  .m-event-detail-wrap .m-event-tracker .event-tracker-button-wrapper>span::before {
    display: inline-block;
    vertical-align: top;
  }

  .m-event-detail-wrap .m-event-tracker .event-tracker-button-wrapper>span.live-stream::before {
    background: url(//s.sporty.net/global/main/modules/common-wap/assets/img/stv.b89a6457ad.png);
    background-position: top left;
    background-size: 100% 100%;
    content: "";
    height: 1.41666667rem;
    margin-top: 0.1rem;
    padding-right: 0.41666667rem;
    width: 1.06666667rem;
  }

  .m-event-detail-wrap .m-event-tracker .event-tracker-button-wrapper>span.match-tracker:before {
    content: "\e64f";
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .m-event-detail-wrap .m-event-tracker .event-tracker-button-wrapper>span.match-tracker::before {
    color: #ffb404;
  }

  .m-event-detail-wrap .m-event-tracker .event-tracker-button-wrapper>span.match-statistics:before {
    content: "\e64a";
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .m-event-detail-wrap .m-event-tracker .event-tracker-button-wrapper>span.match-statistics::before {
    color: #03bdff;
  }

  .m-event-detail-wrap .m-event-tracker .event-tracker-button-wrapper>span.active {
    background-color: #33ea6a;
    color: #353a45;
  }

  .m-event-detail-wrap .m-event-tracker .event-tracker-button-wrapper>span.active:before {
    color: #353a45;
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
  }

  .m-event-detail-wrap .tracker-content .m-tracker-wrap {
    background: #353a45;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin-bottom: 0.83333333rem;
  }

  .m-event-detail-wrap .tracker-content .m-tracker-wrap .m-livetracker {
    background-color: #353a45;
  }

  .m-event-detail-wrap .tracker-content .m-tracker-wrap .arro {
    background-color: #1b1e25;
    border-top: 3px solid #353a45;
    position: relative;
  }

  .m-event-detail-wrap .tracker-content .m-tracker-wrap .arro i {
    background: url(//s.sporty.net/global/main/modules/main/mobile/liveBetting/img/arra.55e59fd06d.svg);
    background-position: top left;
    background-size: 100% 100%;
    display: block;
    height: 1.91666667rem;
    left: 50%;
    line-height: 1.91666667rem;
    margin-left: -2.58333333rem;
    position: relative;
    text-align: center;
    top: -3px;
    width: 5.16666667rem;
  }

  .m-event-detail-wrap .m-open-bets {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #32ce62;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    font-size: 1rem;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 0 1rem 0 1.33333333rem;
    width: 100%;
  }

  .m-event-detail-wrap .m-open-bets>div {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
  }

  .m-event-detail-wrap .m-open-bets>div:last-of-type {
    text-align: right;
  }

  .m-event-detail-wrap .m-open-bets .m-count {
    background-color: #353a45;
    border-radius: 100%;
    color: #ffffff;
    height: 1.33333333rem;
    margin-left: 0.41666667rem;
    min-width: 1.33333333rem;
    text-align: center;
  }

  .m-event-detail-wrap .m-open-bets .m-chevron {
    color: #9ca0ab;
    line-height: 1.33333333rem;
    margin-left: 0.25rem;
  }

  .m-event-detail-wrap .m-open-bets .m-chevron:before {
    content: "\e608";
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .m-event-detail-wrap .m-event-title {
    padding-bottom: 1.25rem;
  }

  .m-event-detail-wrap .m-event-title .icon-triangle {
    display: inline-block;
  }

  .m-event-detail-wrap .m-event-title .icon-triangle:after {
    color: #32ce62;
    content: "\e6a3";
    display: inline-block;
    font-family: "iconfont" !important;
    font-size: 1.16666667rem;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-style: normal;
    height: 1.16666667rem;
    line-height: 1.4;
    overflow: hidden;
  }

  .m-event-detail-wrap .m-event-title .icon-triangle.active {
    -webkit-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    transform: rotate(-90deg);
  }

  .m-event-detail-wrap .m-event-title .m-event-league {
    border-top: 1px solid rgba(234, 236, 239, 0.15);
    color: #32ce62;
    line-height: 1.2;
    overflow: hidden;
    padding: 0.66666667rem 0;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .m-event-detail-wrap .m-event-title .m-event-league .event-time {
    font-size: 1.16666667rem;
    padding: 0.66666667rem 0.66666667rem 0;
  }

  .m-event-detail-wrap .m-event-title .m-event-team-wrap {
    margin: 0 0.83333333rem;
  }

  .m-event-detail-wrap .m-event-title .m-event-team-wrap>div {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
  }

  .m-event-detail-wrap .m-event-title .m-event-team-wrap>div>span {
    display: block;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
  }

  .m-event-detail-wrap .m-event-title .m-event-team-wrap .home-team-name {
    margin-bottom: 0.16666667rem;
  }

  .m-event-detail-wrap .m-event-title .m-event-team-wrap .home-team-name,
  .m-event-detail-wrap .m-event-title .m-event-team-wrap .away-team-name {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    font-size: 1.16666667rem;
    -webkit-box-pack: stretch;
    -webkit-justify-content: stretch;
    -ms-flex-pack: stretch;
    justify-content: stretch;
  }

  .m-event-detail-wrap .m-event-title .m-event-team-wrap .home-team-name>span,
  .m-event-detail-wrap .m-event-title .m-event-team-wrap .away-team-name>span {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    height: 1.83333333rem;
    line-height: 1.83333333rem;
  }

  .m-event-detail-wrap .m-event-title .m-event-team-wrap .home-team-name .score,
  .m-event-detail-wrap .m-event-title .m-event-team-wrap .away-team-name .score {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 auto;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    font-weight: 700;
    text-align: right;
  }

  .m-event-detail-wrap .m-event-title .m-event-team-wrap .home-team-name .score .setScore,
  .m-event-detail-wrap .m-event-title .m-event-team-wrap .away-team-name .score .setScore,
  .m-event-detail-wrap .m-event-title .m-event-team-wrap .home-team-name .score .gameScore,
  .m-event-detail-wrap .m-event-title .m-event-team-wrap .away-team-name .score .gameScore {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: inline-block;
    height: 100%;
    line-height: normal;
    text-align: center;
    vertical-align: top;
  }

  .m-event-detail-wrap .m-event-title .m-event-team-wrap .home-team-name .score .setScore,
  .m-event-detail-wrap .m-event-title .m-event-team-wrap .away-team-name .score .setScore {
    background-color: #33ea6a;
    color: #353a45;
    padding: 0.16666667rem 0.5rem;
  }

  .m-event-detail-wrap .m-event-title .m-event-team-wrap .home-team-name .score .gameScore,
  .m-event-detail-wrap .m-event-title .m-event-team-wrap .away-team-name .score .gameScore {
    background-color: rgba(234, 236, 239, 0.15);
    color: #33ea6a;
    min-width: 1.83333333rem;
    padding: 0.16666667rem 0;
  }

  .m-event-detail-wrap .m-event-title .m-event-team-wrap .home-team-name .team,
  .m-event-detail-wrap .m-event-title .m-event-team-wrap .away-team-name .team {
    background: rgba(234, 236, 239, 0.15);
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    font-weight: 500;
    font-weight: 700;
    line-height: 1.2;
    margin-right: 0.16666667rem;
    overflow: hidden;
    padding: 0.25rem 0 0.25rem 0.41666667rem;
    width: 50%;
  }

  .m-event-detail-wrap .m-event-title .m-event-title-time {
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    padding: 0.33333333rem 0.83333333rem 0.33333333rem 0;
  }

  .m-event-detail-wrap .m-event-title .m-event-title-time .category-league {
    overflow: hidden;
    padding-left: 0.66666667rem;
    text-decoration: underline;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .m-event-detail-wrap .m-event-title .m-event-title-time .category-league.disabled {
    color: #9ca0ab;
    text-decoration: none;
  }

  .m-event-detail-wrap .m-event-title .m-event-title-time .change-match .change-match-title {
    color: #32ce62;
    overflow: hidden;
    text-align: right;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .m-event-detail-wrap .m-event-title .m-event-title-time .change-match .change-match-title .text {
    display: inline-block;
    padding-right: 0.83333333rem;
  }

  .m-event-detail-wrap[data-sport-name="basketball"] .m-event-team-wrap .home-team-name .score em,
  .m-event-detail-wrap[data-sport-name="basketball"] .m-event-team-wrap .away-team-name .score em {
    min-width: 2.91666667rem;
  }

  .m-event-detail-wrap[data-sport-name="tennis"] .m-event-team-wrap .home-team-name .score em,
  .m-event-detail-wrap[data-sport-name="tennis"] .m-event-team-wrap .away-team-name .score em {
    min-width: 2.83333333rem;
  }

  .m-event-detail-wrap .change-match-overly {
    background: #000000;
    height: 100%;
    left: 0px;
    opacity: 0.6;
    position: fixed;
    top: 3.66666667rem;
    -webkit-transform: translateZ(1px);
    transform: translateZ(1px);
    width: 100%;
    z-index: 777;
  }

  .m-event-detail-wrap .change-match {
    outline: none;
  }

  .m-event-detail-wrap .change-match .change-match-content-wrap {
    left: 0px;
    max-height: 50%;
    overflow: auto;
    position: absolute;
    top: 3.66666667rem;
    -webkit-transform: translateZ(1px);
    transform: translateZ(1px);
    width: 100%;
    z-index: 888;
  }

  .m-event-detail-wrap .change-match .change-match-content-wrap .change-match-content {
    background: #353a45;
    padding-bottom: 0.83333333rem;
  }

  .m-event-detail-wrap .change-match .change-match-content-wrap .change-match-content .no-data {
    color: #9ca0ab;
    line-height: 1.5;
    padding: 2.33333333rem;
    text-align: center;
  }

  .m-event-detail-wrap .change-match .change-match-content-wrap .change-match-content .no-data:before {
    content: "\e624";
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .m-event-detail-wrap .change-match .change-match-content-wrap .change-match-content .no-data:before {
    color: #f2f3f5;
    font-size: 2.5rem;
  }

  .m-event-detail-wrap .change-match .change-match-content-wrap .change-match-content dl dt {
    border-bottom: 1px solid rgba(234, 236, 239, 0.15);
    color: #9ca0ab;
    height: 2.08333333rem;
    line-height: 2.08333333rem;
    overflow: hidden;
    padding: 0 1.33333333rem;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .m-event-detail-wrap .change-match .change-match-content-wrap .change-match-content dl dd {
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    border-bottom: 1px solid rgba(234, 236, 239, 0.15);
    color: white;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    height: 4rem;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    line-height: 4rem;
    padding: 0 1.33333333rem;
  }

  .m-event-detail-wrap .change-match .change-match-content-wrap .change-match-content dl dd:active {
    background-color: rgba(234, 236, 239, 0.15);
  }

  .m-event-detail-wrap .change-match .change-match-content-wrap .change-match-content dl dd .active {
    background-color: #32ce62;
    color: #353a45;
  }

  .m-event-detail-wrap .change-match .change-match-content-wrap .change-match-content dl dd>span {
    display: block;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
  }

  .m-event-detail-wrap .change-match .change-match-content-wrap .change-match-content dl dd .time {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 auto;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    min-width: 2rem;
    padding-right: 0.83333333rem;
  }

  .m-event-detail-wrap .change-match .change-match-content-wrap .change-match-content dl dd .team {
    line-height: 1.5;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .m-event-detail-wrap .change-match .change-match-content-wrap .change-match-content dl dd .team em {
    display: block;
  }

  .m-event-detail-wrap .change-match .change-match-content-wrap .change-match-content dl dd .set-score,
  .m-event-detail-wrap .change-match .change-match-content-wrap .change-match-content dl dd .game-score {
    color: #32ce62;
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 auto;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    line-height: 1.5;
    min-width: 2rem;
    text-align: right;
  }

  .m-event-detail-wrap .change-match .change-match-content-wrap .change-match-content dl dd .set-score em,
  .m-event-detail-wrap .change-match .change-match-content-wrap .change-match-content dl dd .game-score em {
    display: block;
  }

  .m-event-detail-wrap .event-detail .m-group {
    background-color: #1b1e25;
    border-bottom: 1px solid rgba(234, 236, 239, 0.15);
  }

  .m-event-detail-wrap .event-detail .m-sport-market-no-data:before {
    color: rgba(242, 243, 245, 0.15);
  }

  .m-event-detail-wrap .event-detail .m-sport-market {
    overflow: hidden;
  }

  .m-event-detail-wrap .event-detail .m-sport-market .m-market .m-market-title {
    border-top: 1px solid #353a45;
    color: #ffffff;
  }

  .m-event-detail-wrap .event-detail .m-sport-market .m-market .market-content .m-table-row .m-outcome {
    background: rgba(214, 235, 220, 0.13);
    color: #32ce62;
  }

  .m-event-detail-wrap .event-detail .m-sport-market .m-market .market-content .m-table-row .m-outcome--checked {
    background: #0d9737;
    color: #ffffff;
  }

  .m-event-detail-wrap .event-detail .m-sport-market .m-market .market-content .m-table-row .m-outcome--checked:before {
    color: #ffffff !important;
  }

  .m-event-detail-wrap .event-detail .m-sport-market .m-market .market-content .m-table-row .m-outcome--disabled {
    background: #22252d;
    color: #50545f;
  }

  .m-event-detail-wrap .event-detail .m-sport-market .m-market .market-content .m-table-row .m-outcome--up:before,
  .m-event-detail-wrap .event-detail .m-sport-market .m-market .market-content .m-table-row .m-outcome--down:before {
    color: #32ce62;
  }

  .m-event-detail-wrap .event-detail .m-sport-market .m-market .market-content .m-table-row .m-outcome-combo-title {
    background-color: rgba(234, 236, 239, 0.15);
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #dcdee5;
    font-size: 1rem;
  }

  .m-event-detail-wrap .event-detail .m-sport-market .m-market .market-content .m-table-row .m-outcome-combo-column-title {
    background-color: rgba(234, 236, 239, 0.15);
    color: #f2f3f5;
  }

  .m-event-detail-wrap .live-match.event-detail {
    background-color: #1b1e25;
  }

  .m-event-detail-wrap .live-match.event-detail .m-group {
    border-bottom-color: #1b1e25;
  }

  .m-event-detail-wrap .live-match.event-detail .m-detail-market-default .m-market-title {
    background-color: #1b1e25;
  }

  .m-openbet-overlay {
    background: rgba(0, 0, 0, 0.3);
    height: 100vh;
    left: 0;
    opacity: 1;
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: 48;
  }

  .m-openbet-pop {
    background: #353a45;
    bottom: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    height: 28.33333333rem;
    left: 0;
    position: fixed;
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
    width: 100%;
    z-index: 250;
  }

  .m-openbet-pop__header {
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #ffffff;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    font-size: 1.33333333rem;
    padding: 1.33333333rem 2rem;
    text-align: center;
    width: 100%;
  }

  .m-openbet-pop__header .m-close {
    height: 100%;
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    text-align: left;
    width: 18%;
  }

  .m-openbet-pop__header .m-close:before {
    content: "\e69a";
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .m-openbet-pop__header .m-all-link {
    color: #32ce62;
    font-size: 1rem;
    text-align: right;
    width: 18%;
  }

  .m-openbet-pop__header--title {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    text-align: center;
  }

  .m-openbet-pop .m-openbet-wrap {
    height: 100%;
    overflow-y: scroll;
    position: relative;
    width: 100%;
  }

  .m-openbet-pop .m-openbet-wrap.m-sportBets {
    background: #ffffff;
    min-height: 0;
    padding-bottom: 0;
  }

  .m-openbet-pop .m-no-bets {
    background-color: #353a45;
    border-top: 1px solid #50545f;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #9ca0ab;
    height: 100%;
    padding-top: 2rem;
    text-align: center;
    width: 100%;
  }

  .m-openbet-pop .m-no-bets img {
    padding-bottom: 2.25rem;
    width: 3rem;
  }

  .m-openbet-pop .m-no-bets__link {
    color: #0d9737;
    margin-top: 1.83333333rem;
  }

  .m-event-view.m-cashout {
    bottom: 0;
    position: fixed;
    z-index: 251;
  }

  .m-event-view.m-bookingCode {
    background: rgba(0, 0, 0, 0.3);
    bottom: 0;
    height: 100%;
    position: fixed;
    width: 100%;
    z-index: 1000;
  }

  .m-cashout-success {
    bottom: 0;
    left: 0;
    position: fixed;
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
    width: 100%;
    z-index: 252;
  }

  .slideIn-enter-active,
  .slideIn-leave-active {
    -webkit-transition: -webkit-transform 0.3s ease;
    transition: -webkit-transform 0.3s ease;
    transition: transform 0.3s ease;
    transition: transform 0.3s ease, -webkit-transform 0.3s ease;
  }

  .slideIn-enter,
  .slideIn-leave-to {
    -webkit-transform: translateY(100%);
    -ms-transform: translateY(100%);
    transform: translateY(100%);
  }

  .fade-enter-active,
  .fade-leave-active {
    -webkit-transition: opacity 0.3s ease;
    transition: opacity 0.3s ease;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  @-webkit-keyframes loading-rotate {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @keyframes loading-rotate {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
</style>
