<template>
  <div class="page-content page-content--ng">
    <div data-v-9324d09e="" class="app-container bg-darks">
      <div class="m-main m-layout-main">
        <div class="m-main-mid m-has-bottom-nav">
          <nuxt/>
          <bottom-nav :show="show"></bottom-nav>
          <Footer />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BottomNav from '~/components/BottomNav.vue'
import Footer from '~/components/Footer.vue'
export default {
  components: { BottomNav, Footer },
  data(){
    return {
      show: false
    }
  }

}
</script>

<style type="text/css">
.app-container[data-v-9324d09e] {
  height: 100%;
}
.bg-darks[data-v-9324d09e] {
  background-color: #353A45;
}
.odds-boost-banner {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-justify-content: space-around;
      -ms-flex-pack: distribute;
          justify-content: space-around;
  width: 100%;
  background-image: -webkit-linear-gradient(172deg, #8333b8, #272351);
  background-image: linear-gradient(278deg, #8333b8, #272351);
}
.odds-boost-banner .claim-offer {
  font-size: 1.16666667rem;
  font-weight: bold;
  color: #ffe600;
}
.odds-boost-banner .claim-offer .arrow-right:before {
  content: '\e608';
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.odds-boost-banner .claim-offer .arrow-right::before {
  color: #ffe600;
  font-size: 1.16666667rem;
}
.odds-boost-banner .banner-image {
  width: 100%;
}
.odds-boost-banner .close-btn {
  position: absolute;
  right: 0.41666667rem;
  top: 50%;
  margin-top: -0.75rem;
  height: 1.5rem;
  width: 1.5rem;
  line-height: 1.5rem;
  border-radius: 0.75rem;
  background-color: rgba(0, 0, 0, 0.15);
  text-align: center;
}
.odds-boost-banner .close-btn:before {
  content: '\e69a';
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.odds-boost-banner .close-btn::before {
  font-size: 0.83333333rem;
  color: #F2F3F5;
}
.odds-boost-icon {
  height: 1.66666667rem;
  width: 2.5rem;
  margin: -0.66666667rem 0.41666667rem 0 0;
}
.odds-boost-text {
  font-size: 1.5rem;
  line-height: 2.5rem;
  font-weight: bold;
  color: #FFFFFF;
}
.m-live-table .m-name-row[data-v-58f6aa8f] {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}
.m-live-table .m-name-row .m-name-cell[data-v-58f6aa8f] {
  background: #3a3d43;
  border-bottom: 1px solid rgba(234, 236, 239, 0.15);
  color: #9CA0AB;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
      -ms-flex-pack: end;
          justify-content: flex-end;
  padding: 0 0.83333333rem;
}
.m-live-table .m-name-row .m-name-cell .m-name[data-v-58f6aa8f] {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 55%;
}
.m-live-table .m-name-row .m-name-cell .m-name > div[data-v-58f6aa8f] {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
      -ms-flex: 1;
          flex: 1;
  height: 2rem;
  line-height: 2rem;
  text-align: center;
}
.toggleAll .icon-triangle[data-v-40e4ec2e] {
  display: inline-block;
}
.toggleAll .icon-triangle[data-v-40e4ec2e]:after {
  color: #32CE62;
  content: '\e6a3';
  display: inline-block;
  font-family: "iconfont" !important;
  font-size: 0.83333333rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-style: normal;
  height: 1.16666667rem;
  line-height: 1.4;
  overflow: hidden;
  vertical-align: middle;
}
.toggleAll.hide .icon-triangle[data-v-40e4ec2e] {
  -webkit-transform: rotate(-90deg);
      -ms-transform: rotate(-90deg);
          transform: rotate(-90deg);
}
.toggleAll .text[data-v-40e4ec2e] {
  margin-left: 1rem;
}
.m-overview {
  background-color: #1B1E25;
  position: relative;
}
.m-overview .schedule {
  font-size: 1.16666667rem;
  padding-right: 1rem;
}
.m-overview .m-nav-secondary .home-link {
  border-left: 0.08333333rem solid #AF271D;
  height: 100%;
  padding: 0 1rem;
}
.m-overview .m-loading.dark {
  background-color: #1B1E25;
}
.m-overview .m-live {
  color: #FFFFFF;
}
.m-overview .m-live.isQuickMarketPanelOpen {
  position: relative;
  z-index: 300;
}
.m-overview .m-live.isQuickMarketPanelOpen .nav-container {
  position: relative;
  z-index: 1;
}
.m-overview .m-live .m-sport-bet-error {
  padding: 2.5rem 0 0.83333333rem;
}
.m-overview .m-live .no-live-virtual-data {
  font-family: 'Roboto-Regular';
  font-size: 1.16666667rem;
  padding: 10rem 1.33333333rem;
  text-align: center;
}
.m-overview .m-live .no-data {
  color: #9CA0AB;
  padding: 3.33333333rem 2.33333333rem;
  text-align: center;
}
.m-overview .m-live .no-data:before {
  content: '\e624';
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.m-overview .m-live .no-data:before {
  color: rgba(234, 236, 239, 0.15);
  font-size: 2.5rem;
}
.m-overview .m-live .m-loading-wrap {
  margin-top: 15%;
}
.m-overview .m-live.fixed .m-sport-type {
  position: fixed;
  width: 100vw;
}
.m-overview .m-live.fixed .m-sport-type.fixBottom {
  bottom: 0;
  position: absolute;
  top: auto;
}
.m-overview .m-live.fixed .marketIndicatedStripe,
.m-overview .m-live.fixed .m-filter-bar,
.m-overview .m-live.fixed .marketNavContainer {
  position: -webkit-sticky;
  position: sticky;
}
.m-overview .m-live.fixed .marketIndicatedStripe {
  z-index: 1;
}
.m-overview .m-live.fixed .m-filter-bar {
  z-index: 2;
}
.m-overview .m-live.fixed .marketNavContainer {
  z-index: 3;
}
.m-overview .m-live .m-sport-type {
  background-color: #1B1E25;
  left: 0;
  padding: 0.83333333rem 0 0;
  position: relative;
  top: 0;
  z-index: 25;
}
.m-overview .m-live .m-sport-type .m-sport-type-item {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  color: #DCDEE5;
  -webkit-box-flex: 0;
  -webkit-flex: none;
      -ms-flex: none;
          flex: none;
  font-size: 1rem;
  line-height: 1.16666667rem;
  min-height: 4.83333333rem;
  padding: 0.91666667rem 0.25rem 0.33333333rem;
  position: relative;
  text-align: center;
  width: 5rem;
}
.m-overview .m-live .m-sport-type .m-sport-type-item:first-child {
  margin-left: 0.83333333rem;
}
.m-overview .m-live .m-sport-type .m-sport-type-item:last-child {
  margin-right: 0.83333333rem;
}
.m-overview .m-live .m-sport-type .m-sport-type-item.active {
  border-bottom: 3px solid #32CE62;
  color: #FFFFFF;
}
.m-overview .m-live .m-sport-type .m-sport-type-item.active .m-sport-icon:before {
  color: #FFFFFF;
}
.m-overview .m-live .m-sport-type .m-sport-type-item .m-event-size {
  background: #393c43;
  border-radius: 0.16666667rem;
  color: #32CE62;
  display: block;
  font-size: 0.83333333rem;
  line-height: 0.91666667rem;
  min-width: 1.66666667rem;
  position: absolute;
  right: 0.91666667rem;
  text-align: center;
  top: 0.25rem;
}
.m-overview .m-live .m-sport-type .m-sport-type-item .m-sport-icon:before {
  color: #DCDEE5;
  font-size: 1.66666667rem;
  line-height: 1;
  vertical-align: top;
}
.m-overview .m-live .m-sport-type .m-sport-type-item .m-sport-text {
  margin-top: 0.25rem;
  white-space: normal;
}
.m-overview .m-live .marketNavContainer {
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  background-color: #1b1e25;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  position: static;
  z-index: 24;
}
.m-overview .m-live .m-mkt-type {
  -webkit-box-flex: 1;
  -webkit-flex: 1 1 auto;
      -ms-flex: 1 1 auto;
          flex: 1 1 auto;
}
.m-overview .m-live .m-mkt-type .m-sport-type-item {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  font-size: 1rem;
  font-weight: normal;
  line-height: 1.16666667rem;
  padding: 0.91666667rem 1rem;
}
.m-overview .m-live .m-mkt-type .m-sport-type-item.active {
  border-bottom: 2px solid #0D9737;
}
.m-overview .m-live .m-league {
  margin: 0;
}
.m-overview .m-live .m-league .m-league-title {
  background: #1B1E25;
  border-bottom: 1px solid rgba(242, 243, 245, 0.15);
  border-top: 0;
  color: #FFFFFF;
}
.m-overview .m-live .m-league .m-league-conent {
  margin-bottom: 0;
}
.m-overview .m-live .m-league .m-league-conent .m-live-table .m-name-row {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}
.m-overview .m-live .m-league .m-league-conent .m-live-table .m-name-row .m-name-cell {
  background: rgba(234, 236, 239, 0.15);
  border-bottom: 1px solid rgba(234, 236, 239, 0.15);
  color: #9CA0AB;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
      -ms-flex-pack: end;
          justify-content: flex-end;
  padding: 0 0.83333333rem;
}
.m-overview .m-live .m-league .m-league-conent .m-live-table .m-name-row .m-name-cell .m-name {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 55%;
}
.m-overview .m-live .m-league .m-league-conent .m-live-table .m-name-row .m-name-cell .m-name > div {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
      -ms-flex: 1;
          flex: 1;
  height: 2rem;
  line-height: 2rem;
  text-align: center;
}
.m-overview .m-live .m-league .m-league-conent .m-live-table .m-live-title-row {
  padding-bottom: 0.33333333rem;
  padding-top: 0.83333333rem;
}
.m-overview .m-live .m-league .m-league-conent .m-live-table .m-live-title-row .m-market-size {
  color: #0D9737;
  text-align: right;
}
.m-overview .m-live .m-league .m-league-conent .m-live-table .m-live-title-row .m-market-size:after {
  color: #0D9737;
  content: "\e608";
  display: inline-block;
  font-family: 'iconfont';
  text-indent: 0.83333333rem;
}
.m-overview .m-live .m-league .m-league-conent .m-live-table .m-live-title-row .game-id {
  color: #9CA0AB;
}
.m-overview .m-live .m-league .m-league-conent .m-live-table.tennis .m-info-cell {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  padding-right: 0.83333333rem;
  width: 26%;
}
.m-overview .m-live .m-league .m-league-conent .m-live-table.tennis .game-score,
.m-overview .m-live .m-league .m-league-conent .m-live-table.tennis .point {
  color: #DCDEE5;
  opacity: 0.5;
}
.m-overview .m-live .m-filter-bar {
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  background-color: #1b1e25;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
          justify-content: space-between;
  padding: 1.25rem 1.33333333rem 1rem 0.83333333rem;
  text-align: right;
  width: 100%;
}
.m-overview .m-live .m-filter-bar label {
  margin-left: 0.83333333rem;
}
.m-overview .m-live .m-filter-bar .auto-accept-change {
  margin-left: auto;
}
.m-overview .m-live-upcoming {
  background: #FFFFFF;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  padding: 1.66666667rem 0;
}
.m-overview .m-live-upcoming .m-title {
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.83333333rem;
  margin-bottom: 0.75rem;
  margin-left: 1.33333333rem;
}
.m-overview .m-live-upcoming .m-mkt-type {
  background: white;
  border-bottom: 1px solid rgba(234, 236, 239, 0.15);
  position: -webkit-sticky;
  position: sticky;
  width: 100%;
  z-index: 24;
}
.m-overview .m-live-upcoming .m-mkt-type .m-sport-type-item {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  font-size: 1rem;
  font-weight: normal;
  line-height: 1.16666667rem;
  padding: 0.91666667rem 1rem;
}
.m-overview .m-live-upcoming .m-mkt-type .m-sport-type-item.active {
  border-bottom: 2px solid #0D9737;
}
.m-bottom-nav {
  background-color: #353A45;
}
</style>
