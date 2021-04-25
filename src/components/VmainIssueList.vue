<template>
  <a href="https://youtu.be/ohg6s-QtIZ8" id="mainIssueList">
    <div class="img-wrap">
      <img
        class="issue-image"
        :src="
          'https://www.samhwa.com/files/hotissue/1615421733695_KakaoTalk_20210310_151546842.png'
        "
      />
      <i class="issue-cate">Brand News</i>
    </div>
    <strong class="issue-title">
      {{ thisColor }}<br />
      Freak & FRIENDS
    </strong>
    <p class="Issue-text">
      Two tone Live 3월의 주인공 릴보이, 시고도 달콤한 풋사과같은 삶에, 꽃길이
      가득이길 바라는 꿈을 담은 이달의 컬러
    </p>
  </a>
</template>
<script>
export default {
  //////////////////////////////////
  data() {
    return {
      thisColor: ""
    };
  },
  props: ["color"],
  methods: {
    search: function() {
      this.thisColor = "Color//" + this.color;
    }
  }
  /////////////////////////////////////////////
};
</script>
<style scoped>
#mainIssueList {
  font-family: "Noto Sans KR";
  font-size: 0px;
  cursor: pointer;
  color: black;
}
#mainIssueList .img-wrap {
  padding-bottom: 20px;
}
#mainIssueList .issue-image {
  width: 100%;
}
#mainIssueList .issue-title {
  width: 100%;
  font-size: 32px;
  letter-spacing: -1px;
  font-weight: 500;
  line-height: 1.4;
}
#mainIssueList .Issue-text {
  font-size: 14px;
  font-weight: normal;
  line-height: 1.4;
  margin-top: 20px;
}
.issue-cate {
  position: relative;
  display: inline-block;
  font-size: 20px;
  font-style: normal;
  color: #888;
  left: -40px;
  bottom: 0;
  line-height: 1.5;
  transform: rotate(270deg);
  transform-origin: 0% 0%;
}
</style>
