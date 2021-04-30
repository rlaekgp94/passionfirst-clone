<template>
  <section id="mainColor">
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
            alt="maincolorimg"
        /></a>
        <a href="#" class="maincolor_find">Find a Store</a>
        <ul class="maincolor_list_wrap">
          <li
            v-for="(item, index) in colorItems"
            :key="index"
            class="colorhover_element maincolor_list_inner"
          >
            <!-- 2] 자식 컴포넌트로 list에서 받아온 순차적으로 item을 넘김 -->
            <VmainColorCard :color="item" :index="index" />
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
import VmainColorCard from "@/components/VmainColorCard";
import colorList from "@/assets/data/color.json";
import axios from "axios";

export default {
  data() {
    return {
      colorItems: colorList.color
    };
  },
  mounted() {
    // axios
    //   .get("http://localhost:8080/static/color.json")
    //   .then(res => {
    //     this.colorItems = res.data.color;
    //   })
    //   .catch(err => {
    //     console.log("에러내용 : " + err);
    //   });
  },
  components: {
    VmainColorCard
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500&display=swap");
#mainColor {
  margin-top: 95px;
  width: 100%;
  height: 2032px;
  background: url(../assets/img/background/maincolor-bg.jpg) no-repeat center /
    cover;
  background-attachment: fixed;
  font-family: "Noto Sans KR", sans-serif;
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
  width: 640px;
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
  right: -60px;
}

.maincolor_list_inner:nth-child(3) {
  clear: both;
}

.maincolor_list_inner:nth-child(4) {
  position: absolute;
  top: 426px;
  right: -60px;
}
</style>
