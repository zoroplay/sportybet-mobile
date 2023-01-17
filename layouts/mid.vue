<template>
  <div class="page-content page-content--ng">
    <div class="m-main m-layout-main">
      <div class="m-main-mid">
        <nuxt/>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style type="text/css">
.m-menu-item {
  font-size: 1.16666667rem;
  font-weight: 500;
  color: #096B27;
  display: block;
  float: left;
  width: 50%;
  height: 3.16666667rem;
  line-height: 3.16666667rem;
  text-align: left;
  border-radius: 2px;
  background-color: #FAFAFA;
  margin-bottom: 0.33333333rem;
  padding: 0 1.08333333rem;
  -webkit-box-shadow: -0.33333333rem 0px 0px 0px #FFFFFF inset;
          box-shadow: -0.33333333rem 0px 0px 0px #FFFFFF inset;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.m-daily-menu {
  margin-top: 1.66666667rem;
}
.m-daily-menu .m-menu-row {
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
  padding: 0.33333333rem 0.83333333rem 0;
}
.m-daily-menu .m-menu-row .m-menu-title {
  color: #353A45;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.75rem;
}
.m-sports-menu {
  position: relative;
}
.m-sports-menu .sports-menu-fixed {
  height: 6.08333333rem;
}
.m-sports-menu .m-sports-choose-fixed {
  position: fixed;
  top: 0;
  z-index: 10;
}
.m-sports-menu .m-sports-choose {
  background-color: white;
  border-bottom: 1px solid #EAECEF;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  width: 100%;
}
.m-sports-menu .m-sports-choose .m-sports-choose-item {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  -webkit-box-flex: 0!important;
  -webkit-flex: none!important;
      -ms-flex: none!important;
          flex: none!important;
  min-height: 5rem;
  padding: 1.16666667rem 0.33333333rem 0.75rem;
  position: relative;
  width: 5rem;
}
.m-sports-menu .m-sports-choose .m-sports-choose-item:first-child {
  margin-left: 0.83333333rem;
}
.m-sports-menu .m-sports-choose .m-sports-choose-item:last-child {
  margin-right: 0.83333333rem;
}
.m-sports-menu .m-sports-choose .m-sports-choose-item.active {
  border-bottom: 0.25rem solid #e41827;
}
.m-sports-menu .m-sports-choose .m-sports-choose-item .sport-text {
  font-size: 1rem;
  line-height: 1.16666667rem;
  margin-top: 0.25rem;
  white-space: normal;
}
.m-sports-menu .m-sports-choose .m-sports-choose-item .sprot-icon {
  display: block;
  text-align: center;
}
.m-sports-menu .m-sports-choose .m-sports-choose-item .sprot-icon:before {
  color: #353A45;
  font-size: 1.5rem;
  line-height: 1;
  vertical-align: top;
}
.m-sports-menu .m-top-menu {
  margin: 1.66666667rem 0.5rem 0 0.83333333rem;
}
.m-sports-menu .m-top-menu:after {
  clear: both;
  content: ".";
  display: block;
  height: 0;
  visibility: hidden;
}
.m-sports-menu .m-topnav .m-search-icon:before {
  content: '\e613';
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.m-sports-menu .m-topnav .m-search-icon:before {
  font-size: 1.5rem;
}
.m-sports-countries {
  margin: 1.66666667rem 0;
}
.m-sports-countries .m-countries-block .m-countries-block-title {
  line-height: 1.75rem;
  margin-bottom: 0.75rem;
}
.m-sports-countries .m-country-list {
  border-radius: 2px;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  margin: 0 0.83333333rem;
  overflow: hidden;
  padding: 0;
}
.m-sports-countries .m-country-list .m-league {
  border-bottom: 1px solid #353A45;
  margin: 0 0;
}
.m-sports-countries .m-country-list .m-league .m-league-title {
  border-radius: 0;
}
.m-sports-countries .m-country-list .m-league .m-league-title .m-event-size {
  display: none;
}

.m-sports-menu > .m-loading-wrap {
  background: white;
}
</style>
