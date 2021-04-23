<template>
  <section id="mainColor">
    <transition name="fade">
      <FullScreenColor
        v-if="FullScreenColor === true"
        @close="colorFullScreenCloseActive"
    /></transition>
    <div class="maincolor_wrap">
      <h2>Color Inspiration</h2>
      <p>
        집콕 라이프를 유익하게 만들어 줄<br />
        블루톤 컬러로 인테리어에 변화를 주세요
      </p>
      <div class="maincolor_content">
        <a href="#"
          ><img
            src="../assets\img\thumbnail/maincolor-img.jpg"
            alt="maincolorimg"/></a
        ><!-- 후에 a태그에 color서브페이지 연결 -->
        <a href="#" class="maincolor_find">Find a Store</a
        ><!-- a태그 비워둠표시 customer서브페이지 연결 -->
        <ul class="maincolor_list_wrap">
          <li class="maincolor_list_inner colorhover_element">
            <div class="maincolor_list_info">
              <span><ColorPopBtn @child="colorFullScreenActive"/></span>
              <p>Teal Blue</p>
              <i>SH S 5040-B (0153D)</i>
            </div>
          </li>
          <li class="maincolor_list_inner colorhover_element">
            <div class="maincolor_list_info">
              <span><ColorPopBtn /></span>
              <p>Provence Blue</p>
              <i>SH S 3020-B (0088D)</i>
            </div>
          </li>
          <li class="maincolor_list_inner colorhover_element">
            <div class="maincolor_list_info">
              <span><ColorPopBtn /></span>
              <p>Gray Blue</p>
              <i>SH S 2020-R90B (0087C)</i>
            </div>
          </li>
          <li class="maincolor_list_inner colorhover_element">
            <div class="maincolor_list_info">
              <span><ColorPopBtn /></span>
              <p>TWinter Sky</p>
              <i>SH S 1510-R90B (0087B)</i>
            </div>
          </li>
        </ul>
        <!-- maincolor_list -->
      </div>
      <!-- maincolor_content -->
    </div>
    <!-- maincolor_wrap -->
  </section>
  <!-- maincolor -->
</template>

<script>
import ColorPopBtn from "../components/button/ColorPopBtn";
import FullScreenColor from "../components/popup/FullScreenColor";
import colorList from "../assets/data/colorList.json";
export default {
  name: "MainColor",
  data() {
    return {
      colorList: colorList,
      FullScreenColor: false,
      colorCodeCopyListBtn: false
    };
  },
  methods: {
    colorFullScreenActive: function(val) {
      console.log(val);
      this.FullScreenColor = val;
    },
    colorFullScreenCloseActive: function(val) {
      console.log(val);
      this.FullScreenColor = false;
    }
  },
  watch: {
    popUnScroll: function(val) {
      if ("colorFullScreenActive") {
        this.unScroll = val;
      }
    }
  },
  components: {
    ColorPopBtn,
    FullScreenColor
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500&display=swap");
#mainColor {
  margin-top: 95px; /* 미리보기용 */
  width: 100%;
  height: 2032px;
  background: url(../assets/img/background/maincolor-bg.jpg) no-repeat center /
    cover;
  background-attachment: fixed;
  font-family: "Noto", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* .maincolor_wrap */
.maincolor_wrap {
  width: 1180px;
  height: 1716px;
  position: relative;
}
.maincolor_wrap h2 {
  font-size: 135px;
  padding: 0 0 288px;
  text-align: center;
  color: #fff;
  font-family: "Playfair Display", serif;
  font-weight: 500;
}
.maincolor_wrap > p {
  position: absolute;
  top: 232px;
  left: 200px;
  letter-spacing: -1px;
  font-size: 20px;
  line-height: 1.8em;
  color: #fff;
}

/* maincolor_content */
.maincolor_content {
  position: relative;
  height: 1000px;
}
.maincolor_content a img {
  width: 580px;
  position: absolute;
  top: 0;
  left: 0;
}

.maincolor_find {
  color: #fff;
  font-size: 24px;
  position: absolute;
  top: 950px;
  left: 200px;
  height: 30px;
  line-height: 30px;
  padding-left: 32px;
}

.maincolor_find::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  background: url(../assets/img/icon/icon-pin.svg) no-repeat;
  width: 24px;
  height: 24px;
}

/* maincolor_list */
.maincolor_list_wrap {
  width: 700px;
  height: 913px;
  position: absolute;
  top: 200px;
  right: -100px;
  overflow: hidden;
}
.maincolor_list_inner {
  width: 350px;
  height: 426px;
  position: relative;
  float: left;
}

.maincolor_list_inner:first-child {
  margin-top: 120px;
}
.maincolor_list_inner:nth-child(2) {
  position: absolute;
  top: 0;
  right: 0;
}

.maincolor_list_inner:nth-child(3) {
  clear: both;
}

.maincolor_list_inner:nth-child(4) {
  position: absolute;
  top: 426px;
  right: 0;
}

.maincolor_list_info {
  width: 282px;
  height: 358px;
  background: #fff;
  position: absolute;
  top: 0;
  right: 0;
  padding: 4px;
}

.maincolor_list_info span {
  width: 282px;
  height: 272px;
  display: block;
  position: relative;
}

.maincolor_list_inner:first-child span {
  background: #005171;
}
.maincolor_list_inner:nth-child(2) span {
  background: #7e9aaa;
}
.maincolor_list_inner:nth-child(3) span {
  background: #98b2c6;
}
.maincolor_list_inner:nth-child(4) span {
  background: #bdc8d2;
}

.maincolor_list_info p {
  font-size: 20px;
  font-weight: bold;
  padding: 12px 12px 0;
  line-height: 30px;
}
.maincolor_list_info i {
  font-size: 14px;
  font-style: normal;
  font-weight: 100;
  padding: 4px 12px 20px;
  line-height: 30px;
  letter-spacing: -0.5px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
