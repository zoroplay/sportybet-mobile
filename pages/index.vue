<template>
  <div>
    <div style="min-height: 0.1px"></div>
    <div style="height: 48px"></div>
    <div
      class="mobile-navbar-wrap undefined"
      style="position: fixed; top: 0rem; z-index: 1000"
    >
      <header class="mobile-navbar">
        <div class="navbar-wraper">
          <a href="/ng/m/" class="mobile-navbar-logo">
            <h1 style="display: none">SportyBet</h1>
          </a>

          <div class="mobile-navbar-right">
            <span class="m-icon-search"></span>
            <div v-if="!$auth.loggedIn" class="m-login-not">
              <div
                @click="$router.push('/register')"
                class="bg-white text-danger me-2"
              >
                Join Now
              </div>
              <div @click="$router.push('/login')">Log In</div>
            </div>
            <span v-else class="m-login-yes"
              ><span class="m-btn-deposit"
                ><span
                  class="m-btn-text"
                  data-cms-key="deposit"
                  data-cms-page="main_navbar"
                  >Deposit</span
                >
                <div class="avatar-box">
                  <div class="avatar-container">
                    <div class="user-img">
                      <img src="//s.sporty.net/common/avatar/30.png" />
                    </div>
                  </div>
                  <span class="currency">NGN</span> <span> {{ $auth.user.available_balance }}</span>
                </div></span
              ></span
            >
          </div>
        </div>
      </header>
    </div>
    <div class="home">
      <div id="carouselId" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner" role="listbox">
          <div class="carousel-item active">
            <img
              src="https://s.sporty.net/common/main/res/16b50cc4168d1e242d158ce46d18e1b8.png"
              class="img-fluid w-100 h-100"
              alt="First slide"
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://s.sporty.net/common/main/res/16b50cc4168d1e242d158ce46d18e1b8.png"
              alt="Second slide"
            />
          </div>
        </div>
      </div>

      <div class="m-snap-nav-wrap m-sports-choose" style="overflow: hidden">
        <ul
          class="m-snap-nav flex"
          style="
            transform: translate(0px, 0px) translateZ(0px);
            transition-duration: 350ms;
            transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1);
            width: 100%;
            overflow: auto;
          "
        >
          <li class="m-sports-choose-item m-snap-nav-item active">
            <a href="/sports">
              <div class="sport-icon">
                <img
                  src="~/assets/img/icons/soccer.png"
                  loading="eager"
                  width="20"
                  height="20"
                />
              </div>
              <span class="sport-text">Sports </span>
            </a>
          </li>
          <li class="m-sports-choose-item m-snap-nav-item">
            <a href="/sports/live" data-op="home_nav_Live" draggable="false">
              <div class="sport-icon">
                <img
                  src="~/assets/img/icons/live.png"
                  loading="eager"
                  width="20"
                  height="20"
                />
              </div>
              <span class="sport-text">Live </span>
            </a>
          </li>
          <li class="m-sports-choose-item m-snap-nav-item">
            <a href="" data-op="home_nav_Instant Virtuals" draggable="false">
              <div class="sport-icon">
                <img
                  src="~/assets/img/icons/instant-v.png"
                  loading="eager"
                  width="20"
                  height="20"
                />
              </div>
              <span class="sport-text">Instant Virtuals</span>
            </a>
          </li>
          <li class="m-sports-choose-item m-snap-nav-item">
            <a href="" data-op="home_nav_Games" draggable="false">
              <div class="sport-icon">
                <img
                  src="~/assets/img/icons/games.png"
                  loading="eager"
                  width="20"
                  height="20"
                />
              </div>
              <span class="sport-text">Games </span>
            </a>
          </li>
          <li class="m-sports-choose-item m-snap-nav-item">
            <a
              href="https://www.sportybet.com/ng/m/virtuals-lobby"
              data-op="home_nav_Virtuals"
              draggable="false"
            >
              <div class="sport-icon">
                <img
                  src="~/assets/img/icons/virtuals.png"
                  loading="eager"
                  width="20"
                  height="20"
                />
              </div>
              <span class="sport-text">Virtuals </span>
            </a>
          </li>
          <li class="m-sports-choose-item m-snap-nav-item">
            <a
              href="https://www.sportybet.com/ng/m/load_code?source=home"
              data-op="home_nav_Load Code"
              draggable="false"
            >
              <div class="sport-icon">
                <img
                  src="~/assets/img/icons/load.png"
                  loading="eager"
                  width="20"
                  height="20"
                />
              </div>
              <span class="sport-text">Load Code </span>
            </a>
          </li>
          <li
            v-for="(sport, index) in sport_list_menu"
            :key="index"
            class="m-sports-choose-item m-snap-nav-item"
          >
            <router-link
              :to="{ name: 'sports', query: { sport: sport.name } }"
              data-op="home_nav_Basketball"
              draggable="false"
            >
              <div class="sport-icon">
                <img
                  :src="'/img/icons/' + sport.name.toLowerCase() + '.png'"
                  loading="lazy"
                  width="20"
                  height="20"
                />
              </div>
              <span class="sport-text">{{ sport.name }} </span>
            </router-link>
          </li>
          <li class="m-sports-choose-item m-snap-nav-item">
            <a
              href="https://www.sportybet.com/ng/m/jackpot?source=home"
              data-op="home_nav_Jackpot"
              draggable="false"
            >
              <div class="sport-icon">
                <img
                  src="https:https://s.sporty.net/common/main/res/515adceda4d1b2d562fe344bd8515ec5.png"
                  loading="lazy"
                  width="20"
                  height="20"
                />
              </div>
              <span class="sport-text">Jackpot</span>
            </a>
          </li>
          <li class="m-sports-choose-item m-snap-nav-item">
            <a
              href="https://www.sportybet.com/ng/m/games/sportygames?game=spin-to-win"
              data-op="home_nav_Spin2Win"
              draggable="false"
            >
              <div class="sport-icon">
                <img
                  src="https:https://s.sporty.net/common/main/res/c836d8081af9f34f270b34d7b4306fa5.png"
                  loading="lazy"
                  width="20"
                  height="20"
                />
              </div>
              <span class="sport-text">Spin2Win</span>
            </a>
          </li>
          <li class="m-sports-choose-item m-snap-nav-item">
            <a
              href="https://www.sportybet.com/ng/m/games/sportygames?game=even-odd"
              data-op="home_nav_EvenOdd"
              draggable="false"
            >
              <div class="sport-icon">
                <img
                  src="https:https://s.sporty.net/common/main/res/6593ec06f041b4560fccc5995665df83.png"
                  loading="lazy"
                  width="20"
                  height="20"
                />
              </div>
              <span class="sport-text">EvenOdd</span>
            </a>
          </li>
          <li class="m-sports-choose-item m-snap-nav-item">
            <a
              href="https://www.sportybet.com/ng/m/games/sportygames?game=blackjack"
              data-op="home_nav_BlackJack"
              draggable="false"
            >
              <div class="sport-icon">
                <img
                  src="https:https://s.sporty.net/common/main/res/ec5c0f60fb02818718314eecaf9e5a2d.png"
                  loading="lazy"
                  width="20"
                  height="20"
                />
              </div>
              <span class="sport-text">BlackJack</span>
            </a>
          </li>

          <li class="m-sports-choose-item m-snap-nav-item">
            <a
              href="https://livescore.sportybet.com/?source=home"
              data-op="home_nav_Livescore"
              draggable="false"
            >
              <div class="sport-icon">
                <img
                  src="https:https://s.sporty.net/common/main/res/1bb13bffe71ad5abd3404668611eaef9.png"
                  loading="lazy"
                  width="20"
                  height="20"
                />
              </div>
              <span class="sport-text">Livescore</span>
            </a>
          </li>
          <li class="m-sports-choose-item m-snap-nav-item">
            <a
              href="https://www.sportybet.com/ng/m/liveResult?source=home"
              data-op="home_nav_Results"
              draggable="false"
            >
              <div class="sport-icon">
                <img
                  src="https:https://s.sporty.net/common/main/res/29b7cd11599a9c032819c3dede3ad8a0.png"
                  loading="lazy"
                  width="20"
                  height="20"
                />
              </div>
              <span class="sport-text">Results</span>
            </a>
          </li>
        </ul>
        <i class="controls left-controls"></i>
        <i class="controls right-controls"></i>
      </div>
      <div class="m-popular">
        <div class="m-snap-nav-wrap m-popular-list">
          <ul
            class="m-snap-nav flex"
            style="
              transform: translate(0px, 0px) translateZ(0px);
              transition-duration: 350ms;
              transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1);
              width: 100%;
              overflow: auto;
              white-space: nowrap;
            "
          >
            <li class="m-popular-item m-snap-nav-item">
              <div class="m-color-bar"></div>
              <router-link
                :to="{
                  name: 'sport-name',
                  params: { name: 'Soccer' },
                  query: { period: 'today' },
                }"
                ><img
                  src="https://s.sporty.net/ke/main/res/22c8c12dad8e45f6a6ea8bd0a7f6e6c4.png"
                  loading="eager"
                  width="104"
                  height="45"
              /></router-link>
            </li>
            <li class="m-popular-item m-snap-nav-item">
              <div class="m-color-bar m-color-bar--green"></div>
              <router-link
                :to="{
                  name: 'sport-name',
                  params: { name: 'Soccer' },
                  query: { period: '3' },
                }"
                ><img
                  src="~/assets/img/football-next.png"
                  loading="eager"
                  width="104"
                  height="45"
              /></router-link>
            </li>
            <li class="m-popular-item m-snap-nav-item">
              <div class="m-color-bar m-color-bar--red"></div>
              <router-link
                :to="{
                  name: 'sport-name',
                  params: { name: 'Soccer' },
                  query: { tournament_id: 1 },
                }"
                ><img
                  src="~/assets/img/epl.png"
                  loading="lazy"
                  width="104"
                  height="45"
              /></router-link>
            </li>
            <li class="m-popular-item m-snap-nav-item">
              <div class="m-color-bar"></div>
              <router-link
                :to="{
                  name: 'sport-name',
                  params: { name: 'Soccer' },
                  query: { tournament_id: 2179 },
                }"
                ><img
                  src="~/assets/img/bundes.png"
                  loading="lazy"
                  width="104"
                  height="45"
              /></router-link>
            </li>
            <li class="m-popular-item m-snap-nav-item">
              <div class="m-color-bar m-color-bar--green"></div>
              <router-link
                :to="{
                  name: 'sport-name',
                  params: { name: 'Soccer' },
                  query: { tournament_id: 2312 },
                }"
                ><img
                  src="~/assets/img/la-liga.png"
                  loading="lazy"
                  width="104"
                  height="45"
              /></router-link>
            </li>
            <li class="m-popular-item m-snap-nav-item">
              <div class="m-color-bar m-color-bar--red"></div>
              <router-link
                :to="{
                  name: 'sport-name',
                  params: { name: 'Soccer' },
                  query: { tournament_id: 2198 },
                }"
                ><img
                  src="~/assets/img/serie-a.png"
                  loading="lazy"
                  width="104"
                  height="45"
              /></router-link>
            </li>
          </ul>
          <i class="controls left-controls"></i>
          <i class="controls right-controls"></i>
        </div>
      </div>
      <live-container></live-container>
      <highlights-container></highlights-container>
    </div>
    <div>
      <div class="m-grands" style="overflow: hidden">
        <div class="m-gd-title" data-cms-key="grand_prize_winners">
          Grand Prize Winners
        </div>
        <div
          id="j_bdcast0"
          class="m-bdcast m-bdcast--horz"
          style="transform: translateX(-1632.8px) translateZ(0px)"
        >
          <div class="m-gd-item">
            <div class="i-wrapper">
              <i class="i-gd-bg"></i>
              <div class="i-con">
                <div class="i-phone" data-cms-key="vphone_won">
                  80*****092 won
                </div>
                <div class="i-total">₦38,400.00</div>
                <div class="i-type">in Spribe</div>
              </div>
            </div>
            <div class="i-time">1min ago</div>
          </div>
          <div class="m-gd-item">
            <div class="i-wrapper">
              <i class="i-gd-bg"></i>
              <div class="i-con">
                <div class="i-phone" data-cms-key="vphone_won">
                  80*****764 won
                </div>
                <div class="i-total">NGN399,316.25</div>
                <div class="i-type">in Sports Betting</div>
              </div>
            </div>
            <div class="i-time">1min ago</div>
          </div>
          <div class="m-gd-item">
            <div class="i-wrapper">
              <i class="i-gd-bg"></i>
              <div class="i-con">
                <div class="i-phone" data-cms-key="vphone_won">
                  81*****130 won
                </div>
                <div class="i-total">NGN109,918.96</div>
                <div class="i-type">in Sports Betting</div>
              </div>
            </div>
            <div class="i-time">1min ago</div>
          </div>
          <div class="m-gd-item">
            <div class="i-wrapper">
              <i class="i-gd-bg"></i>
              <div class="i-con">
                <div class="i-phone" data-cms-key="vphone_won">
                  80*****920 won
                </div>
                <div class="i-total">NGN735,512.32</div>
                <div class="i-type">in Sports Betting</div>
              </div>
            </div>
            <div class="i-time">1min ago</div>
          </div>
          <div class="m-gd-item">
            <div class="i-wrapper">
              <i class="i-gd-bg"></i>
              <div class="i-con">
                <div class="i-phone" data-cms-key="vphone_won">
                  80*****625 won
                </div>
                <div class="i-total">NGN133,347.55</div>
                <div class="i-type">in Sports Betting</div>
              </div>
            </div>
            <div class="i-time">1min ago</div>
          </div>
          <div class="m-gd-item">
            <div class="i-wrapper">
              <i class="i-gd-bg"></i>
              <div class="i-con">
                <div class="i-phone" data-cms-key="vphone_won">
                  81*****084 won
                </div>
                <div class="i-total">NGN69,213.38</div>
                <div class="i-type">in Sports Betting</div>
              </div>
            </div>
            <div class="i-time">1min ago</div>
          </div>
          <div class="m-gd-item">
            <div class="i-wrapper">
              <i class="i-gd-bg"></i>
              <div class="i-con">
                <div class="i-phone" data-cms-key="vphone_won">
                  80*****850 won
                </div>
                <div class="i-total">NGN121,123.42</div>
                <div class="i-type">in Sports Betting</div>
              </div>
            </div>
            <div class="i-time">1min ago</div>
          </div>
          <div class="m-gd-item">
            <div class="i-wrapper">
              <i class="i-gd-bg"></i>
              <div class="i-con">
                <div class="i-phone" data-cms-key="vphone_won">
                  80*****867 won
                </div>
                <div class="i-total">NGN103,820.08</div>
                <div class="i-type">in Sports Betting</div>
              </div>
            </div>
            <div class="i-time">1min ago</div>
          </div>
          <div class="m-gd-item">
            <div class="i-wrapper">
              <i class="i-gd-bg"></i>
              <div class="i-con">
                <div class="i-phone" data-cms-key="vphone_won">
                  70*****045 won
                </div>
                <div class="i-total">NGN71,501.02</div>
                <div class="i-type">in Sports Betting</div>
              </div>
            </div>
            <div class="i-time">1min ago</div>
          </div>
          <div class="m-gd-item">
            <div class="i-wrapper">
              <i class="i-gd-bg"></i>
              <div class="i-con">
                <div class="i-phone" data-cms-key="vphone_won">
                  70*****456 won
                </div>
                <div class="i-total">NGN57,551.29</div>
                <div class="i-type">in Sports Betting</div>
              </div>
            </div>
            <div class="i-time">1min ago</div>
          </div>
          <div id="j_fixAnimation0" class="m-item-fix" style="">
            <div class="m-gd-item">
              <div class="i-wrapper">
                <i class="i-gd-bg"></i>
                <div class="i-con">
                  <div class="i-phone" data-cms-key="vphone_won">
                    80*****092 won
                  </div>
                  <div class="i-total">₦38,400.00</div>
                  <div class="i-type">in Spribe</div>
                </div>
              </div>
              <div class="i-time">1min ago</div>
            </div>
            <div class="m-gd-item">
              <div class="i-wrapper">
                <i class="i-gd-bg"></i>
                <div class="i-con">
                  <div class="i-phone" data-cms-key="vphone_won">
                    80*****764 won
                  </div>
                  <div class="i-total">NGN399,316.25</div>
                  <div class="i-type">in Sports Betting</div>
                </div>
              </div>
              <div class="i-time">1min ago</div>
            </div>
            <div class="m-gd-item">
              <div class="i-wrapper">
                <i class="i-gd-bg"></i>
                <div class="i-con">
                  <div class="i-phone" data-cms-key="vphone_won">
                    81*****130 won
                  </div>
                  <div class="i-total">NGN109,918.96</div>
                  <div class="i-type">in Sports Betting</div>
                </div>
              </div>
              <div class="i-time">1min ago</div>
            </div>
            <div class="m-gd-item">
              <div class="i-wrapper">
                <i class="i-gd-bg"></i>
                <div class="i-con">
                  <div class="i-phone" data-cms-key="vphone_won">
                    80*****920 won
                  </div>
                  <div class="i-total">NGN735,512.32</div>
                  <div class="i-type">in Sports Betting</div>
                </div>
              </div>
              <div class="i-time">1min ago</div>
            </div>
            <div class="m-gd-item">
              <div class="i-wrapper">
                <i class="i-gd-bg"></i>
                <div class="i-con">
                  <div class="i-phone" data-cms-key="vphone_won">
                    80*****625 won
                  </div>
                  <div class="i-total">NGN133,347.55</div>
                  <div class="i-type">in Sports Betting</div>
                </div>
              </div>
              <div class="i-time">1min ago</div>
            </div>
            <div class="m-gd-item">
              <div class="i-wrapper">
                <i class="i-gd-bg"></i>
                <div class="i-con">
                  <div class="i-phone" data-cms-key="vphone_won">
                    81*****084 won
                  </div>
                  <div class="i-total">NGN69,213.38</div>
                  <div class="i-type">in Sports Betting</div>
                </div>
              </div>
              <div class="i-time">1min ago</div>
            </div>
            <div class="m-gd-item">
              <div class="i-wrapper">
                <i class="i-gd-bg"></i>
                <div class="i-con">
                  <div class="i-phone" data-cms-key="vphone_won">
                    80*****850 won
                  </div>
                  <div class="i-total">NGN121,123.42</div>
                  <div class="i-type">in Sports Betting</div>
                </div>
              </div>
              <div class="i-time">1min ago</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer></footer>
  </div>
</template>

<script>
import Footer from "~/components/Footer.vue";
import HighlightsContainer from "~/components/HighlightsContainer.vue";
import LiveContainer from "~/components/LiveContainer.vue";

export default {
  name: "IndexPage",
  components: { Footer, LiveContainer, HighlightsContainer },
  layout: "default",
  data() {
    return {
      loading: false,
    };
  },
  computed: {
    menu() {
      return this.$store.state.sports;
    },
  },
};
</script>

<style>
.m-sports-choose .m-snap-nav.flex::-webkit-scrollbar,
.m-popular .m-snap-nav-wrap .m-snap-nav.flex::-webkit-scrollbar {
  display: none;
}
</style>
