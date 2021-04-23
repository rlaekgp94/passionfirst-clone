<template>
  <div id="app">
    <Header />
<<<<<<< HEAD
    <MainColor />
    <MainBusiness />
    <MainBusinessSlide />
=======
    <TheMain />
>>>>>>> dba18464f557609e2bb2c075bb01373b3f39949a
    <Footer />
    <ScrollBar />
  </div>
</template>
<<<<<<< HEAD
=======
<style>
/*미리보기용 css*/
#app {
  height: 300vh;
  background: linear-gradient(
    rgba(83, 128, 196, 0.856),
    rgba(181, 161, 255, 0.39)
  );
  position: relative;
}

footer {
  position: absolute;
  bottom: 0;
  left: 0;
}
html {
  scroll-behavior: smooth;
}
</style>
>>>>>>> dba18464f557609e2bb2c075bb01373b3f39949a
<script>
import Header from "./components/common/header.vue";
import MainColor from "./layout/MainColor.vue";
import MainBusiness from "./layout/MainBusiness.vue";
import MainBusinessSlide from "./layout/MainBusinessSlide.vue";
import Footer from "./components/common/footer.vue";
import ScrollBar from "./components/common/scrollbar.vue";
import TheMain from "./layout/TheMain";

export default {
  name: "app",
  components: {
    Header,
    MainColor,
    MainBusiness,
    MainBusinessSlide,
    Footer,
    ScrollBar,
    TheMain
  }
};
</script>
<style>
/*미리보기용 css*/
#app {
  /* height: 200vh;
  background: linear-gradient(
    rgba(83, 128, 196, 0.856),
    rgba(181, 161, 255, 0.39)
  );
  position: relative; */
}

footer {
  /* position: absolute;
  bottom: 0;
  left: 0; */
  padding-top: 280px;
}
</style>
<style src="./assets/css/reset.css"></style>
