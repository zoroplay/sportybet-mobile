<template>
  <div class="m-event-list">
    <div class="mt-lg-4 pt-lg-4" style="width: 100%; height: 48px;"></div>
    <div data-v-045e5fcb="" class="m-nav-secondary m-topnav withHome" style="position: fixed; top: 0rem; z-index: 1001;">
      <div data-v-045e5fcb="" class="m-nav-left"><span data-v-045e5fcb="" data-op="nav-sec-back"
          class="m-icon m-icon--back"></span>
        <!---->
        <div data-v-045e5fcb="" class="trans-select">
          <div tabindex="0" class="sport-select af-select" data-v-045e5fcb="">
            <div data-op="label-odds-option" class="af-select-title"><span class="af-select-input">Football
                <!---->
              </span> <span class="af-select-icon-item"><em class="icon">^</em></span></div>
            <div data-op="odds-option-menu" class="af-select-list animate-core"
              style="width: 414px; top: 26.125px; left: 0px; display: none;"><span
                class="af-select-item active af-select-item" data-id="0"
                data-op="odds-option-menu-item">Football</span><span class="af-select-item af-select-item" data-id="1"
                data-op="odds-option-menu-item">vFootball</span><span class="af-select-item af-select-item" data-id="2"
                data-op="odds-option-menu-item">eFootball</span><span class="af-select-item af-select-item" data-id="3"
                data-op="odds-option-menu-item">Basketball</span><span class="af-select-item af-select-item" data-id="4"
                data-op="odds-option-menu-item">eBasketball</span><span class="af-select-item af-select-item"
                data-id="5" data-op="odds-option-menu-item">Tennis</span><span class="af-select-item af-select-item"
                data-id="6" data-op="odds-option-menu-item">Table Tennis</span><span
                class="af-select-item af-select-item" data-id="7" data-op="odds-option-menu-item">American
                Football</span><span class="af-select-item af-select-item" data-id="8"
                data-op="odds-option-menu-item">Ice Hockey</span><span class="af-select-item af-select-item" data-id="9"
                data-op="odds-option-menu-item">eIce Hockey</span><span class="af-select-item af-select-item"
                data-id="10" data-op="odds-option-menu-item">Volleyball</span><span
                class="af-select-item af-select-item" data-id="11" data-op="odds-option-menu-item">Beach
                Volley</span><span class="af-select-item af-select-item" data-id="12"
                data-op="odds-option-menu-item">Handball</span><span class="af-select-item af-select-item" data-id="13"
                data-op="odds-option-menu-item">Baseball</span><span class="af-select-item af-select-item" data-id="14"
                data-op="odds-option-menu-item">Badminton</span><span class="af-select-item af-select-item" data-id="15"
                data-op="odds-option-menu-item">Counter-Strike</span><span class="af-select-item af-select-item"
                data-id="16" data-op="odds-option-menu-item">Dota 2</span><span class="af-select-item af-select-item"
                data-id="17" data-op="odds-option-menu-item">League of Legends</span><span
                class="af-select-item af-select-item" data-id="18" data-op="odds-option-menu-item">Rugby</span><span
                class="af-select-item af-select-item" data-id="19" data-op="odds-option-menu-item">Cricket</span><span
                class="af-select-item af-select-item" data-id="20" data-op="odds-option-menu-item">Boxing</span><span
                class="af-select-item af-select-item" data-id="21" data-op="odds-option-menu-item">MMA</span><span
                class="af-select-item af-select-item" data-id="22" data-op="odds-option-menu-item">Darts</span><span
                class="af-select-item af-select-item" data-id="23" data-op="odds-option-menu-item">Futsal</span><span
                class="af-select-item af-select-item" data-id="24" data-op="odds-option-menu-item">Snooker</span></div>
          </div> <span data-v-045e5fcb="" class="title">
            {{ $route.params.name }}
            <span data-v-045e5fcb="" class="arrow-icon"></span></span>
        </div>
      </div>
      <div data-v-045e5fcb="" class="info-container">
        <!---->
        <div data-v-045e5fcb="" class="m-nav-right">
          <div data-v-045e5fcb="" class="slot-container"><a data-v-045e5fcb="">
              <div data-v-045e5fcb="" class="search-icon"></div>
            </a></div>
          <div data-v-045e5fcb="" class="home-link">
            <div data-v-045e5fcb="" class="home-icon"></div>
          </div>
        </div>
      </div>
    </div>
    <!---->
    <div class="live-wrap">
      <div data-op="label-prematch-live" class="prematch-live-banner" data-offset="44" data-new-z-index="1000"
        data-cls="undefined" data-disable-sticky="false" data-position="" data-top="" data-z-index="" style="">
        <!---->
        <div><span><span class="live-label" data-cms-key="all_live" data-cms-page="live">All Live</span> <span
              class="live-num">87</span></span> <i class="arrow-right"></i></div>
      </div>
      <!---->
    </div>
    <div class="m-snap-nav-wrap m-outright-bar" style="overflow: hidden;">
      <ul class="m-snap-nav flex"
        style="transform: translate(0px, 0px) translateZ(0px); transition-duration: 0ms; transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1); width: 414px;">
        <li class="m-match-type-item m-snap-nav-item active">
          Matches
        </li>
        <li class="m-match-type-item m-snap-nav-item m-snap-nav-item--disabled">
          Outright
        </li>
      </ul> <i class="controls left-controls"></i> <i class="controls right-controls"></i>
    </div>
    <div class="choose-bar-pad" style="">
      <div data-v-72f3d14a="" class="m-choose-bar-wrap has-live" product="3">
        <div data-v-72f3d14a="" class="overly"></div>
        <div data-v-72f3d14a="" class="m-choose-bar">
          <div data-v-79af6994="" @click="togglePeriod" data-v-72f3d14a="" tabindex="0" class="m-choose-time">
            <div data-v-79af6994="" class="m-title used">Today</div>
            <div data-v-79af6994="" class="m-list" :class="period_show ? '':'d-none'">
              <ul data-v-79af6994="">
                <li data-v-79af6994="" class="">All</li>
                <li data-v-79af6994="" class="" >3 hours</li>
                <li data-v-79af6994="" class="checked">Today</li>
                <li data-v-79af6994="" class="">Tuesday</li>
                <li data-v-79af6994="" class="" >Wednesday</li>
                <li data-v-79af6994="" class="">Thursday</li>
                <li data-v-79af6994="" class="">Friday</li>
                <li data-v-79af6994="" class="">Saturday</li>
                <li data-v-79af6994="" class="">Sunday</li>
              </ul>
            </div>
          </div>
          <div data-v-06ecd06c="" data-v-72f3d14a="" tabindex="0" class="m-choose-league">
            <div data-v-06ecd06c="" class="m-title">League</div>
            <!-- //dropdwon -->
          </div>
          <div data-v-f51ffd84="" data-v-72f3d14a="" tabindex="0" class="m-choose-odds">
            <div data-v-f51ffd84="" class="m-title"><span data-v-f51ffd84="" data-cms-key="odds"
                data-cms-page="common_functions">Odds</span></div>
            <div data-v-f51ffd84="" class="m-list" style="display: none;">
              <!---->
            </div>
          </div>
          <div data-v-44e4376b="" data-v-72f3d14a="" tabindex="0" class="m-choose-sort">
            <div data-v-44e4376b="" class="m-title"><span data-v-44e4376b="" data-cms-key="sort"
                data-cms-page="common_functions">Sort</span></div>
            <div data-v-44e4376b="" class="m-list" style="display: none;">
              <ul data-v-44e4376b="">
                <li data-v-44e4376b="" class="checked"><span data-v-44e4376b="" data-cms-key="default"
                    data-cms-page="common_functions">Default</span></li>
                <li data-v-44e4376b="" class=""><span data-v-44e4376b="" data-cms-key="time"
                    data-cms-page="common_functions">Time</span></li>
                <li data-v-44e4376b="" class=""><span data-v-44e4376b="" data-cms-key="league"
                    data-cms-page="common_functions">League</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="m-bet-content" style="position: relative;">
      <div>

        <fixtures :data="data" :predictions="predictions"></fixtures>
        <div class="m-bet-load-more">
          <div class="bet-load-more-content">
            <!---->
          </div>
        </div>
      </div>
      <!---->
    </div>
  </div>
</template>

<script>
import Fixtures from '~/components/Fixtures.vue';
import _ from 'lodash'
  export default {
  components: { Fixtures },
    name:"sports_menu",
    data(){
      return {
        period: null,
        tournament_id: null,
        category_id: null,
        active_sport:'',
        data:[],
        predictions: [],
        period_show: false,
        league_show: false
      }
    },
    watch: {
      $route: {
        immediate: true,
        handler(to) {
          this.period = to.query.time ?? null;
          this.tournament_id = to.query.tournament_id ?? null
          this.active_sport = this.getSportbyName(to.params.name)
          this.getFixtures()
        },
      },
    },
    methods:{
      getFixtures(){
        if(this.period){
          this.$axios.get()
        }else if(this.tournament_id){
          this.$axios.get('sports/get-fixtures/'+this.tournament_id+'?sid='+this.active_sport+'&source=web&period=all').then((res)=>{
            this.data = _.groupBy(res.data.fixtures, "event_date")
            this.predictions = res.data.predictions
          })
        }
      },
      togglePeriod(){
        if(this.period_show){
          $('.m-choose-bar').addClass('m-choose-bar-show')
        }else if(this.league_show){
          $('.m-choose-bar').addClass('m-choose-bar-show')
        }else{
          $('.m-choose-bar').removeClass('m-choose-bar-show')
        }
        return this.period_show = !this.period_show
      },
      toggleLeague(){
        return this.league_show = !this.league_show
      }
    }
  }
</script>

<style>

</style>
