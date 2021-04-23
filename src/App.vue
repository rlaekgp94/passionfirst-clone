<template>
  <div id="app">
    <Header />
    <TheMain />
    <Footer />
    <ScrollBar />
  </div>
</template>

<script>
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import ScrollBar from "@/components/common/Scrollbar";

import TheMain from "@/layout/TheMain";

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
<style>
/*미리보기용 css*/
#app {
  position: relative;
  background: linear-gradient(
    rgba(83, 128, 196, 0.856),
    rgba(181, 161, 255, 0.39)
  );
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
