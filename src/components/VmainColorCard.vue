<template>
  <div class="maincolor_list_info">
    <transition name="fade">
      <FullScreenColor
        v-if="FullScreenColor === true"
        @close="colorFullScreenCloseActive"
        :color="color"
    /></transition>

    <span :style="{ background: color.colorRgbCode }">
      <ColorPopBtn @child="colorFullScreenActive" :color="color" />
    </span>

    <p>
      {{ color.colorName }}
    </p>
    <i>{{ color.colorCode }} </i>
  </div>
</template>
<script>
import $ from "jquery";
import ColorPopBtn from "../components/button/ColorPopBtn";
import FullScreenColor from "../components/popup/FullScreenColor";

export default {
  data() {
    return {
      FullScreenColor: false,
      colorCodeCopyListBtn: false,
      colorName: "",
      colorCode: ""
    };
  },
  props: {
    color: Object,
    index: Number
  },
  methods: {
    colorFullScreenActive: function(val) {
      this.FullScreenColor = val;
      document.querySelector("body").style.overflow = "hidden";
    },
    colorFullScreenCloseActive: function(val) {
      $(".color_pop_btnwrap").hide();
      this.FullScreenColor = false;
      document.querySelector("body").style.overflow = "visible ";
    }
  },
  components: {
    ColorPopBtn,
    FullScreenColor
  }
};
</script>
<style scoped>
.maincolor_list_info {
  width: 282px;
  height: 358px;
  position: absolute;
  top: 0;
  left: 0;
  padding: 4px;
}

.maincolor_list_info span {
  width: 282px;
  height: 272px;
  display: block;
  position: relative;
  background-color: rgb(85, 0, 119); /*임시컬러*/
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
