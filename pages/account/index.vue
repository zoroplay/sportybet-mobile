<template>
  <div id="me-container">
    <div data-v-306414ab="" slot="mid" class="me-main">
      <div data-v-306414ab="" class="header-container">
        <div data-v-306414ab="" class="header">
          <div data-v-306414ab="" data-op="me-account" class="account-wrap">
            <span data-v-306414ab="" class="user"
              ><img
                data-v-306414ab=""
                src="https://s.sporty.net/global/main/modules/main/mobile/index/img/account.dae19b799c.svg"
            /></span>
            <div data-v-306414ab="" class="wording-wrap">
              <router-link to="/login">
                <div
                  data-v-306414ab=""
                  class="account text-white"

                >
                  Login to View <span @click="logout">logout</span>
                </div>
              </router-link>
              <i data-v-306414ab="" class="m-icon-arrow1"></i>
            </div>
            <!----><!---->
          </div>
          <div data-v-306414ab="" class="balance-wrap">
            <div data-v-306414ab="" class="balanceIcon">
              <img
                data-v-306414ab=""
                src="https://s.sporty.net/global/main/modules/main/mobile/index/img/eye.dda224b930.svg"
              />
            </div>
            <div data-v-306414ab="" class="title">Total Balance</div>
            <div data-v-306414ab="" data-op="me_balance" class="value">
              <span data-v-306414ab="">NGN</span
              ><span data-v-306414ab=""> 0.00</span>
            </div>
          </div>
          <div data-v-306414ab="" class="w-d-wrap">
            <div data-v-306414ab="" data-op="me_deposit" class="deposit">
              <img
                data-v-306414ab=""
                src="https://s.sporty.net/global/main/modules/main/mobile/index/img/wallet.b00a3923f1.png"
                class="w-d-wrap-img"
              /><span
                data-v-306414ab=""
                data-cms-key="deposit"
                data-cms-page="wap_me"
                >Deposit</span
              >
            </div>
            <div data-v-306414ab="" data-op="me_withdraw" class="withdraw">
              <img
                data-v-306414ab=""
                src="https://s.sporty.net/global/main/brand/sportybet/mobile/images/withdraw.389efd019d.png"
                class="w-d-wrap-img"
              /><span
                data-v-306414ab=""
                data-cms-key="withdraw"
                data-cms-page="wap_me"
                >Withdraw</span
              >
            </div>
          </div>
        </div>
      </div>
      <div data-v-306414ab="" class="body">
        <div data-v-306414ab="" class="transaction-wrap">
          <div
            data-v-306414ab=""
            data-op="me_sb_bethistory"
            class="transaction-wrap-item history"
          >
            <img
              data-v-306414ab=""
              src="https://s.sporty.net/global/main/modules/main/mobile/index/img/history.76d3fd43f4.svg"
              class="transaction-wrap-item-img"
            /><span
              data-v-306414ab=""
              data-cms-key="sports_bet_history"
              data-cms-page="wap_me"
              >Sports Bet History</span
            >
          </div>
          <div
            data-v-306414ab=""
            data-op="me_transaction"
            class="transaction-wrap-item transaction"
          >
            <img
              data-v-306414ab=""
              src="https://s.sporty.net/global/main/brand/sportybet/mobile/images/transaction.4d2d40c644.svg"
              class="transaction-wrap-item-img"
            /><span
              data-v-306414ab=""
              data-cms-key="transactions"
              data-cms-page="wap_me"
              >Transactions</span
            >
          </div>
          <div data-v-306414ab="" class="transaction-wrap-item gift">
            <img
              data-v-306414ab=""
              src="https://s.sporty.net/global/main/modules/main/mobile/index/img/gift.0c7224b2a3.svg"
              class="transaction-wrap-item-img"
            /><span
              data-v-306414ab=""
              data-cms-key="gifts_nums"
              data-cms-page="wap_me"
              >Gifts (0)</span
            >
          </div>
        </div>
        <div data-v-306414ab="" class="list-wrap">
          <!----><!----><!----><!---->
          <div data-v-306414ab="" class="item">
            <img
              data-v-306414ab=""
              src="//s.sporty.net/global/main/modules/main/mobile/index/img/help_centre.d25ebe3fb8.svg"
              class="item-img"
            />
            <div
              data-v-306414ab=""
              class="title"
              data-cms-key="24_7_customer_service"
              data-cms-page="wap_me"
            >
              24/7 Customer Service
            </div>
            <div data-v-306414ab="" class="status">Online</div>
            <img
              data-v-306414ab=""
              src="//s.sporty.net/global/main/modules/main/mobile/index/img/more.3a2702af00.svg"
              class="item-img"
            />
          </div>
          <!---->
          <div data-v-306414ab="" class="item">
            <img
              data-v-306414ab=""
              src="//s.sporty.net/global/main/modules/main/mobile/index/img/icon_comment.1d3c2891ea.svg"
              class="item-img"
            />
            <div data-v-306414ab="" class="title">
              <span
                data-v-306414ab=""
                data-cms-key="message"
                data-cms-page="wap_me"
                >Message</span
              >
            </div>
            <!----><img
              data-v-306414ab=""
              src="//s.sporty.net/global/main/modules/main/mobile/index/img/more.3a2702af00.svg"
              class="item-img"
            />
          </div>
          <div data-v-306414ab="" class="item">
            <img
              data-v-306414ab=""
              src="//s.sporty.net/global/main/modules/main/mobile/index/img/info.c1eda11492.svg"
              class="item-img"
            />
            <div
              data-v-306414ab=""
              class="title"
              data-cms-key="how_to_play"
              data-cms-page="wap_me"
            >
              How to play
            </div>
            <img
              data-v-306414ab=""
              src="//s.sporty.net/global/main/modules/main/mobile/index/img/more.3a2702af00.svg"
              class="item-img"
            />
          </div>
        </div>
      </div>
    </div>
    <footer data-v-7082a422="" class="m-footer m-footer--ng">
      <div data-v-7082a422="" class="copyright-wrap">
        <div data-v-7082a422="" class="icons">
          <img
            data-v-7082a422=""
            src="//s.sporty.net/global/main/modules/common-wap/components/layout/pagelate/footer/image/doc_check.1888d8c5ce.png"
          /><img
            data-v-7082a422=""
            src="//s.sporty.net/global/main/modules/common-wap/components/layout/pagelate/footer/image/eighteen-plus.2f6d025d51.png"
            class="eighteen"
          />
        </div>
        <div
          data-v-7082a422=""
          class="copyright"
          data-cms-key="year_copy_right"
          data-cms-page="main_footer"
        >
          <p>© 2023 SportyBet.</p>
          <p>All rights reserved.</p>
        </div>
      </div>
      <div data-v-7082a422="" class="partnership-wrap text-center">
        <img
          data-v-7082a422=""
          src="//s.sporty.net/ke/main/brand/sportybet/mobile/images/partnership_logo.35d392f33d.png"
          data-cms-key="wap_partnership"
          data-cms-page="main_footer"
        />
      </div>
      <!---->
      <div data-v-7082a422="" class="payment-methods">
        <h5 data-v-7082a422="">Payment methods</h5>
        <p
          data-v-7082a422=""
          data-cms-key="wap_18_age_tip"
          data-cms-page="main_footer"
        >
          Age 18 and above only to register or play at SportyBet. Play
          Responsibly. Betting is addictive and can be psychologically harmful.
          | SportyBet Nigeria is licensed by the National Lottery Regulatory
          Commission of Nigeria.
        </p>
        <!---->
      </div>
      <div data-v-7082a422="" class="hr"></div>
      <div data-v-7082a422="" class="t_c-about_us">
        <h5 data-v-7082a422="" class="underline">Terms &amp; Conditions</h5>
        <h5 data-v-7082a422="" class="divider">|</h5>
        <h5 data-v-7082a422="" class="underline">About Us</h5>
      </div>
      <div data-v-7082a422="" class="btn"><!----></div>
    </footer>
  </div>
</template>

<script>
import Footer from "~/components/Footer.vue";
export default {
  name: "me",
  components: { Footer },
  methods:{
    async logout() {
        await this.$auth.logout();
        this.$auth.$storage.removeCookie('auth.user',true)
    },
  }
};
</script>

<style>
.m-icon-reversed-sms[data-v-306414ab]:before {
  content: "\e6d22";
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.m-icon--vFootball[data-v-306414ab]:before {
  content: "\e6d4";
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.m-icon--snooker[data-v-306414ab]:before {
  content: "\e6ca";
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.icon-16-size[data-v-306414ab]:before {
  font-size: 1.33333333rem;
}
.me-main[data-v-306414ab] {
  font-family: Roboto, Arial, sans-serif;
}
.me-main .header-container[data-v-306414ab] {
  background-color: #1b1e25;
  color: #ffffff;
  padding: 0 1.33333333rem 1.66666667rem 1.33333333rem;
}
.me-main .header-container .header[data-v-306414ab] {
  position: relative;
}
.me-main .header-container .header .account-wrap[data-v-306414ab] {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  font-size: 1.33333333rem;
  height: 4.41666667rem;
  position: relative;
}
.me-main .header-container .header .account-wrap .user[data-v-306414ab] {
  border-radius: 50%;
  height: 2.66666667rem;
  margin-right: 0.66666667rem;
  overflow: hidden;
  width: 2.66666667rem;
}
.me-main .header-container .header .account-wrap .user img[data-v-306414ab] {
  height: 100%;
  vertical-align: top;
  width: 100%;
}
.me-main
  .header-container
  .header
  .account-wrap
  .wording-wrap[data-v-306414ab] {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
}
.me-main
  .header-container
  .header
  .account-wrap
  .wording-wrap
  .account[data-v-306414ab] {
  display: inline-block;
  font-weight: 500;
  margin-right: 0.66666667rem;
}
.me-main
  .header-container
  .header
  .account-wrap
  .wording-wrap
  .account
  .name[data-v-306414ab] {
  max-width: 50vw;
  overflow: hidden;
  position: relative;
  text-overflow: ellipsis;
}
.me-main
  .header-container
  .header
  .account-wrap
  .wording-wrap
  .account
  .phone[data-v-306414ab] {
  color: #9ca0ab;
}
.me-main
  .header-container
  .header
  .account-wrap
  .wording-wrap
  .m-icon-arrow1[data-v-306414ab] {
  color: #9ca0ab;
}
.me-main
  .header-container
  .header
  .account-wrap
  .wording-wrap
  .m-icon-arrow1[data-v-306414ab]:before {
  content: "\e608";
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.me-main
  .header-container
  .header
  .account-wrap
  .wording-wrap
  .m-icon-arrow1[data-v-306414ab]:before {
  font-size: 1rem;
  line-height: 1rem;
}
.me-main .header-container .header .account-wrap .bell-icon[data-v-306414ab] {
  margin-right: 1.66666667rem;
}
.me-main .header-container .header .balance-wrap[data-v-306414ab] {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  font-size: 1.16666667rem;
  margin-top: 1.66666667rem;
  position: relative;
}
.me-main .header-container .header .balance-wrap .title[data-v-306414ab] {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  margin-left: 0.66666667rem;
}
.me-main .header-container .header .balance-wrap .value[data-v-306414ab] {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  margin-left: 0.66666667rem;
  text-align: right;
}
.me-main
  .header-container
  .header
  .balance-wrap
  .value
  .invisible[data-v-306414ab] {
  letter-spacing: 0.16666667rem;
  opacity: 0.5;
}
.me-main .header-container .header .w-d-wrap[data-v-306414ab] {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  font-size: 1.16666667rem;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin-top: 1.66666667rem;
}
.me-main .header-container .header .w-d-wrap div[data-v-306414ab] {
  background-color: #079837;
  font-weight: 500;
  height: 4rem;
  line-height: 4rem;
  text-align: center;
  width: calc(50% - 0.66666667rem);
}
.me-main
  .header-container
  .header
  .w-d-wrap
  div
  .w-d-wrap-img[data-v-306414ab] {
  height: 50%;
  margin-right: 1rem;
}
.me-main .body[data-v-306414ab] {
  background-color: #ffffff;
}
.me-main .body .transaction-wrap[data-v-306414ab] {
  border-bottom: 1px solid #f2f3f5;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 1.33333333rem;
}
.me-main .body .transaction-wrap-item[data-v-306414ab] {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  text-align: center;
  width: 8rem;
}
.me-main .body .transaction-wrap-item-img[data-v-306414ab] {
  height: 1.66666667rem;
  margin-bottom: 0.66666667rem;
}
.me-main .body .list-wrap a.item[data-v-306414ab] {
  color: inherit;
}
.me-main .body .list-wrap .item[data-v-306414ab] {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border-bottom: 1px solid #eaecef;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  font-size: 1.16666667rem;
  height: 4.08333333rem;
  padding: 0 0.66666667rem 0 1.66666667rem;
}
.me-main .body .list-wrap .item .item-img[data-v-306414ab] {
  margin-right: 1rem;
}
.me-main .body .list-wrap .item .title[data-v-306414ab] {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
}
.me-main .body .list-wrap .item .status[data-v-306414ab] {
  color: #0d9737;
  font-weight: 500;
  margin-right: 0.33333333rem;
}
.me-main .body .list-wrap .item .count[data-v-306414ab] {
  background-color: #e41827;
  border-radius: 1rem;
  color: #ffffff;
  font-size: 0.83333333rem;
  min-width: 2.08333333rem;
  padding: 0.16666667rem 0.33333333rem;
  text-align: center;
}
.me-main .body .list-wrap .item .red-dot[data-v-306414ab] {
  background-color: #e41827;
  border-radius: 50%;
  height: 7px;
  margin-right: 0.33333333rem;
  width: 7px;
}
.me-main .body .list-wrap .item .kyc[data-v-306414ab] {
  font-size: 1rem;
  font-weight: 400;
  padding: 0.5rem 1rem;
}
.me-main .body .list-wrap .item .kyc.bg[data-v-306414ab] {
  background-color: #0d9737;
  border-radius: 0.16666667rem;
  color: #ffffff;
}
</style>
