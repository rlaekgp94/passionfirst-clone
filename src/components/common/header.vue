<template>
  <header>
    <div class="gnb_sub_bg"></div>
    <div id="header_wrap">
      <h1 id="logo"><a href="/">삼화페인트</a></h1>
      <h1 id="logo_befor">삼화페인트</h1>
      <nav>
        <ul class="gnb_category">
          <li>
            <a href="#">Products</a>
            <ul class="gnb_sub">
              <li><a href="#">제품소개</a></li>
              <li><a href="#">자료검색</a></li>
              <li><a href="#">페인팅 가이드</a></li>
            </ul>
          </li>

          <li>
            <a href="#">Color</a>
            <ul class="gnb_sub">
              <li><a href="#">컬러검색</a></li>
              <li><a href="#">건축컬러디자인</a></li>
              <li><a href="#">컬러디자인센터</a></li>
            </ul>
          </li>

          <li>
            <a href="#">Culture</a>
            <ul class="gnb_sub">
              <li><a href="#">&#35;Live</a></li>
              <li><a href="#">뉴스</a></li>
              <li><a href="#">사회공헌</a></li>
              <li><a href="#">케미 X 케미</a></li>
              <li><a href="#">함께해요</a></li>
            </ul>
          </li>

          <li>
            <a href="#">Company</a>
            <ul class="gnb_sub">
              <li><a href="#">회사소개</a></li>
              <li><a href="#">히스토리</a></li>
              <li><a href="#">책임경영</a></li>
              <li><a href="#">인재채용</a></li>
              <li><a href="#">사업장</a></li>
            </ul>
          </li>

          <li>
            <a href="#">IR</a>
            <ul class="gnb_sub">
              <li><a href="#">투자정보</a></li>
              <li><a href="#">경영정보</a></li>
              <li><a href="#">재무정보</a></li>
              <li><a href="#">IR 미팅 신청</a></li>
            </ul>
          </li>

          <li>
            <a href="#">Customer</a>
            <ul class="gnb_sub">
              <li><a href="#">대리점찾기</a></li>
              <li><a href="#">대리점스토리</a></li>
              <li><a href="#">분석시스템</a></li>
              <li><a href="#">고객상담</a></li>
            </ul>
          </li>
        </ul>
        <!--gnb_category-->

        <div class="gnb_right">
          <a href="#" class="gnb_right_link">인재채용</a>
          <a href="#" class="gnb_right_link">대리점 웹 주문</a>

          <div class="select_lang">
            <div class="lang_btn">KOR</div>
            <ul class="lang_list">
              <li><a href="http://eng.samhwa.com/" target="_blank">ENG</a></li>
              <li><a href="http://cha.samhwa.com/" target="_blank">CHN</a></li>
            </ul>
          </div>

          <a href="#" class="gnb_Saw">
            <i>0</i>
          </a>

          <button type="button" class="gnb_search">검색</button>
        </div>
        <!--gnb_right-->
      </nav>
      <!--nav-->
    </div>
    <!--nav_wrap-->
  </header>
</template>

<script>
import $ from "jquery";
export default {
  name: "Header",
  mounted() {
    let gnb = $(".gnb_category li"),
      gnbSub = $(".gnb_sub"),
      gnbSubsub = $(".gnb_sub li"),
      gnbSubBg = $(".gnb_sub_bg"),
      headerHoverItem = $(
        "#header_wrap,#logo a,#logo_befor,.gnb_Saw,.gnb_Saw i,.gnb_search"
      ),
      headerHoverText = $("header a").not(".gnb_sub li a,.lang_list li a"),
      langBtn = $(".lang_btn"),
      langList = $(".lang_list");

    //하위메뉴 숨기기
    gnbSub.hide();

    //scroll,hover event
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      if (scroll == 0) {
        headerHoverItem.removeClass("sub_on");
        headerHoverText.css("color", "#fff");
        langBtn.removeClass("invert").css("color", "#fff");
        gnb.hover(
          function() {
            $(this)
              .children("ul")
              .show();
            gnbSubBg.addClass("sub_on");
            headerHoverItem.addClass("sub_on");
            headerHoverText.css("color", "#000");
            langBtn.addClass("invert").css("color", "#000");
          },
          function() {
            $(this)
              .children("ul")
              .hide();
            gnbSubBg.removeClass("sub_on");
            headerHoverItem.removeClass("sub_on");
            headerHoverText.css("color", "#fff");
            langBtn.removeClass("invert").css("color", "#fff");
          }
        );
      } else {
        headerHoverItem.addClass("sub_on");
        headerHoverText.css("color", "#000");
        langBtn.addClass("invert").css("color", "#000");
        gnb.hover(
          function() {
            $(this)
              .children("ul")
              .show();
            gnbSubBg.addClass("sub_on");
          },
          function() {
            $(this)
              .children("ul")
              .hide();
            gnbSubBg.removeClass("sub_on");
            headerHoverItem.addClass("sub_on");
            headerHoverText.css("color", "#000");
            langBtn.addClass("invert").css("color", "#000");
          }
        );
      }
    });

    //하위메뉴 li hover시 hover된 li제외 textcolor 변경
    gnbSubsub.hover(
      function() {
        gnbSubsub.not($(this)).addClass("on");
      },
      function() {
        gnbSubsub.not($(this)).removeClass("on");
      }
    );

    //KOR select click시 하위리스트 fadeIn
    langList.hide();

    langBtn.click(function() {
      $(this).addClass("active");
      langList.fadeIn(function() {
        $(this).mouseleave(function() {
          $(this).hide();
          langBtn.removeClass("active");
        });
      });
    });
  }
};
</script>

<style src="../../assets/css/reset.css"></style>
<style>
/* Noto */
@font-face {
  font-family: "Noto";
  font-style: normal;
  font-weight: 500;
  src: url("../../assets/font/NotoSansKR-Medium.otf");
}

/*z-index 아직 미설정*/
header {
  width: 100%;
  height: 95px;
  background-color: transparent;
  position: fixed;
  top: 0;
  left: 0;
  font-family: "Noto", sans-serif;
}

#header_wrap.sub_on {
  background: rgba(255, 255, 255, 1);
  box-shadow: rgba(0, 0, 0, 0.1) 0 1px 0 0;
}

#header_wrap {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  transition: 0.3s ease-in-out all;
}

/*gnb_sub_bg*/
.gnb_sub_bg {
  width: 100%;
  height: 73px;
  position: absolute;
  top: 0;
  left: 0;
  transform: matrix(1, 0, 0, 1, 0, 94);
  visibility: hidden;
  transition: 0.3s ease-in-out all;
}

.gnb_sub_bg.sub_on {
  background: rgba(255, 255, 255, 1);
  box-shadow: rgba(0, 0, 0, 0.1) 0 1px 0 0;
  visibility: inherit;
}

/*logo*/
#logo a {
  width: 90px;
  height: 32px;
  display: block;
  background: url(../../assets/img/common/logo-samhwa-white.svg) no-repeat;
  font-size: 0;
  position: absolute;
  left: 70px;
  top: 50%;
  transform: translateY(-50%);
  transition: 0.3s ease-in-out all;
}

#logo a.sub_on {
  width: 90px;
  height: 32px;
  background: url(../../assets/img/common/logo-samhwa-red.svg) no-repeat;
}

#logo_befor {
  width: 72px;
  height: 72px;
  background: url(../../assets/img/common/logo-samhwa-white-befor.svg) no-repeat;
  font-size: 0;
  position: absolute;
  left: 160px;
  top: 50%;
  transform: translateY(-50%);
  transition: 0.3s ease-in-out all;
}

#logo_befor.sub_on {
  background: url(../../assets/img/common/logo-samhwa-red-befor.svg) no-repeat;
}

/*nav*/
nav {
  width: 1590px;
  height: 100%;
  display: flex;
}

nav .gnb_category {
  display: flex;
  position: relative;
}

nav .gnb_category > li {
  padding: 36px 0;
  cursor: pointer;
}

nav .gnb_category > li > a {
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 0.5px;
  margin: 0 48px;
  padding: 38px 0;
  position: relative;
  font-family: "graphie", sans-serif;
}

nav .gnb_category > li > a::before {
  content: "";
  position: absolute;
  background-color: #000;
  height: 3px;
  width: 0;
  bottom: -2px;
  transition: 0.5s all;
  left: 50%;
  transform: translateX(-50%);
}

nav .gnb_category > li:hover > a::before {
  width: 100%;
}

/*gnb_sub*/
nav .gnb_sub {
  display: flex;
  position: absolute;
  top: 93px;
  left: 46px;
  width: 100%;
  transition: 0.3s ease-in-out all;
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: none;
  }
}

nav .gnb_sub li:first-child {
  padding-left: 0;
}

nav .gnb_sub li {
  height: 72px;
  padding: 0 24px;
  display: flex;
  align-items: center;
}

/*sub_menu position*/

nav .gnb_category > li:nth-child(4) > ul {
  position: absolute;
  top: 93px;
  left: 280px;
}

nav .gnb_category > li:nth-child(5) > ul {
  position: absolute;
  top: 93px;
  left: 480px;
}

nav .gnb_category > li:nth-child(6) > ul {
  position: absolute;
  top: 93px;
  left: 480px;
}

.gnb_sub li a {
  color: #000;
  font-size: 18px;
  letter-spacing: -0.7px;
  transition: 0.3s ease-in-out all;
}

.gnb_sub li.on a {
  color: #b4b4b4;
}

/*gnb_right*/
.gnb_right {
  width: 450px;
  position: absolute;
  right: 70px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.gnb_right_link {
  color: #fff;
  font-size: 14px;
}

.select_lang {
  position: relative;
}

.select_lang > .lang_btn {
  color: #fff;
  font-size: 14px;
  cursor: pointer;
}

.select_lang > .lang_btn::after {
  background: url(../../assets/img/common/dropdown.svg) no-repeat;
  content: "";
  width: 12px;
  height: 12px;
  position: absolute;
  top: 50%;
  right: -20px;
  transform: translateY(-50%);
}

.select_lang > .lang_btn.active::after {
  transform: rotate(180deg);
  top: 2px;
}

.select_lang > .lang_btn.invert::after {
  filter: invert(100%);
}

.lang_list {
  width: 142px;
  height: 103px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid #000;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 33px;
  left: 50%;
  transform: translateX(-50%);
}

.lang_list li {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.lang_list li:hover {
  background: rgba(219, 219, 219, 0.5);
}

.lang_list li a {
  font-size: 14px;
  font-weight: bold;
  padding: 12px 16px;
  color: #000;
}

.gnb_Saw {
  background: #fff;
  width: 28px;
  height: 28px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 50px;
}

.gnb_Saw i {
  color: #000;
  font-weight: bold;
  font-style: normal;
  font-size: 14px;
}

.gnb_Saw.sub_on {
  background: #000;
}

.gnb_Saw i.sub_on {
  color: #fff;
}

.gnb_search {
  outline: none;
  border: none;
  font-size: 0;
  background: url(../../assets/img/common/search-white.svg) no-repeat;
  width: 36px;
  height: 36px;
  cursor: pointer;
}

.gnb_search.sub_on {
  filter: invert(100%);
}
</style>
