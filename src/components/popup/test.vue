<template>
  <div class="test_wrap">
    <div class="test">
      <p>{{ test }}</p>
      <button @click="test"></button>
      <p>안녕</p>
      <p>ㅎㅇ</p>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      colorName: null,
      colorCode: null
    };
  },
  methods: {
    test() {
      axios
        .get("http://localhost:8081/static/color.json")
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        })
        .then(() => {
          console.log("test");
        });

      // .then(response => (
      //   this.items = response));
    }
  }
};
</script>
<style scoped>
.test_wrap {
  width: 100%;
  height: 100vh;
  background: darkgreen;
  display: flex;
  justify-content: center;
  align-items: center;
}

.test {
  width: 500px;
  height: 500px;
  border: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.test button {
  background: rebeccapurple;
  width: 200px;
  height: 50px;
  color: #fff;
  margin-top: 30px;
}
</style>
