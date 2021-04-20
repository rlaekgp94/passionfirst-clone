<template>
  <div id="app">
    <Header />
    <Footer />
    <ScrollBar />
  </div>
</template>
<style>
/*미리보기용 css*/
#app {
  height: 200vh;
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
</style>
<script>
import Header from "./components/common/header.vue";
import Footer from "./components/common/footer.vue";
import ScrollBar from "./components/common/scrollbar.vue";

export default {
  name: "app",
  components: {
    Header,
    Footer,
    ScrollBar
  }
};
</script>
