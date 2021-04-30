<template>
  <div class="color_fullscreen_wrap">
    <ul class="color_fullscreen">
      <li class="color_background" :style="{ background: color.colorRgbCode }">
        color background
      </li>
      <li class="color_info_wrap">
        <ul class="color_info">
          <li class="color_name">
            <p>{{ color.colorName }}</p>
            <span>{{ color.colorCode }}</span>
          </li>

          <li>
            <div class="color_infobtn">
              <button type="button" class="infobtn_copy">
                컬러코드 복사하기
              </button>
              <button type="button" class="infobtn_pin">
                구매 가능한 대리점 보기
              </button>
            </div>
          </li>
          <!-- color_inforbtn -->
        </ul>
      </li>
      <!-- color_info -->
    </ul>
    <!-- color_fullscreen -->
    <button
      type="button"
      class="fullscreen_closebtn"
      @click="$emit('close', true)"
    ></button>
  </div>
  <!-- color_fullscreen_wrap -->
</template>
<script>
export default {
  props: {
    color: Object
  }
};
</script>
<style scoped>
.color_fullscreen_wrap {
  top: 0px;
  left: 0;
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 20;
}

.fullscreen_closebtn {
  position: absolute;
  top: 50px;
  right: 50px;
  width: 25px;
  height: 25px;
  background: url(../../assets/img/icon/icon-close.png) no-repeat center /
    contain;
  border: none;
  outline: none;
  cursor: pointer;
}

.color_fullscreen {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

.color_fullscreen > .color_background {
  background: red;
  height: 100vh;
  font-size: 0;
}

.color_info_wrap {
  background: #fff;
  height: 60px;
}

.color_info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}

.color_name {
  padding-left: 20px;
  height: 24px;
  line-height: 24px;
}

.color_name p {
  float: left;
  padding-right: 30px;
  font-size: 24px;
  font-weight: bold;
}

.color_name span {
  font-size: 18px;
}

.color_infobtn button {
  padding: 0 20px 0 35px;
  height: 36px;
  line-height: 36px;
  float: left;
  padding-right: 30px;
  font-size: 16px;
  font-weight: bold;
  outline: none;
  border: none;
  background: none;
}

.infobtn_copy {
  position: relative;
  cursor: pointer;
}

.infobtn_pin {
  position: relative;
  cursor: pointer;
}

.infobtn_copy::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  background: url(../../assets/img/icon/icon-pop-copy.svg) no-repeat;
  width: 24px;
  height: 24px;
}

.infobtn_pin::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  background: url(../../assets/img/icon/icon-pop-pin.svg) no-repeat;
  width: 24px;
  height: 24px;
}
</style>
