<template>
  <div>
    <div class="m-main m-layout-main">

      <div class="m-main-mid m-has-bottom-nav">

        <div>

          <div style="min-height: 0.1px"></div>

          <div style="height: 103px"></div>
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
                  <div class="m-login-not">
                    <div
                      data-op="nav-join-now"
                      class="m-btn-join-now"
                      data-cms-key="join_now"
                      data-cms-page="main_navbar"
                    >
                      Join Now
                    </div>
                    <div
                      data-op="nav-login"
                      class="m-btn-login"
                      data-cms-key="log_in"
                      data-cms-page="main_navbar"
                    >
                      Log In
                    </div>
                  </div>

                </div>
              </div>
            </header>
            <div

              class="drawer langs-drawer"
              style="display: none"
            >
              <div  class="drawer__mask"></div>

            </div>
          </div>
        </div>

        <div>



        </div>
        <div class="home">
          <div id="carousel" class="main-banner">
            <div data-ride="carousel" class="carousel slide">
              <div role="listbox" class="carousel-inner">
                <div class="item">
                  <a
                    href="https://www.sportybet.com/ng/m/sport/football/sr:category:1/sr:tournament:17/sr:match:34152051"
                    ><img
                      src="https:https://s.sporty.net/common/main/res/5b9e8e06cf4fda09deddd458bedca90d.png"
                      loading="eager"
                  /></a>
                </div>
                <div class="item">
                  <a
                    href="https://www.sportybet.com/ng/m/sport/football/sr:category:1/sr:tournament:17?time=all&amp;sort=2"
                    ><img
                      src="https:https://s.sporty.net/common/main/res/db14930101a675f6f4fea340f0a6bc13.png"
                      loading="lazy"
                  /></a>
                </div>
                <div class="item">
                  <a
                    href="https://www.sportybet.com/ng/m/games/sportygames?game=sporty-hero"
                    ><img
                      src="https:https://s.sporty.net/common/main/res/bcb12370a1cc2abdecec2572f5fdd4e5.png"
                      loading="lazy"
                  /></a>
                </div>
                <div class="item">
                  <a
                    href="https://www.sportybet.com/ng/m/help#/how-to-play/others/bonuses-and-gifts"
                    ><img
                      src="https:https://s.sporty.net/common/main/res/c51e5a37526f548ff3c8d13ca7944b89.png"
                      loading="lazy"
                  /></a>
                </div>
                <div class="item">
                  <a
                    href="https://www.sportybet.com/ng/m/sporty-instant-virtuals/quickgame?leagueId=191128111256lea000000002"
                    ><img
                      src="https:https://s.sporty.net/common/main/res/e504066cc63ae964e96e6e97acf0a669.png"
                      loading="lazy"
                  /></a>
                </div>
                <div class="item active">
                  <a
                    href="https://www.sportybet.com/ng/m/games/sportygames?game=poker"
                    ><img
                      src="https:https://s.sporty.net/common/main/res/992e8f45bbfb2b184a3e296fa418302e.png"
                      loading="lazy"
                  /></a>
                </div>
              </div>
              <ol class="carousel-indicators">
                <li class=""></li>
                <li class=""></li>
                <li class=""></li>
                <li class=""></li>
                <li class=""></li>
                <li class="active"></li>
              </ol>
              <span role="button" class="left carousel-control">&lt;</span>
              <span role="button" class="right carousel-control">&gt;</span>
            </div>
          </div>

          <div class="m-snap-nav-wrap m-sports-choose" style="overflow: hidden">
            <ul
              class="m-snap-nav flex"
              style="
                transform: translate(0px, 0px) translateZ(0px);
                transition-duration: 350ms;
                transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1);
                width: 4640.62px;
              "
            >
              <li class="m-sports-choose-item m-snap-nav-item active">
                <a
                  href="https://www.sportybet.com/ng/m/sports?source=home"
                  data-op="home_nav_Sports"
                  draggable="false"
                >
                  <div class="sport-icon">
                    <img
                      src="https:https://s.sporty.net/common/main/res/b9e85e5591c54c08dddf4860d9465d30.png"
                      loading="eager"
                      width="20"
                      height="20"
                    />
                  </div>
                  <span class="sport-text">Sports </span>

                </a>
              </li>
              <li class="m-sports-choose-item m-snap-nav-item">
                <a
                  href="https://www.sportybet.com/ng/m/sport/football/live_list/?source=home"
                  data-op="home_nav_Live"
                  draggable="false"
                >
                  <div class="sport-icon">
                    <img
                      src="https:https://s.sporty.net/common/main/res/679fad28e6fdebf9303e21a74817df5a.png"
                      loading="eager"
                      width="20"
                      height="20"
                    />
                  </div>
                  <span class="sport-text">Live </span>

                </a>
              </li>
              <li class="m-sports-choose-item m-snap-nav-item">
                <a
                  href="https://www.sportybet.com/ng/m/sporty-instant-virtuals"
                  data-op="home_nav_Instant Virtuals"
                  draggable="false"
                >
                  <div class="sport-icon">
                    <img
                      src="https:https://s.sporty.net/ke/main/res/6a853fb25ff6c9dda1c67f1c56aee52c.png"
                      loading="eager"
                      width="20"
                      height="20"
                    />
                  </div>
                  <span class="sport-text">Instant Virtuals</span>

                </a>
              </li>
              <li class="m-sports-choose-item m-snap-nav-item">
                <a
                  href="https://www.sportybet.com/ng/m/games?source=home#/"
                  data-op="home_nav_Games"
                  draggable="false"
                >
                  <div class="sport-icon">
                    <img
                      src="https:https://s.sporty.net/common/main/res/93cbcee40dfc392b3dc7a37dbfe20edb.png"
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
                      src="https:https://s.sporty.net/ke/main/res/ded88a536e56373e992d0e0f7f711743.png"
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
                      src="https:https://s.sporty.net/common/main/res/ce11ea85ac65ae129758f20a0b4d8d63.png"
                      loading="eager"
                      width="20"
                      height="20"
                    />
                  </div>
                  <span class="sport-text">Load Code </span>

                </a>
              </li>
              <li class="m-sports-choose-item m-snap-nav-item">
                <a
                  href="https://www.sportybet.com/ng/m/sports?sport=basketball&amp;source=home"
                  data-op="home_nav_Basketball"
                  draggable="false"
                >
                  <div class="sport-icon">
                    <img
                      src="https:https://s.sporty.net/common/main/res/f75f9263386cb8945f4aacea877c7496.png"
                      loading="lazy"
                      width="20"
                      height="20"
                    />
                  </div>
                  <span class="sport-text">Basketball </span>

                </a>
              </li>
              <li class="m-sports-choose-item m-snap-nav-item">
                <a
                  href="https://www.sportybet.com/ng/m/sports?sport=tennis&amp;source=home"
                  data-op="home_nav_Tennis"
                  draggable="false"
                >
                  <div class="sport-icon">
                    <img
                      src="https:https://s.sporty.net/common/main/res/4705a0e5673bbb1bc586a0babdf1d7d5.png"
                      loading="lazy"
                      width="20"
                      height="20"
                    />
                  </div>
                  <span class="sport-text">Tennis </span>

                </a>
              </li>
              <li class="m-sports-choose-item m-snap-nav-item">
                <a
                  href="https://www.sportybet.com/ng/m/sports?sport=tableTennis&amp;source=home"
                  data-op="home_nav_Table Tennis"
                  draggable="false"
                >
                  <div class="sport-icon">
                    <img
                      src="https:https://s.sporty.net/ng/main/res/ea44ef79c7ed5213026b516d576415fd.png"
                      loading="lazy"
                      width="20"
                      height="20"
                    />
                  </div>
                  <span class="sport-text">Table Tennis</span>

                </a>
              </li>
              <li class="m-sports-choose-item m-snap-nav-item">
                <a
                  href="https://www.sportybet.com/ng/m/sports?sport=americanFootball&amp;source=home"
                  data-op="home_nav_American Football"
                  draggable="false"
                >
                  <div class="sport-icon">
                    <img
                      src="https:https://s.sporty.net/ke/main/res/14cf5f218824ca42856dc4fb97432bc5.png"
                      loading="lazy"
                      width="20"
                      height="20"
                    />
                  </div>
                  <span class="sport-text">American Football</span>

                </a>
              </li>
              <li class="m-sports-choose-item m-snap-nav-item">
                <a
                  href="https://www.sportybet.com/ng/m/sports?sport=iceHockey&amp;source=home"
                  data-op="home_nav_Ice Hockey"
                  draggable="false"
                >
                  <div class="sport-icon">
                    <img
                      src="https:https://s.sporty.net/common/main/res/582b2871b2bbec0dc3c4afb171b35bb2.png"
                      loading="lazy"
                      width="20"
                      height="20"
                    />
                  </div>
                  <span class="sport-text">Ice Hockey</span>

                </a>
              </li>
              <li class="m-sports-choose-item m-snap-nav-item">
                <a
                  href="https://www.sportybet.com/ng/m/sports?sport=volleyball&amp;source=home"
                  data-op="home_nav_Volleyball"
                  draggable="false"
                >
                  <div class="sport-icon">
                    <img
                      src="https:https://s.sporty.net/common/main/res/66f63abcda0acfb0f9b3112f026a7efc.png"
                      loading="lazy"
                      width="20"
                      height="20"
                    />
                  </div>
                  <span class="sport-text">Volleyball</span>

                </a>
              </li>
              <li class="m-sports-choose-item m-snap-nav-item">
                <a
                  href="https://www.sportybet.com/ng/m/sports?sport=beachVolley&amp;source=home"
                  data-op="home_nav_Beach Volley"
                  draggable="false"
                >
                  <div class="sport-icon">
                    <img
                      src="https:https://s.sporty.net/common/main/res/320d659301dcfa0782381d3fafd9578a.png"
                      loading="lazy"
                      width="20"
                      height="20"
                    />
                  </div>
                  <span class="sport-text">Beach Volley</span>

                </a>
              </li>
              <li class="m-sports-choose-item m-snap-nav-item">
                <a
                  href="https://www.sportybet.com/ng/m/sports?sport=handball&amp;source=home"
                  data-op="home_nav_Handball"
                  draggable="false"
                >
                  <div class="sport-icon">
                    <img
                      src="https:https://s.sporty.net/common/main/res/7128e9bfc5f7b0171e804d42539c9691.png"
                      loading="lazy"
                      width="20"
                      height="20"
                    />
                  </div>
                  <span class="sport-text">Handball</span>

                </a>
              </li>
              <li class="m-sports-choose-item m-snap-nav-item">
                <a
                  href="https://www.sportybet.com/ng/m/sports?sport=baseball&amp;source=home"
                  data-op="home_nav_Baseball"
                  draggable="false"
                >
                  <div class="sport-icon">
                    <img
                      src="https:https://s.sporty.net/ng/main/res/71e612c1f58c631337e2c4c8a05f7b3c.png"
                      loading="lazy"
                      width="20"
                      height="20"
                    />
                  </div>
                  <span class="sport-text">Baseball</span>

                </a>
              </li>
              <li class="m-sports-choose-item m-snap-nav-item">
                <a
                  href="https://www.sportybet.com/ng/m/sports?sport=badminton&amp;source=home"
                  data-op="home_nav_Badminton"
                  draggable="false"
                >
                  <div class="sport-icon">
                    <img
                      src="https:https://s.sporty.net/ng/main/res/74363c60159393b0997b0c382e03a490.png"
                      loading="lazy"
                      width="20"
                      height="20"
                    />
                  </div>
                  <span class="sport-text">Badminton </span>

                </a>
              </li>
              <li class="m-sports-choose-item m-snap-nav-item">
                <a
                  href="https://www.sportybet.com/ng/m/sports?sport=rugby&amp;source=home"
                  data-op="home_nav_Rugby"
                  draggable="false"
                >
                  <div class="sport-icon">
                    <img
                      src="https:https://s.sporty.net/common/main/res/63a54036994f2ac5db0e5c0f9f818015.png"
                      loading="lazy"
                      width="20"
                      height="20"
                    />
                  </div>
                  <span class="sport-text">Rugby</span>

                </a>
              </li>
              <li class="m-sports-choose-item m-snap-nav-item">
                <a
                  href="https://www.sportybet.com/ng/m/sports?sport=futsal&amp;source=home"
                  data-op="home_nav_Futsal"
                  draggable="false"
                >
                  <div class="sport-icon">
                    <img
                      src="https:https://s.sporty.net/common/main/res/59c3b0e008102d481272b9650f5a9012.png"
                      loading="lazy"
                      width="20"
                      height="20"
                    />
                  </div>
                  <span class="sport-text">Futsal</span>

                </a>
              </li>
              <li class="m-sports-choose-item m-snap-nav-item">
                <a
                  href="https://www.sportybet.com/ng/m/sports?sport=cricket&amp;source=home"
                  data-op="home_nav_Cricket"
                  draggable="false"
                >
                  <div class="sport-icon">
                    <img
                      src="https:https://s.sporty.net/common/main/res/552b87fd1979c7768e28f80213703cad.png"
                      loading="lazy"
                      width="20"
                      height="20"
                    />
                  </div>
                  <span class="sport-text">Cricket</span>

                </a>
              </li>
              <li class="m-sports-choose-item m-snap-nav-item">
                <a
                  href="https://www.sportybet.com/ng/m/sports?sport=boxing"
                  data-op="home_nav_Boxing"
                  draggable="false"
                >
                  <div class="sport-icon">
                    <img
                      src="https:https://s.sporty.net/common/main/res/71532f59919dbf434af0167d73990903.png"
                      loading="lazy"
                      width="20"
                      height="20"
                    />
                  </div>
                  <span class="sport-text">Boxing</span>

                </a>
              </li>
              <li class="m-sports-choose-item m-snap-nav-item">
                <a
                  href="https://www.sportybet.com/ng/m/sports?sport=mma&amp;source=home"
                  data-op="home_nav_MMA"
                  draggable="false"
                >
                  <div class="sport-icon">
                    <img
                      src="https:https://s.sporty.net/common/main/res/3fe34a916f06c7ee26c075a0d289d893.png"
                      loading="lazy"
                      width="20"
                      height="20"
                    />
                  </div>
                  <span class="sport-text">MMA</span>

                </a>
              </li>
              <li class="m-sports-choose-item m-snap-nav-item">
                <a
                  href="https://www.sportybet.com/ng/m/sports?sport=snooker&amp;source=home"
                  data-op="home_nav_Snooker"
                  draggable="false"
                >
                  <div class="sport-icon">
                    <img
                      src="https:https://s.sporty.net/common/main/res/da62851c1e761cce7fe758fcc5896923.png"
                      loading="lazy"
                      width="20"
                      height="20"
                    />
                  </div>
                  <span class="sport-text">Snooker</span>

                </a>
              </li>
              <li class="m-sports-choose-item m-snap-nav-item">
                <a
                  href="https://www.sportybet.com/ng/m/sports?sport=darts&amp;source=home"
                  data-op="home_nav_Darts"
                  draggable="false"
                >
                  <div class="sport-icon">
                    <img
                      src="https:https://s.sporty.net/common/main/res/b2b21bd78ff9e426369d1c526455b379.png"
                      loading="lazy"
                      width="20"
                      height="20"
                    />
                  </div>
                  <span class="sport-text">Darts</span>

                </a>
              </li>
              <li class="m-sports-choose-item m-snap-nav-item">
                <a
                  href="https://www.sportybet.com/ng/m/sports?sport=counterStrike&amp;source=home"
                  data-op="home_nav_Counter-Strike"
                  draggable="false"
                >
                  <div class="sport-icon">
                    <img
                      src="https:https://s.sporty.net/ng/main/res/e6b97a4b71dbe789451c59788fccd4d0.png"
                      loading="lazy"
                      width="20"
                      height="20"
                    />
                  </div>
                  <span class="sport-text">Counter Strike</span>

                </a>
              </li>
              <li class="m-sports-choose-item m-snap-nav-item">
                <a
                  href="https://www.sportybet.com/ng/m/sports?sport=lol&amp;source=home"
                  data-op="home_nav_LoL"
                  draggable="false"
                >
                  <div class="sport-icon">
                    <img
                      src="https:https://s.sporty.net/ng/main/res/be97f0e1a9eaaea92ab3c5f47cc801d8.png"
                      loading="lazy"
                      width="20"
                      height="20"
                    />
                  </div>
                  <span class="sport-text">LoL</span>

                </a>
              </li>
              <li class="m-sports-choose-item m-snap-nav-item">
                <a
                  href="https://www.sportybet.com/ng/m/sports?sport=dota2&amp;source=home"
                  data-op="home_nav_Dota2"
                  draggable="false"
                >
                  <div class="sport-icon">
                    <img
                      src="https:https://s.sporty.net/ng/main/res/1292b07659b4d3e9401ef711cd2337a.png"
                      loading="lazy"
                      width="20"
                      height="20"
                    />
                  </div>
                  <span class="sport-text">Dota2</span>

                </a>
              </li>
              <li class="m-sports-choose-item m-snap-nav-item">
                <a
                  href="https://www.sportybet.com/ng/m/sports?sport=eFootball&amp;source=home"
                  data-op="home_nav_eFootball"
                  draggable="false"
                >
                  <div class="sport-icon">
                    <img
                      src="https:https://s.sporty.net/ke/main/res/fd303e3726f02d224aae922c2f4496c0.png"
                      loading="lazy"
                      width="20"
                      height="20"
                    />
                  </div>
                  <span class="sport-text">eFootball</span>

                </a>
              </li>
              <li class="m-sports-choose-item m-snap-nav-item">
                <a
                  href="https://www.sportybet.com/ng/m/sports?sport=eBasketball&amp;source=home"
                  data-op="home_nav_eBasketball"
                  draggable="false"
                >
                  <div class="sport-icon">
                    <img
                      src="https:https://s.sporty.net/ke/main/res/957ddb82a42ff022221ad21d436ad98d.png"
                      loading="lazy"
                      width="20"
                      height="20"
                    />
                  </div>
                  <span class="sport-text">eBasketball</span>

                </a>
              </li>
              <li class="m-sports-choose-item m-snap-nav-item">
                <a
                  href="https://www.sportybet.com/ng/m/sports?sport=eIceHockey&amp;source=home"
                  data-op="home_nav_eIce Hockey"
                  draggable="false"
                >
                  <div class="sport-icon">
                    <img
                      src="https:https://s.sporty.net/ke/main/res/540592c5b3c39c79a3ea5d63782d5c8.png"
                      loading="lazy"
                      width="20"
                      height="20"
                    />
                  </div>
                  <span class="sport-text">eIce Hockey</span>

                </a>
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
              <li class="m-sports-choose-item m-snap-nav-item">
                <a
                  href="sportybet_schema$key_feature_id=1"
                  data-op="home_nav_SwipeBet"
                  draggable="false"
                >
                  <div class="sport-icon">
                    <img
                      src="https:https://s.sporty.net/ke/main/res/6734862bd7cf8c97100657fd1f8e0ef1.png"
                      loading="lazy"
                      width="20"
                      height="20"
                    />
                  </div>
                  <span class="sport-text">SwipeBet</span>

                </a>
              </li>
            </ul>
            <i class="controls left-controls"></i>
            <i class="controls right-controls"></i>
          </div>
          <div class="m-popular">
            <div
              class="m-snap-nav-wrap m-popular-list"
              style="overflow: hidden"
            >
              <ul
                class="m-snap-nav flex"
                style="
                  transform: translate(0px, 0px) translateZ(0px);
                  transition-duration: 350ms;
                  transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1);
                  width: 2817.25px;
                "
              >
                <li class="m-popular-item m-snap-nav-item active">
                  <div class="m-color-bar m-color-bar--red"></div>
                  <a
                    href="https://www.sportybet.com/ng/m/my_favourites?source=home"
                    ><img
                      src="https:https://s.sporty.net/common/main/res/7f593f1557808a0647c0d0f9885e69dd.png"
                      loading="eager"
                      width="104"
                      height="45"
                  /></a>
                </li>
                <li class="m-popular-item m-snap-nav-item">
                  <div class="m-color-bar"></div>
                  <a
                    href="//www.sportybet.com/ng/m/sport/football/today?source=home"
                    ><img
                      src="https://s.sporty.net/ke/main/res/22c8c12dad8e45f6a6ea8bd0a7f6e6c4.png"
                      loading="eager"
                      width="104"
                      height="45"
                  /></a>
                </li>
                <li class="m-popular-item m-snap-nav-item">
                  <div class="m-color-bar m-color-bar--green"></div>
                  <a
                    href="//www.sportybet.com/ng/m/sport/football?source=home&amp;time=3h&amp;sort=0&amp;source=home"
                    ><img
                      src="https:https://s.sporty.net/common/main/res/aeb8372baaa3cb8645c86247fef4bed1.png"
                      loading="eager"
                      width="104"
                      height="45"
                  /></a>
                </li>
                <li class="m-popular-item m-snap-nav-item">
                  <div class="m-color-bar m-color-bar--red"></div>
                  <a
                    href="https://www.sportybet.com/ng/m/sport/football/sr:category:1/sr:tournament:17?sort=0&amp;source=home&amp;source=home"
                    ><img
                      src="https:https://s.sporty.net/common/main/res/1fe060f9bb009827edc3a2baa65d1b5c.png"
                      loading="lazy"
                      width="104"
                      height="45"
                  /></a>
                </li>
                <li class="m-popular-item m-snap-nav-item">
                  <div class="m-color-bar"></div>
                  <a
                    href="https://www.sportybet.com/ng/m/sport/football/sr:category:1/sr:tournament:19?time=all&amp;source=sport_menu&amp;sort=2&amp;source=home"
                    ><img
                      src="https:https://s.sporty.net/common/main/res/c46e20368e87fc662460d773e9e6d06a.png"
                      loading="lazy"
                      width="104"
                      height="45"
                  /></a>
                </li>
                <li class="m-popular-item m-snap-nav-item">
                  <div class="m-color-bar m-color-bar--green"></div>
                  <a
                    href="https://www.sportybet.com/ng/m/sport/football/sr:category:32/sr:tournament:8?source=home&amp;time=all&amp;sort=0&amp;source=home"
                    ><img
                      src="https:https://s.sporty.net/common/main/res/911879cf4c9b848ca1e83cc59b8418cd.png"
                      loading="lazy"
                      width="104"
                      height="45"
                  /></a>
                </li>
                <li class="m-popular-item m-snap-nav-item">
                  <div class="m-color-bar m-color-bar--red"></div>
                  <a
                    href="https://www.sportybet.com/ng/m/sport/football/sr:category:32/sr:tournament:329?time=all&amp;source=sport_menu&amp;sort=2&amp;source=home"
                    ><img
                      src="https:https://s.sporty.net/common/main/res/7a664ef1585228276ad1045561c2e571.png"
                      loading="lazy"
                      width="104"
                      height="45"
                  /></a>
                </li>
                <li class="m-popular-item m-snap-nav-item">
                  <div class="m-color-bar"></div>
                  <a
                    href="https://www.sportybet.com/ng/m/sport/football/sr:category:31/sr:tournament:23?source=home&amp;time=all&amp;sort=0&amp;source=home"
                    ><img
                      src="https:https://s.sporty.net/common/main/res/e93293ccffaba05f404619e6a3d840cb.png"
                      loading="lazy"
                      width="104"
                      height="45"
                  /></a>
                </li>
                <li class="m-popular-item m-snap-nav-item">
                  <div class="m-color-bar m-color-bar--green"></div>
                  <a
                    href="https://www.sportybet.com/ng/m/sport/football/sr:category:7/sr:tournament:34?source=home&amp;time=all&amp;sort=2&amp;source=home"
                    ><img
                      src="https:https://s.sporty.net/common/main/res/274d2c1ff30f72d247cbefeb287362f5.png"
                      loading="lazy"
                      width="104"
                      height="45"
                  /></a>
                </li>
                <li class="m-popular-item m-snap-nav-item">
                  <div class="m-color-bar m-color-bar--red"></div>
                  <a
                    href="https://www.sportybet.com/ng/m/sport/football/sr:category:7/sr:tournament:335?time=all&amp;source=sport_menu&amp;sort=2&amp;source=home"
                    ><img
                      src="https:https://s.sporty.net/common/main/res/7ea298c5bbda56a55135b89d21dcf2da.png"
                      loading="lazy"
                      width="104"
                      height="45"
                  /></a>
                </li>
                <li class="m-popular-item m-snap-nav-item">
                  <div class="m-color-bar"></div>
                  <a
                    href="https://www.sportybet.com/ng/m/sport/basketball/sr:category:15/sr:tournament:132?source=home&amp;sort=2&amp;time=all&amp;source=home"
                    ><img
                      src="https:https://s.sporty.net/common/main/res/75769fde30ba22cf1625e25e170a6c8c.png"
                      loading="lazy"
                      width="104"
                      height="45"
                  /></a>
                </li>
              </ul>
              <i class="controls left-controls"></i>
              <i class="controls right-controls"></i>
            </div>
          </div>
          <div class="featuredMatch" style="position: relative">
            <div class="featuredMatchCategoryBox">
              <div
                class="m-snap-nav-wrap featuredMatchCategoryNav"
                style="overflow: hidden"
              >
                <ul
                  class="m-snap-nav flex"
                  style="
                    transform: translate(0px, 0px) translateZ(0px);
                    transition-duration: 350ms;
                    transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1);
                    width: 731.492px;
                  "
                >
                  <li
                    class="featuredMatchCategoryNavItem m-snap-nav-item active"
                  >
                    <div
                      data-v-5eff3e49=""
                      class="featuredMatchCategory active"
                    >
                      <div data-v-5eff3e49="" class="wrapper">
                        <img
                          data-v-5eff3e49=""
                          src="https:https://s.sporty.net/common/main/res/6ad6134cba3225c2f5126b0ae8c17dfc.png"
                          class="img"
                        />
                        <div data-v-5eff3e49="" class="name">
                          Premier League
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="featuredMatchCategoryNavItem m-snap-nav-item">
                    <div data-v-5eff3e49="" class="featuredMatchCategory">
                      <div data-v-5eff3e49="" class="wrapper">
                        <img
                          data-v-5eff3e49=""
                          src="https:https://s.sporty.net/common/main/res/a8694bcb5dd1e35e883a59fb015af140.png"
                          class="img"
                        />
                        <div data-v-5eff3e49="" class="name">Serie A</div>
                      </div>
                    </div>
                  </li>
                  <li class="featuredMatchCategoryNavItem m-snap-nav-item">
                    <div data-v-5eff3e49="" class="featuredMatchCategory">
                      <div data-v-5eff3e49="" class="wrapper">
                        <img
                          data-v-5eff3e49=""
                          src="https:https://s.sporty.net/ng/main/res/29f5dcc27f05ce0feedf316f1ee1b950.png"
                          class="img"
                        />
                        <div data-v-5eff3e49="" class="name">Copa del Rey</div>
                      </div>
                    </div>
                  </li>
                  <li class="featuredMatchCategoryNavItem m-snap-nav-item">
                    <div data-v-5eff3e49="" class="featuredMatchCategory">
                      <div data-v-5eff3e49="" class="wrapper">
                        <div
                          data-v-5eff3e49=""
                          class="icon m-icon-basketball"
                        ></div>
                        <div data-v-5eff3e49="" class="name">Basketball</div>
                      </div>
                    </div>
                  </li>
                  <li class="featuredMatchCategoryNavItem m-snap-nav-item">
                    <div data-v-5eff3e49="" class="featuredMatchCategory">
                      <div data-v-5eff3e49="" class="wrapper">
                        <div
                          data-v-5eff3e49=""
                          class="icon m-icon-tennis"
                        ></div>
                        <div data-v-5eff3e49="" class="name">Tennis</div>
                      </div>
                    </div>
                  </li>
                </ul>
                <i class="controls left-controls"></i>
                <i class="controls right-controls"></i>
              </div>
            </div>
            <div
              data-v-22da39ec=""
              class="HorizonSwipe"
              id="featuredMatchCardBox"
              style="transform: translateX(-2485.5px)"
            >
              <div
                class="featuredMatchCard"
                data-hs-id="sr:match:38311921"
                data-hs-index="0"
                data-v-22da39ec=""
              >
                <div class="top">



                  <a class="tournamentLink"
                    >ATP - ATP Adelaide, Australia Men Singles</a
                  >
                </div>
                <div class="mid">
                  <div class="homeIcon">
                    <img
                      src="https:https://s.sporty.net/common/main/res/e69c9385395732f82cc5066cfa3d8897.png"
                      draggable="false"
                    />
                  </div>
                  <div class="homeName">Korda, Sebastian</div>
                  <div class="dateTime">
                    <div class="time">04:30</div>
                    <div class="date">05/01</div>
                  </div>
                  <div class="market">
                    <span>Winner</span>


                  </div>
                  <div class="awayIcon">
                    <img
                      src="https:https://s.sporty.net/common/main/res/8c50f7aa20ee02aee1007a573168c0dc.png"
                      draggable="false"
                    />
                  </div>
                  <div class="awayName">Bautista Agut, Roberto</div>
                </div>
                <div class="bottom">
                  <div data-v-c876570a="" class="featuredMatchOutcome outcomes">
                    <div
                      data-v-c876570a=""
                      class="m-outcome m-event-outcome-default"
                    >
                      <div data-v-c876570a="" class="desc">
                        <span data-v-c876570a="">1</span>
                      </div>
                      <div data-v-c876570a="" class="odds">1.80</div>
                    </div>
                    <div
                      data-v-c876570a=""
                      class="m-outcome m-event-outcome-default"
                    >
                      <div data-v-c876570a="" class="desc">
                        <span data-v-c876570a="">2</span>
                      </div>
                      <div data-v-c876570a="" class="odds">2.05</div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="featuredMatchCard"
                data-hs-id="sr:match:38311915"
                data-hs-index="1"
                data-v-22da39ec=""
              >
                <div class="top">



                  <a class="tournamentLink"
                    >ATP - ATP Adelaide, Australia Men Singles</a
                  >
                </div>
                <div class="mid">
                  <div class="homeIcon">
                    <img
                      src="https:https://s.sporty.net/common/main/res/808899a14019ce2796f5fbbf3123c68a.png"
                      draggable="false"
                    />
                  </div>
                  <div class="homeName">Sinner, Jannik</div>
                  <div class="dateTime">
                    <div class="time">09:00</div>
                    <div class="date">05/01</div>
                  </div>
                  <div class="market">
                    <span>Winner</span>


                  </div>
                  <div class="awayIcon">
                    <img
                      src="https:https://s.sporty.net/common/main/res/21e7a9c05e168f986a65eebd74e7c9cd.png"
                      draggable="false"
                    />
                  </div>
                  <div class="awayName">Kokkinakis, Thanasi</div>
                </div>
                <div class="bottom">
                  <div data-v-c876570a="" class="featuredMatchOutcome outcomes">
                    <div
                      data-v-c876570a=""
                      class="m-outcome m-event-outcome-default"
                    >
                      <div data-v-c876570a="" class="desc">
                        <span data-v-c876570a="">1</span>
                      </div>
                      <div data-v-c876570a="" class="odds">1.29</div>
                    </div>
                    <div
                      data-v-c876570a=""
                      class="m-outcome m-event-outcome-default"
                    >
                      <div data-v-c876570a="" class="desc">
                        <span data-v-c876570a="">2</span>
                      </div>
                      <div data-v-c876570a="" class="odds">3.75</div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="featuredMatchCard"
                data-hs-id="sr:match:34152053"
                data-hs-index="2"
                data-v-22da39ec=""
                data-hs-active="true"
              >
                <div class="top">
                  <div
                    data-v-33c087e8=""
                    class="label-container"
                    is-recommended="true"
                  >
                    <img
                      data-v-33c087e8=""
                      src="https://s.sporty.net/global/main/modules/main/mobile/common/components/event/image/label_hot.016bf8bac3.png"
                      data-op=""
                      width="58"
                      height="15"
                    /><img
                      data-v-33c087e8=""
                      src="https://s.sporty.net/global/main/modules/main/mobile/common/components/event/image/label_bestodds.6849c8c853.png"
                      data-op=""
                      width="80"
                      height="15"
                    />
                  </div>
                  <img
                    src="https://s.sporty.net/global/main/brand/sportybet/mobile/images/sfm.995a451718.png"
                    width="18"
                    class="label sfm-icon"
                  />
                  <a class="tournamentLink">England - Premier League</a>
                </div>
                <div class="mid">
                  <div class="homeIcon">
                    <img
                      src="https:https://s.sporty.net/common/main/res/ac71b0a1a6b0a8fd8c6f6169d1f06fb9.png"
                      draggable="false"
                    />
                  </div>
                  <div class="homeName">Crystal Palace</div>
                  <div class="dateTime">
                    <div class="time">21:00</div>
                    <div class="date">Today</div>
                  </div>
                  <div class="market">
                    <span>1X2</span>


                  </div>
                  <div class="awayIcon">
                    <img
                      src="https:https://s.sporty.net/common/main/res/e86d8b9393df565ab929dded460f86b1.png"
                      draggable="false"
                    />
                  </div>
                  <div class="awayName">Tottenham</div>
                </div>
                <div class="bottom">
                  <div data-v-c876570a="" class="featuredMatchOutcome outcomes">
                    <div
                      data-v-c876570a=""
                      class="m-outcome m-event-outcome-default"
                    >
                      <div data-v-c876570a="" class="desc">
                        <span data-v-c876570a="">1</span>
                      </div>
                      <div data-v-c876570a="" class="odds">3.71</div>
                    </div>
                    <div
                      data-v-c876570a=""
                      class="m-outcome m-event-outcome-default"
                    >
                      <div data-v-c876570a="" class="desc">
                        <span data-v-c876570a="">X</span>
                      </div>
                      <div data-v-c876570a="" class="odds">3.57</div>
                    </div>
                    <div
                      data-v-c876570a=""
                      class="m-outcome m-event-outcome-default"
                    >
                      <div data-v-c876570a="" class="desc">
                        <span data-v-c876570a="">2</span>
                      </div>
                      <div data-v-c876570a="" class="odds">2.13</div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="featuredMatchCard"
                data-hs-id="sr:match:34152063"
                data-hs-index="3"
                data-v-22da39ec=""
              >
                <div class="top">
                  <div
                    data-v-33c087e8=""
                    class="label-container"
                    is-recommended="true"
                  >
                    <img
                      data-v-33c087e8=""
                      src="https://s.sporty.net/global/main/modules/main/mobile/common/components/event/image/label_bestodds.6849c8c853.png"
                      data-op=""
                      width="80"
                      height="15"
                    />
                  </div>
                  <img
                    src="https://s.sporty.net/global/main/brand/sportybet/mobile/images/sfm.995a451718.png"
                    width="18"
                    class="label sfm-icon"
                  />
                  <a class="tournamentLink">England - Premier League</a>
                </div>
                <div class="mid">
                  <div class="homeIcon">
                    <img
                      src="https:https://s.sporty.net/common/main/res/bb37a9439634e152bd5a0253019ee52b.png"
                      draggable="false"
                    />
                  </div>
                  <div class="homeName">Southampton</div>
                  <div class="dateTime">
                    <div class="time">20:30</div>
                    <div class="date">Today</div>
                  </div>
                  <div class="market">
                    <span>1X2</span>


                  </div>
                  <div class="awayIcon">
                    <img
                      src="https:https://s.sporty.net/common/main/res/87d3fcbee6ca4767d7723c876614a052.png"
                      draggable="false"
                    />
                  </div>
                  <div class="awayName">Nottingham Forest</div>
                </div>
                <div class="bottom">
                  <div data-v-c876570a="" class="featuredMatchOutcome outcomes">
                    <div
                      data-v-c876570a=""
                      class="m-outcome m-event-outcome-default"
                    >
                      <div data-v-c876570a="" class="desc">
                        <span data-v-c876570a="">1</span>
                      </div>
                      <div data-v-c876570a="" class="odds">2.26</div>
                    </div>
                    <div
                      data-v-c876570a=""
                      class="m-outcome m-event-outcome-default m-outcome--checked"
                    >
                      <div data-v-c876570a="" class="desc">
                        <span data-v-c876570a="">X</span>
                      </div>
                      <div data-v-c876570a="" class="odds">3.44</div>
                    </div>
                    <div
                      data-v-c876570a=""
                      class="m-outcome m-event-outcome-default"
                    >
                      <div data-v-c876570a="" class="desc">
                        <span data-v-c876570a="">2</span>
                      </div>
                      <div data-v-c876570a="" class="odds">3.49</div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="featuredMatchCard"
                data-hs-id="sr:match:34152057"
                data-hs-index="4"
                data-v-22da39ec=""
              >
                <div class="top">
                  <div
                    data-v-33c087e8=""
                    class="label-container"
                    is-recommended="true"
                  >
                    <img
                      data-v-33c087e8=""
                      src="https://s.sporty.net/global/main/modules/main/mobile/common/components/event/image/label_hot.016bf8bac3.png"
                      data-op=""
                      width="58"
                      height="15"
                    /><img
                      data-v-33c087e8=""
                      src="https://s.sporty.net/global/main/modules/main/mobile/common/components/event/image/label_bestodds.6849c8c853.png"
                      data-op=""
                      width="80"
                      height="15"
                    />
                  </div>
                  <img
                    src="https://s.sporty.net/global/main/brand/sportybet/mobile/images/sfm.995a451718.png"
                    width="18"
                    class="label sfm-icon"
                  />
                  <a class="tournamentLink">England - Premier League</a>
                </div>
                <div class="mid">
                  <div class="homeIcon">
                    <img
                      src="https:https://s.sporty.net/common/main/res/1f8161e42a8bad6b534d2ee4967748b6.png"
                      draggable="false"
                    />
                  </div>
                  <div class="homeName">Leeds United</div>
                  <div class="dateTime">
                    <div class="time">20:45</div>
                    <div class="date">Today</div>
                  </div>
                  <div class="market">
                    <span>1X2</span>


                  </div>
                  <div class="awayIcon">
                    <img
                      src="https:https://s.sporty.net/common/main/res/6f5621c1dd78601fa86ca1bedb12e5aa.png"
                      draggable="false"
                    />
                  </div>
                  <div class="awayName">West Ham</div>
                </div>
                <div class="bottom">
                  <div data-v-c876570a="" class="featuredMatchOutcome outcomes">
                    <div
                      data-v-c876570a=""
                      class="m-outcome m-event-outcome-default"
                    >
                      <div data-v-c876570a="" class="desc">
                        <span data-v-c876570a="">1</span>
                      </div>
                      <div data-v-c876570a="" class="odds">2.66</div>
                    </div>
                    <div
                      data-v-c876570a=""
                      class="m-outcome m-event-outcome-default m-outcome--checked"
                    >
                      <div data-v-c876570a="" class="desc">
                        <span data-v-c876570a="">X</span>
                      </div>
                      <div data-v-c876570a="" class="odds">3.54</div>
                    </div>
                    <div
                      data-v-c876570a=""
                      class="m-outcome m-event-outcome-default"
                    >
                      <div data-v-c876570a="" class="desc">
                        <span data-v-c876570a="">2</span>
                      </div>
                      <div data-v-c876570a="" class="odds">2.77</div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="featuredMatchCard"
                data-hs-id="sr:match:34152047"
                data-hs-index="5"
                data-v-22da39ec=""
              >
                <div class="top">
                  <div
                    data-v-33c087e8=""
                    class="label-container"
                    is-recommended="true"
                  >
                    <img
                      data-v-33c087e8=""
                      src="https://s.sporty.net/global/main/modules/main/mobile/common/components/event/image/label_hot.016bf8bac3.png"
                      data-op=""
                      width="58"
                      height="15"
                    /><img
                      data-v-33c087e8=""
                      src="https://s.sporty.net/global/main/modules/main/mobile/common/components/event/image/label_bestodds.6849c8c853.png"
                      data-op=""
                      width="80"
                      height="15"
                    />
                  </div>
                  <img
                    src="https://s.sporty.net/global/main/brand/sportybet/mobile/images/sfm.995a451718.png"
                    width="18"
                    class="label sfm-icon"
                  />
                  <a class="tournamentLink">England - Premier League</a>
                </div>
                <div class="mid">
                  <div class="homeIcon">
                    <img
                      src="https:https://s.sporty.net/common/main/res/354ed7ff5d3e3d227f609616fe844b50.png"
                      draggable="false"
                    />
                  </div>
                  <div class="homeName">Aston Villa</div>
                  <div class="dateTime">
                    <div class="time">21:00</div>
                    <div class="date">Today</div>
                  </div>
                  <div class="market">
                    <span>1X2</span>


                  </div>
                  <div class="awayIcon">
                    <img
                      src="https:https://s.sporty.net/common/main/res/42096d377ec49750afd7f3b562cfc6c3.png"
                      draggable="false"
                    />
                  </div>
                  <div class="awayName">Wolverhampton</div>
                </div>
                <div class="bottom">
                  <div data-v-c876570a="" class="featuredMatchOutcome outcomes">
                    <div
                      data-v-c876570a=""
                      class="m-outcome m-event-outcome-default"
                    >
                      <div data-v-c876570a="" class="desc">
                        <span data-v-c876570a="">1</span>
                      </div>
                      <div data-v-c876570a="" class="odds">2.03</div>
                    </div>
                    <div
                      data-v-c876570a=""
                      class="m-outcome m-event-outcome-default m-outcome--checked"
                    >
                      <div data-v-c876570a="" class="desc">
                        <span data-v-c876570a="">X</span>
                      </div>
                      <div data-v-c876570a="" class="odds">3.52</div>
                    </div>
                    <div
                      data-v-c876570a=""
                      class="m-outcome m-event-outcome-default"
                    >
                      <div data-v-c876570a="" class="desc">
                        <span data-v-c876570a="">2</span>
                      </div>
                      <div data-v-c876570a="" class="odds">4.13</div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="featuredMatchCard"
                data-hs-id="sr:match:34286823"
                data-hs-index="6"
                data-v-22da39ec=""
              >
                <div class="top">
                  <div
                    data-v-33c087e8=""
                    class="label-container"
                    is-recommended="true"
                  >
                    <img
                      data-v-33c087e8=""
                      src="https://s.sporty.net/global/main/modules/main/mobile/common/components/event/image/label_hot.016bf8bac3.png"
                      data-op=""
                      width="58"
                      height="15"
                    />
                  </div>
                  <img
                    src="https://s.sporty.net/global/main/brand/sportybet/mobile/images/stv.b89a6457ad.png"
                    width="18"
                    class="label stv-icon"
                  />

                  <a class="tournamentLink">Italy - Serie A</a>
                </div>
                <div class="mid live">
                  <div class="homeIcon">
                    <img
                      src="https:https://s.sporty.net/common/main/res/be2972709abb17e14ac7396e331b2cb.png"
                      draggable="false"
                    />
                  </div>
                  <div class="homeName">US Salernitana</div>
                  <div class="score">0 - 2</div>
                  <div class="playSeconds">
                    <div class="liveFlag">Live</div>
                    <div class="border">
                      <span class="eventTime">36:47</span
                      ><span class="matchStatus">H1</span>
                    </div>
                  </div>
                  <div class="market">
                    <span>1X2</span>


                  </div>
                  <div class="awayIcon">
                    <img
                      src="https:https://s.sporty.net/common/main/res/22b579b33ac6283d18e9c1af1bf2eb36.png"
                      draggable="false"
                    />
                  </div>
                  <div class="awayName">AC Milan</div>
                </div>
                <div class="bottom">
                  <div data-v-c876570a="" class="featuredMatchOutcome outcomes">
                    <div
                      data-v-c876570a=""
                      class="m-outcome m-event-outcome-default"
                    >
                      <div data-v-c876570a="" class="desc">
                        <span data-v-c876570a="">1</span>
                      </div>
                      <div data-v-c876570a="" class="odds">95.00</div>
                    </div>
                    <div
                      data-v-c876570a=""
                      class="m-outcome m-event-outcome-default"
                    >
                      <div data-v-c876570a="" class="desc">
                        <span data-v-c876570a="">X</span>
                      </div>
                      <div data-v-c876570a="" class="odds">19.00</div>
                    </div>
                    <div
                      data-v-c876570a=""
                      class="m-outcome m-event-outcome-default"
                    >
                      <div data-v-c876570a="" class="desc">
                        <span data-v-c876570a="">2</span>
                      </div>
                      <div data-v-c876570a="" class="odds">1.01</div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="featuredMatchCard"
                data-hs-id="sr:match:34286827"
                data-hs-index="7"
                data-v-22da39ec=""
              >
                <div class="top">
                  <div
                    data-v-33c087e8=""
                    class="label-container"
                    is-recommended="true"
                  >
                    <img
                      data-v-33c087e8=""
                      src="https://s.sporty.net/global/main/modules/main/mobile/common/components/event/image/label_hot.016bf8bac3.png"
                      data-op=""
                      width="58"
                      height="15"
                    /><img
                      data-v-33c087e8=""
                      src="https://s.sporty.net/global/main/modules/main/mobile/common/components/event/image/label_bestodds.6849c8c853.png"
                      data-op=""
                      width="80"
                      height="15"
                    />
                  </div>
                  <img
                    src="https://s.sporty.net/global/main/brand/sportybet/mobile/images/stv.b89a6457ad.png"
                    width="18"
                    class="label stv-icon"
                  />

                  <a class="tournamentLink">Italy - Serie A</a>
                </div>
                <div class="mid">
                  <div class="homeIcon">
                    <img
                      src="https:https://s.sporty.net/common/main/res/dc5c414e6b96368f63319894eaf42480.png"
                      draggable="false"
                    />
                  </div>
                  <div class="homeName">Spezia Calcio</div>
                  <div class="dateTime">
                    <div class="time">14:30</div>
                    <div class="date">Today</div>
                  </div>
                  <div class="market">
                    <span>1X2</span>


                  </div>
                  <div class="awayIcon">
                    <img
                      src="https:https://s.sporty.net/common/main/res/e8835d10a12e39f2f7170ffe1be219a0.png"
                      draggable="false"
                    />
                  </div>
                  <div class="awayName">Atalanta</div>
                </div>
                <div class="bottom">
                  <div data-v-c876570a="" class="featuredMatchOutcome outcomes">
                    <div
                      data-v-c876570a=""
                      class="m-outcome m-event-outcome-default"
                    >
                      <div data-v-c876570a="" class="desc">
                        <span data-v-c876570a="">1</span>
                      </div>
                      <div data-v-c876570a="" class="odds">4.50</div>
                    </div>
                    <div
                      data-v-c876570a=""
                      class="m-outcome m-event-outcome-default"
                    >
                      <div data-v-c876570a="" class="desc">
                        <span data-v-c876570a="">X</span>
                      </div>
                      <div data-v-c876570a="" class="odds">3.96</div>
                    </div>
                    <div
                      data-v-c876570a=""
                      class="m-outcome m-event-outcome-default"
                    >
                      <div data-v-c876570a="" class="desc">
                        <span data-v-c876570a="">2</span>
                      </div>
                      <div data-v-c876570a="" class="odds">1.83</div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="featuredMatchCard"
                data-hs-id="sr:match:34286821"
                data-hs-index="8"
                data-v-22da39ec=""
              >
                <div class="top">
                  <div
                    data-v-33c087e8=""
                    class="label-container"
                    is-recommended="true"
                  >
                    <img
                      data-v-33c087e8=""
                      src="https://s.sporty.net/global/main/modules/main/mobile/common/components/event/image/label_hot.016bf8bac3.png"
                      data-op=""
                      width="58"
                      height="15"
                    /><img
                      data-v-33c087e8=""
                      src="https://s.sporty.net/global/main/modules/main/mobile/common/components/event/image/label_bestodds.6849c8c853.png"
                      data-op=""
                      width="80"
                      height="15"
                    />
                  </div>
                  <img
                    src="https://s.sporty.net/global/main/brand/sportybet/mobile/images/stv.b89a6457ad.png"
                    width="18"
                    class="label stv-icon"
                  />

                  <a class="tournamentLink">Italy - Serie A</a>
                </div>
                <div class="mid">
                  <div class="homeIcon">
                    <img
                      src="https:https://s.sporty.net/common/main/res/ef64c26abbf4d84e0ffa8e9ca7f9c73e.png"
                      draggable="false"
                    />
                  </div>
                  <div class="homeName">Roma</div>
                  <div class="dateTime">
                    <div class="time">16:30</div>
                    <div class="date">Today</div>
                  </div>
                  <div class="market">
                    <span>1X2</span>


                  </div>
                  <div class="awayIcon">
                    <img
                      src="https:https://s.sporty.net/common/main/res/76b05f6173d54c0f1decc993a979b31c.png"
                      draggable="false"
                    />
                  </div>
                  <div class="awayName">Bologna</div>
                </div>
                <div class="bottom">
                  <div data-v-c876570a="" class="featuredMatchOutcome outcomes">
                    <div
                      data-v-c876570a=""
                      class="m-outcome m-event-outcome-default"
                    >
                      <div data-v-c876570a="" class="desc">
                        <span data-v-c876570a="">1</span>
                      </div>
                      <div data-v-c876570a="" class="odds">1.60</div>
                    </div>
                    <div
                      data-v-c876570a=""
                      class="m-outcome m-event-outcome-default"
                    >
                      <div data-v-c876570a="" class="desc">
                        <span data-v-c876570a="">X</span>
                      </div>
                      <div data-v-c876570a="" class="odds">4.09</div>
                    </div>
                    <div
                      data-v-c876570a=""
                      class="m-outcome m-event-outcome-default"
                    >
                      <div data-v-c876570a="" class="desc">
                        <span data-v-c876570a="">2</span>
                      </div>
                      <div data-v-c876570a="" class="odds">6.57</div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="featuredMatchCard"
                data-hs-id="sr:match:34286813"
                data-hs-index="9"
                data-v-22da39ec=""
              >
                <div class="top">
                  <div
                    data-v-33c087e8=""
                    class="label-container"
                    is-recommended="true"
                  >
                    <img
                      data-v-33c087e8=""
                      src="https://s.sporty.net/global/main/modules/main/mobile/common/components/event/image/label_hot.016bf8bac3.png"
                      data-op=""
                      width="58"
                      height="15"
                    /><img
                      data-v-33c087e8=""
                      src="https://s.sporty.net/global/main/modules/main/mobile/common/components/event/image/label_bestodds.6849c8c853.png"
                      data-op=""
                      width="80"
                      height="15"
                    />
                  </div>
                  <img
                    src="https://s.sporty.net/global/main/brand/sportybet/mobile/images/stv.b89a6457ad.png"
                    width="18"
                    class="label stv-icon"
                  />

                  <a class="tournamentLink">Italy - Serie A</a>
                </div>
                <div class="mid">
                  <div class="homeIcon">
                    <img
                      src="https:https://s.sporty.net/common/main/res/acf98773ace0c1ec74c2d483fe9d5216.png"
                      draggable="false"
                    />
                  </div>
                  <div class="homeName">US Cremonese</div>
                  <div class="dateTime">
                    <div class="time">18:30</div>
                    <div class="date">Today</div>
                  </div>
                  <div class="market">
                    <span>1X2</span>


                  </div>
                  <div class="awayIcon">
                    <img
                      src="https:https://s.sporty.net/common/main/res/5367522438055adb7a85a4861957efc4.png"
                      draggable="false"
                    />
                  </div>
                  <div class="awayName">Juventus</div>
                </div>
                <div class="bottom">
                  <div data-v-c876570a="" class="featuredMatchOutcome outcomes">
                    <div
                      data-v-c876570a=""
                      class="m-outcome m-event-outcome-default"
                    >
                      <div data-v-c876570a="" class="desc">
                        <span data-v-c876570a="">1</span>
                      </div>
                      <div data-v-c876570a="" class="odds">4.60</div>
                    </div>
                    <div
                      data-v-c876570a=""
                      class="m-outcome m-event-outcome-default"
                    >
                      <div data-v-c876570a="" class="desc">
                        <span data-v-c876570a="">X</span>
                      </div>
                      <div data-v-c876570a="" class="odds">3.66</div>
                    </div>
                    <div
                      data-v-c876570a=""
                      class="m-outcome m-event-outcome-default"
                    >
                      <div data-v-c876570a="" class="desc">
                        <span data-v-c876570a="">2</span>
                      </div>
                      <div data-v-c876570a="" class="odds">1.89</div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="featuredMatchCard"
                data-hs-id="sr:match:34286817"
                data-hs-index="10"
                data-v-22da39ec=""
              >
                <div class="top">
                  <div
                    data-v-33c087e8=""
                    class="label-container"
                    is-recommended="true"
                  >
                    <img
                      data-v-33c087e8=""
                      src="https://s.sporty.net/global/main/modules/main/mobile/common/components/event/image/label_hot.016bf8bac3.png"
                      data-op=""
                      width="58"
                      height="15"
                    /><img
                      data-v-33c087e8=""
                      src="https://s.sporty.net/global/main/modules/main/mobile/common/components/event/image/label_bestodds.6849c8c853.png"
                      data-op=""
                      width="80"
                      height="15"
                    />
                  </div>
                  <img
                    src="https://s.sporty.net/global/main/brand/sportybet/mobile/images/stv.b89a6457ad.png"
                    width="18"
                    class="label stv-icon"
                  />

                  <a class="tournamentLink">Italy - Serie A</a>
                </div>
                <div class="mid">
                  <div class="homeIcon">
                    <img
                      src="https:https://s.sporty.net/common/main/res/dbbb1df2aba5ef051129c58516ecc332.png"
                      draggable="false"
                    />
                  </div>
                  <div class="homeName">Inter Milan</div>
                  <div class="dateTime">
                    <div class="time">20:45</div>
                    <div class="date">Today</div>
                  </div>
                  <div class="market">
                    <span>1X2</span>


                  </div>
                  <div class="awayIcon">
                    <img
                      src="https:https://s.sporty.net/common/main/res/6e25a0bd5f85ad6c69416c8ec7a2a6e6.png"
                      draggable="false"
                    />
                  </div>
                  <div class="awayName">Napoli</div>
                </div>
                <div class="bottom">
                  <div data-v-c876570a="" class="featuredMatchOutcome outcomes">
                    <div
                      data-v-c876570a=""
                      class="m-outcome m-event-outcome-default"
                    >
                      <div data-v-c876570a="" class="desc">
                        <span data-v-c876570a="">1</span>
                      </div>
                      <div data-v-c876570a="" class="odds">2.44</div>
                    </div>
                    <div
                      data-v-c876570a=""
                      class="m-outcome m-event-outcome-default"
                    >
                      <div data-v-c876570a="" class="desc">
                        <span data-v-c876570a="">X</span>
                      </div>
                      <div data-v-c876570a="" class="odds">3.50</div>
                    </div>
                    <div
                      data-v-c876570a=""
                      class="m-outcome m-event-outcome-default"
                    >
                      <div data-v-c876570a="" class="desc">
                        <span data-v-c876570a="">2</span>
                      </div>
                      <div data-v-c876570a="" class="odds">3.07</div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="featuredMatchCard"
                data-hs-id="sr:match:38234843"
                data-hs-index="11"
                data-v-22da39ec=""
              >
                <div class="top">
                  <img
                    src="https://s.sporty.net/global/main/brand/sportybet/mobile/images/stv.b89a6457ad.png"
                    width="18"
                    class="label stv-icon"
                  />

                  <a class="tournamentLink">Spain - Copa del Rey</a>
                </div>
                <div class="mid">
                  <div class="homeIcon">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/en/1/16/CD_Linares_escudo.png"
                      draggable="false"
                    />
                  </div>
                  <div class="homeName">CD Linares</div>
                  <div class="dateTime">
                    <div class="time">19:00</div>
                    <div class="date">Today</div>
                  </div>
                  <div class="market">
                    <span>1X2</span>


                  </div>
                  <div class="awayIcon">
                    <img
                      src="https:https://s.sporty.net/common/main/res/f8ce36d28014e18baac839f4060dd90e.png"
                      draggable="false"
                    />
                  </div>
                  <div class="awayName">Sevilla</div>
                </div>
                <div class="bottom">
                  <div data-v-c876570a="" class="featuredMatchOutcome outcomes">
                    <div
                      data-v-c876570a=""
                      class="m-outcome m-event-outcome-default"
                    >
                      <div data-v-c876570a="" class="desc">
                        <span data-v-c876570a="">1</span>
                      </div>
                      <div data-v-c876570a="" class="odds">9.10</div>
                    </div>
                    <div
                      data-v-c876570a=""
                      class="m-outcome m-event-outcome-default"
                    >
                      <div data-v-c876570a="" class="desc">
                        <span data-v-c876570a="">X</span>
                      </div>
                      <div data-v-c876570a="" class="odds">5.25</div>
                    </div>
                    <div
                      data-v-c876570a=""
                      class="m-outcome m-event-outcome-default"
                    >
                      <div data-v-c876570a="" class="desc">
                        <span data-v-c876570a="">2</span>
                      </div>
                      <div data-v-c876570a="" class="odds">1.32</div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="featuredMatchCard"
                data-hs-id="sr:match:38234853"
                data-hs-index="12"
                data-v-22da39ec=""
              >
                <div class="top">
                  <img
                    src="https://s.sporty.net/global/main/brand/sportybet/mobile/images/stv.b89a6457ad.png"
                    width="18"
                    class="label stv-icon"
                  />

                  <a class="tournamentLink">Spain - Copa del Rey</a>
                </div>
                <div class="mid">
                  <div class="homeIcon">
                    <img
                      src="https:https://s.sporty.net/common/main/res/c96e5e8485c5e0344b56744a79a24ee6.png"
                      draggable="false"
                    />
                  </div>
                  <div class="homeName">Real Oviedo</div>
                  <div class="dateTime">
                    <div class="time">20:00</div>
                    <div class="date">Today</div>
                  </div>
                  <div class="market">
                    <span>1X2</span>


                  </div>
                  <div class="awayIcon">
                    <img
                      src="https:https://s.sporty.net/common/main/res/9d74d9de9135a4dd218f5e3844681b78.png"
                      draggable="false"
                    />
                  </div>
                  <div class="awayName">Atletico Madrid</div>
                </div>
                <div class="bottom">
                  <div data-v-c876570a="" class="featuredMatchOutcome outcomes">
                    <div
                      data-v-c876570a=""
                      class="m-outcome m-event-outcome-default"
                    >
                      <div data-v-c876570a="" class="desc">
                        <span data-v-c876570a="">1</span>
                      </div>
                      <div data-v-c876570a="" class="odds">7.25</div>
                    </div>
                    <div
                      data-v-c876570a=""
                      class="m-outcome m-event-outcome-default"
                    >
                      <div data-v-c876570a="" class="desc">
                        <span data-v-c876570a="">X</span>
                      </div>
                      <div data-v-c876570a="" class="odds">4.20</div>
                    </div>
                    <div
                      data-v-c876570a=""
                      class="m-outcome m-event-outcome-default"
                    >
                      <div data-v-c876570a="" class="desc">
                        <span data-v-c876570a="">2</span>
                      </div>
                      <div data-v-c876570a="" class="odds">1.47</div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="featuredMatchCard"
                data-hs-id="sr:match:38234849"
                data-hs-index="13"
                data-v-22da39ec=""
              >
                <div class="top">
                  <img
                    src="https://s.sporty.net/global/main/brand/sportybet/mobile/images/stv.b89a6457ad.png"
                    width="18"
                    class="label stv-icon"
                  />

                  <a class="tournamentLink">Spain - Copa del Rey</a>
                </div>
                <div class="mid">
                  <div class="homeIcon">
                    <img
                      src="https:https://s.sporty.net/ng/main/res/be43968f83f20503136768c676435455.png"
                      draggable="false"
                    />
                  </div>
                  <div class="homeName">UD Logrones</div>
                  <div class="dateTime">
                    <div class="time">19:00</div>
                    <div class="date">Today</div>
                  </div>
                  <div class="market">
                    <span>1X2</span>


                  </div>
                  <div class="awayIcon">
                    <img
                      src="https:https://s.sporty.net/common/main/res/3175f1a20ec5adb7a2ffe7aeff7a1ec8.png"
                      draggable="false"
                    />
                  </div>
                  <div class="awayName">Real Sociedad</div>
                </div>
                <div class="bottom">
                  <div data-v-c876570a="" class="featuredMatchOutcome outcomes">
                    <div
                      data-v-c876570a=""
                      class="m-outcome m-event-outcome-default"
                    >
                      <div data-v-c876570a="" class="desc">
                        <span data-v-c876570a="">1</span>
                      </div>
                      <div data-v-c876570a="" class="odds">10.00</div>
                    </div>
                    <div
                      data-v-c876570a=""
                      class="m-outcome m-event-outcome-default"
                    >
                      <div data-v-c876570a="" class="desc">
                        <span data-v-c876570a="">X</span>
                      </div>
                      <div data-v-c876570a="" class="odds">5.40</div>
                    </div>
                    <div
                      data-v-c876570a=""
                      class="m-outcome m-event-outcome-default"
                    >
                      <div data-v-c876570a="" class="desc">
                        <span data-v-c876570a="">2</span>
                      </div>
                      <div data-v-c876570a="" class="odds">1.28</div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="featuredMatchCard"
                data-hs-id="sr:match:38234857"
                data-hs-index="14"
                data-v-22da39ec=""
              >
                <div class="top">
                  <img
                    src="https://s.sporty.net/global/main/brand/sportybet/mobile/images/stv.b89a6457ad.png"
                    width="18"
                    class="label stv-icon"
                  />

                  <a class="tournamentLink">Spain - Copa del Rey</a>
                </div>
                <div class="mid">
                  <div class="homeIcon">
                    <img
                      src="https:https://s.sporty.net/ng/main/res/39fec5f26988bacbed24b8be5972c79c.png"
                      draggable="false"
                    />
                  </div>
                  <div class="homeName">CF Intercity</div>
                  <div class="dateTime">
                    <div class="time">21:00</div>
                    <div class="date">Today</div>
                  </div>
                  <div class="market">
                    <span>1X2</span>


                  </div>
                  <div class="awayIcon">
                    <img
                      src="https:https://s.sporty.net/common/main/res/25e40441d42cce317a28037f85af13c1.png"
                      draggable="false"
                    />
                  </div>
                  <div class="awayName">Barcelona</div>
                </div>
                <div class="bottom">
                  <div data-v-c876570a="" class="featuredMatchOutcome outcomes">
                    <div
                      data-v-c876570a=""
                      class="m-outcome m-event-outcome-default"
                    >
                      <div data-v-c876570a="" class="desc">
                        <span data-v-c876570a="">1</span>
                      </div>
                      <div data-v-c876570a="" class="odds">32.00</div>
                    </div>
                    <div
                      data-v-c876570a=""
                      class="m-outcome m-event-outcome-default"
                    >
                      <div data-v-c876570a="" class="desc">
                        <span data-v-c876570a="">X</span>
                      </div>
                      <div data-v-c876570a="" class="odds">10.50</div>
                    </div>
                    <div
                      data-v-c876570a=""
                      class="m-outcome m-event-outcome-default"
                    >
                      <div data-v-c876570a="" class="desc">
                        <span data-v-c876570a="">2</span>
                      </div>
                      <div data-v-c876570a="" class="odds">1.07</div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="featuredMatchCard"
                data-hs-id="sr:match:35431785"
                data-hs-index="15"
                data-v-22da39ec=""
              >
                <div class="top">
                  <img
                    src="https://s.sporty.net/global/main/brand/sportybet/mobile/images/stv.b89a6457ad.png"
                    width="18"
                    class="label stv-icon"
                  />

                  <a class="tournamentLink">USA - NBA</a>
                </div>
                <div class="mid">
                  <div class="homeIcon">
                    <img
                      src="https:https://s.sporty.net/common/main/res/50d4e64df29550086d245946fb53338e.png"
                      draggable="false"
                    />
                  </div>
                  <div class="homeName">Cleveland Cavaliers</div>
                  <div class="dateTime">
                    <div class="time">01:00</div>
                    <div class="date">05/01</div>
                  </div>
                  <div class="market">
                    <span>Winner</span>
                    <img
                      src="https://s.sporty.net/global/main/common/images/svg/info-icon-fill.35b5ba0752.svg"
                      class="info-icon"
                    />
                    <div
                      data-v-442eebcf=""
                      class="m-popOver-wrapper m-popOver-wrapper--top m-popOver-wrapper--center featured-match-popover"
                      style="display: none; min-width: 100%"
                    >
                      <div data-v-442eebcf="" class="m-popOver">
                        <h3 data-v-442eebcf="">incl. overtime</h3>
                      </div>

                    </div>
                  </div>
                  <div class="awayIcon">
                    <img
                      src="https:https://s.sporty.net/common/main/res/192ecde1283755e0b0b3700de407ea38.png"
                      draggable="false"
                    />
                  </div>
                  <div class="awayName">Phoenix Suns</div>
                </div>
                <div class="bottom">
                  <div data-v-c876570a="" class="featuredMatchOutcome outcomes">
                    <div
                      data-v-c876570a=""
                      class="m-outcome m-event-outcome-default"
                    >
                      <div data-v-c876570a="" class="desc">
                        <span data-v-c876570a="">1</span>
                      </div>
                      <div data-v-c876570a="" class="odds">1.51</div>
                    </div>
                    <div
                      data-v-c876570a=""
                      class="m-outcome m-event-outcome-default"
                    >
                      <div data-v-c876570a="" class="desc">
                        <span data-v-c876570a="">2</span>
                      </div>
                      <div data-v-c876570a="" class="odds">2.73</div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="featuredMatchCard"
                data-hs-id="sr:match:35433455"
                data-hs-index="16"
                data-v-22da39ec=""
              >
                <div class="top">
                  <img
                    src="https://s.sporty.net/global/main/brand/sportybet/mobile/images/stv.b89a6457ad.png"
                    width="18"
                    class="label stv-icon"
                  />

                  <a class="tournamentLink">USA - NBA</a>
                </div>
                <div class="mid">
                  <div class="homeIcon">
                    <img
                      src="https:https://s.sporty.net/common/main/res/1ca7fc9d0cbabab42e7758c818930026.png"
                      draggable="false"
                    />
                  </div>
                  <div class="homeName">Toronto Raptors</div>
                  <div class="dateTime">
                    <div class="time">01:30</div>
                    <div class="date">05/01</div>
                  </div>
                  <div class="market">
                    <span>Winner</span>
                    <img
                      src="https://s.sporty.net/global/main/common/images/svg/info-icon-fill.35b5ba0752.svg"
                      class="info-icon"
                    />
                    <div
                      data-v-442eebcf=""
                      class="m-popOver-wrapper m-popOver-wrapper--top m-popOver-wrapper--center featured-match-popover"
                      style="display: none; min-width: 100%"
                    >
                      <div data-v-442eebcf="" class="m-popOver">
                        <h3 data-v-442eebcf="">incl. overtime</h3>
                      </div>

                    </div>
                  </div>
                  <div class="awayIcon">
                    <img
                      src="https:https://s.sporty.net/common/main/res/58c1881b24d4a1e319d5040550f53029.png"
                      draggable="false"
                    />
                  </div>
                  <div class="awayName">Milwaukee Bucks</div>
                </div>
                <div class="bottom">
                  <div data-v-c876570a="" class="featuredMatchOutcome outcomes">
                    <div
                      data-v-c876570a=""
                      class="m-outcome m-event-outcome-default"
                    >
                      <div data-v-c876570a="" class="desc">
                        <span data-v-c876570a="">1</span>
                      </div>
                      <div data-v-c876570a="" class="odds">1.71</div>
                    </div>
                    <div
                      data-v-c876570a=""
                      class="m-outcome m-event-outcome-default"
                    >
                      <div data-v-c876570a="" class="desc">
                        <span data-v-c876570a="">2</span>
                      </div>
                      <div data-v-c876570a="" class="odds">2.20</div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="featuredMatchCard"
                data-hs-id="sr:match:35432521"
                data-hs-index="17"
                data-v-22da39ec=""
              >
                <div class="top">
                  <img
                    src="https://s.sporty.net/global/main/brand/sportybet/mobile/images/stv.b89a6457ad.png"
                    width="18"
                    class="label stv-icon"
                  />

                  <a class="tournamentLink">USA - NBA</a>
                </div>
                <div class="mid">
                  <div class="homeIcon">
                    <img
                      src="https:https://s.sporty.net/common/main/res/cd8a493771c37c713313d6b15c4f6744.png"
                      draggable="false"
                    />
                  </div>
                  <div class="homeName">Chicago Bulls</div>
                  <div class="dateTime">
                    <div class="time">02:00</div>
                    <div class="date">05/01</div>
                  </div>
                  <div class="market">
                    <span>Winner</span>
                    <img
                      src="https://s.sporty.net/global/main/common/images/svg/info-icon-fill.35b5ba0752.svg"
                      class="info-icon"
                    />
                    <div
                      data-v-442eebcf=""
                      class="m-popOver-wrapper m-popOver-wrapper--top m-popOver-wrapper--center featured-match-popover"
                      style="display: none; min-width: 100%"
                    >
                      <div data-v-442eebcf="" class="m-popOver">
                        <h3 data-v-442eebcf="">incl. overtime</h3>
                      </div>

                    </div>
                  </div>
                  <div class="awayIcon">
                    <img
                      src="https:https://s.sporty.net/common/main/res/24f7fdc5cd8d570554e580f270b73add.png"
                      draggable="false"
                    />
                  </div>
                  <div class="awayName">Brooklyn Nets</div>
                </div>
                <div class="bottom">
                  <div data-v-c876570a="" class="featuredMatchOutcome outcomes">
                    <div
                      data-v-c876570a=""
                      class="m-outcome m-event-outcome-default"
                    >
                      <div data-v-c876570a="" class="desc">
                        <span data-v-c876570a="">1</span>
                      </div>
                      <div data-v-c876570a="" class="odds">2.69</div>
                    </div>
                    <div
                      data-v-c876570a=""
                      class="m-outcome m-event-outcome-default"
                    >
                      <div data-v-c876570a="" class="desc">
                        <span data-v-c876570a="">2</span>
                      </div>
                      <div data-v-c876570a="" class="odds">1.50</div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="featuredMatchCard"
                data-hs-id="sr:match:35433609"
                data-hs-index="18"
                data-v-22da39ec=""
              >
                <div class="top">
                  <img
                    src="https://s.sporty.net/global/main/brand/sportybet/mobile/images/stv.b89a6457ad.png"
                    width="18"
                    class="label stv-icon"
                  />

                  <a class="tournamentLink">USA - NBA</a>
                </div>
                <div class="mid">
                  <div class="homeIcon">
                    <img
                      src="https:https://s.sporty.net/common/main/res/73e80bc0c53e3ee1748c5179fbb35e8e.png"
                      draggable="false"
                    />
                  </div>
                  <div class="homeName">Golden State Warriors</div>
                  <div class="dateTime">
                    <div class="time">04:00</div>
                    <div class="date">05/01</div>
                  </div>
                  <div class="market">
                    <span>Winner</span>
                    <img
                      src="https://s.sporty.net/global/main/common/images/svg/info-icon-fill.35b5ba0752.svg"
                      class="info-icon"
                    />
                    <div
                      data-v-442eebcf=""
                      class="m-popOver-wrapper m-popOver-wrapper--top m-popOver-wrapper--center featured-match-popover"
                      style="display: none; min-width: 100%"
                    >
                      <div data-v-442eebcf="" class="m-popOver">
                        <h3 data-v-442eebcf="">incl. overtime</h3>
                      </div>

                    </div>
                  </div>
                  <div class="awayIcon">
                    <img
                      src="https:https://s.sporty.net/common/main/res/a25b50d9af30a2db042aaf7fc87e113b.png"
                      draggable="false"
                    />
                  </div>
                  <div class="awayName">Detroit Pistons</div>
                </div>
                <div class="bottom">
                  <div data-v-c876570a="" class="featuredMatchOutcome outcomes">
                    <div
                      data-v-c876570a=""
                      class="m-outcome m-event-outcome-default"
                    >
                      <div data-v-c876570a="" class="desc">
                        <span data-v-c876570a="">1</span>
                      </div>
                      <div data-v-c876570a="" class="odds">1.34</div>
                    </div>
                    <div
                      data-v-c876570a=""
                      class="m-outcome m-event-outcome-default"
                    >
                      <div data-v-c876570a="" class="desc">
                        <span data-v-c876570a="">2</span>
                      </div>
                      <div data-v-c876570a="" class="odds">3.42</div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="featuredMatchCard"
                data-hs-id="sr:match:35432621"
                data-hs-index="19"
                data-v-22da39ec=""
              >
                <div class="top">
                  <img
                    src="https://s.sporty.net/global/main/brand/sportybet/mobile/images/stv.b89a6457ad.png"
                    width="18"
                    class="label stv-icon"
                  />

                  <a class="tournamentLink">USA - NBA</a>
                </div>
                <div class="mid">
                  <div class="homeIcon">
                    <img
                      src="https:https://s.sporty.net/common/main/res/459002f95475a93fb21f597b186d54c.png"
                      draggable="false"
                    />
                  </div>
                  <div class="homeName">Los Angeles Lakers</div>
                  <div class="dateTime">
                    <div class="time">04:00</div>
                    <div class="date">05/01</div>
                  </div>
                  <div class="market">
                    <span>Winner</span>
                    <img
                      src="https://s.sporty.net/global/main/common/images/svg/info-icon-fill.35b5ba0752.svg"
                      class="info-icon"
                    />
                    <div
                      data-v-442eebcf=""
                      class="m-popOver-wrapper m-popOver-wrapper--top m-popOver-wrapper--center featured-match-popover"
                      style="display: none; min-width: 100%"
                    >
                      <div data-v-442eebcf="" class="m-popOver">
                        <h3 data-v-442eebcf="">incl. overtime</h3>
                      </div>

                    </div>
                  </div>
                  <div class="awayIcon">
                    <img
                      src="https:https://s.sporty.net/common/main/res/8958c51cd052447f5e02929a53582d6.png"
                      draggable="false"
                    />
                  </div>
                  <div class="awayName">Miami Heat</div>
                </div>
                <div class="bottom">
                  <div data-v-c876570a="" class="featuredMatchOutcome outcomes">
                    <div
                      data-v-c876570a=""
                      class="m-outcome m-event-outcome-default"
                    >
                      <div data-v-c876570a="" class="desc">
                        <span data-v-c876570a="">1</span>
                      </div>
                      <div data-v-c876570a="" class="odds">2.46</div>
                    </div>
                    <div
                      data-v-c876570a=""
                      class="m-outcome m-event-outcome-default"
                    >
                      <div data-v-c876570a="" class="desc">
                        <span data-v-c876570a="">2</span>
                      </div>
                      <div data-v-c876570a="" class="odds">1.58</div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="featuredMatchCard"
                data-hs-id="sr:match:38311923"
                data-hs-index="20"
                data-v-22da39ec=""
              >
                <div class="top">



                  <a class="tournamentLink"
                    >ATP - ATP Adelaide, Australia Men Singles</a
                  >
                </div>
                <div class="mid">
                  <div class="homeIcon">
                    <img
                      src="https:https://s.sporty.net/common/main/res/c353405b2cac0278061e159c3ce7f1d4.png"
                      draggable="false"
                    />
                  </div>
                  <div class="homeName">Djokovic, Novak</div>
                  <div class="dateTime">
                    <div class="time">02:50</div>
                    <div class="date">05/01</div>
                  </div>
                  <div class="market">
                    <span>Winner</span>


                  </div>
                  <div class="awayIcon">
                    <img
                      src="https:https://s.sporty.net/ng/main/res/40bd8e65a611ed877c6ceb4f806a9d68.png"
                      draggable="false"
                    />
                  </div>
                  <div class="awayName">Halys, Quentin</div>
                </div>
                <div class="bottom">
                  <div data-v-c876570a="" class="featuredMatchOutcome outcomes">
                    <div
                      data-v-c876570a=""
                      class="m-outcome m-event-outcome-default"
                    >
                      <div data-v-c876570a="" class="desc">
                        <span data-v-c876570a="">1</span>
                      </div>
                      <div data-v-c876570a="" class="odds">1.02</div>
                    </div>
                    <div
                      data-v-c876570a=""
                      class="m-outcome m-event-outcome-default"
                    >
                      <div data-v-c876570a="" class="desc">
                        <span data-v-c876570a="">2</span>
                      </div>
                      <div data-v-c876570a="" class="odds">16.00</div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="featuredMatchCard"
                data-hs-id="sr:match:38311921"
                data-hs-index="21"
                data-v-22da39ec=""
              >
                <div class="top">



                  <a class="tournamentLink"
                    >ATP - ATP Adelaide, Australia Men Singles</a
                  >
                </div>
                <div class="mid">
                  <div class="homeIcon">
                    <img
                      src="https:https://s.sporty.net/common/main/res/e69c9385395732f82cc5066cfa3d8897.png"
                      draggable="false"
                    />
                  </div>
                  <div class="homeName">Korda, Sebastian</div>
                  <div class="dateTime">
                    <div class="time">04:30</div>
                    <div class="date">05/01</div>
                  </div>
                  <div class="market">
                    <span>Winner</span>


                  </div>
                  <div class="awayIcon">
                    <img
                      src="https:https://s.sporty.net/common/main/res/8c50f7aa20ee02aee1007a573168c0dc.png"
                      draggable="false"
                    />
                  </div>
                  <div class="awayName">Bautista Agut, Roberto</div>
                </div>
                <div class="bottom">
                  <div data-v-c876570a="" class="featuredMatchOutcome outcomes">
                    <div
                      data-v-c876570a=""
                      class="m-outcome m-event-outcome-default"
                    >
                      <div data-v-c876570a="" class="desc">
                        <span data-v-c876570a="">1</span>
                      </div>
                      <div data-v-c876570a="" class="odds">1.80</div>
                    </div>
                    <div
                      data-v-c876570a=""
                      class="m-outcome m-event-outcome-default"
                    >
                      <div data-v-c876570a="" class="desc">
                        <span data-v-c876570a="">2</span>
                      </div>
                      <div data-v-c876570a="" class="odds">2.05</div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="featuredMatchCard"
                data-hs-id="sr:match:38311915"
                data-hs-index="22"
                data-v-22da39ec=""
              >
                <div class="top">



                  <a class="tournamentLink"
                    >ATP - ATP Adelaide, Australia Men Singles</a
                  >
                </div>
                <div class="mid">
                  <div class="homeIcon">
                    <img
                      src="https:https://s.sporty.net/common/main/res/808899a14019ce2796f5fbbf3123c68a.png"
                      draggable="false"
                    />
                  </div>
                  <div class="homeName">Sinner, Jannik</div>
                  <div class="dateTime">
                    <div class="time">09:00</div>
                    <div class="date">05/01</div>
                  </div>
                  <div class="market">
                    <span>Winner</span>


                  </div>
                  <div class="awayIcon">
                    <img
                      src="https:https://s.sporty.net/common/main/res/21e7a9c05e168f986a65eebd74e7c9cd.png"
                      draggable="false"
                    />
                  </div>
                  <div class="awayName">Kokkinakis, Thanasi</div>
                </div>
                <div class="bottom">
                  <div data-v-c876570a="" class="featuredMatchOutcome outcomes">
                    <div
                      data-v-c876570a=""
                      class="m-outcome m-event-outcome-default"
                    >
                      <div data-v-c876570a="" class="desc">
                        <span data-v-c876570a="">1</span>
                      </div>
                      <div data-v-c876570a="" class="odds">1.29</div>
                    </div>
                    <div
                      data-v-c876570a=""
                      class="m-outcome m-event-outcome-default"
                    >
                      <div data-v-c876570a="" class="desc">
                        <span data-v-c876570a="">2</span>
                      </div>
                      <div data-v-c876570a="" class="odds">3.75</div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="featuredMatchCard"
                data-hs-id="sr:match:34152053"
                data-hs-index="23"
                data-v-22da39ec=""
              >
                <div class="top">
                  <div
                    data-v-33c087e8=""
                    class="label-container"
                    is-recommended="true"
                  >
                    <img
                      data-v-33c087e8=""
                      src="https://s.sporty.net/global/main/modules/main/mobile/common/components/event/image/label_hot.016bf8bac3.png"
                      data-op=""
                      width="58"
                      height="15"
                    /><img
                      data-v-33c087e8=""
                      src="https://s.sporty.net/global/main/modules/main/mobile/common/components/event/image/label_bestodds.6849c8c853.png"
                      data-op=""
                      width="80"
                      height="15"
                    />
                  </div>
                  <img
                    src="https://s.sporty.net/global/main/brand/sportybet/mobile/images/sfm.995a451718.png"
                    width="18"
                    class="label sfm-icon"
                  />
                  <a class="tournamentLink">England - Premier League</a>
                </div>
                <div class="mid">
                  <div class="homeIcon">
                    <img
                      src="https:https://s.sporty.net/common/main/res/ac71b0a1a6b0a8fd8c6f6169d1f06fb9.png"
                      draggable="false"
                    />
                  </div>
                  <div class="homeName">Crystal Palace</div>
                  <div class="dateTime">
                    <div class="time">21:00</div>
                    <div class="date">Today</div>
                  </div>
                  <div class="market">
                    <span>1X2</span>


                  </div>
                  <div class="awayIcon">
                    <img
                      src="https:https://s.sporty.net/common/main/res/e86d8b9393df565ab929dded460f86b1.png"
                      draggable="false"
                    />
                  </div>
                  <div class="awayName">Tottenham</div>
                </div>
                <div class="bottom">
                  <div data-v-c876570a="" class="featuredMatchOutcome outcomes">
                    <div
                      data-v-c876570a=""
                      class="m-outcome m-event-outcome-default"
                    >
                      <div data-v-c876570a="" class="desc">
                        <span data-v-c876570a="">1</span>
                      </div>
                      <div data-v-c876570a="" class="odds">3.71</div>
                    </div>
                    <div
                      data-v-c876570a=""
                      class="m-outcome m-event-outcome-default"
                    >
                      <div data-v-c876570a="" class="desc">
                        <span data-v-c876570a="">X</span>
                      </div>
                      <div data-v-c876570a="" class="odds">3.57</div>
                    </div>
                    <div
                      data-v-c876570a=""
                      class="m-outcome m-event-outcome-default"
                    >
                      <div data-v-c876570a="" class="desc">
                        <span data-v-c876570a="">2</span>
                      </div>
                      <div data-v-c876570a="" class="odds">2.13</div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="featuredMatchCard"
                data-hs-id="sr:match:34152063"
                data-hs-index="24"
                data-v-22da39ec=""
              >
                <div class="top">
                  <div
                    data-v-33c087e8=""
                    class="label-container"
                    is-recommended="true"
                  >
                    <img
                      data-v-33c087e8=""
                      src="https://s.sporty.net/global/main/modules/main/mobile/common/components/event/image/label_bestodds.6849c8c853.png"
                      data-op=""
                      width="80"
                      height="15"
                    />
                  </div>
                  <img
                    src="https://s.sporty.net/global/main/brand/sportybet/mobile/images/sfm.995a451718.png"
                    width="18"
                    class="label sfm-icon"
                  />
                  <a class="tournamentLink">England - Premier League</a>
                </div>
                <div class="mid">
                  <div class="homeIcon">
                    <img
                      src="https:https://s.sporty.net/common/main/res/bb37a9439634e152bd5a0253019ee52b.png"
                      draggable="false"
                    />
                  </div>
                  <div class="homeName">Southampton</div>
                  <div class="dateTime">
                    <div class="time">20:30</div>
                    <div class="date">Today</div>
                  </div>
                  <div class="market">
                    <span>1X2</span>


                  </div>
                  <div class="awayIcon">
                    <img
                      src="https:https://s.sporty.net/common/main/res/87d3fcbee6ca4767d7723c876614a052.png"
                      draggable="false"
                    />
                  </div>
                  <div class="awayName">Nottingham Forest</div>
                </div>
                <div class="bottom">
                  <div data-v-c876570a="" class="featuredMatchOutcome outcomes">
                    <div
                      data-v-c876570a=""
                      class="m-outcome m-event-outcome-default"
                    >
                      <div data-v-c876570a="" class="desc">
                        <span data-v-c876570a="">1</span>
                      </div>
                      <div data-v-c876570a="" class="odds">2.26</div>
                    </div>
                    <div
                      data-v-c876570a=""
                      class="m-outcome m-event-outcome-default m-outcome--checked"
                    >
                      <div data-v-c876570a="" class="desc">
                        <span data-v-c876570a="">X</span>
                      </div>
                      <div data-v-c876570a="" class="odds">3.44</div>
                    </div>
                    <div
                      data-v-c876570a=""
                      class="m-outcome m-event-outcome-default"
                    >
                      <div data-v-c876570a="" class="desc">
                        <span data-v-c876570a="">2</span>
                      </div>
                      <div data-v-c876570a="" class="odds">3.49</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div class="live-container">
            <div class="m-bet-tab">
              <div class="m-live-title">
                <span data-cms-key="live">Live </span>
                <div
                  class="m-snap-nav-wrap m-sport-type"
                  style="overflow: hidden"
                >
                  <ul
                    class="m-snap-nav flex"
                    style="
                      transform: translate(0px, 0px) translateZ(0px);
                      transition-duration: 350ms;
                      transition-timing-function: cubic-bezier(
                        0.1,
                        0.57,
                        0.1,
                        1
                      );
                      width: 2046.71px;
                    "
                  >
                    <li
                      class="m-sport-type-item m-snap-nav-item active"
                      data-op="home_live-tabFootball "
                    >
                      Football
                    </li>
                    <li
                      class="m-sport-type-item m-snap-nav-item"
                      data-op="home_live-tabvFootball"
                    >
                      vFootball
                    </li>
                    <li
                      class="m-sport-type-item m-snap-nav-item"
                      data-op="home_live-tabeFootball"
                    >
                      eFootball
                    </li>
                    <li
                      class="m-sport-type-item m-snap-nav-item"
                      data-op="home_live-tabBasketball"
                    >
                      Basketball
                    </li>
                    <li
                      class="m-sport-type-item m-snap-nav-item"
                      data-op="home_live-tabeBasketball"
                    >
                      eBasketball
                    </li>
                    <li
                      class="m-sport-type-item m-snap-nav-item"
                      data-op="home_live-tabTennis"
                    >
                      Tennis
                    </li>
                    <li
                      class="m-sport-type-item m-snap-nav-item"
                      data-op="home_live-tabTable Tennis"
                    >
                      Table Tennis
                    </li>
                    <li
                      class="m-sport-type-item m-snap-nav-item"
                      data-op="home_live-tabIce Hockey"
                    >
                      Ice Hockey
                    </li>
                    <li
                      class="m-sport-type-item m-snap-nav-item"
                      data-op="home_live-tabVolleyball"
                    >
                      Volleyball
                    </li>
                    <li
                      class="m-sport-type-item m-snap-nav-item"
                      data-op="home_live-tabBeach Volley"
                    >
                      Beach Volley
                    </li>
                    <li
                      class="m-sport-type-item m-snap-nav-item"
                      data-op="home_live-tabCricket"
                    >
                      Cricket
                    </li>
                    <li
                      class="m-sport-type-item m-snap-nav-item"
                      data-op="home_live-tabDarts"
                    >
                      Darts
                    </li>
                    <li
                      class="m-sport-type-item m-snap-nav-item"
                      data-op="home_live-tabSnooker"
                    >
                      Snooker
                    </li>
                  </ul>
                  <i class="controls left-controls"></i>
                  <i class="controls right-controls"></i>
                </div>
              </div>
              <div style="position: relative">
                <div class="m-bet-content">
                  <div
                    class="m-market-tab m-tabs m-tabs-mini m-tabs-no-animation"
                    style="overflow: hidden"
                  >
                    <div
                      class="m-tabs-nav"
                      style="
                        transform: translate(0px, 0px);
                        transition-duration: 0s;
                        transition-timing-function: cubic-bezier(
                          0.25,
                          0.46,
                          0.45,
                          0.94
                        );
                        width: 1525.1px;
                      "
                    >
                      <div
                        class="m-tabs-ink-bar"
                        style="display: block; width: 105.258px; left: 0px"
                      ></div>
                      <div data-op="" class="m-tabs-tab m-tabs-tab-active">

                        1X2
                      </div>
                      <div data-op="" class="m-tabs-tab">

                        Over/Under
                      </div>
                      <div data-op="" class="m-tabs-tab">

                        Next Goal
                      </div>
                      <div data-op="" class="m-tabs-tab">

                        Double Chance
                      </div>
                      <div data-op="" class="m-tabs-tab">

                        Handicap
                      </div>
                      <div data-op="" class="m-tabs-tab">

                        GG/NG
                      </div>
                      <div data-op="" class="m-tabs-tab">

                        Home O/U
                      </div>
                      <div data-op="" class="m-tabs-tab">

                        Away O/U
                      </div>

                    </div>
                    <div
                      class="m-tabs-content"
                      style="transform: translateX(0%) translateZ(0px)"
                    >
                      <div class="m-tabs-tabpane"></div>
                      <div class="m-tabs-tabpane" style="display: none"></div>
                      <div class="m-tabs-tabpane" style="display: none"></div>
                      <div class="m-tabs-tabpane" style="display: none"></div>
                      <div class="m-tabs-tabpane" style="display: none"></div>
                      <div class="m-tabs-tabpane" style="display: none"></div>
                      <div class="m-tabs-tabpane" style="display: none"></div>
                      <div class="m-tabs-tabpane" style="display: none"></div>
                    </div>
                  </div>
                  <div class="m-table m-live-table football">
                    <div class="m-table-row m-name-row">
                      <div class="m-table-cell m-name-cell">
                        <div class="m-name">
                          <div class="market-name">1</div>
                          <div class="market-name">X</div>
                          <div class="market-name">2</div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-op="label-event-live"
                      class="m-event-live m-live-row"
                    >
                      <div class="m-event-meta">

                        <div
                          data-v-33c087e8=""
                          class="label-container event-labels"
                        >
                          <img
                            data-v-33c087e8=""
                            src="https://s.sporty.net/global/main/modules/main/mobile/common/components/event/image/label_hot.016bf8bac3.png"
                            data-op=""
                            width="58"
                            height="15"
                          />
                        </div>
                        <span class="m-event-time">36:47</span>
                        <span class="match-status">H1</span>
                        <span class="m-league-name">Italy - Serie A</span>
                        <div class="live-marker">Live</div>
                      </div>
                      <div class="m-table-row m-live-table">
                        <div class="m-table-cell m-info-cell">
                          <div class="team">US Salernitana</div>
                          <div class="team">AC Milan</div>
                        </div>
                        <div class="m-table-cell score">
                          <div class="set-score">0</div>
                          <div class="set-score">2</div>
                        </div>


                        <div class="m-table-cell m-market-cell">
                          <div
                            class="m-market m-event-market-default market-id-1"
                          >

                            <div
                              class="m-outcome m-event-outcome-default"
                              data-op="label-odds"
                            >

                              <span
                                data-op="label-odds-amount"
                                class="m-outcome-odds"
                                >95.00</span
                              >
                            </div>
                            <div
                              class="m-outcome m-event-outcome-default"
                              data-op="label-odds"
                            >

                              <span
                                data-op="label-odds-amount"
                                class="m-outcome-odds"
                                >19.00</span
                              >
                            </div>
                            <div
                              class="m-outcome m-event-outcome-default"
                              data-op="label-odds"
                            >

                              <span
                                data-op="label-odds-amount"
                                class="m-outcome-odds"
                                >1.01</span
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="m-event-footer">
                        <div class="m-market-size">
                          +187&gt;
                          <img
                            src="https://s.sporty.net/global/main/brand/sportybet/mobile/images/stv.b89a6457ad.png"
                            width="18"
                            height="18"
                            data-op="label-stv-tag"
                            class="media-icon stv-icon"
                          />


                        </div>
                      </div>
                    </div>
                    <div
                      data-op="label-event-live"
                      class="m-event-live m-live-row"
                    >
                      <div class="m-event-meta">


                        <span class="m-event-time">36:35</span>
                        <span class="match-status">H1</span>
                        <span class="m-league-name">Italy - Serie A</span>
                        <div class="live-marker">Live</div>
                      </div>
                      <div class="m-table-row m-live-table">
                        <div class="m-table-cell m-info-cell">
                          <div class="team">Sassuolo</div>
                          <div class="team">Sampdoria</div>
                        </div>
                        <div class="m-table-cell score">
                          <div class="set-score">0</div>
                          <div class="set-score">2</div>
                        </div>


                        <div class="m-table-cell m-market-cell">
                          <div
                            class="m-market m-event-market-default market-id-1"
                          >

                            <div
                              class="m-outcome m-event-outcome-default m-outcome--up"
                              data-op="label-odds"
                            >

                              <span
                                data-op="label-odds-amount"
                                class="m-outcome-odds"
                                >11.00</span
                              >
                            </div>
                            <div
                              class="m-outcome m-event-outcome-default m-outcome--up"
                              data-op="label-odds"
                            >

                              <span
                                data-op="label-odds-amount"
                                class="m-outcome-odds"
                                >5.70</span
                              >
                            </div>
                            <div
                              class="m-outcome m-event-outcome-default m-outcome--down"
                              data-op="label-odds"
                            >

                              <span
                                data-op="label-odds-amount"
                                class="m-outcome-odds"
                                >1.27</span
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="m-event-footer">
                        <div class="m-market-size">
                          +191&gt;
                          <img
                            src="https://s.sporty.net/global/main/brand/sportybet/mobile/images/stv.b89a6457ad.png"
                            width="18"
                            height="18"
                            data-op="label-stv-tag"
                            class="media-icon stv-icon"
                          />


                        </div>
                      </div>
                    </div>
                    <div
                      data-op="label-event-live"
                      class="m-event-live m-live-row"
                    >
                      <div class="m-event-meta">


                        <span class="m-event-time">37:20</span>
                        <span class="match-status">H1</span>
                        <span class="m-league-name"
                          >International Clubs - Club Friendly Games</span
                        >
                        <div class="live-marker">Live</div>
                      </div>
                      <div class="m-table-row m-live-table">
                        <div class="m-table-cell m-info-cell">
                          <div class="team">Werder Bremen</div>
                          <div class="team">Real Murcia CF</div>
                        </div>
                        <div class="m-table-cell score">
                          <div class="set-score">2</div>
                          <div class="set-score">0</div>
                        </div>


                        <div class="m-table-cell m-market-cell">
                          <div
                            class="m-market m-event-market-default market-id-1"
                          >

                            <div
                              class="m-outcome m-event-outcome-default"
                              data-op="label-odds"
                            >

                              <span
                                data-op="label-odds-amount"
                                class="m-outcome-odds"
                                >1.02</span
                              >
                            </div>
                            <div
                              class="m-outcome m-event-outcome-default"
                              data-op="label-odds"
                            >

                              <span
                                data-op="label-odds-amount"
                                class="m-outcome-odds"
                                >10.50</span
                              >
                            </div>
                            <div
                              class="m-outcome m-event-outcome-default"
                              data-op="label-odds"
                            >

                              <span
                                data-op="label-odds-amount"
                                class="m-outcome-odds"
                                >45.00</span
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="m-event-footer">
                        <div class="m-market-size">
                          +46&gt;
                          <img
                            src="https://s.sporty.net/global/main/brand/sportybet/mobile/images/stv.b89a6457ad.png"
                            width="18"
                            height="18"
                            data-op="label-stv-tag"
                            class="media-icon stv-icon"
                          />


                        </div>
                      </div>
                    </div>
                    <div
                      data-op="label-event-live"
                      class="m-event-live m-live-row"
                    >
                      <div class="m-event-meta">


                        <span class="m-event-time">7:49</span>
                        <span class="match-status">H1</span>
                        <span class="m-league-name"
                          >International Clubs - Club Friendly Games</span
                        >
                        <div class="live-marker">Live</div>
                      </div>
                      <div class="m-table-row m-live-table">
                        <div class="m-table-cell m-info-cell">
                          <div class="team">FK Radnicki 1923 Kragujevac</div>
                          <div class="team">FK Kolubara Lazarevac</div>
                        </div>
                        <div class="m-table-cell score">
                          <div class="set-score">0</div>
                          <div class="set-score">0</div>
                        </div>


                        <div class="m-table-cell m-market-cell">
                          <div
                            class="m-market m-event-market-default market-id-1"
                          >

                            <div
                              class="m-outcome m-event-outcome-default"
                              data-op="label-odds"
                            >

                              <span
                                data-op="label-odds-amount"
                                class="m-outcome-odds"
                                >1.47</span
                              >
                            </div>
                            <div
                              class="m-outcome m-event-outcome-default"
                              data-op="label-odds"
                            >

                              <span
                                data-op="label-odds-amount"
                                class="m-outcome-odds"
                                >3.95</span
                              >
                            </div>
                            <div
                              class="m-outcome m-event-outcome-default"
                              data-op="label-odds"
                            >

                              <span
                                data-op="label-odds-amount"
                                class="m-outcome-odds"
                                >5.80</span
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="m-event-footer">
                        <div class="m-market-size">
                          +48&gt;



                        </div>
                      </div>
                    </div>
                    <div
                      data-op="label-event-live"
                      class="m-event-live m-live-row"
                    >
                      <div class="m-event-meta">

                        <div
                          data-v-33c087e8=""
                          class="label-container event-labels"
                        >
                          <img
                            data-v-33c087e8=""
                            src="https://s.sporty.net/global/main/modules/main/mobile/common/components/event/image/label_sim.ec09562178.png"
                            data-op="label-sim-tag"
                            width="58"
                            height="15"
                          />
                        </div>
                        <span class="m-event-time">49:44</span>
                        <span class="match-status">H2</span>
                        <span class="m-league-name"
                          >Simulated Reality League - SRL International
                          Friendlies</span
                        >
                        <div class="live-marker">Live</div>
                      </div>
                      <div class="m-table-row m-live-table">
                        <div class="m-table-cell m-info-cell">
                          <div class="team">Austria SRL</div>
                          <div class="team">Netherlands SRL</div>
                        </div>
                        <div class="m-table-cell score">
                          <div class="set-score">1</div>
                          <div class="set-score">0</div>
                        </div>


                        <div class="m-table-cell m-market-cell">
                          <div
                            class="m-market m-event-market-default market-id-1"
                          >

                            <div
                              class="m-outcome m-event-outcome-default"
                              data-op="label-odds"
                            >

                              <span
                                data-op="label-odds-amount"
                                class="m-outcome-odds"
                                >1.80</span
                              >
                            </div>
                            <div
                              class="m-outcome m-event-outcome-default"
                              data-op="label-odds"
                            >

                              <span
                                data-op="label-odds-amount"
                                class="m-outcome-odds"
                                >3.45</span
                              >
                            </div>
                            <div
                              class="m-outcome m-event-outcome-default"
                              data-op="label-odds"
                            >

                              <span
                                data-op="label-odds-amount"
                                class="m-outcome-odds"
                                >4.55</span
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="m-event-footer">
                        <div class="m-market-size">
                          +43&gt;



                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="view-all">
                    <a
                      href="/ng/m/sport/football/live_list?source=home_list"
                      class=""
                    >
                      All Live Events 91
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div class="m-sports">
            <div class="m-sports-title">
              <span class="m-title-sport">Sports </span>
              <div
                class="m-snap-nav-wrap m-sport-type"
                style="overflow: hidden"
              >
                <ul
                  class="m-snap-nav flex"
                  style="
                    transform: translate(0px, 0px) translateZ(0px);
                    transition-duration: 350ms;
                    transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1);
                    width: 4094.14px;
                  "
                >
                  <li
                    class="m-sport-type-item m-snap-nav-item active"
                    data-op="home_prematch-tabFootball "
                  >
                    Football
                  </li>
                  <li
                    class="m-sport-type-item m-snap-nav-item"
                    data-op="home_prematch-tabvFootball"
                  >
                    vFootball
                  </li>
                  <li
                    class="m-sport-type-item m-snap-nav-item"
                    data-op="home_prematch-tabeFootball"
                  >
                    eFootball
                  </li>
                  <li
                    class="m-sport-type-item m-snap-nav-item"
                    data-op="home_prematch-tabBasketball"
                  >
                    Basketball
                  </li>
                  <li
                    class="m-sport-type-item m-snap-nav-item"
                    data-op="home_prematch-tabeBasketball"
                  >
                    eBasketball
                  </li>
                  <li
                    class="m-sport-type-item m-snap-nav-item"
                    data-op="home_prematch-tabTennis"
                  >
                    Tennis
                  </li>
                  <li
                    class="m-sport-type-item m-snap-nav-item"
                    data-op="home_prematch-tabTable Tennis"
                  >
                    Table Tennis
                  </li>
                  <li
                    class="m-sport-type-item m-snap-nav-item"
                    data-op="home_prematch-tabAmerican Football"
                  >
                    American Football
                  </li>
                  <li
                    class="m-sport-type-item m-snap-nav-item"
                    data-op="home_prematch-tabIce Hockey"
                  >
                    Ice Hockey
                  </li>
                  <li
                    class="m-sport-type-item m-snap-nav-item"
                    data-op="home_prematch-tabeIce Hockey"
                  >
                    eIce Hockey
                  </li>
                  <li
                    class="m-sport-type-item m-snap-nav-item"
                    data-op="home_prematch-tabVolleyball"
                  >
                    Volleyball
                  </li>
                  <li
                    class="m-sport-type-item m-snap-nav-item"
                    data-op="home_prematch-tabBeach Volley"
                  >
                    Beach Volley
                  </li>
                  <li
                    class="m-sport-type-item m-snap-nav-item"
                    data-op="home_prematch-tabHandball"
                  >
                    Handball
                  </li>
                  <li
                    class="m-sport-type-item m-snap-nav-item"
                    data-op="home_prematch-tabBaseball"
                  >
                    Baseball
                  </li>
                  <li
                    class="m-sport-type-item m-snap-nav-item"
                    data-op="home_prematch-tabBadminton"
                  >
                    Badminton
                  </li>
                  <li
                    class="m-sport-type-item m-snap-nav-item"
                    data-op="home_prematch-tabCounter-Strike"
                  >
                    Counter-Strike
                  </li>
                  <li
                    class="m-sport-type-item m-snap-nav-item"
                    data-op="home_prematch-tabDota 2"
                  >
                    Dota 2
                  </li>
                  <li
                    class="m-sport-type-item m-snap-nav-item"
                    data-op="home_prematch-tabLeague of Legends"
                  >
                    League of Legends
                  </li>
                  <li
                    class="m-sport-type-item m-snap-nav-item"
                    data-op="home_prematch-tabRugby"
                  >
                    Rugby
                  </li>
                  <li
                    class="m-sport-type-item m-snap-nav-item"
                    data-op="home_prematch-tabCricket"
                  >
                    Cricket
                  </li>
                  <li
                    class="m-sport-type-item m-snap-nav-item"
                    data-op="home_prematch-tabBoxing"
                  >
                    Boxing
                  </li>
                  <li
                    class="m-sport-type-item m-snap-nav-item"
                    data-op="home_prematch-tabMMA"
                  >
                    MMA
                  </li>
                  <li
                    class="m-sport-type-item m-snap-nav-item"
                    data-op="home_prematch-tabDarts"
                  >
                    Darts
                  </li>
                  <li
                    class="m-sport-type-item m-snap-nav-item"
                    data-op="home_prematch-tabFutsal"
                  >
                    Futsal
                  </li>
                  <li
                    class="m-sport-type-item m-snap-nav-item"
                    data-op="home_prematch-tabSnooker"
                  >
                    Snooker
                  </li>
                </ul>
                <i class="controls left-controls"></i>
                <i class="controls right-controls"></i>
              </div>
              <div class="filter-control">

                <svg viewBox="0 0 20 20">
                  <g
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <g transform="translate(2.000000, 3.000000)">
                      <g transform="translate(0.500000, 0.075269)">
                        <rect
                          fill="#353A45"
                          x="5.5"
                          y="10"
                          width="9"
                          height="1.5"
                        ></rect>
                        <circle
                          stroke="#353A45"
                          stroke-width="1.4"
                          cx="3.3"
                          cy="10.8"
                          r="2.1"
                        ></circle>
                        <rect
                          fill="#353A45"
                          x="0.5"
                          y="2.25806452"
                          width="9"
                          height="1.5"
                        ></rect>
                        <circle
                          stroke="#353A45"
                          stroke-width="1.4"
                          cx="11.8"
                          cy="3.05806452"
                          r="2.1"
                        ></circle>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
            </div>


            <div
              class="m-tabs m-tabs-mini m-tabs-no-animation m-pre-opts full-width"
              style="overflow: hidden"
            >
              <div
                class="m-tabs-nav"
                style="
                  transform: translate(0px, 0px);
                  transition-duration: 0s;
                  transition-timing-function: cubic-bezier(
                    0.25,
                    0.46,
                    0.45,
                    0.94
                  );
                  width: 1440px;
                "
              >
                <div
                  class="m-tabs-ink-bar"
                  style="display: block; width: 472px; left: 484px"
                ></div>
                <div data-op="" class="m-tabs-tab">

                  Highlights
                </div>
                <div data-op="" class="m-tabs-tab m-tabs-tab-active">

                  Today
                </div>
                <div data-op="" class="m-tabs-tab">

                  Countries
                </div>

              </div>
              <div
                class="m-tabs-content"
                style="transform: translateX(-100%) translateZ(0px)"
              >
                <div class="m-tabs-tabpane" style="display: none">
                  <div class="m-highlights-wrap" style="position: relative">

                    <div class="m-loading-wrap">
                      <div class="m-loading light">
                        <div class="loading"></div>

                      </div>
                    </div>
                  </div>
                </div>
                <div class="m-tabs-tabpane">
                  <div style="position: relative">
                    <div class="m-bet-content">
                      <div class="market-wrapper">
                        <div
                          class="m-today-tab m-tabs m-tabs-mini m-tabs-no-animation"
                          style="overflow: hidden"
                        >
                          <div
                            class="m-tabs-nav"
                            style="
                              transform: translate(0px, 0px);
                              transition-duration: 0s;
                              transition-timing-function: cubic-bezier(
                                0.25,
                                0.46,
                                0.45,
                                0.94
                              );
                              width: 734.281px;
                            "
                          >
                            <div
                              class="m-tabs-ink-bar"
                              style="
                                display: block;
                                width: 51.0469px;
                                left: 0px;
                              "
                            ></div>
                            <div
                              data-op=""
                              class="m-tabs-tab m-tabs-tab-active"
                            >

                              1X2
                            </div>
                            <div data-op="" class="m-tabs-tab">

                              Over/Under
                            </div>
                            <div data-op="" class="m-tabs-tab">

                              Double Chance
                            </div>
                            <div data-op="" class="m-tabs-tab">

                              Handicap
                            </div>
                            <div data-op="" class="m-tabs-tab">

                              GG/NG
                            </div>
                            <div data-op="" class="m-tabs-tab">

                              1st Half - 1X2
                            </div>
                            <div data-op="" class="m-tabs-tab">

                              1st Half - O/U
                            </div>
                            <div data-op="" class="m-tabs-tab">

                              DNB
                            </div>

                          </div>
                          <div
                            class="m-tabs-content"
                            style="transform: translateX(0%) translateZ(0px)"
                          >
                            <div class="m-tabs-tabpane"></div>
                            <div
                              class="m-tabs-tabpane"
                              style="display: none"
                            ></div>
                            <div
                              class="m-tabs-tabpane"
                              style="display: none"
                            ></div>
                            <div
                              class="m-tabs-tabpane"
                              style="display: none"
                            ></div>
                            <div
                              class="m-tabs-tabpane"
                              style="display: none"
                            ></div>
                            <div
                              class="m-tabs-tabpane"
                              style="display: none"
                            ></div>
                            <div
                              class="m-tabs-tabpane"
                              style="display: none"
                            ></div>
                            <div
                              class="m-tabs-tabpane"
                              style="display: none"
                            ></div>
                          </div>
                        </div>
                      </div>
                      <div class="m-table m-sports-table football">
                        <div class="m-table-row m-date-row">
                          <div class="m-table-cell m-date">04/01 Wednesday</div>
                          <div class="m-table-cell market-title">
                            <div>1</div>
                            <div>X</div>
                            <div>2</div>
                          </div>
                        </div>
                        <div
                          data-key="sr:match:34286827"
                          style="height: 97px; width: 100%"
                        >
                          <div
                            data-op="label-prematch"
                            class="m-event-sport m-sports-row"
                          >
                            <div class="m-event-meta">
                              <div
                                data-v-33c087e8=""
                                class="label-container event-labels"
                              >
                                <img
                                  data-v-33c087e8=""
                                  src="//s.sporty.net/global/main/modules/main/mobile/common/components/event/image/label_hot.016bf8bac3.png"
                                  data-op=""
                                  width="58"
                                  height="15"
                                /><img
                                  data-v-33c087e8=""
                                  src="//s.sporty.net/global/main/modules/main/mobile/common/components/event/image/label_bestodds.6849c8c853.png"
                                  data-op=""
                                  width="80"
                                  height="15"
                                />
                              </div>
                              <span class="m-time">14:30</span>
                              <span class="m-game-id">ID 22467</span>
                              <span class="m-league-name">Italy - Serie A</span>
                            </div>
                            <div class="m-table-row m-sports-table">
                              <div class="m-table-cell m-info-cell">
                                <div class="team">Spezia Calcio</div>
                                <div class="team">Atalanta</div>
                              </div>
                              <div class="m-table-cell m-market-cell">
                                <div
                                  class="m-market m-event-market-default market-id-1"
                                >

                                  <div
                                    class="m-outcome m-event-outcome-default"
                                    data-op="label-odds"
                                  >

                                    <span
                                      data-op="label-odds-amount"
                                      class="m-outcome-odds"
                                      >4.55</span
                                    >
                                  </div>
                                  <div
                                    class="m-outcome m-event-outcome-default"
                                    data-op="label-odds"
                                  >

                                    <span
                                      data-op="label-odds-amount"
                                      class="m-outcome-odds"
                                      >3.97</span
                                    >
                                  </div>
                                  <div
                                    class="m-outcome m-event-outcome-default"
                                    data-op="label-odds"
                                  >

                                    <span
                                      data-op="label-odds-amount"
                                      class="m-outcome-odds"
                                      >1.82</span
                                    >
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="m-event-footer">
                              <div class="m-market-size">
                                +328
                                <img
                                  src="//s.sporty.net/global/main/brand/sportybet/mobile/images/stv.b89a6457ad.png"
                                  width="18"
                                  height="18"
                                  class="media-icon stv-icon"
                                />


                              </div>
                              <div class="m-event-comment">Comments 18</div>
                            </div>
                          </div>
                        </div>

                        <div
                          data-key="sr:match:34286829"
                          style="height: 97px; width: 100%"
                        >
                          <div
                            data-op="label-prematch"
                            class="m-event-sport m-sports-row"
                          >
                            <div class="m-event-meta">
                              <div
                                data-v-33c087e8=""
                                class="label-container event-labels"
                              >
                                <img
                                  data-v-33c087e8=""
                                  src="//s.sporty.net/global/main/modules/main/mobile/common/components/event/image/label_bestodds.6849c8c853.png"
                                  data-op=""
                                  width="80"
                                  height="15"
                                />
                              </div>
                              <span class="m-time">14:30</span>
                              <span class="m-game-id">ID 40439</span>
                              <span class="m-league-name">Italy - Serie A</span>
                            </div>
                            <div class="m-table-row m-sports-table">
                              <div class="m-table-cell m-info-cell">
                                <div class="team">Torino</div>
                                <div class="team">Hellas Verona</div>
                              </div>
                              <div class="m-table-cell m-market-cell">
                                <div
                                  class="m-market m-event-market-default market-id-1"
                                >

                                  <div
                                    class="m-outcome m-event-outcome-default"
                                    data-op="label-odds"
                                  >

                                    <span
                                      data-op="label-odds-amount"
                                      class="m-outcome-odds"
                                      >1.75</span
                                    >
                                  </div>
                                  <div
                                    class="m-outcome m-event-outcome-default"
                                    data-op="label-odds"
                                  >

                                    <span
                                      data-op="label-odds-amount"
                                      class="m-outcome-odds"
                                      >3.80</span
                                    >
                                  </div>
                                  <div
                                    class="m-outcome m-event-outcome-default"
                                    data-op="label-odds"
                                  >

                                    <span
                                      data-op="label-odds-amount"
                                      class="m-outcome-odds"
                                      >5.44</span
                                    >
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="m-event-footer">
                              <div class="m-market-size">
                                +304
                                <img
                                  src="//s.sporty.net/global/main/brand/sportybet/mobile/images/stv.b89a6457ad.png"
                                  width="18"
                                  height="18"
                                  class="media-icon stv-icon"
                                />


                              </div>
                              <div class="m-event-comment">Comments 14</div>
                            </div>
                          </div>
                        </div>

                        <div
                          data-key="sr:match:34286821"
                          style="height: 97px; width: 100%"
                        >
                          <div
                            data-op="label-prematch"
                            class="m-event-sport m-sports-row"
                          >
                            <div class="m-event-meta">
                              <div
                                data-v-33c087e8=""
                                class="label-container event-labels"
                              >
                                <img
                                  data-v-33c087e8=""
                                  src="//s.sporty.net/global/main/modules/main/mobile/common/components/event/image/label_hot.016bf8bac3.png"
                                  data-op=""
                                  width="58"
                                  height="15"
                                /><img
                                  data-v-33c087e8=""
                                  src="//s.sporty.net/global/main/modules/main/mobile/common/components/event/image/label_bestodds.6849c8c853.png"
                                  data-op=""
                                  width="80"
                                  height="15"
                                />
                              </div>
                              <span class="m-time">16:30</span>
                              <span class="m-game-id">ID 40441</span>
                              <span class="m-league-name">Italy - Serie A</span>
                            </div>
                            <div class="m-table-row m-sports-table">
                              <div class="m-table-cell m-info-cell">
                                <div class="team">Roma</div>
                                <div class="team">Bologna</div>
                              </div>
                              <div class="m-table-cell m-market-cell">
                                <div
                                  class="m-market m-event-market-default market-id-1"
                                >

                                  <div
                                    class="m-outcome m-event-outcome-default"
                                    data-op="label-odds"
                                  >

                                    <span
                                      data-op="label-odds-amount"
                                      class="m-outcome-odds"
                                      >1.62</span
                                    >
                                  </div>
                                  <div
                                    class="m-outcome m-event-outcome-default"
                                    data-op="label-odds"
                                  >

                                    <span
                                      data-op="label-odds-amount"
                                      class="m-outcome-odds"
                                      >4.05</span
                                    >
                                  </div>
                                  <div
                                    class="m-outcome m-event-outcome-default"
                                    data-op="label-odds"
                                  >

                                    <span
                                      data-op="label-odds-amount"
                                      class="m-outcome-odds"
                                      >6.45</span
                                    >
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="m-event-footer">
                              <div class="m-market-size">
                                +314
                                <img
                                  src="//s.sporty.net/global/main/brand/sportybet/mobile/images/stv.b89a6457ad.png"
                                  width="18"
                                  height="18"
                                  class="media-icon stv-icon"
                                />


                              </div>
                              <div class="m-event-comment">Comments 15</div>
                            </div>
                          </div>
                        </div>

                        <div
                          data-key="sr:match:34286819"
                          style="height: 97px; width: 100%"
                        >
                          <div
                            data-op="label-prematch"
                            class="m-event-sport m-sports-row"
                          >
                            <div class="m-event-meta">
                              <div
                                data-v-33c087e8=""
                                class="label-container event-labels"
                              >
                                <img
                                  data-v-33c087e8=""
                                  src="//s.sporty.net/global/main/modules/main/mobile/common/components/event/image/label_hot.016bf8bac3.png"
                                  data-op=""
                                  width="58"
                                  height="15"
                                /><img
                                  data-v-33c087e8=""
                                  src="//s.sporty.net/global/main/modules/main/mobile/common/components/event/image/label_bestodds.6849c8c853.png"
                                  data-op=""
                                  width="80"
                                  height="15"
                                />
                              </div>
                              <span class="m-time">16:30</span>
                              <span class="m-game-id">ID 40440</span>
                              <span class="m-league-name">Italy - Serie A</span>
                            </div>
                            <div class="m-table-row m-sports-table">
                              <div class="m-table-cell m-info-cell">
                                <div class="team">US Lecce</div>
                                <div class="team">Lazio</div>
                              </div>
                              <div class="m-table-cell m-market-cell">
                                <div
                                  class="m-market m-event-market-default market-id-1"
                                >

                                  <div
                                    class="m-outcome m-event-outcome-default"
                                    data-op="label-odds"
                                  >

                                    <span
                                      data-op="label-odds-amount"
                                      class="m-outcome-odds"
                                      >3.91</span
                                    >
                                  </div>
                                  <div
                                    class="m-outcome m-event-outcome-default"
                                    data-op="label-odds"
                                  >

                                    <span
                                      data-op="label-odds-amount"
                                      class="m-outcome-odds"
                                      >3.41</span
                                    >
                                  </div>
                                  <div
                                    class="m-outcome m-event-outcome-default"
                                    data-op="label-odds"
                                  >

                                    <span
                                      data-op="label-odds-amount"
                                      class="m-outcome-odds"
                                      >2.12</span
                                    >
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="m-event-footer">
                              <div class="m-market-size">
                                +312
                                <img
                                  src="//s.sporty.net/global/main/brand/sportybet/mobile/images/stv.b89a6457ad.png"
                                  width="18"
                                  height="18"
                                  class="media-icon stv-icon"
                                />


                              </div>
                              <div class="m-event-comment">Comments 13</div>
                            </div>
                          </div>
                        </div>

                        <div
                          data-key="sr:match:34286815"
                          style="height: 97px; width: 100%"
                        >
                          <div
                            data-op="label-prematch"
                            class="m-event-sport m-sports-row"
                          >
                            <div class="m-event-meta">
                              <div
                                data-v-33c087e8=""
                                class="label-container event-labels"
                              >
                                <img
                                  data-v-33c087e8=""
                                  src="//s.sporty.net/global/main/modules/main/mobile/common/components/event/image/label_hot.016bf8bac3.png"
                                  data-op=""
                                  width="58"
                                  height="15"
                                /><img
                                  data-v-33c087e8=""
                                  src="//s.sporty.net/global/main/modules/main/mobile/common/components/event/image/label_bestodds.6849c8c853.png"
                                  data-op=""
                                  width="80"
                                  height="15"
                                />
                              </div>
                              <span class="m-time">18:30</span>
                              <span class="m-game-id">ID 40443</span>
                              <span class="m-league-name">Italy - Serie A</span>
                            </div>
                            <div class="m-table-row m-sports-table">
                              <div class="m-table-cell m-info-cell">
                                <div class="team">Fiorentina</div>
                                <div class="team">AC Monza</div>
                              </div>
                              <div class="m-table-cell m-market-cell">
                                <div
                                  class="m-market m-event-market-default market-id-1"
                                >

                                  <div
                                    class="m-outcome m-event-outcome-default"
                                    data-op="label-odds"
                                  >

                                    <span
                                      data-op="label-odds-amount"
                                      class="m-outcome-odds"
                                      >1.71</span
                                    >
                                  </div>
                                  <div
                                    class="m-outcome m-event-outcome-default"
                                    data-op="label-odds"
                                  >

                                    <span
                                      data-op="label-odds-amount"
                                      class="m-outcome-odds"
                                      >4.08</span
                                    >
                                  </div>
                                  <div
                                    class="m-outcome m-event-outcome-default"
                                    data-op="label-odds"
                                  >

                                    <span
                                      data-op="label-odds-amount"
                                      class="m-outcome-odds"
                                      >5.25</span
                                    >
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="m-event-footer">
                              <div class="m-market-size">
                                +313
                                <img
                                  src="//s.sporty.net/global/main/brand/sportybet/mobile/images/stv.b89a6457ad.png"
                                  width="18"
                                  height="18"
                                  class="media-icon stv-icon"
                                />


                              </div>
                              <div class="m-event-comment">Comments 14</div>
                            </div>
                          </div>
                        </div>

                        <div
                          data-key="sr:match:34286813"
                          style="height: 97px; width: 100%"
                        >

                        </div>

                        <div
                          data-key="sr:match:34152063"
                          style="height: 97px; width: 100%"
                        >

                        </div>

                        <div
                          data-key="sr:match:34152057"
                          style="height: 97px; width: 100%"
                        >

                        </div>

                        <div
                          data-key="sr:match:34286817"
                          style="height: 97px; width: 100%"
                        >

                        </div>

                        <div
                          data-key="sr:match:34286831"
                          style="height: 97px; width: 100%"
                        >

                        </div>

                        <div
                          data-key="sr:match:34152047"
                          style="height: 97px; width: 100%"
                        >

                        </div>

                        <div
                          data-key="sr:match:34152053"
                          style="height: 97px; width: 100%"
                        >

                        </div>

                        <div
                          data-key="sr:match:35163789"
                          style="height: 97px; width: 100%"
                        >

                        </div>

                        <div
                          data-key="sr:match:37706715"
                          style="height: 97px; width: 100%"
                        >

                        </div>

                        <div
                          data-key="sr:match:37706723"
                          style="height: 97px; width: 100%"
                        >

                        </div>

                        <div
                          data-key="sr:match:37707055"
                          style="height: 97px; width: 100%"
                        >

                        </div>

                        <div
                          data-key="sr:match:37707049"
                          style="height: 97px; width: 100%"
                        >

                        </div>

                        <div
                          data-key="sr:match:37706721"
                          style="height: 97px; width: 100%"
                        >

                        </div>

                        <div
                          data-key="sr:match:37707059"
                          style="height: 97px; width: 100%"
                        >

                        </div>

                        <div
                          data-key="sr:match:37707051"
                          style="height: 97px; width: 100%"
                        >

                        </div>

                        <div
                          data-key="sr:match:37707061"
                          style="height: 97px; width: 100%"
                        >

                        </div>

                        <div
                          data-key="sr:match:38255545"
                          style="height: 97px; width: 100%"
                        >

                        </div>

                        <div
                          data-key="sr:match:38255539"
                          style="height: 97px; width: 100%"
                        >

                        </div>

                        <div
                          data-key="sr:match:38255535"
                          style="height: 97px; width: 100%"
                        >

                        </div>

                        <div
                          data-key="sr:match:38255541"
                          style="height: 97px; width: 100%"
                        >

                        </div>

                        <div
                          data-key="sr:match:38255537"
                          style="height: 97px; width: 100%"
                        >

                        </div>

                        <div
                          data-key="sr:match:38255543"
                          style="height: 97px; width: 100%"
                        >

                        </div>

                        <div
                          data-key="sr:match:37707053"
                          style="height: 97px; width: 100%"
                        >

                        </div>

                        <div
                          data-key="sr:match:36328515"
                          style="height: 97px; width: 100%"
                        >

                        </div>

                        <div
                          data-key="sr:match:37186763"
                          style="height: 97px; width: 100%"
                        >

                        </div>

                        <div
                          data-key="sr:match:37315017"
                          style="height: 97px; width: 100%"
                        >

                        </div>

                        <div
                          data-key="sr:match:37315101"
                          style="height: 97px; width: 100%"
                        >

                        </div>

                        <div
                          data-key="sr:match:38422523"
                          style="height: 97px; width: 100%"
                        >

                        </div>

                        <div
                          data-key="sr:match:34478325"
                          style="height: 97px; width: 100%"
                        >

                        </div>

                        <div
                          data-key="sr:match:34478329"
                          style="height: 97px; width: 100%"
                        >

                        </div>

                        <div
                          data-key="sr:match:38315239"
                          style="height: 97px; width: 100%"
                        >

                        </div>

                        <div
                          data-key="sr:match:37967355"
                          style="height: 97px; width: 100%"
                        >

                        </div>

                        <div
                          data-key="sr:match:37968193"
                          style="height: 97px; width: 100%"
                        >

                        </div>

                        <div
                          data-key="sr:match:34984995"
                          style="height: 97px; width: 100%"
                        >

                        </div>

                        <div
                          data-key="sr:match:36794591"
                          style="height: 97px; width: 100%"
                        >

                        </div>

                        <div
                          data-key="sr:match:38201421"
                          style="height: 97px; width: 100%"
                        >

                        </div>

                        <div
                          data-key="sr:match:35264137"
                          style="height: 97px; width: 100%"
                        >

                        </div>

                        <div
                          data-key="sr:match:35163791"
                          style="height: 97px; width: 100%"
                        >

                        </div>

                        <div
                          data-key="sr:match:34985003"
                          style="height: 97px; width: 100%"
                        >

                        </div>

                        <div
                          data-key="sr:match:37968205"
                          style="height: 97px; width: 100%"
                        >

                        </div>

                        <div
                          data-key="sr:match:37966823"
                          style="height: 97px; width: 100%"
                        >

                        </div>

                        <div
                          data-key="sr:match:37967319"
                          style="height: 97px; width: 100%"
                        >

                        </div>

                        <div
                          data-key="sr:match:37968149"
                          style="height: 97px; width: 100%"
                        >

                        </div>

                        <div
                          data-key="sr:match:37966841"
                          style="height: 97px; width: 100%"
                        >

                        </div>

                        <div
                          data-key="sr:match:37967359"
                          style="height: 97px; width: 100%"
                        >

                        </div>
                        <div class="m-table-row m-date-row">
                          <div class="m-table-cell m-date">05/01 Thursday</div>
                          <div class="m-table-cell market-title">
                            <div>1</div>
                            <div>X</div>
                            <div>2</div>
                          </div>
                        </div>
                        <div
                          data-key="sr:match:37765711"
                          style="height: 97px; width: 100%"
                        >

                        </div>

                        <div
                          data-key="sr:match:37765713"
                          style="height: 97px; width: 100%"
                        >

                        </div>

                        <div
                          data-key="sr:match:37920019"
                          style="height: 97px; width: 100%"
                        >

                        </div>

                        <div
                          data-key="sr:match:37920021"
                          style="height: 97px; width: 100%"
                        >

                        </div>

                        <div
                          data-key="sr:match:38276385"
                          style="height: 97px; width: 100%"
                        >

                        </div>

                        <div
                          data-key="sr:match:38276381"
                          style="height: 97px; width: 100%"
                        >

                        </div>

                        <div
                          data-key="sr:match:38276383"
                          style="height: 97px; width: 100%"
                        >

                        </div>

                        <div
                          data-key="sr:match:38201917"
                          style="height: 97px; width: 100%"
                        >

                        </div>

                        <div
                          data-key="sr:match:37920023"
                          style="height: 97px; width: 100%"
                        >

                        </div>

                        <div
                          data-key="sr:match:38192487"
                          style="height: 97px; width: 100%"
                        >

                        </div>

                        <div
                          data-key="sr:match:37920025"
                          style="height: 97px; width: 100%"
                        >

                        </div>

                        <div
                          data-key="sr:match:37316851"
                          style="height: 97px; width: 100%"
                        >

                        </div>
                      </div>
                      <div class="view-all">
                        <a
                          href="/ng/m/sport/football?source=home_list&amp;time=all"
                          class=""
                          >View More</a
                        >
                      </div>
                    </div>

                  </div>
                </div>
                <div class="m-tabs-tabpane" style="display: none">
                  <div
                    class="m-countries-panel"
                    isshowall="true"
                    style="position: relative"
                  >

                    <div class="m-countries-block">

                      <div class="m-country-list"></div>
                    </div>
                    <div class="no-data">
                      <p
                        data-cms-key="no_games_tip"
                        data-cms-page="common_feedback"
                        style="white-space: pre-line"
                      >
                        Sorry, there are no games currently<br />available in
                        this category. Please try later.<br />Thank you.
                      </p>
                    </div>


                  </div>
                </div>
              </div>
            </div>
          </div>

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
    </div>
  </div>
</template>

<script>
import Footer from '~/components/Footer.vue';

export default {
  name: "IndexPage",
  components:{Footer},
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

