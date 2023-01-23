<template>
  <div class="success-wrap">
    <div class="success-dialog">
      <h3 class="title">
        <i class="m-icon-suc"></i> <span> Bet Successful </span>
      </h3>
      <ul class="list">
        <li data-op="betslip-success-stake">
          <span data-op="betslip-success-stake-text"> Total Stake </span>
          <span data-op="betslip-success-stake-amount">500.00</span>
        </li>
        <!---->
        <!---->
        <li data-op="betslip-success-tax">
          <span> Potential Win </span>
          <span data-op="betslip-success-win-amount">285,518.85</span>
        </li>
        <li class="share-code">
          <span><span> Booking Code </span> <em></em></span>
          <span
            ><img
              src="//s.sporty.net/global/main/modules/common-wap/components/betslip/image/ic-share.35f43c7b64.svg"
            />
            <img
              src="//s.sporty.net/global/main/modules/common-wap/components/betslip/image/ic-content-copy.7d0e20b584.svg"
              data-clipboard-text="F099C076"
            />
            F099C076
          </span>
        </li>
      </ul>
      <!---->
      <div class="jump-box">
        <span data-op="betslip-success-history"> View Open Bets </span> <i></i>
      </div>
      <!---->
    </div>
    <div class="btn-box">
      <button class="af-button rebet af-button--primary">
        <!---->
        <!---->
        <span><span> Rebet </span></span>
      </button>
      <button
        class="af-button btn-ok af-button--primary"
        data-op="betslip-success-ok"
      >
        <!---->
        <!---->
        <span><span> OK </span></span>
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
