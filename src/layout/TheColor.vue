<template>
  <section id="theColor">
    <div class="thecolor_wrap">
      <h2>Color Inspiration</h2>
      <p>
        집콕 라이프를 유익하게 만들어 줄<br />
        블루톤 컬러로 인테리어에 변화를 주세요
      </p>
      <div class="thecolor_content">
        <a href="#"
          ><img
            src="../assets\img\thumbnail/theColor-img.jpg"
            alt="theColorimg"/></a
        ><!-- 후에 a태그에 color서브페이지 연결 -->
        <a href="#" class="thecolor_find">Find a Store</a
        ><!-- a태그 비워둠표시 customer서브페이지 연결 -->
        <ul class="thecolor_list_wrap">
          <li class="thecolor_list_inner colorhover_element">
            <div class="thecolor_list_info">
              <span><ColorPopBtn /></span>
              <p>Teal Blue</p>
              <i>SH S 5040-B (0153D)</i>
            </div>
          </li>
          <li class="thecolor_list_inner colorhover_element">
            <div class="thecolor_list_info">
              <span><ColorPopBtn /></span>
              <p>Provence Blue</p>
              <i>SH S 3020-B (0088D)</i>
            </div>
          </li>
          <li class="thecolor_list_inner colorhover_element">
            <div class="thecolor_list_info">
              <span><ColorPopBtn /></span>
              <p>Gray Blue</p>
              <i>SH S 2020-R90B (0087C)</i>
            </div>
          </li>
          <li class="thecolor_list_inner colorhover_element">
            <div class="thecolor_list_info">
              <span><ColorPopBtn /></span>
              <p>TWinter Sky</p>
              <i>SH S 1510-R90B (0087B)</i>
            </div>
          </li>
        </ul>
        <!-- thecolor_list -->
      </div>
      <!-- thecolor_content -->
    </div>
    <!-- thecolor_wrap -->
  </section>
  <!-- theColor -->
</template>

<style src="../assets/css/reset.css"></style>
<style>
/* Noto */
@font-face {
  font-family: "Noto", sans-serif;
  font-style: normal;
  font-weight: 500;
  src: url("../assets/font/NotoSansKR-Medium.otf");
}

#theColor {
  margin-top: 95px; /* 미리보기용 */
  width: 100%;
  height: 2032px;
  background: url(../assets/img/background/theColor-bg.jpg) no-repeat center /
    cover;
  background-attachment: fixed;
  font-family: "Noto", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* .thecolor_wrap */
.thecolor_wrap {
  width: 1180px;
  height: 1716px;
  position: relative;
}
.thecolor_wrap h2 {
  font-size: 144px;
  padding: 0 0 288px;
  text-align: center;
  color: #fff;
}
.thecolor_wrap > p {
  position: absolute;
  top: 232px;
  left: 200px;
  letter-spacing: -1px;
  font-size: 20px;
  line-height: 1.8em;
  color: #fff;
}

/* thecolor_content */
.thecolor_content {
  position: relative;
  height: 1000px;
}
.thecolor_content a img {
  width: 580px;
  position: absolute;
  top: 0;
  left: 0;
}

.thecolor_find {
  color: #fff;
  font-size: 24px;
  position: absolute;
  top: 950px;
  left: 200px;
  height: 30px;
  line-height: 30px;
  padding-left: 32px;
}

.thecolor_find::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  background: url(../assets/img/icon/icon-pin.svg) no-repeat;
  width: 24px;
  height: 24px;
}

/* thecolor_list */
.thecolor_list_wrap {
  width: 700px;
  height: 913px;
  position: absolute;
  top: 200px;
  right: -100px;
  overflow: hidden;
}
.thecolor_list_inner {
  width: 350px;
  height: 426px;
  position: relative;
  float: left;
}

.thecolor_list_inner:first-child {
  margin-top: 120px;
}
.thecolor_list_inner:nth-child(2) {
  position: absolute;
  top: 0;
  right: 0;
}

.thecolor_list_inner:nth-child(3) {
  clear: both;
}

.thecolor_list_inner:nth-child(4) {
  position: absolute;
  top: 426px;
  right: 0;
}

.thecolor_list_info {
  width: 282px;
  height: 358px;
  background: #fff;
  position: absolute;
  top: 0;
  right: 0;
  padding: 4px;
}

.thecolor_list_info span {
  width: 282px;
  height: 272px;
  display: block;
  position: relative;
}

.thecolor_list_inner:first-child span {
  background: #005171;
}
.thecolor_list_inner:nth-child(2) span {
  background: #7e9aaa;
}
.thecolor_list_inner:nth-child(3) span {
  background: #98b2c6;
}
.thecolor_list_inner:nth-child(4) span {
  background: #bdc8d2;
}

.thecolor_list_info p {
  font-size: 20px;
  font-weight: bold;
  padding: 12px 12px 0;
  line-height: 30px;
}
.thecolor_list_info i {
  font-size: 14px;
  font-style: normal;
  font-weight: 100;
  padding: 4px 12px 20px;
  line-height: 30px;
  letter-spacing: -0.5px;
}
</style>
<script>
import ColorPopBtn from "../components/button/ColorPopBtn.vue";
export default {
  name: "TheColor",
  data() {
    return {
      fullScreenColorList: ["#005171", "#7e9aaa", "#98b2c6", "#bdc8d2"],
      fullScreenColorName: [
        "Teal Blue",
        "Provence Blue",
        "Gray Blue",
        "TWinter Sky"
      ],
      fullScreenColorBtn: false,
      colorCodeCopyList: [
        "SH S 2020-R90B",
        "SH S 3020-B (0088D)",
        "SH S 2020-R90B (0087C)",
        "SH S 1510-R90B (0087B)"
      ],
      colorCodeCopyListBtn: false
    };
  },
  components: {
    ColorPopBtn
  }
};
</script>
