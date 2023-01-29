<template>
  <div class="m-sportBets">
    <div style="width: 100%; height: 87px"></div>
    <div
      class="fixed-wrap w-100"
      style="position: fixed; top: 0rem; z-index: 1000"
    >
      <!-- Bet Header -->
      <bet-header></bet-header>
      <!-- Bet Header -->
      <div
        data-v-08f78d50=""
        class="m-snap-nav-wrap m-list-nav-type m-bets--nav"
      >
        <ul class="m-snap-nav flex" style="width: 100%">
          <li data-v-08f78d50="" class="m-list-nav-type-item m-snap-nav-item">
            <router-link to="/account/open_bets">
              <span data-v-08f78d50="" class="text-white">Open Bets</span>
            </router-link>
          </li>
          <li
            data-v-08f78d50=""
            class="m-list-nav-type-item m-snap-nav-item active"
          >
            <span data-v-08f78d50="">Bet History</span>
          </li>
        </ul>
      </div>
    </div>
    <div v-if="!$auth.loggedIn" data-v-0783d367="">
      <div data-v-6b611fb0="" data-v-0783d367="" class="m-openbet">
        <div data-v-6b611fb0="" class="m-error-wrapper">
          <div data-v-6b611fb0="">
            <span
              data-v-6b611fb0=""
              class="m-error-msg"
              data-cms-key="please_log_in_to_see_your_open_and_cashout"
              data-cms-page="bet_history"
              >Please Log In to see your Open Bets and Cashout Bets</span
            >
            <div
              data-v-6b611fb0=""
              class="m-btn--text"
              data-cms-key="what_is_cashout"
              data-cms-page="bet_history"
            >
              What is Cashout?
            </div>
            <router-link to="/login">
              <div class="m-btn">Login</div>
            </router-link>
          </div>
        </div>
      </div>
      <div data-v-0783d367="" class="m-sportBets m-cashout">
        <div data-v-0783d367="" id="j_pop_cashout" class="m-cashout-pop"></div>
      </div>
    </div>
    <div v-else class="m-bethistory">
      <div data-v-5ac3f8c7="" class="m-order">
        <div data-v-5ac3f8c7="">
          <div
            data-v-5ac3f8c7=""
            id="order-new-tabs-wrapper"
            class="tabs-wrapper"
          >
            <div data-v-5ac3f8c7="" class="m-l-left">
              <ul data-v-5ac3f8c7="" class="m-uc-nav m-order-select-nav">
                <li
                  data-op="history-tag-Settled"
                  class="m-nav-item"
                  :class="bet_type == 'settled' ? 'm-nav-item--active': bet_type == null ? 'm-nav-item--active':''"
                  @click="
                    $router.push({
                      name: 'account-open_bets-bet_history',
                      query: { type: 'settled' },
                    })
                  "
                >
                  <span>Settled</span>
                </li>
                <li
                  data-op="history-tag-Unsettled"
                  class="m-nav-item"
                  :class="bet_type == 'pending' ? 'm-nav-item--active': ''"
                  @click="
                    $router.push({
                      name: 'account-open_bets-bet_history',
                      query: { type: 'pending' },
                    })
                  "
                >
                  <span>Unsettled</span>
                </li>
                <!-- <li data-op="history-tag-All" class="m-nav-item">
                  <span>All</span>
                </li> -->
              </ul>
            </div>
            <!-- <div data-v-5ac3f8c7="" class="m-l-right all-dates">
              <span data-v-5ac3f8c7="" class="m-txt"> All Dates</span>
              <span data-v-5ac3f8c7="" class="i-icon-more"></span>
            </div> -->
          </div>
          <div
            data-v-5ac3f8c7=""
            v-if="!loading"
            class="m-scroll list-wrapper"
            style="position: relative"
          >
            <div data-v-5ac3f8c7="" class="only-win">
              <span data-v-5ac3f8c7="" class="text">
                Show only winning tickets
              </span>
              <span
                data-v-5ac3f8c7=""
                data-op="history-only-switch"
                class="outter off"
                ><span data-v-5ac3f8c7="" class="inner"></span
              ></span>
            </div>
            <div v-for="(group,index) in details" :key="index">
              <div data-v-5ac3f8c7="" class="wide"></div>
              <!-- <div data-v-5ac3f8c7="" class="year">2022</div> -->
              <div class="ticket-list">
                <div data-v-5ac3f8c7="" class="date">
                  <div data-v-5ac3f8c7="" class="day">{{ betlistformatDate(index,'D') }}</div>
                  <div
                    data-v-5ac3f8c7=""
                    class="month"
                    data-cms-key="nov"
                    data-cms-page="common_dates"
                  >
                    {{ betlistformatDate(index,'MMM') }}
                  </div>
                </div>
                <div data-v-5ac3f8c7="" class="place"></div>
                <div v-for="(list, k) in group" :key="k" data-v-5ac3f8c7="" @click="$router.push({name:'account-openbets-betdetail',params:{couponid:list.betslip_id}})" class="list">
                  <div data-v-5ac3f8c7="" class="bar" :class="list.status == 1 ? 'win': list.status == 2 ? 'lost' : 'pending'">
                    <span data-v-5ac3f8c7="" class="type"
                      ><span data-v-5ac3f8c7=""> {{ list.bet_type }} </span>
                      <!----></span
                    >
                    <span
                      data-v-5ac3f8c7=""
                      data-op="history-status"
                      class="status"
                      ><span data-v-5ac3f8c7=""> {{ list.status == 1 ? 'Won' : list.status == 2 ? 'Lost' : 'Pending' }} </span>
                      <i data-v-5ac3f8c7="" class="arrow"></i
                    ></span>
                  </div>
                  <div data-v-5ac3f8c7="" class="title">
                    <span data-v-5ac3f8c7="" data-op="history-stake-text">
                      Total Stake(NGN)
                    </span>
                    <span data-v-5ac3f8c7="" data-op="history-return-text">
                      Total Return
                    </span>
                  </div>
                  <div data-v-5ac3f8c7="" class="total_info">
                    <span data-v-5ac3f8c7="" data-op="history-stake-amount"
                      >{{ list.stake }}</span
                    >
                    <span
                      data-v-5ac3f8c7=""
                      data-op="history-return-amount"
                      class=""
                      >{{ list.winnings }}</span
                    >
                  </div>
                  <ul v-for="(event, i) in list.selections.slice(0,2)" :key="i" data-v-5ac3f8c7="" class="teams">
                    <li data-v-5ac3f8c7="">{{ event.event }}</li>

                  </ul>
                  <ul v-if="list.selections.length > 3" data-v-5ac3f8c7="" class="teams">
                    <li data-v-5ac3f8c7="">...(and {{ list.selections.slice(3,-1).length }} other matches)</li>
                  </ul>
                  <div data-v-5ac3f8c7="" class="narrow"></div>
                </div>
              </div>
            </div>
            <div v-if="details.length > 1" data-v-5ac3f8c7="" class="m-list-none-wrap"><!----> <div class="m-list-none"><span class="no-list-txt">
      No tickets available.
    </span> <!----></div></div>
          </div>
          <div v-else class="m-loading-wrap"><div class="m-loading dark"><div class="loading"></div> <!----></div></div>
        </div>
      </div>
      <!---->
    </div>
  </div>
</template>

<script>
import BetHeader from "~/components/BetHeader.vue";
import _ from 'lodash'
export default {
  components: { BetHeader },
  watch: {
    $route: {
      immediate: true,
      handler(to) {
        this.bet_type = to.query.type ?? null;
        this.getBetlist(this.bet_type)
      },
    },
  },
  data(){
    return {
      bet_type: '',
      details:[],
      loading: false
    }
  },
  methods:{
    getBetlist(type) {
      this.loading = true;
      if(type == 'pending'){
        this.$axios
          .get("user/account/open-bets")
          .then((res) => {
            this.details = _.groupBy(res.data.bets, "created_at");
            this.loading = false;
          })
          .catch((error) => {
            this.loading = false;
            this.error = error.message;
            // console.log(err);
          });
      }else{
        this.$axios
          .post("user/account/settled-bets")
          .then((res) => {
            this.details = _.groupBy(res.data.bets.data, "created_at");
            this.loading = false;
          })
          .catch((error) => {
            this.loading = false;
            this.error = error.message;
            // console.log(err);
          });
      }
    },
    betlistformatDate(date, n){
      return this.$moment(date).format(n);
    },
    showOnlyWins(){

    }
  }
};
</script>

<style>
@import url("~/assets/css/bethistory.css");
.m-sportBets .m-list-nav-type[data-v-08f78d50] {
  background: #353a45;
  padding: 0 2.08333333rem;
}

.m-sportBets .m-list-nav-type .m-list-nav-type-item[data-v-08f78d50] {
  background-color: #50545f;
  border-top-left-radius: 0.33333333rem;
  border-top-right-radius: 0.33333333rem;
  color: #ffffff;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  font-size: 1.16666667rem;
  font-weight: bold;
  height: 3rem;
  line-height: 3rem;
  margin-right: 0.25rem;
}

.m-sportBets
  .m-list-nav-type
  .m-list-nav-type-item[data-v-08f78d50]:last-child {
  margin: 0;
}

.m-sportBets .m-list-nav-type .m-list-nav-type-item.active[data-v-08f78d50] {
  background-color: #ffffff;
  color: #353a45;
}

.m-sportBets
  .m-list-nav-type
  .m-list-nav-type-item.m-snap-nav-item--disabled[data-v-08f78d50] {
  opacity: 0.5;
  text-decoration: line-through;
}

.m-openBet--suc.es-dialog .es-dialog-main {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin-top: 0.66666667rem;
  padding: 0 1.66666667rem;
  text-align: center;
  width: 100%;
}

.m-openBet--suc.es-dialog .es-dialog-main > img {
  height: 3.33333333rem;
  width: 3.33333333rem;
}

.m-openBet--suc.es-dialog .es-dialog-main .m-txt-main {
  color: #353a45;
  font-size: 1.83333333rem;
  font-weight: bold;
  line-height: 1.66666667rem;
  margin-top: 1.83333333rem;
}

.m-openBet--suc.es-dialog .es-dialog-main .m-txt-min {
  color: #353a45;
  font-size: 1.5rem;
  line-height: 1;
  margin-top: 1.16666667rem;
}

.m-openBet--suc.es-dialog .es-dialog-main .m-txt-desc {
  color: #9ca0ab;
  font-size: 1.16666667rem;
  line-height: 1;
  margin-top: 0.66666667rem;
}

.m-openBet--suc.es-dialog .es-dialog-btn {
  background: #0d9737;
  color: #ffffff;
  height: 4rem;
  line-height: 4rem;
  width: 100%;
}

.m-uc-nav {
  height: 4rem;
  background: #ffffff;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  position: relative;
  z-index: 1;
}

.m-uc-nav .m-nav-item {
  font-size: 1.16666667rem;
  line-height: 4rem;
  width: 33.4%;
  text-align: center;
  text-transform: capitalize;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.m-uc-nav .m-nav-item--active {
  font-weight: bold;
  border-bottom: 0.25rem solid #0d9737;
}

.m-btn--text[data-v-6b611fb0] {
  color: #0d9737;
}

.m-btn--text + .m-btn[data-v-6b611fb0] {
  margin-top: 1.66666667rem;
}

.m-icon-reversed-sms:before {
  content: "\e6d22";
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.m-icon--vFootball:before {
  content: "\e6d4";
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.m-icon--snooker:before {
  content: "\e6ca";
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-16-size:before {
  font-size: 1.33333333rem;
}

.m-openbet-header {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  background: #353a45;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  font-size: 1.16666667rem;
  height: 3.66666667rem;
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  padding: 0 1.33333333rem;
  width: 100%;
}

.m-openbet-header .no-login {
  color: #ffffff;
}

.m-openbet-header .no-login > span {
  padding: 0 0.66666667rem;
}

.m-openbet-header .no-login span:last-of-type:before {
  border-left: 1px solid #ffffff;
  content: "";
  height: 100%;
  left: -0.75rem;
  opacity: 0.5;
  position: relative;
  top: -0.16666667rem;
}

.m-openbet-header .is-login {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  color: #fafd00;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}

.m-openbet-header .is-login .usr-img {
  border: 0.08333333rem solid #ffffff;
  border-radius: 50%;
  height: 1.66666667rem;
  margin-right: 0.66666667rem;
  width: 1.66666667rem;
}

.m-openbet-header .is-login .balance {
  display: inline;
  vertical-align: bottom;
}

.m-openbet-header .is-login .hidden {
  font-size: 1.16666667rem;
  letter-spacing: 0.16666667rem;
}

.m-icon-reversed-sms:before {
  content: "\e6d22";
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.m-icon--vFootball:before {
  content: "\e6d4";
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.m-icon--snooker:before {
  content: "\e6ca";
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-16-size:before {
  font-size: 1.33333333rem;
}

.page-content {
  height: 100%;
}

.m-sportBets {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  min-height: calc(100% - 3.66666667rem);
  padding-bottom: 5.66666667rem;
  position: relative;
}

.m-sportBets .f-flex {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}

.m-sportBets .f-btwn {
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.m-sportBets .f-wrap {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.m-sportBets .f-grid {
  display: table;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  display: grid;
  width: 100%;
}

.m-sportBets .f-alg-side {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  display: table;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  width: 100%;
}

.m-sportBets .f-alg-side .f-alg-side-item {
  display: table-cell;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  min-width: 1%;
  vertical-align: middle;
}

.m-sportBets .f-alg-side .f-alg-side-item:last-of-type {
  text-align: right;
}

.m-sportBets .f-flex-item {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  min-width: 1%;
}

.m-sportBets .f-count {
  counter-reset: index;
}

.m-sportBets .f-count-item::before {
  content: counter(index) ".";
  counter-increment: index;
}

.m-sportBets .m-error-wrapper {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  display: table;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  padding: 20% 2.66666667rem 0;
}

.m-sportBets .m-error-wrapper > div {
  display: table-cell;
  text-align: center;
  width: 100%;
}

.m-sportBets .m-error-wrapper .m-icon-loading {
  -webkit-animation: loading-rotate 2s linear infinite;
  animation: loading-rotate 2s linear infinite;
  display: block;
  height: 2.5rem;
  text-align: center;
}

.m-sportBets .m-error-wrapper .m-icon-loading:before {
  content: "\e654";
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.m-sportBets .m-error-wrapper .m-icon-loading:before {
  color: #9ca0ab;
  font-size: 2.5rem;
  line-height: 1;
}

.m-sportBets .m-error-wrapper .m-text-msg {
  color: #9ca0ab;
  display: block;
  font-size: 1rem;
  line-height: 1.33333333rem;
  margin-top: 2.5rem;
}

.m-sportBets .m-error-wrapper .m-error-msg {
  color: #9ca0ab;
  display: block;
  font-size: 1.16666667rem;
  line-height: 1.58333333rem;
  margin-bottom: 2.25rem;
}

.m-sportBets .m-error-wrapper .m-error-msg:before {
  content: "\e624";
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.m-sportBets .m-error-wrapper .m-error-msg:before {
  color: #9ca0ab;
  display: block;
  font-size: 3rem;
  line-height: 1;
  margin-bottom: 1.25rem;
}

.m-sportBets .m-error-wrapper .m-btn {
  border: 1px solid #0d9737;
  border-radius: 0.25rem;
  color: #0d9737;
  display: inline-block;
  height: 2.83333333rem;
  line-height: 2.83333333rem;
  padding: 0 2.33333333rem;
}

.m-sportBets .m-error-wrapper .m-btn-text {
  color: #33ea6a;
  font-size: 14px;
  height: 16px;
  text-align: center;
}

.m-sportBets .top-bar {
  background: #ffffff;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 0.41666667rem;
  padding: 0.66666667rem 0.83333333rem;
  width: 100%;
}

.m-sportBets .top-bar .selector {
  height: 100%;
  width: 2.5rem;
}

.m-sportBets .top-bar .card-format-btn {
  background: #9ca0ab;
  -webkit-box-shadow: inset 0px 0px 0px 5px #ffffff;
  box-shadow: inset 0px 0px 0px 5px #ffffff;
  height: 2.41666667rem;
  position: relative;
  width: 2.41666667rem;
}

.m-sportBets .top-bar .card-format-btn:before {
  background: #ffffff;
  content: "";
  height: 100%;
  left: 50%;
  position: absolute;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
  width: 0.16666667rem;
}

.m-sportBets .top-bar .card-format-btn:after {
  background: #ffffff;
  content: "";
  height: 0.16666667rem;
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  width: 100%;
}

.m-sportBets .top-bar .m-open-bet-filter {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  height: auto;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  z-index: 0;
}

.m-sportBets .top-bar .m-open-bet-filter .m-nav-item {
  background: #eaecef;
  border-radius: 0.16666667rem;
  color: #1b1e25;
  display: inline-block;
  font-size: 1rem;
  font-weight: 500;
  height: 2.33333333rem;
  line-height: 2.33333333rem;
  margin-right: 0.33333333rem;
  min-width: 5.83333333rem;
  padding: 0 0.83333333rem;
  text-align: center;
  white-space: nowrap;
  width: auto;
}

.m-sportBets .top-bar .m-open-bet-filter .m-nav-item--active {
  background: #353a45;
  border-bottom: none;
  color: #ffffff;
}

.m-sportBets .m-openbet.live-display .top-bar {
  position: fixed;
  z-index: 1;
}

.m-sportBets .m-openbet.live-display .m-bet-list {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  height: 100%;
  padding-top: 4.66666667rem;
}

.m-sportBets.m-sportBets-fix {
  padding-bottom: 0;
}

.bg-white {
  background-color: #ffffff;
}

.align-r {
  text-align: right;
}

.open-bet-toast.es-dialog-toast {
  background: #353a45;
  border-color: #353a45;
  border-radius: 1.66666667rem;
  color: #ffffff;
  font-size: 1.16666667rem;
}

.open-bet-toast.es-dialog-toast .es-dialog-body .es-dialog-main {
  padding: 0.5rem 0;
}

.m-sportBets .m-t-12 {
  font-size: 1rem;
  line-height: 1;
}

.m-sportBets .m-t-14 {
  font-size: 1.16666667rem;
}

.m-sportBets .m-t-16 {
  font-size: 1.33333333rem;
  line-height: 1;
}

.m-sportBets .m-t-19 {
  font-size: 1.58333333rem;
  line-height: 1;
}

.m-sportBets .m-t-20 {
  font-size: 1.66666667rem;
  line-height: 1;
}

.m-sportBets .m-l-23 {
  line-height: 1.91666667rem;
}

.m-sportBets .m-t-l14 {
  line-height: 1.16666667rem;
}

.m-sportBets .m-t-l16 {
  line-height: 1.33333333rem;
}

.m-sportBets .m-t-l20 {
  line-height: 1.66666667rem;
}

.m-sportBets .m-t-white {
  color: #ffffff;
}

.m-sportBets .m-t-gray {
  color: #9ca0ab;
}

.m-sportBets .m-t-black {
  color: #353a45;
}

.m-sportBets .m-t-green {
  color: #0d9737;
}

.m-sportBets .m-t-dgreen {
  color: #096b27;
}

.m-sportBets .m-t-bblack {
  color: #1b1e25;
}

.m-sportBets .m-t-lblue {
  color: #3656a3;
}

.m-sportBets .m-t-red {
  color: #e41827;
}

.m-sportBets .m-t-center {
  text-align: center;
}

.m-sportBets .m-t-right {
  text-align: right;
}

.m-sportBets .m-t-bold {
  font-weight: bold;
}

.m-sportBets .m-t-b5 {
  font-weight: 500;
}

.m-sportBets .m-t-mt4 {
  margin-top: 0.33333333rem;
}

.m-sportBets .m-t-ml6 {
  margin-left: 0.5rem;
}

.m-sportBets .m-t-mt18 {
  margin-top: 1.5rem;
}

.m-sportBets .m-t-mv3 {
  margin: 0.16666667rem;
}

.m-sportBets .m-t-mv5 {
  margin: 0.41666667rem;
}

.m-sportBets .m-r-5 {
  margin-right: 0.41666667rem;
}

.m-sportBets .m-r-20 {
  margin-right: 1.66666667rem;
}

.m-sportBets .m-t-ml2 {
  margin-left: 0.16666667rem;
}

.m-sportBets .m-b-5 {
  margin-bottom: 0.41666667rem;
}

.m-sportBets .capitalize {
  text-transform: capitalize;
}

.m-sportBets .m-ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.m-sportBets .nowrap {
  white-space: nowrap;
}

body {
  width: 100%;
}

.m-cashout-pop .m-t-mt10 {
  margin-top: 0.83333333rem;
}

.m-cashout-pop .m-b-18 {
  margin-bottom: 1.5rem;
}

.m-cashout-pop .m-mask {
  background-color: rgba(0, 0, 0, 0.6);
  height: 100%;
  left: 0;
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
}

.m-cashout-pop .m-container {
  background-color: #ffffff;
  bottom: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  left: 0;
  padding: 0 0 1rem 0;
  position: fixed;
  width: 100%;
  z-index: 1001;
}

.m-cashout-pop .m-container .m-close {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  height: 3.33333333rem;
  left: 50%;
  margin-left: -1.66666667rem;
  position: absolute;
  text-align: center;
  top: -4.66666667rem;
  width: 3.33333333rem;
}

.m-cashout-pop .m-container .m-close:before {
  content: "\e69a";
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.m-cashout-pop .m-container .m-close:before {
  color: #dcdee5;
  font-size: 1.33333333rem;
  line-height: 3.33333333rem;
}

.m-cashout-pop .m-container .m-close-live {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  height: 4.16666667rem;
  left: 0;
  padding-left: 1.08333333rem;
  position: absolute;
  top: 0;
  width: 4.16666667rem;
}

.m-cashout-pop .m-container .m-close-live .m-close-icon:before {
  content: "\e69a";
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.m-cashout-pop .m-container .m-main {
  height: 100%;
  overflow-y: auto;
}

.m-cashout-pop .m-container .m-head {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 1rem 1rem 0;
}

.m-cashout-pop .m-container .m-body {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 0 1rem;
}

.m-cashout-pop .m-container .m-body .m-l-top {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  height: 5.41666667rem;
  -webkit-box-pack: space-evenly;
  -webkit-justify-content: space-evenly;
  -ms-flex-pack: space-evenly;
  justify-content: space-evenly;
}

.m-cashout-pop .m-container .m-body .m-l-top .m-total {
  padding-bottom: 1.5rem;
  position: relative;
}

.m-cashout-pop .m-container .m-body .m-l-top .m-t-gray {
  margin-top: 1rem;
}

.m-cashout-pop .m-container .m-body .m-l-top .m-t-red {
  margin-top: 1rem;
}

.m-cashout-pop .m-container .m-body.instant {
  min-height: 17.25rem;
  padding-top: 0.75rem;
}

.m-cashout-pop .m-container .m-body .m-l-mid {
  height: 3.08333333rem;
}

.m-cashout-pop .m-container .m-body .m-remain {
  bottom: 0;
  color: #353a45;
  font-size: 1rem;
  font-weight: initial;
  position: absolute;
  text-align: center;
  width: 100%;
}

.m-cashout-pop .m-container .m-body .wht-cashout-tip {
  color: #9ca0ab;
  font-size: 12px;
}

.m-cashout-pop .m-container-fix .m-body .m-l-top {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  height: auto;
  height: 7.16666667rem;
  -webkit-box-pack: space-evenly;
  -webkit-justify-content: space-evenly;
  -ms-flex-pack: space-evenly;
  justify-content: space-evenly;
  margin-bottom: 0.66666667rem;
}

.m-cashout-pop .m-container-fix .m-body .m-l-top.unavailable {
  margin-top: 20px;
}

.m-cashout-pop .m-container-fix .m-body .m-l-top .m-t-red {
  margin-top: 0.5rem;
}

.m-cashout-pop .m-container-fix .m-btn-wrapper {
  margin-top: 2.16666667rem;
}

.m-cashout-pop .m-btn-wrapper {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.m-cashout-pop .m-btn-wrapper > div {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}

.m-cashout-pop .m-btn-wrapper .m-btn-item,
.m-cashout-pop .m-btn-wrapper .af-button {
  border-radius: 0.16666667rem;
  display: table-cell;
  height: 4rem;
  vertical-align: middle;
  width: 100%;
}

.m-cashout-pop .m-btn-wrapper .af-button {
  border: none !important;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  font-size: 1.33333333rem;
  font-weight: 500;
  min-width: 1%;
}

.m-cashout-pop .m-btn-wrapper .money {
  font-weight: bold;
}

.m-cashout-pop .m-btn-wrapper .af-button--primary {
  background: #0d9737 !important;
  color: #ffffff !important;
}

.m-cashout-pop .m-btn-wrapper .af-button--primary:hover {
  background: #32ce62 !important;
}

.m-cashout-pop .m-btn-wrapper .af-button--primary:active {
  background: #33ea6a !important;
}

.m-cashout-pop .m-btn-wrapper .m-create-btn {
  width: 100%;
}

.m-cashout-pop .m-btn-wrapper .is-disabled {
  background: #dcdee5 !important;
  color: #9ca0ab !important;
}

.m-cashout-pop .m-btn-wrapper .is-disabled:hover,
.m-cashout-pop .m-btn-wrapper .is-disabled:active {
  background: #dcdee5 !important;
  color: #9ca0ab !important;
}

.m-cashout-pop .m-btn-wrapper .m-btn-item {
  border: 0.08333333rem solid #0d9737;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  color: #0d9737;
  display: inline-block;
  height: 4rem;
  line-height: 4rem;
  margin-left: 0.66666667rem;
  text-align: center;
  width: 4rem;
}

.m-cashout-pop .m-btn-wrapper .m-btn-item .m-icon-refresh:before {
  content: "\e645";
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.m-cashout-pop .m-btn-wrapper .m-btn-item .m-icon-refresh:before {
  font-size: 1.66666667rem;
}

.m-cashout-pop .m-btn-wrapper .m-btn-item .m-icon-loading {
  display: inline-block;
}

.m-cashout-pop .m-btn-wrapper .m-btn-item .m-icon-loading:before {
  content: "\e648";
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.m-cashout-pop .m-btn-wrapper .m-btn-item .m-icon-loading:before {
  -webkit-animation: loading 1.5s infinite linear;
  animation: loading 1.5s infinite linear;
  display: inline-block;
  font-size: 1.66666667rem;
}

.m-cashout-pop .m-btn-wrapper .m-btn-item .m-icon-loading:before {
  -webkit-animation: loading 1.5s infinite linear;
  animation: loading 1.5s infinite linear;
  display: inline-block;
  font-size: 1.66666667rem;
}

.m-cashout-pop .m-btn-wrapper .m-cashout-tips {
  grid-column: span 2;
  text-align: left;
}

.m-cashout-pop .m-icon-loading {
  display: inline-block;
}

.m-cashout-pop .m-icon-loading:before {
  content: "\e648";
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.m-cashout-pop .m-icon-loading:before {
  -webkit-animation: loading 1.5s infinite linear;
  animation: loading 1.5s infinite linear;
  display: inline-block;
  font-size: 1.66666667rem;
}

.m-cashout-pop .m-slider-bar {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0 0.41666667rem;
  width: 100%;
}

.m-cashout-pop .m-slider-bar .m-slider-process {
  background-color: #0d9737;
}

.m-cashout-pop .m-slider-bar .m-slider-dot {
  background-color: #32ce62;
}

.m-cashout-pop .m-slider-bar .m-slider-disabled .m-slider-process {
  background-color: #dcdee5;
}

.m-cashout-pop .m-slider-bar .m-slider-disabled .m-slider-dot {
  background-color: #eaecef;
}

.m-cashout-pop .m-slide-range-label {
  color: #000000;
  font-size: 1.16666667rem;
  line-height: 1.33333333rem;
  margin-top: 0.83333333rem;
  overflow: hidden;
}

.m-cashout-pop .m-slide-range-label span:first-of-type {
  float: left;
}

.m-cashout-pop .m-slide-range-label span:last-of-type {
  float: right;
}

.m-cashout-pop .m-cashout-tips {
  color: #0d9737;
  margin-top: 1.16666667rem;
}

.m-cashout-pop .m-cashout-tips .m-i-tips {
  margin-right: 0.33333333rem;
}

.m-cashout-pop .m-cashout-tips .m-i-tips:before {
  content: "\e651";
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.m-cashout-pop .m-cashout-tips .m-i-tips:before {
  font-size: 1rem;
  line-height: 1.16666667rem;
}

.m-cashout-pop .fade-enter-active,
.m-cashout-pop .fade-leave-active {
  -webkit-transition: opacity 0.3s;
  transition: opacity 0.3s;
}

.m-cashout-pop .fade-enter,
.m-cashout-pop .fade-leave-to {
  opacity: 0;
}

.m-cashout-pop .slide-enter-active,
.m-cashout-pop .slide-leave-active {
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

.m-cashout-pop .slide-enter,
.m-cashout-pop .slide-leave-to {
  -webkit-transform: translateY(100%);
  -ms-transform: translateY(100%);
  transform: translateY(100%);
}

.m-cashout-pop .number-grow-warp {
  display: inline-block;
  vertical-align: top;
}

.m-cashout-pop .number-grow {
  color: #353a45;
}

.es-dialog-toast .m-icon--loading:before {
  content: "\e648";
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.es-dialog-toast .m-icon--loading {
  -webkit-animation: loading 2s linear infinite;
  animation: loading 2s linear infinite;
  display: inline-block;
  margin-right: 0.41666667rem;
}

.m-cashout-nav {
  border-bottom: 1px solid #f2f3f5;
  padding: 0 4.16666667rem;
}

.m-cashout-nav .m-cashout-nav-item.m-snap-nav-item {
  font-size: 1.16666667rem;
  font-weight: normal;
  padding: 1.16666667rem 0;
  position: relative;
  width: 100%;
}

.m-cashout-nav .m-cashout-nav-item.m-snap-nav-item .check {
  height: 1rem;
  padding-left: 0.66666667rem;
  width: 1rem;
}

.m-cashout-nav .m-cashout-nav-item.m-snap-nav-item .new {
  position: absolute;
  right: 0;
  top: 4px;
  width: 2.5rem;
}

.m-cashout-nav .m-cashout-nav-item.active {
  border-bottom: 4px solid #0d9737;
}

.m-cashout-nav .m-cashout-nav-item.highlight {
  color: #0d9737;
}

.m-cashout-nav .m-cashout-nav-item:first-child {
  margin-left: 0.83333333rem;
}

.m-cashout-nav .m-cashout-nav-item:last-child {
  margin-right: 0.83333333rem;
}

.instant-dialog.es-dialog {
  text-align: center;
}

.instant-dialog.es-dialog .es-dialog-header {
  text-align: center;
}

.instant-dialog.es-dialog .es-dialog-footer {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: space-evenly;
  -webkit-justify-content: space-evenly;
  -ms-flex-pack: space-evenly;
  justify-content: space-evenly;
  padding-top: 2rem;
}

.instant-dialog.es-dialog .es-dialog-footer .es-dialog-btn {
  background: #0d9737;
  border: 1px solid #0d9737;
  border-radius: 2px;
  color: #ffffff;
  font-size: 1.16666667rem;
  height: 3.66666667rem;
  line-height: 3.66666667rem;
  width: 9.5rem;
}

.instant-dialog.es-dialog .es-dialog-footer .es-dialog-btn:first-of-type {
  background: #ffffff;
  color: #0d9737;
  margin: 0;
}

.instant-dialog.es-dialog .es-dialog-footer .es-dialog-main {
  font-size: 1.16666667rem;
}

@-webkit-keyframes loading {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loading {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
