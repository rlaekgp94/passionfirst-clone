<template>
  <div id="theMain">
    <MainIntro />
    <MainColor />
    <MainBusiness />
    <MainBusinessSlide />
  </div>
</template>
<script>
import MainIntro from "@/layout/MainIntro";
import MainColor from "@/layout/MainColor";
import MainBusiness from "@/layout/MainBusiness";
import MainBusinessSlide from "@/layout/MainBusinessSlide";
export default {
  data() {
    return {};
  },
  components: {
    MainIntro,
    MainColor,
    MainBusiness,
    MainBusinessSlide
  }
};
</script>
<style scoped>
#theMain {
  position: relative;
  width: 100%;
  height: auto;
}
</style>
