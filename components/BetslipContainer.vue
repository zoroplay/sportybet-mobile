<template>
  <div
    class="m-main-right"
    @click="closeBetslip($event)"
    :class="show_betslip ? '' : 'd-none'"
  >
    <div
      id="betslip-container"
      data-betslip-mode="real"
      class="betslip-mode-real"
    >
      <div
        class="m-betslips"
        :class="show_betslip ? 'm-betslips-show' : 'm-betslips-off'"
        style="position: absolute"
      >
        <div data-v-2e272c90="" class="m-betslip-header real-theme">
          <div data-v-2e272c90="" class="head-container">
            <div
              data-v-2e272c90=""
              class="wrapper wrapper-gap real-theme is-empty-selection"
            >
              <div data-v-2e272c90="" class="wrapper-item bet-info-panel">
                <div
                  data-v-5d68d036=""
                  data-v-2e272c90=""
                  data-op="betslip-multi-count"
                  class="bet-count-wrapper bet-count"
                >
                  <span data-v-5d68d036="" class="is-zero real-theme">
                    {{ betslip.selections.length }}
                  </span>
                </div>
                <div data-v-2e272c90="" class="mode-switch-button">
                  <div class="switch-box">
                    <div class="shadow-text right-side show-highlight">SIM</div>
                    <div class="inside-btn left-side inactive">REAL</div>
                    <div class="fake-content fake-content-first">SIM</div>
                    <div class="fake-content">REAL</div>
                  </div>
                </div>
                <div data-v-2e272c90="" class="mr-auto red-dot-block"></div>
              </div>
              <div data-v-2e272c90="" class="wrapper-item middle close">
                <div
                  data-v-1685df8e=""
                  data-v-2e272c90=""
                  class="icon-font-base"
                  style="font-size: 20px"
                >
                  
                </div>
              </div>
              <div
                v-if="!$auth.loggedIn"
                data-v-2e272c90=""
                class="wrapper-item user-assets-panel"
              >
                <div data-v-2e272c90="" class="not-login ml-auto">
                  <span @click="$router.push('/register')" data-v-2e272c90=""
                    >Register</span
                  ><span @click="$router.push('/login')" data-v-2e272c90=""
                    >Log In</span
                  >
                </div>
              </div>
              <div
                data-v-2e272c90=""
                v-else
                class="wrapper-item user-assets-panel"
              >
                <div
                  data-v-2e272c90=""
                  class="has-login ml-auto"
                  data-op="betslip-multi-balance"
                >
                  NGN {{ $auth.user.available_balance }}
                </div>
              </div>
            </div>
            <div
              v-if="betslip.selections.length > 0"
              data-v-2e272c90=""
              class="wrapper separate-part"
            >
              <div
                data-v-16d217d6=""
                @click="clearBetslip"
                data-v-2e272c90=""
                data-op="betslip-remove-all"
                class="remove-all remove-all operate-button"
              >
                <div
                  data-v-1685df8e=""
                  data-v-16d217d6=""
                  class="icon-font-base icon"
                  style="font-size: 1.33333rem"
                >
                  
                </div>
                <span data-v-16d217d6="">Remove All</span>
              </div>
            </div>
          </div>
        </div>
        <div class="m-bet-head">
          <div
            class="m-snap-nav-wrap m-list-bet-type"
            style="overflow: hidden; display: none"
          >
            <ul
              class="m-snap-nav flex"
              style="
                transform: translate(0px, 0px) translateZ(0px);
                transition-duration: 350ms;
                transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1);
              "
            >
              <li
                class="m-list-bet-type-item m-snap-nav-item active"
                data-op="betslip-multi-tag-single"
              >
                <span>Singles</span>
              </li>
              <li
                class="flex flex-center m-list-bet-type-item m-snap-nav-item m-snap-nav-item--disabled"
                data-op="betslip-multi-tag-multi"
              >
                <span>Multiple</span>
              </li>
              <li
                class="m-list-bet-type-item m-snap-nav-item m-snap-nav-item--disabled"
                data-op="betslip-multi-tag-system"
              >
                <span>System</span>
              </li>
            </ul>
            <i class="controls left-controls"></i>
            <i class="controls right-controls"></i>
          </div>
          <div data-v-5ba1d76a="" class="betslip-notification"></div>
        </div>
        <div v-if="betslip.selections.length > 0" class="m-bet-detail-wrap">
          <div class="m-scroll">
            <div data-v-fd16fba0="" id="j_betList" class="m-betslips-outcomes">
              <div data-v-fd16fba0="" class="m-outcomes-list">
                <div
                  v-for="(bet, index) in betslip.selections"
                  :key="index"
                  data-v-024cbf23=""
                  data-v-fd16fba0=""
                  class="m-bet-container"
                >
                  <div
                    data-v-024cbf23=""
                    data-op="betslip-multi-odds"
                    class="m-outcomes-row"
                  >
                    <div
                      @click="removeSelection(bet)"
                      data-v-024cbf23=""
                      class="m-outcomes-opt"
                    >
                      <div data-v-024cbf23="" class="m-outcomes-color"></div>
                    </div>
                    <div data-v-024cbf23="" class="m-outcome-right">
                      <div data-v-024cbf23="" class="m-outcomes-row m-team-row">
                        <div data-v-024cbf23="" class="m-team-cell">
                          <a
                            @click="$router.push({name:'sport-name-'+bet.type+'-eventid',params:{name:bet.sport,eventid:bet.provider_id} })"
                          >
                            <div
                              data-v-024cbf23=""
                              class="m-outcome-desc-wrapper"
                            >
                              <div
                                data-v-024cbf23=""
                                class="m-icon-football m-outcome-desc"
                              >
                                {{ bet.oddname == '1' ? 'Home' : bet.oddname == '2' ? 'Away' : bet.oddname == 'X' ? 'Away' : bet.oddname  }}
                              </div>
                              <div data-v-024cbf23="" class="m-outcome-odds">
                                {{ bet.odds }}
                              </div>
                            </div>
                            <div data-v-024cbf23="" class="m-vs-wrapper">
                              <i data-v-024cbf23="" class="m-icon-live d-none"
                                ><span data-v-024cbf23="">Live </span></i
                              >
                              <div data-v-024cbf23="">{{ bet.event_name }}</div>
                            </div>
                          </a>
                          <div data-v-024cbf23="" class="m-market-desc-wrapper">
                            <div data-v-024cbf23="" class="m-market-desc">
                              {{ bet.market_name }}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="m-betslips-stake-wrapper">
              <div class="m-betslips-stake">
                <div class="mg-b-10">
                  <div
                    data-v-6a51e714=""
                    id="bonus-progress-bar"
                    class="real-theme"
                  >
                    <div
                      data-v-6a51e714=""
                      class="progress"
                      style="width: 0%"
                    ></div>
                    <p data-v-6a51e714="">
                      Add more qualifying selection to boost your bonus
                    </p>
                  </div>
                </div>
                <div class="m-input-keyboard-wrapper m-input mg-b-10">
                  <div class="m-input-wrapper">
                    <span
                      data-cms-key="total_stake"
                      data-cms-page="common_functions"
                      >Total Stake</span
                    >
                    <!---->
                    <span class="currency"><em>NGN</em></span>
                    <input
                      type="number"
                      @keyup="updateWinnings($event)"
                      :value="betslip.totalStake"
                      class="m-keybord-input multiple-stake-input"
                      style="--fontsize: inherit"
                    />
                  </div>
                </div>
                <div class="total-odds mg-b-10">
                  <span
                    data-cms-key="total_odds"
                    data-cms-page="common_functions"
                    >Total Odds</span
                  >
                  <span data-op="betslip-odds-amount">{{ betslip.totalOdds }}</span>
                </div>
                <div class="potential-win bold real-theme">
                  <span
                    class="fw-bold"
                    data-cms-key="potential_win"
                    data-cms-page="component_betslip"
                    >Potential Win</span
                  >
                  <span>
                    <span data-op="betslip-win-amount" class="m-value fw-bold">
                      {{ formatNumber(betslip.maxWin) }}
                    </span>
                  </span>
                </div>


                <div class="m-submit">
                  <div
                    class="m-book-btn"
                    data-cms-key="book_bet"
                    data-cms-page="component_betslip"
                  >
                    Book Bet
                  </div>
                  <div @click="placeBet($event)" class="place-bet real-theme" :class="betslip.totalStake >= 10 ? '':'bet-disabled sim-disabled'">
                    <span data-op="betslip-placebet">Place Bet</span>
                    <div class="m-pay-num">
                      <span
                        v-if="betslip.totalStake >= 10"
                        data-cms-key="about_to_pay_vamount"
                        data-cms-page="component_betslip"
                        >About to pay {{ betslip.totalStake }}</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-v-2242964c=""></div>
        </div>
        <div v-else data-v-7c0ae7f1="" class="m-default">
          <p data-v-7c0ae7f1="" class="m-default-info">
            <span data-v-7c0ae7f1=""> Please insert booking code </span>
            <span data-v-7c0ae7f1="" class="m-dialog-tip"></span>
          </p>
          <div data-v-7c0ae7f1="" class="m-code-wrapper">
            <div
              data-v-7c0ae7f1=""
              tabindex="0"
              class="country-main af-select selected"
            >
              <div data-op="label-odds-option" class="af-select-title">
                <span class="af-select-input">Nigeria </span>
                <span class="af-select-icon-item"><em class="icon">^</em></span>
              </div>
            </div>
            <div data-v-7c0ae7f1="" class="m-default-code m-input-wap-wrapper">
              <i
                class="m-input-wap-icon m-input-wap-icon--clickable m-icon-delete"
              ></i>
              <input
                type="input"
                name=""
                placeholder="Booking Code"
                class="m-input-wap fs-exclude data-hj-suppress"
              />
            </div>
          </div>

          <div
            data-v-7c0ae7f1=""
            class="share-code-btn share-code-btn--disabled"
          >
            <span data-v-7c0ae7f1="">Load</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "betslip",
  props: ["show_betslip"],
  methods: {
    clearBetslip() {
      this.$store.dispatch("coupon/clearBetslip");
    },
    removeSelection(selection) {
      this.$store.dispatch("coupon/removeSelection", selection);
    },
    updateWinnings(e) {
      const val = e.target.value;
      this.$store.dispatch("coupon/updateWinnings", val);
    },
    closeBetslip(e) {
      if (e.target.classList.contains("m-main-right")) {
        this.$nuxt.$emit("toggleBetslip");
      }
    },
    placeBet(e){
      this.$store.dispatch('coupon/placeBet', e,"bet", null)
    }
  },
};
</script>

<style>
@import url("~/assets/css/betslip.css");
</style>
