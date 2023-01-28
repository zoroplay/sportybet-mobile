<template>
  <div class="m-trans-wrap">
    <div id="transaction-list-container">
      <div
        data-v-045e5fcb=""
        class="m-nav-secondary m-transaction-header withHome"
      >
        <div data-v-045e5fcb="" class="m-nav-left">
          <span
            data-v-045e5fcb=""
            data-op="nav-sec-back"
            class="m-icon m-icon--back"
          ></span>
          <div data-v-045e5fcb="" class="trans-select">
            <span data-v-045e5fcb="" class="title"
              ><span
                data-v-045e5fcb=""
                data-cms-key="transactions"
                data-cms-page="page_transaction"
              >
                Transactions
              </span>
              <span data-v-045e5fcb="" class="arrow-icon"></span
            ></span>
          </div>
        </div>
        <div data-v-045e5fcb="" class="info-container">
          <div data-v-045e5fcb="" class="m-nav-right">
            <div data-v-045e5fcb="" class="home-link">
              <div data-v-045e5fcb="" class="home-icon"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="list-bg" style="position: relative">
        <ul class="m-trans-list">
          <li v-for="(item, index) in list" :key="index" data-op="transaction_item">
            <div class="m-trans-r1">
              <em data-op="transaction_type">{{ item.subject }}</em>
              <i data-op="transaction_amount" class="" :class="item.tranx_type == 'credit' ? 'm-txt-green' : 'm-txt-dark-gray'">
                {{ item.tranx_type == 'credit' ? '+' : '-'}} {{ formatNumber(item.amount) }}
              </i>
            </div>
            <div class="m-trans-r2">
              <em>{{ formatDate(item.updated_at) }}</em>
                </div>
          </li>
        </ul>
      </div>
    </div>
    <!---->
  </div>
</template>

<script>
export default {
  name: "transaction",
  data() {
    return {
      page: 1,
      filterData: {
        type: "",
        from: this.$moment(this.$moment().subtract(1, "w") .toDate()).format('DD/MM/YYYY'),
        to: this.$moment(this.$moment().toDate()).format('DD/MM/YYYY'),
        page_size: 20,
      },
      list: [],
    };
  },
  methods: {
    getTransactions() {
      this.$axios
        .post(
          `user/account/get-transactions?page=${this.page}`,
          this.filterData
        )
        .then((res) => {
            this.list = (res.data.transactions.data)
        });
    },
    formatDate(date){
        return this.$moment(date).format('DD/MM h:mm:ss')
    }
  },
  mounted() {
    this.getTransactions();
  },
};
</script>

<style type="text/css">

.m-trans-wrap {
  font-family: Roboto, sans-serif;
}
.m-main-mid {
  color: #353A45;
}
.to-manual {
  color: #0D9737;
  display: block;
  font-size: 14px;
  margin: 1rem 0 0.83333333rem 1.66666667rem;
  text-decoration: none;
}
.to-manual:hover {
  text-decoration: none;
}
.m-nav-secondary {
  position: relative;
  z-index: 1;
}
.m-nav-secondary .title {
  font-size: 1.66666667rem;
}
.m-nav-secondary .arrow-icon {
  font-family: 'iconfont';
  width: auto;
}
.m-nav-secondary .arrow-icon:before {
  content: "\e6A3";
  display: inline-block;
  font-size: 0.83333333rem;
  position: relative;
  top: 0.125rem;
  vertical-align: top;
}
.m-nav-secondary .arrow-icon.open:before {
  -webkit-transform: rotate(180deg);
      -ms-transform: rotate(180deg);
          transform: rotate(180deg);
}
.m-nav-secondary .trans-select {
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}
.m-nav-secondary .trans-select > a {
  display: block;
  margin-left: 1.66666667rem;
}
.m-nav-secondary .trans-select .af-select {
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
      -ms-flex: 0 0 auto;
          flex: 0 0 auto;
  height: 2rem;
  position: static;
}
.m-nav-secondary .trans-select .af-select .af-select-title {
  display: none;
}
.m-nav-secondary .trans-select .af-select .af-select-title .af-select-input {
  display: hidden;
}
.m-nav-secondary .trans-select .af-select .af-select-list {
  background: #FFFFFF;
  border: none;
  border-top: 1px solid #DCDEE5;
  -webkit-box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
          box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
  margin-top: 1.66666667rem;
}
.m-nav-secondary .trans-select .af-select .af-select-list .af-select-item {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  color: #353A45;
  display: block;
  font-size: 1.16666667rem;
  height: 3rem;
  line-height: 3rem;
  padding-left: 3rem;
  text-align: left;
}
.m-nav-secondary .trans-select .af-select .af-select-list .af-select-item.active {
  background: #FFFFFF;
}
.m-nav-secondary .trans-select .af-select .af-select-list .af-select-item.active:after {
  color: #32CE62;
  content: "\e611";
  float: right;
  font-family: 'iconfont';
  font-size: 1.33333333rem;
  padding-right: 1.66666667rem;
}
.m-nav-secondary .trans-select .af-select .af-select-list .af-select-item.hover {
  background: #F2F3F5;
}
.m-nav-secondary .icon-container {
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  height: 100%;
}
.m-nav-secondary .icon-search {
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  height: 100%;
  padding: 0 0.625rem 0 0.625rem;
}
.m-nav-secondary .icon-search:before {
  content: '\e613';
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.m-nav-secondary .icon-search::before {
  font-size: 1.66666667rem;
}
.m-trans-fixed {
  display: none;
  position: fixed;
  top: 0;
  z-index: 10;
}
.m-trans-list {
  line-height: 1.5;
}
.m-trans-list li:not(.m-trans-mon) {
  border-bottom: 1px solid #F2F3F5;
  margin: 0 1.33333333rem;
  padding: 0.91666667rem 0;
}
.m-trans-list li:not(.m-trans-mon):after {
  clear: both;
  content: ".";
  display: block;
  height: 0;
  visibility: hidden;
}
.m-trans-list li:not(.m-trans-mon) em {
  float: left;
  width: 55%;
}
.m-trans-list li:not(.m-trans-mon) i {
  float: right;
  text-align: right;
  width: 45%;
}
.m-trans-list .m-trans-r1 {
  font-size: 1.33333333rem;
  font-weight: 500;
  line-height: 1;
  padding-bottom: 0.33333333rem;
  padding-top: 0.08333333rem;
}
.m-trans-list .m-trans-r1:after {
  clear: both;
  content: ".";
  display: block;
  height: 0;
  visibility: hidden;
}
.m-trans-list .m-trans-r1 i {
  font-size: 1.66666667rem;
  font-weight: 400;
  position: relative;
  top: 0.25rem;
}
.m-trans-list .m-trans-r2 {
  color: #9CA0AB;
  font-size: 1rem;
  line-height: 1;
  padding-bottom: 0.08333333rem;
}
.m-trans-list .m-trans-r2:after {
  clear: both;
  content: ".";
  display: block;
  height: 0;
  visibility: hidden;
}
.m-trans-list .m-trans-mon {
  height: 2.5rem;
}
.m-trans-list .m-trans-mon:first-child div {
  -webkit-box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.13);
          box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.13);
}
.m-trans-list .m-trans-mon div {
  background: #FAFAFA;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  font-size: 1.16666667rem;
  height: 2.5rem;
  line-height: 2.5rem;
  padding-left: 5%;
  padding-top: 0.16666667rem;
  text-align: left;
  width: 100%;
}
.m-trans-list .m-trans-mon-fixed {
  -webkit-box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.13);
          box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.13);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
}
.m-trans-select-backdrop {
  background-color: rgba(0, 0, 0, 0.3);
  height: 100vh;
  position: fixed;
  top: 0;
  width: 100%;
}
.m-icon--question {
  padding: 0 0.625rem;
}
.m-icon--question:before {
  content: '\e6cc';
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.m-icon--question::before {
  font-size: 1.91666667rem;
}
.m-txt-red {
  color: #e41827 !important;
}
.m-txt-green {
  color: #0D9737 !important;
}
.m-txt-dark-gray {
  color: #9CA0AB !important;
}
.m-list-nomore {
  background: #F2F3F5;
  font-size: 1rem;
  height: 2.91666667rem;
  line-height: 2.91666667rem;
  text-align: center;
}
.m-list-nomore-wrap {
  background: #F2F3F5;
  padding-bottom: 0.83333333rem;
  padding-top: 1.58333333rem;
}
.m-list-nomore-wrap .m-list-history-nomore {
  color: #9CA0AB;
  font-size: 1rem;
  line-height: 1.16666667rem;
  text-align: center;
}
.m-list-nomore-wrap .m-list-gohistory {
  color: #0D9737;
  font-size: 1rem;
  line-height: 1.16666667rem;
  margin-top: 0.16666667rem;
  text-align: center;
}
.m-manual-check {
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  font-family: AvenirNext;
  font-size: 12px;
  font-weight: 500;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
          justify-content: space-between;
  padding: 0.75rem 1.33333333rem 0.66666667rem;
}
.m-manual-check-header {
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}
.m-manual-check .bank-icon {
  height: 2.33333333rem;
  margin-right: 0.66666667rem;
  width: 2.33333333rem;
}
.m-manual-check .btn {
  background: #0D9737;
  border-radius: 0.16666667rem;
  color: #FFFFFF;
  display: inline-block;
  padding: 0.58333333rem 0.66666667rem;
}
#transaction-list-container .loading-more-wrapper .m-loading-wrap {
  min-height: 1.66666667rem;
  background-color: inherit;
}
#transaction-list-container .loading-more-wrapper .m-loading-wrap .m-loading .loading {
  background-color: inherit;
}
#transaction-list-container .list-bg {
  background: #FFFFFF;
}
.es-dialog {
  font-size: 1.16666667rem;
}
.es-dialog .es-dialog-head h1 {
  font-size: 1.5rem;
  font-weight: 500;
}
</style>
