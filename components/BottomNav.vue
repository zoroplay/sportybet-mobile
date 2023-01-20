<template>
  <div class="m-bottom-nav">
    <div @click="$nuxt.$emit('toggleBetslip')" class="betslip-float-wrapper real-theme">
      <div class="bg"></div>
      <div class="count-wrapper">
        <span data-op="bet-slip-count" class="count">{{ betslip.selections.length }}</span>
      </div>
      <div
        class="betslip">
        BETSLIP
      </div>
    </div>
    <div class="m-bottom-fixed" :class="show ? '':'d-none'">
      <div data-op="bottom-nav-home" @click="$router.push('/')" class="m-btn-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="23"
          viewBox="0 0 22 23"
        >
          <g fill="none" fill-rule="evenodd">
            <g>
              <g>
                <g>
                  <g>
                    <path
                      d="M0 0H22V22H0z"
                      transform="translate(-25 -682) translate(0 672) translate(25 10) translate(0 .5)"
                    ></path>
                    <path
                      fill-rule="nonzero"
                      d="M12.177 8.942c-.052 0-.103.001-.155.003v-.003h-1.513V8.94c-.624-.032-1.068-.555-1-1.194.066-.64.619-1.163 1.249-1.195h1.537l-.87-3.988h-.32v.001l-.133-.001c-2.84 0-5.385 2.32-5.684 5.182-.298 2.862 1.763 5.183 4.603 5.183l.133-.003v.004h1.54c.621.035 1.062.556.996 1.194-.067.64-.62 1.162-1.25 1.195H9.775l.87 3.986h.318v-.002c.045.002.09.002.134.002 2.84 0 5.383-2.32 5.681-5.18.299-2.862-1.761-5.18-4.6-5.18m3.428-2.06c1.253 0 2.269-1.028 2.269-2.296 0-1.268-1.016-2.295-2.27-2.295-1.253 0-2.269 1.027-2.269 2.295s1.016 2.295 2.27 2.295m-9.212 8.236c-1.253 0-2.269 1.027-2.269 2.295s1.016 2.295 2.27 2.295c1.253 0 2.269-1.027 2.269-2.295 0-.609-.24-1.192-.665-1.623-.425-.43-1.003-.672-1.605-.672"
                      transform="translate(-25 -682) translate(0 672) translate(25 10) translate(0 .5)"
                      class="icon active"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </svg>
        <span class="active"></span>
      </div>
      <div data-op="bottom-az-menu" class="m-btn-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="23"
          viewBox="0 0 22 23"
        >
          <g fill="none" fill-rule="evenodd">
            <g>
              <g>
                <g>
                  <path
                    d="M0 0H22V22H0z"
                    transform="translate(-97 -682) translate(0 672) translate(97 10.5)"
                  ></path>
                  <path
                    fill-rule="nonzero"
                    d="M2.75 16.5h16.5v-1.833H2.75V16.5zm0-4.583h16.5v-1.834H2.75v1.834zm0-6.417v1.833h16.5V5.5H2.75z"
                    transform="translate(-97 -682) translate(0 672) translate(97 10.5)"
                    class="icon"
                  ></path>
                </g>
              </g>
            </g>
          </g>
        </svg>
        <span
          class="label"
          data-cms-key="az_menu"
          data-cms-page="wap_main_bottom_nav"
          >AZ Menu
        </span>
      </div>
      <div data-op="bottom-nav-games" class="m-btn-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="23"
          viewBox="0 0 22 23"
        >
          <g fill="none" fill-rule="evenodd">
            <g fill="#9CA0AB">
              <g>
                <g>
                  <g>
                    <path
                      d="M16.627 8.067C13.063 5.49 11.834 3.429 11 1.833c-.834 1.596-2.062 3.658-5.627 6.234-6.078 4.391-.357 10.521 4.673 7.147-.328 2.094-1.446 3.62-2.582 4.277v.676h7.072v-.676c-1.136-.657-2.254-2.183-2.582-4.277 5.03 3.374 10.75-2.756 4.673-7.147z"
                      transform="translate(-169 -682) translate(0 672) translate(150 10) translate(19 .5)"
                      class="icon"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </svg>
        <span
          class="label"
          data-cms-key="games"
          data-cms-page="wap_main_bottom_nav"
          >Games</span
        >
      </div>
      <div data-op="bottom-nav-open-bets" @click="$router.push('/account/open_bets')" class="m-btn-button">
        <img
          src="https://s.sporty.net/global/main/modules/common-wap/components/layout/image/open-bet.620ec1f20e.png"
          alt=""
        />
        <span
          class="label"
          data-cms-key="open_bets"
          data-cms-page="wap_main_bottom_nav"
          >Open Bets</span
        >
      </div>
      <div data-op="bottom-me" class="m-btn-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="23"
          viewBox="0 0 22 23"
        >
          <g fill="none" fill-rule="evenodd">
            <g>
              <g>
                <g>
                  <path
                    fill-rule="nonzero"
                    d="M11 11c2.026 0 3.667-1.64 3.667-3.667 0-2.026-1.641-3.666-3.667-3.666s-3.667 1.64-3.667 3.666S8.974 11 11 11zm0 1.833c-2.447 0-7.333 1.229-7.333 3.667v1.833h14.666V16.5c0-2.438-4.885-3.667-7.333-3.667z"
                    transform="translate(-313 -682) translate(0 672) translate(313 10.5)"
                    class="icon"
                  ></path>
                  <path
                    d="M0 0H22V22H0z"
                    transform="translate(-313 -682) translate(0 672) translate(313 10.5)"
                  ></path>
                </g>
              </g>
            </g>
          </g>
        </svg>
        <span
          class="label"
          data-cms-key="me"
          data-cms-page="wap_main_bottom_nav"
          >Me</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bottom-nav',
  props:["show"]

};
</script>

<style></style>
