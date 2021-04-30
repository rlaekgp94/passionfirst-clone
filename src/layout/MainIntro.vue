<template>
  <div v-on:scroll="handleScroll()" id="mainIntro">
    <div id="mainBanner">
      <div
        class="banner-items"
        style="background-image: URL(https://www.samhwa.com/files/banner/1610934845726_banner_3-min.jpg);"
      />
      <div
        class="banner-items fade-in-active"
        style="background-image: URL(https://www.samhwa.com/files/banner/1614317261744_[Final]%EC%95%88%EC%8B%AC%EB%8B%A5%ED%84%B0%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80%EB%B0%B0%EB%84%88_byleM.jpg);"
      />
      <div
        class="banner-items fade-in-active"
        style="background-image: URL(https://www.samhwa.com/files/banner/1610935038284_banner_2-min.jpg);"
      />
    </div>
    <div id="mainBannerShow">
      <div id="mainBannerText">
        <ul id="mainBannerTextItems">
          <li class="banner-items fade-in-active">
            <dl class="banner-text-title">
              <dt>WORLD STAIN</dt>
              <dd>
                생활방수, 이지클리닝 기능을 더한<br />
                벽면/가구용 페인트
              </dd>
              <dd><a href="#" class="more-text-button">자세히 보기</a></dd>
            </dl>
          </li>
          <li class="banner-items">
            <dl class="banner-text-title">
              <dd><a href="#" class="more-text-button">자세히 보기</a></dd>
            </dl>
          </li>
          <li class="banner-items">
            <dl class="banner-text-title">
              <dt>All New iLux</dt>
              <dd>
                목재용 No.1 오일 스테인<br />
                월드스테인 마스터
              </dd>
              <dd><a href="#" class="more-text-button">자세히 보기</a></dd>
            </dl>
          </li>
        </ul>
        <div id="bannerNationDots">
          <i class="active"> <button @click="bannerChange(0)">1</button></i>
          <i><button @click="bannerChange(1)">2</button></i>
          <i><button @click="bannerChange(2)">3</button></i>
        </div>
      </div>
      <div id="mainBannerSearch">
        <div id="mainBannerSearchContainer">
          <h3>무엇을 찾으시나요?</h3>
          <BaseSearchBar />
          <h5 class="recommend_tit">추천검색어</h5>
          <p class="recommend_txt">
            #안심닥터 #그린방수마스터 #아이럭스 #아이생각
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BaseSearchBar from "@/components/BaseSearchBar";
import $ from "jquery";
export default {
  data() {
    return {
      fadeInItem: [true, false, false],
      show: 0,
      intervalMounted: false,
      intervalFunction: "",
      mounseScrollVal: 0,
      winScroll: 0,
      mainBannerHeight: "",
      winNow: 1,
      winTransion: true
    };
  },
  components: {
    BaseSearchBar
  },
  watch: {
    fadeInItem: {
      deep: true,
      handler() {
        for (let i = 0; i < 3; i++) {
          if (this.fadeInItem[i] === false) {
            document
              .getElementsByClassName("banner-items")
              [i + 3].classList.remove("fade-in-active");

            document
              .getElementsByClassName("banner-items")
              [i].classList.remove("fade-in-active");

            document
              .getElementById("bannerNationDots")
              .querySelectorAll("i")
              [i].classList.remove("active");
          }
          if (this.fadeInItem[i] === true) {
            document //배너 텍스트 이동
              .getElementsByClassName("banner-items")
              [i + 3].classList.add("fade-in-active");

            document //배너 이미지 이동
              .getElementsByClassName("banner-items")
              [i].classList.add("fade-in-active");

            document //배너 네비게이션 이동
              .getElementById("bannerNationDots")
              .querySelectorAll("i")
              [i].classList.add("active");
          }
        }
      }
    }
  },
  created() {},
  destroyed() {
    //window.removeEventListener("scroll", this.handleScroll);
  },
  mounted() {
    let thisComponent = this;
    window.addEventListener(
      "wheel",
      function(e) {
        thisComponent.handleScroll(e);
      },
      { passive: false }
    );
    //$(window).on("mousewheel DOMMouseScroll",
    this.bannerChange(0);
  },
  methods: {
    handleScroll(e) {
      //스크롤에 따른 메인 화면 배너 핸들링
      this.winScroll = window.pageYOffset;

      if (this.winScroll >= 0 && this.winTransion == true) {
        if (this.winNow === 1) {
          window.scrollTo(0, this.mainBannerHeight);
          e.preventDefault();
          this.winNow++;
          this.winTransion = false;
          this.scrollAciveOn();
        } else if (this.winNow === 2) {
          this.mainBannerHeight = window.document.getElementById(
            "mainBannerText"
          ).clientHeight;
          e.preventDefault();
          if (this.winScroll < this.mainBannerHeight) {
            window.scrollTo(0, -this.mainBannerHeight);
            this.winNow--;
          } else {
            this.winNow++;
          }
          this.winTransion = false;
          this.scrollAciveOn();
        } else {
          if (this.winScroll < 924) {
            this.winNow--;
            this.winTransion = false;

            this.scrollAciveOn();
          }
        }
      }
    },
    scrollAciveOn: function() {
      setTimeout(function() {
        //연속되는 이동 오류 수정
        this.winScroll = window.pageYOffset;
        this.winTransion = true;
      }, 3000);
    },
    bannerTrans: function(nowData) {
      for (let i = 0; i < this.fadeInItem.length; i++) {
        this.$set(this.fadeInItem, i, false);
      }
      this.show = nowData;
      this.$set(this.fadeInItem, this.show, true);
    },
    bannerChange: function(listIndex) {
      let IndexChange = listIndex;
      this.intervalMounted = false;
      clearInterval(this.intervalFunction);

      for (let i = 0; i < this.fadeInItem.length; i++) {
        this.$set(this.fadeInItem, i, false);
      }

      this.show = IndexChange;
      this.$set(this.fadeInItem, this.show, true);

      var thisComponent = this;

      this.intervalFunction = setInterval(function() {
        if (!thisComponent.intervalMounted) {
          for (let i = 0; i < thisComponent.fadeInItem.length; i++) {
            thisComponent.$set(thisComponent.fadeInItem, i, false);
          }
          thisComponent.show++;
          if (thisComponent.show === 3) {
            thisComponent.show = 0;
          }
        }
        thisComponent.$set(thisComponent.fadeInItem, thisComponent.show, true);
      }, 5000);
    }
  }
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&family=Playfair+Display:wght@400;500&display=swap");
#mainIntro {
  position: relative;
  width: 100%;
  height: 100%;
  background: white;
}
#mainIntro #mainBanner {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
#mainIntro #mainBanner > div {
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center top;
  background-attachment: fixed;
}

.banner-items {
  width: 100%;
  height: 100vh;
  opacity: 0;
  transition: opacity 1s ease;
}
.banner-items.fade-in-active {
  opacity: 1;
}
#mainBannerShow {
  position: relative;
  width: 1400px;
  height: auto;
  background: transparent;

  margin: 0 auto;
  z-index: 2;
}
/* 텍스트 */
#mainBannerText {
  position: relative;
  width: 100%;
  height: 100vh;
}
#mainBannerText #mainBannerTextItems {
  position: relative;
}
#mainBannerText > #mainBannerTextItems li {
  position: absolute;
  width: 100vw;
  height: 100vh;
}

/* text Items */
.banner-text-title {
  padding-top: 400px;
  padding-left: 40px;
  color: white;
}
.banner-text-title > dt {
  font-family: "Playfair Display", serif;
  line-height: 1.19;
  letter-spacing: -0.5px;
  font-size: 108px;
}
.banner-text-title > dd {
  padding-top: 60px;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.67;
  letter-spacing: -1px;
}

.banner-text-title .more-text-button {
  font-size: 18px;
  cursor: pointer;
}
#mainBannerTextItems > .banner-items:nth-of-type(2) {
  padding-top: 200px;
  vertical-align: top;
}
/* bannerNation */
#bannerNationDots {
  position: absolute;
  bottom: 100px;
  left: 60px;
}

#bannerNationDots i {
  margin-right: 20px;
  width: 70px;
  height: 70px;
  padding: 10px;
  background-color: transparent;
  border-radius: 50%;
  border: 2px solid transparent;
  transition: boder 0.5 ease;
}
#bannerNationDots i.active {
  border: 2px solid white;
}

#bannerNationDots > i > button {
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 50%;
}
#mainBannerSearch {
  position: relative;
  padding-top: 428px;
  width: 100%;
  height: 652px;
}
#mainBannerSearchContainer {
  position: relative;

  left: 40px;
  color: white;
  font-family: "Noto Sans KR";
}
#mainBannerSearchContainer h3 {
  font-size: 40px;
  line-height: 1.4;
  letter-spacing: -1.5px;
  font-weight: 500;
  margin-bottom: 40px;
}
#mainBannerSearchContainer .recommend_tit {
  margin-top: 40px;
  font-size: 16px;
  line-height: 1.5;
}
#mainBannerSearchContainer .recommend_txt {
  font-size: 24px;
  font-weight: 500;
  line-height: 1.67;
  letter-spacing: -1px;
}
</style>
