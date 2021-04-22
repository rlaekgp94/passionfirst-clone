<template>
  <div id="app">
    <Header />
    <TheMain />
    <Footer />
    <ScrollBar />
  </div>
</template>
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
<script>
import Header from "./components/common/header.vue";
import Footer from "./components/common/footer.vue";
import ScrollBar from "./components/common/scrollbar.vue";
import TheMain from "./layout/TheMain";

export default {
  name: "app",
  components: {
    Header,
    Footer,
    ScrollBar,
    TheMain
  }
};
</script>
