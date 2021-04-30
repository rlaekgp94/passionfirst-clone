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
