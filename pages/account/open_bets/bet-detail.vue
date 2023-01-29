<template>
  <div class="m-bethistory">
    <div data-v-22685d54="" class="m-ticket-detail" style="position: relative">
      <div
        class="m-nav-secondary withHome"
      >
        <div data-v-045e5fcb="" class="m-nav-left">
          <span
            data-v-045e5fcb=""
            data-op="nav-sec-back"
            class="m-icon m-icon--back"
            @click="goBack"
          ></span>
          <span data-v-045e5fcb="" data-op="nav-title" class="title"
            >Ticket Details</span
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
      <div v-if="!loading" data-v-22685d54="">
        <!---->
        <div data-v-22685d54="" class="ticket-top">
          <div data-v-22685d54="" class="seperate ticket-info">
            <span data-v-22685d54=""> Ticket ID: 371211 </span>
            <span data-v-22685d54="">22/01 14:07</span>
          </div>
          <div data-v-22685d54="" class="bar seperate">
            <span data-v-22685d54="" class="type"
              ><span data-v-22685d54=""> {{ details.bet_type }} </span>
            </span
            >

          </div>
          <div data-v-22685d54="" class="seperate stake-amount">
            <span data-v-22685d54="" class="left"> Total Return </span>
            <span data-v-22685d54="" :class="details.status == 1 ? 'green-color':''">{{ details.settled_at ? details.winnings : '--' }}</span>
          </div>
          <!---->
          <div data-v-22685d54="" class="under-split">
            <div data-v-22685d54="" class="cash-info">
              <em data-v-22685d54=""></em>
              <div data-v-22685d54="" class="seperate">
                <span data-v-22685d54="" class="left"> Total Stake </span>
                <span data-v-22685d54="">{{ parseFloat(details.stake).toFixed(2) }}</span>
              </div>
              <div data-v-22685d54="" class="seperate">
                <span data-v-22685d54="" class="left"> Total Odds </span>
                <span data-v-22685d54="">{{ formatOdd(details.odds) }}</span>
              </div>
            </div>
          </div>
          <div v-if="details.status == 1" data-v-22685d54="" class="m-share">
            <div data-v-22685d54="" class="m-btn--share">Show Off</div>
          </div>
          <div v-else data-v-22685d54="" class="rebet-wrapper seperate"><span data-v-22685d54=""><span data-v-22685d54="">
              Booking Code: EE30292
            </span> <img data-v-22685d54="" data-clipboard-text="EE30292" src="//s.sporty.net/global/main/modules/main/mobile/order/image/ic-content-copy-white.14a28e5866.svg"> <img data-v-22685d54="" src="//s.sporty.net/global/main/modules/main/mobile/order/image/ic-share-white.dd1416cdbe.svg"></span> <span data-v-22685d54="" class="rebet-btn">
            Rebet
          </span></div>
        </div>
        <div
          data-v-22685d54=""
          v-for="(e, index) in details.selections"
          :key="index"
          class="ticket-selection-list ticket-detail-list"
        >
          <div class="seperate">
            <span class="status" :class="e.status == 1 ? 'won':'others'">
              <span v-if="e.status == 2">Lost</span>
              <span v-if="e.status == 0">{{ e.type == 'live' ? 'Ongoing' : e.type == 'pre' ? 'Not Started' : '' }}</span>
            </span>
            <div class="solo">
              <span>
                <span class="gray"> Game ID: {{ e.event_id }} </span>
                <span class="gray"> | </span>
                <span class="gray">{{ formatDate(e.start_date) }}</span></span
              >
              <div class="ellips">
                {{ e.event }}
              </div>
              <div class="seperate tracker-comments-warp">
                <span class="tracker"> Match Tracker </span>
                <!---->
              </div>
              <span class="score-wrapper"
                ><div class="not-seperate">
                  <span class="gray">FT Score: </span>
                  <p>
                    <span> <em>{{ e.score }}</em></span>
                  </p>
                </div></span
              >
              <div class="pick-info">
                <p class="not-seperate">
                  <span class="gray colon">Pick</span>
                  <span>
                    {{ e.odd_name == 1 ? 'Home':e.odd_name == 2 ? 'Away' : e.odd_name == 'X' ? 'Draw' : e.odd_name }} @{{ e.odds }}
                    <i v-if="e.status == 1" class="pick-right"></i
                  ></span>
                </p>
                <p class="not-seperate">
                  <span class="gray colon">Market</span>
                  <span>
                    {{ e.market_name }}
                  </span
                  >
                </p>
                <div class="d-none not-seperate">
                  <span class="gray colon">Outcome</span> <span> Away</span>
                </div>
              </div>
              <!---->
            </div>
          </div>
        </div>
        <div data-v-22685d54="" class="seperate bets-info">
          <span data-v-22685d54="" class="bets-num"> Number of Bets: 1 </span>
          <span data-v-22685d54="" class="to-bet-detail">
            Bet Details <i data-v-22685d54="" class="arrow"></i
          ></span>
        </div>
        <div data-v-22685d54="" @click="$router.push('/account/transactions')" class="seperate bets-info to-trans">
          <span data-v-22685d54="" class="bets-num">
            Check Transaction History
          </span>
          <i data-v-22685d54="" class="arrow"></i>
        </div>
        <div data-v-22685d54="" class="delete-bet">Delete Ticket</div>
        <div style="width: 100%; height: 100px;"></div>
      </div>
      <div v-else class="m-loading-wrap"><div class="m-loading dark"><div class="loading"></div> <!----></div></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: "",
      details: [],
      loading: false,
      today: this.$moment().format()
    };
  },
  watch: {
    $route: {
      immediate: true,
      handler(to) {
        // react to route changes...
        this.id = to.params.couponid;
        this.getBetlist();
      },
    },
  },
  methods: {
    getBetlist() {
      this.loading = true;
      this.$axios
        .get(`/sports/find-coupon/${this.id}`)
        .then((res) => {
          this.details = res.data.coupon;
          this.loading = false;
        })
        .catch((error) => {
          this.loading = false;
          console.log(error);
        });
    },
    formatDate(date) {
      return this.$moment(date).format("DD/MM HH:mm");
    },
    getEventStatus(time){
      if(this.today < time){
        return 'Not Started'
      }else if(this.today ){}
    }
  },
};
</script>

<style type="text/css">
.m-ticket-detail .booking-code-layer[data-v-22685d54] {
  background: rgba(0, 0, 0, 0.5);
  height: 100%;
  position: fixed;
  top: 0px;
  width: 100vw;
}
.m-ticket-detail .ticket-top[data-v-22685d54] {
  background-color: #1b1e25;
  color: #ffffff;
  padding: 1rem 1.33333333rem 1.41666667rem;
}
.m-ticket-detail .ticket-top .ticket-info[data-v-22685d54] {
  color: #ffffff;
  opacity: 0.5;
}
.m-ticket-detail .ticket-top .green-color[data-v-22685d54] {
  color: #33ea6a;
}
.m-ticket-detail .ticket-top .boost[data-v-22685d54] {
  font-size: 0.83333333rem;
  line-height: 2rem;
}
.m-ticket-detail .ticket-top .boost img[data-v-22685d54] {
  height: 0.83333333rem;
  margin-top: -0.25rem;
  width: 1.33333333rem;
}
.m-ticket-detail .ticket-top .bar[data-v-22685d54] {
  font-size: 1.33333333rem;
}
.m-ticket-detail .ticket-top .bar .cup[data-v-22685d54]:before {
  content: "\e626";
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.m-ticket-detail .ticket-top .bar .cup[data-v-22685d54]::before {
  color: #33ea6a;
  display: inline-block;
  margin-right: 0.41666667rem;
}
.m-ticket-detail .ticket-top .flexibet-title[data-v-22685d54] {
  color: #9ca0ab;
  font-size: 0.83333333rem;
  margin-top: 0.41666667rem;
  margin-bottom: 0.66666667rem;
}
.m-ticket-detail .ticket-top .flexibet-title i[data-v-22685d54] {
  background-color: #32ce62;
  color: #ffffff;
  padding-right: 0.41666667rem;
  display: inline-block;
  vertical-align: middle;
  padding: 1px 0 1px 3px;
  font-weight: 700;
  font-size: 1.16666667rem;
  line-height: 1;
  position: relative;
  margin-right: 0.58333333rem;
}
.m-ticket-detail .ticket-top .flexibet-title i[data-v-22685d54]:after {
  position: absolute;
  top: 0;
  right: -2px;
  height: 100%;
  width: 4px;
  content: " ";
  display: block;
  background: #32ce62;
  -webkit-transform: skew(-12deg);
  -ms-transform: skew(-12deg);
  transform: skew(-12deg);
}
.m-ticket-detail .ticket-top .sportcoins-tip[data-v-22685d54] {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  background: #353a45;
  color: #ffffff;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  font-size: 1rem;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  line-height: 1.16666667rem;
  margin-bottom: 0.66666667rem;
  margin-top: 0.83333333rem;
  padding: 1rem;
  position: relative;
}
.m-ticket-detail .ticket-top .sportcoins-tip .arrow-ele[data-v-22685d54] {
  background: #353a45;
  height: 0.83333333rem;
  position: absolute;
  right: 1.33333333rem;
  top: -0.41666667rem;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  -webkit-transform-origin: center;
  -ms-transform-origin: center;
  transform-origin: center;
  width: 0.83333333rem;
}
.m-ticket-detail .ticket-top .sportcoins-tip .tip-text[data-v-22685d54] {
  -webkit-box-flex: 1;
  -webkit-flex: 1 1 auto;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
}
.m-ticket-detail .ticket-top .sportcoins-tip .icon-right[data-v-22685d54] {
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
}
.m-ticket-detail
  .ticket-top
  .sportcoins-tip
  .icon-right[data-v-22685d54]:before {
  content: "\e608";
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.m-ticket-detail .ticket-top .stake-info[data-v-22685d54] {
  color: #ffffff;
  opacity: 0.7;
}
.m-ticket-detail .ticket-top .stake-amount span[data-v-22685d54]:first-child {
  font-size: 1.16666667rem;
}
.m-ticket-detail .ticket-top .stake-amount span[data-v-22685d54]:last-child {
  font-size: 1.66666667rem;
  font-weight: bold;
}
.m-ticket-detail .ticket-top .cash-info[data-v-22685d54] {
  font-size: 1.16666667rem;
  line-height: 1.57;
  margin-bottom: 0.91666667rem;
}
.m-ticket-detail .ticket-top .cash-info em[data-v-22685d54] {
  border-top: solid 0.08333333rem #353a45;
  display: block;
  padding-top: 0.83333333rem;
}
.m-ticket-detail .ticket-top .cash-info em[data-v-22685d54]:only-child {
  border-top: 0px;
  margin-bottom: 0px;
  padding-top: 0;
}
.m-ticket-detail .ticket-top .unavailable[data-v-22685d54] {
  font-size: 0.83333333rem;
  opacity: 0.5;
}
.m-ticket-detail .ticket-top .flexibet-tip[data-v-22685d54] {
  font-size: 0.83333333rem;
}
.m-ticket-detail .ticket-top .flexibet-tip .tip[data-v-22685d54]:before {
  content: "\e651";
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.m-ticket-detail .ticket-top .flexibet-tip .tip[data-v-22685d54]:before {
  color: #dcdee5;
  font-size: 1rem;
  padding-left: 0.41666667rem;
}
.m-ticket-detail .ticket-top .cashout-title[data-v-22685d54] {
  background-color: rgba(234, 236, 239, 0.15);
  color: #f2f3f5;
  height: 2.33333333rem;
  line-height: 2.33333333rem;
  margin-bottom: 0.5rem;
}
.m-ticket-detail .ticket-top .cashout-title .fold[data-v-22685d54] {
  display: inline-block;
  margin-top: -1px;
  position: relative;
  top: 1px;
  -webkit-transform: rotate(270deg);
  -ms-transform: rotate(270deg);
  transform: rotate(270deg);
}
.m-ticket-detail .ticket-top .cashout-title .fold[data-v-22685d54]:before {
  content: "\e6a3";
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.m-ticket-detail .ticket-top .cashout-title .fold[data-v-22685d54]::before {
  font-size: 0.83333333rem;
  left: 0.83333333rem;
  padding-right: 1.25rem;
  position: relative;
  top: 0.16666667rem;
}
.m-ticket-detail .ticket-top .cashout-title .unfold[data-v-22685d54]:before {
  content: "\e6a3";
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.m-ticket-detail .ticket-top .cashout-title .unfold[data-v-22685d54]::before {
  font-size: 0.83333333rem;
  left: 0.83333333rem;
  padding-right: 1.25rem;
  position: relative;
  top: 0.16666667rem;
}
.m-ticket-detail .ticket-top .cashout-detail[data-v-22685d54] {
  font-size: 1.16666667rem;
  line-height: 1.57;
}
.m-ticket-detail .ticket-top .split[data-v-22685d54] {
  border-bottom: solid 0.08333333rem #3a3c42;
  margin-top: 0.66666667rem;
  padding-bottom: 0.66666667rem;
}
.m-ticket-detail .ticket-top .left[data-v-22685d54] {
  opacity: 0.5;
}
.m-ticket-detail .m-share[data-v-22685d54] {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  background: url(//s.sporty.net/global/main/modules/main/mobile/order/image/shareBg.e0730882a1.png)
    no-repeat left center;
  background-size: 73% auto;
  border-top: solid 0.08333333rem #353a45;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  margin-bottom: -1.41666667rem;
  margin-left: -1.33333333rem;
  padding: 1rem 0 1.33333333rem;
}
.m-ticket-detail .m-share .m-btn--share[data-v-22685d54] {
  background-color: #f2af00;
  border-radius: 0.16666667rem;
  color: #1b1e25;
  font-size: 1.16666667rem;
  font-weight: bold;
  height: 3.33333333rem;
  line-height: 3.33333333rem;
  text-align: center;
  width: 8.5rem;
}
.m-ticket-detail .rebet-wrapper[data-v-22685d54] {
  border-top: 1px solid rgba(234, 236, 239, 0.2);
  margin-top: 1.08333333rem;
  padding: 1rem 0px 0rem;
}
.m-ticket-detail .rebet-wrapper span[data-v-22685d54] {
  height: 3.33333333rem;
  line-height: 3.33333333rem;
  white-space: nowrap;
}
.m-ticket-detail .rebet-wrapper span[data-v-22685d54]:first-child {
  color: #dcdee5;
  font-size: 1rem;
}
.m-ticket-detail .rebet-wrapper span:first-child .copy[data-v-22685d54] {
  color: #0d9737;
  display: inline-block;
  padding-left: 1.16666667rem;
}
.m-ticket-detail .rebet-wrapper span:first-child img[data-v-22685d54] {
  margin-left: 8px;
  -webkit-transform: translateY(-1.5px);
  -ms-transform: translateY(-1.5px);
  transform: translateY(-1.5px);
}
.m-ticket-detail .rebet-wrapper .rebet-btn[data-v-22685d54] {
  background-color: #0d9737;
  border-radius: 2px;
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  font-size: 1.16666667rem;
  text-align: center;
  width: 7.66666667rem;
}
.m-ticket-detail .rebet-wrapper .rebet-btn[data-v-22685d54]:active {
  background-color: #32ce62;
}
.m-ticket-detail .bets-info[data-v-22685d54] {
  border-bottom: 0.08333333rem solid #eaecef;
  border-top: 0.08333333rem solid #eaecef;
  padding: 1.5rem 1rem;
}
.m-ticket-detail .bets-info .arrow[data-v-22685d54]:before {
  content: "\e608";
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.m-ticket-detail .bets-info .arrow[data-v-22685d54]::before {
  color: #0d9737;
  font-size: 0.83333333rem;
  left: 0.66666667rem;
  padding-right: 0.41666667rem;
  position: relative;
}
.m-ticket-detail .bets-info .bets-num[data-v-22685d54] {
  color: #353a45;
  font-size: 1.16666667rem;
}
.m-ticket-detail .bets-info .to-bet-detail[data-v-22685d54] {
  color: #0d9737;
  font-size: 1.16666667rem;
}
.m-ticket-detail .to-trans[data-v-22685d54] {
  border-top: 0.75rem solid #eaecef;
}
.m-ticket-detail .delete-bet[data-v-22685d54] {
  background: #ffffff;
  border-bottom: 0.75rem solid #eaecef;
  border-top: 0.75rem solid #eaecef;
  color: #e41827;
  font-size: 1.16666667rem;
  line-height: 4rem;
  text-align: center;
}
.m-ticket-detail .sporty-green[data-v-22685d54] {
  color: #32ce62;
}
.m-ticket-detail .text-gray[data-v-22685d54] {
  color: #9ca0ab;
}
.m-ticket-detail .edit-bet[data-v-22685d54] {
  margin-right: 2.66666667rem;
}
.m-ticket-detail .edit-bet-btn[data-v-22685d54] {
  background: transparent;
  border: 0.08333333rem solid #32ce62;
  color: #32ce62;
  font-size: 0.91666667rem;
  padding: 0.33333333rem 0.5rem;
}
.m-ticket-detail {
  background: #ffffff;
  font-size: 1rem;
}
.m-ticket-detail .seperate {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
}
.edit-bet-alert {
  text-align: center;
}
.edit-bet-alert .m-dialog-body {
  line-height: 4;
}
.edit-bet-alert .m-dialog-head h1 {
  text-align: center;
}
.edit-bet-alert.es-dialog .es-dialog-footer [data-ret="0"] {
  background: #0d9737;
  border: 0.08333333rem solid #0d9737;
  color: #ffffff;
  display: block;
  font-weight: normal;
  margin-bottom: 0.83333333rem;
  padding: 0.33333333rem 0.5rem;
  width: initial;
}
.edit-bet-alert.es-dialog .es-dialog-footer [data-ret="1"] {
  background: transparent;
  border: 0.08333333rem solid #0d9737;
  color: #0d9737;
  display: block;
  font-weight: normal;
  padding: 0.33333333rem 0.5rem;
  width: initial;
}

.ticket-selection-list {
  border-bottom: 0.08333333rem solid #f8f8f8;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 1.33333333rem 1rem;
}
.ticket-selection-list .seperate {
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
}
.ticket-selection-list .seperate .right {
  left: 2.5rem;
  position: relative;
}
.ticket-selection-list .seperate .solo {
  position: relative;
  width: 75%;
}
.ticket-selection-list .index {
  background-color: #353a45;
  border-radius: 0.66666667rem;
  color: #ffffff;
  display: inline-block;
  height: 1.33333333rem;
  line-height: 1.33333333rem;
  margin-right: 8px;
  text-align: center;
  width: 1.33333333rem;
}
.ticket-selection-list .m-icon-live {
  background: #33ea6a;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  color: #353a45;
  display: inline-block;
  margin-right: 0.41666667rem;
  padding: 0 0.16666667rem;
  position: relative;
  vertical-align: top;
}
.ticket-selection-list .m-icon-live:after {
  border-bottom: 0.66666667rem solid transparent;
  border-left: 0.08333333rem solid #33ea6a;
  border-right: 0.08333333rem solid transparent;
  border-top: 0.66666667rem solid #33ea6a;
  content: "";
  height: 0;
  position: absolute;
  right: -0.16666667rem;
  top: 0;
  width: 0;
}
.ticket-selection-list .tracker-comments-warp {
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  line-height: normal;
}
.ticket-selection-list .tracker-comments-warp .tracker {
  color: #0d9737;
  font-size: 0.83333333rem;
  padding-right: 1.66666667rem;
}
.ticket-selection-list .tracker-comments-warp .tracker:before {
  content: "\e64a";
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.ticket-selection-list .tracker-comments-warp .tracker::before {
  display: inline-block;
  font-size: 1.33333333rem;
  padding-right: 0.41666667rem;
  vertical-align: middle;
}
.ticket-selection-list .tracker-comments-warp .to-prematch {
  color: #0d9737;
  font-size: 0.83333333rem;
}
.ticket-selection-list .tracker-comments-warp .to-prematch .arrow {
  margin-right: 0.5rem;
}
.ticket-selection-list .tracker-comments-warp .to-prematch .arrow:before {
  content: "\e669";
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.ticket-selection-list .tracker-comments-warp .to-prematch .arrow::before {
  color: #0d9737;
  display: inline-block;
  font-size: 1.16666667rem;
  vertical-align: middle;
}
.ticket-selection-list .gray {
  color: #9ca0ab;
  text-align: right;
}
.ticket-selection-list .gray.colon:after {
  content: ":";
}
.ticket-selection-list .score em {
  font-weight: bold;
}
.ticket-selection-list .score p {
  display: inline-block;
}
.ticket-selection-list .status {
  color: #353a45;
  font-size: 1.16666667rem;
  font-weight: bold;
  line-height: 1;
}
.ticket-selection-list .status .question-mark {
  background: #9ca0ab;
  border-radius: 50%;
  color: #ffffff;
  display: inline-block;
  font-weight: 900;
  height: 1.16666667rem;
  line-height: 1.16666667rem;
  text-align: center;
  width: 1.16666667rem;
}
.ticket-selection-list .status .delayed-icon {
  display: block;
  margin-top: 0.33333333rem;
  width: 1rem;
}
.ticket-selection-list .others {
  color: #9ca0ab;
}
.ticket-selection-list .won:before {
  content: "\e60b";
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.ticket-selection-list .won::before {
  color: #0d9737;
  font-size: 1.66666667rem;
  font-weight: normal;
  line-height: 1;
  padding-right: 1.25rem;
  position: relative;
  vertical-align: middle;
}
.ticket-selection-list .pick-info {
  background: #f2f3f5;
  margin-bottom: 0.58333333rem;
  padding: 0.41666667rem;
}
.ticket-selection-list .pick-info .pick-right:before {
  content: "\e611";
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.ticket-selection-list .pick-info .pick-right:before {
  color: #0d9737;
  font-size: 1rem;
  margin-left: 0.41666667rem;
}
.ticket-selection-list .not-seperate {
  display: table-row;
}
.ticket-selection-list .not-seperate span {
  display: table-cell;
}
.ticket-selection-list .not-seperate span:last-child {
  padding-left: 0.66666667rem;
}
.ticket-selection-list .not-seperate .banker {
  border: solid 0.08333333rem #0d9737;
  border-radius: 0.66666667rem;
  color: #0d9737;
  display: inline-block;
  font-weight: bold;
  height: 1.33333333rem;
  line-height: 1.33333333rem;
  margin-left: 0.25rem;
  text-align: center;
  width: 1.33333333rem;
}
.ticket-selection-list .to-live {
  border: 0.08333333rem solid #0d9737;
  border-radius: 0.16666667rem;
  color: #0d9737;
  height: 2.83333333rem;
  line-height: 2.83333333rem;
  text-align: center;
}
.ticket-selection-list .to-live .arrow:before {
  content: "\e608";
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.ticket-selection-list .to-live .arrow::before {
  color: #0d9737;
  font-size: 1.33333333rem;
  left: 0.83333333rem;
  padding-right: 1.25rem;
  position: relative;
  top: 0.16666667rem;
}
</style>
