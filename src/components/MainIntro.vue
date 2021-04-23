<template>
  <div id="mainIntro">
    <ul id="mainBanner">
      <li class="banner-items ">
        <img
          src="https://www.samhwa.com/files/banner/1610934845726_banner_3-min.jpg"
        />
      </li>
      <li class="banner-items fade-in-active">
        <img
          src="https://www.samhwa.com/files/banner/1614317261744_[Final]%EC%95%88%EC%8B%AC%EB%8B%A5%ED%84%B0%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80%EB%B0%B0%EB%84%88_byleM.jpg"
        />
      </li>
      <li class="banner-items fade-in-active">
        <img
          src="https://www.samhwa.com/files/banner/1610935038284_banner_2-min.jpg"
        />
      </li>
    </ul>
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
      winScroll: "",
      mainBannerOffset: "",
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
            document //배너 텍스트 이동
              .getElementsByClassName("banner-items")
              [i + 3].classList.remove("fade-in-active");

            document //배너 이미지 이동
              .getElementsByClassName("banner-items")
              [i].classList.remove("fade-in-active");

            document //배너 네비게이션 이동
              .getElementById("bannerNationDots")
              .querySelectorAll("i")
              [i].classList.remove("active");
          }
          if (this.fadeInItem[i] === true) {
            document
              .getElementsByClassName("banner-items")
              [i + 3].classList.add("fade-in-active");

            document
              .getElementsByClassName("banner-items")
              [i].classList.add("fade-in-active");

            document
              .getElementById("bannerNationDots")
              .querySelectorAll("i")
              [i].classList.add("active");
          }
        }
      }
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  mounted() {
    let thisComponent = this;
    this.mainBannerOffset = $("#mainBannerSearch").offset();
    this.bannerChange(0);
  },
  methods: {
    handleScroll(event) {
      //스크롤에 따른 메인 화면 배너 핸들링
      console.log(this.mainBannerOffset);
      this.winScroll = window.pageYOffset;
      const thisComponent = this;
      if (this.winScroll > 10 && this.winTransion === true) {
        if (this.winNow === 1) {
          window.scrollTo(0, 924);
          this.winNow++;
          this.winTransion = false;
          setTimeout(function() {
            //연속되는 이동 오류 수정
            thisComponent.winTransion = true;
          }, 1000);
        } else if (this.winNow === 2) {
          if (this.winScroll < 924) {
            window.scrollTo(0, -924);
            this.winNow--;
          } else {
            this.winNow++;
          }

          this.winTransion = false;
          setTimeout(function() {
            //연속되는 이동 오류 수정
            thisComponent.winTransion = true;
          }, 1000);
        } else {
          if (this.winScroll < 924) {
            this.winNow--;
            this.winTransion = false;
            setTimeout(function() {
              //연속되는 이동 오류 수정
              thisComponent.winTransion = true;
            }, 1000);
          }
        }
      }
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
  width: 100%;
  height: 2000px;
  background: white;
}
#mainIntro #mainBanner {
  position: fixed;
  width: 100%;
  height: 2000px;
}
#mainIntro #mainBanner > li {
  position: absolute;
  width: 100vw;
  height: 100vh;
}
#mainIntro #mainBanner > li > img {
  width: 100%;
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
  background: transparent;
  border: solid red 1px;
  margin: 0 auto;
  z-index: 2;
}
/* 텍스트 */
#mainBannerText {
  position: relative;
  width: 100%;
  height: 100vh;
  border: solid green 1px;
}
#mainBannerText #mainBannerTextItems {
  position: relative;
}
#mainBannerText > #mainBannerTextItems li {
  position: absolute;
  width: 100vw;
  height: 100vh;
}
#mainBannerSearch {
  position: relative;
  width: 100%;
  height: 100vh;
  border: pink solid 1px;
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
/* a-style button-style*/
a {
  color: #fff;
  text-decoration: none;
  outline: none;
}
a:hover,
a:active {
  text-decoration: none;
  color: #fff;
}
button {
  background: inherit;
  border: none;
  box-shadow: none;
  border-radius: 0;
  padding: 0;
  overflow: visible;
  cursor: pointer;
}
button:focus {
  border: none;
  outline: none;
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
#mainBannerSearchContainer {
  position: absolute;
  top: 50%;
  left: 40px;
  transform: translateY(-50%);
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
