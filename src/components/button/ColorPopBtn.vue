<template>
  <div class="color_pop_btnwrap">
    <button type="button" class="color_popbtn color_copy"></button>
    <button type="button" class="color_popbtn color_fullScreen"></button>
  </div>
</template>
<style>
/* color_popbtn */

.color_pop_btnwrap {
  position: absolute;
  bottom: 15px;
  right: 15px;
}

.color_popbtn {
  width: 40px;
  height: 40px;
  background: #fff;
  border-radius: 50px;
  border: none;
  outline: none;
  position: relative;
  cursor: pointer;
}
.color_popbtn:first-child {
  margin-right: 7px;
}

.color_copy::before {
  width: 16px;
  height: 16px;
  background: url(../../assets/img/icon/icon-copy.svg) no-repeat;
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.color_fullScreen::before {
  width: 16px;
  height: 16px;
  background: url(../../assets/img/icon/icon-fullscreen.svg) no-repeat;
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.color_copy {
  animation: popBtnFade 0.3s ease;
}
.color_fullScreen {
  animation: popBtnFade-delay 0.5s ease;
}

@keyframes popBtnFade {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }

  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes popBtnFade-delay {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }

  to {
    opacity: 1;
    transform: none;
  }
}
</style>

<script>
import $ from "jquery";
export default {
  name: "ColorPopBtn",
  mounted() {
    let popBtnAll = $(".color_pop_btnwrap"),
      popBtn = $(".color_popbtn");

    popBtnAll.hide();
    $(".colorhover_element").hover(
      function() {
        popBtnAll.show();
      },
      function() {
        popBtnAll.hide();
      }
    );
  }
};
</script>
