<template>
  <div id="app">
    <Header />
    <MainColor />
    <MainBusiness />
    <MainBusinessSlide />
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
}
html {
  scroll-behavior: smooth;
}
.stop-scrolling {
  height: 100%;
}

/* a-style button-style*/
a {
  color: #fff;
  text-decoration: none;
  outline: none;
}
a:hover,
a:active {
  text-decoration: none;
  color: #fff;
}
button {
  background: inherit;
  border: none;
  box-shadow: none;
  border-radius: 0;
  padding: 0;
  overflow: visible;
  cursor: pointer;
}
button:focus {
  border: none;
  outline: none;
}
</style>
