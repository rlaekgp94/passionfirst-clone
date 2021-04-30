<template>
  <a :href="issueList.url" id="mainIssueList">
    <div class="img-wrap">
      <img class="issue-image" :src="issueList.thumbnail" />
      <i class="issue-cate">{{ issueList.showCategory }}</i>
    </div>
    <strong class="issue-title">
      {{ issueList.title }}
    </strong>
    <p class="Issue-text">
      {{ issueList.subTitle }}
    </p>
  </a>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    issueList: function() {
      return this.issueListData;
    }
  },
  props: ["issueListData"],
  methods: {}
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
