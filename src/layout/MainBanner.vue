<template>
  <div id="mainBanner">
    <div class="inner">
      <BaseSearchBar />
      <i class="recommend-tit">추천 검색어</i>
      <p class="recommend-txt">
        <a href="#">#안심닥터</a><a href="#">#그린방수마스터</a>
        <a href="#">#아이럭스</a> <a href="#">#아이생각</a>
      </p>
    </div>
  </div>
</template>
<script>
import BaseSearchBar from "@/components/BaseSearchBar";
export default {
  components: {
    BaseSearchBar
  },
  setup() {}
};
</script>
<style scoped>
#mainBanner {
  position: relative;
  display: inline-block;
  width: 100%;
  height: 480px;
  text-align: center;
  background-size: cover;
  background-image: url("https://www.samhwa.com/resources/images/contents/main/img-search.jpg");
}
#mainBanner .inner {
  position: absolute;
  display: inline-block;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 880px;
}
.recommend-tit {
  display: block;
  margin-top: 40px;
  color: white;
  font-family: "Noto Sans KR";
  font-size: 16px;
  line-height: 1.5;
  font-weight: normal;
  font-style: normal;
  text-align: left;
}
.recommend-txt {
  display: block;
  margin-top: 16px;
  color: white;
  font-family: "Noto Sans KR";
  font-size: 24px;
  line-height: 1.67;
  font-weight: normal;
  text-align: left;
}
</style>
