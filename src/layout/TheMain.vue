<template>
  <div id="theMain">
    <MainIntro />
    <MainIssue />
    <MainColor />
    <MainBusiness />
    <MainBusinessSlide />
    <MainBanner />
  </div>
</template>
<script>
import MainIntro from "@/layout/MainIntro";
import MainIssue from "@/layout/MainIssue";
import MainColor from "@/layout/MainColor";
import MainBusiness from "@/layout/MainBusiness";
import MainBusinessSlide from "@/layout/MainBusinessSlide";
import MainBanner from "@/layout/MainBanner";

export default {
  data() {
    return {};
  },
  components: {
    MainIntro,
    MainIssue,
    MainColor,
    MainBusiness,
    MainBusinessSlide,
    MainBanner
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
