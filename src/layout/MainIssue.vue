<template>
  <section id="mainIssue">
    <div id="MainIssueInner">
      <h1 class="section-title">Hot Issue</h1>
      <p class="section-title-sub">
        트렌드부터 다양한 이슈 및 SNS,<br />삼화페인트의 모든 소식들을
        만나보세요.
      </p>
      <div class="inner">
        <div class="side-magazine">
          <div class="side-magazine-inner">
            <img
              src="https://www.samhwa.com/files/board/live/1608177749150_people_image37.jpg"
              alt="magazine"
            />
            <strong>2020 summer</strong>
            <a href="#"><span>PDF</span> 보기</a>
            <a href="#">사전 전체보기</a>
          </div>
        </div>
        <ul>
          <li
            v-for="(item, index) in issueItems"
            :class="item.class"
            :key="index"
          >
            <VmainIssueList :color="item.class" />
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script>
import VmainIssueList from "@/components/VmainIssueList";
import $ from "jquery";
export default {
  name: "MainIssue",
  setup() {},
  data() {
    return {
      winScroll: "",
      fixedActive: true,
      hotIssueTextBottom: "",
      opacityVal: 1,
      temp: 0,
      issueItems: [
        { class: "sns-item" },
        { class: "sns-item" },
        { class: "sns-item" },
        4,
        { class: "five-item" },
        6,
        7,
        8
      ]
    };
  },
  components: {
    VmainIssueList
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll: function() {
      // Mainbanner 스크롤 후 OPACITY 값 변경
      if (this.winScroll < 20) {
        this.opacityVal = 1;
      }
      if (this.winScroll > this.hotIssueTextBottom) {
        this.opacityVal = 0.5;
      }
      if (this.winScroll < 1500) {
        if (this.winScroll > this.temp) {
          this.opacityVal = this.opacityVal - 0.01;
        } else if (this.winScroll <= this.temp) {
          this.opacityVal = this.opacityVal + 0.01;
        }
        this.temp = this.winScroll; // 이전 스크롤 값 저장
      }

      this.winScroll = window.pageYOffset;
      console.log(this.opacityVal);
      this.hotIssueTextBottom = $(".section-title").offset();
      let mainColorTop = document.getElementById("mainColor").offsetTop;

      document.getElementById("mainBanner").style =
        "opacity:" + this.opacityVal;
      if (
        this.winScroll > this.hotIssueTextBottom.top + 140 &&
        mainColorTop > this.winScroll + window.innerHeight
      ) {
        document.getElementsByClassName("side-magazine")[0].style =
          "position: fixed; top: 80px; left: 50%; margin-left: -590px;";
        this.fixedActive = false;

        console.log("change fixed");
      } else if (this.winScroll < this.hotIssueTextBottom.top + 140) {
        document.getElementsByClassName("side-magazine")[0].style = "";
      } else {
        document.getElementsByClassName("side-magazine")[0].style =
          "position: absolute; bottom: 680px;  left: 50%; margin-left: -590px;";
      }
    }
  }
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&family=Playfair+Display:wght@400;500&display=swap");
#mainIssue {
  background-color: white;
  padding-top: 140px;
  padding-bottom: 30px;

  width: 100%;
  height: auto;
}
#MainIssueInner {
  position: relative;
  box-sizing: border-box;
  width: 1180px;
  height: auto;
  margin: 0 auto;
}
.inner {
  position: relative;
  box-sizing: border-box;
}
.inner ul {
  position: relative;
  padding-left: 180px;
  height: 2884px;
  width: 1000px;
}
.inner ul > li {
  width: 400px;
  padding-left: 100px;
  margin-bottom: 140px;
  display: inline-block;
  cursor: pointer;
  color: black;
}

li:nth-of-type(2n) {
  margin-top: -80px;
  float: right;
}
/* 카테고리별 li 스타일 */
.inner ul > li.sns-youtube {
}
.section-title {
  font-size: 80px;
  line-height: 1.2;
  font-family: "Playfair Display", serif;
  font-weight: 500;
}
.section-title-sub {
  position: relative;
  font-family: "Noto Sans KR";
  letter-spacing: -0.7px;
  font-size: 20px;
  line-height: 1.74;
  font-weight: normal;
  padding: 40px 0 0 200px;
  margin-bottom: 66px;
}
.side-magazine {
  position: absolute;
  width: 180px;
  height: 232px;
  left: 0px;
  margin-left: 0px;
  margin-top: 106px;
}
.side-magazine-inner {
  position: absolute;
  font-family: "Noto Sans KR";
}

.side-magazine-inner strong {
  font-size: 100%;
  font-size: 20px;
  font-weight: bold;
  line-height: 1.5;
  margin-top: 20px;
  margin-bottom: 10px;
  display: block;
}

.side-magazine-inner > a:nth-of-type(1) {
  display: block;
  font-size: 16px;
  line-height: 1.5;
  color: #000;
  font-weight: 300;
}

.side-magazine-inner > a:nth-of-type(1)::after {
  content: "";
  display: inline-block;
  position: relative;
  width: 16px;
  height: 16px;
  top: 5px;
  border-radius: 8px;
  line-height: 16px;
  font-size: 12px;
  margin-left: 5px;
  text-align: center;
  vertical-align: top;
  background-color: black;
  background-image: url("https://www.samhwa.com/resources/images/contents/main/icon-arrow-icon-north-east.svg");
  background-repeat: no-repeat;
  background-size: cover;
}
.side-magazine-inner > a:nth-of-type(1) > span {
  font-size: 14px;
  vertical-align: middle;
  font-weight: 500;
}
.side-magazine img {
  width: 100%;
}
.side-magazine-inner > a:nth-of-type(2) {
  display: block;
  margin-top: 30px;
  font-size: 12px;
}
</style>
