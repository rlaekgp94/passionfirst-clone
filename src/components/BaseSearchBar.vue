<template>
  <input
    v-bind:value="value"
    placeholder="제품, 컬러, 대리점 검색"
    v-on:input="updateInput"
  />
</template>

<script>
export default {
  props: ["value"],
  methods: {
    updateInput: function(event) {
      if (event.target.value === " ") {
        // 공백 체크
        alert("해당 항목에는 공백을 사용할 수 없습니다.\n\n공백 제거됩니다.");
        event.target.focus();
        event.target.value = event.target.value.replace(" ", ""); // 공백 제거
        return false;
      }
      this.$emit("input", event.target.value);
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&family=Playfair+Display:wght@400;500&display=swap");
input {
  position: relative;
  width: 792px;
  height: 36px;
  line-height: 36px;
  padding: 16px;
  padding-left: 72px;
  background-color: white;
  border: NONE;
  color: #888;
  font-size: 24px;
  font-family: "Noto Sans KR";
  background-image: url("https://samhwa.com/resources/images/common/ic-search-24-inactive.svg");
  background-position-x: 20px;
  background-position-y: 24px;
  background-repeat: no-repeat;
}
</style>
