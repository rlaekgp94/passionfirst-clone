<template>
  <div id="app">
    <Header />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/common/header.vue";
import Footer from "./components/common/footer.vue";

export default {
  name: "app",
  components: {
    Header,
    Footer
  }
};
</script>
