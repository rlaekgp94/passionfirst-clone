<template>
  <section id="mainBusinessSlide">
    <div class="mainBusinessSlide_wrap">
      <div class="ir_content">
        <h3>IR</h3>
        <iframe
          src="https://ir.gsifn.io/samhwa/ir_main.html?koreng=1"
          frameborder="0"
          scrolling="0"
        ></iframe>
      </div>
      <!-- ir_content -->

      <div class="news_content">
        <h3>News</h3>
        <dl class="news_list">
          <dt>'안심닥터’ 출시 기념 안심생활 이벤트</dt>
          <dd>
            2월14일까지 ‘안심생활’ 이벤트 진행. 에어팟, 아이패드, 공기청정기 등
            증정 안심닥터, 살균제 내성 강한 비피막바이러스 사멸, 종합
            항바이러스도료
          </dd>
        </dl>
        <dl class="news_list">
          <dt>장애인종합복지시설 위한 컬러유니버설디자인 개발추진</dt>
          <dd>
            발달장애인시설 컬러유니버설디자인 확장. 컬러유니버설디자인협회와
            연구개발 진행
          </dd>
        </dl>
        <dl class="news_list">
          <dt>항바이러스 페인트 ‘안심닥터’ 출시</dt>
          <dd>
            항바이러스 원료 함유, 바이러스 99.9% 사멸…1월5일 대리점 출시 CGV
            강남, 인천시청, 해썹인증 공장, 어린이 이용시설 등 적용 완료
          </dd>
        </dl>
      </div>
      <!-- news_content -->
    </div>
    <!-- mainbusinessslide_wrap -->
  </section>
  <!-- mainBusinessSlide -->
</template>
<script>
export default {
  name: "MainBusinessSlide"
};
</script>
<style scoped>
/* mainBusinessSlide */
#mainBusinessSlide {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
}
.mainBusinessSlide_wrap {
  width: 1180px;
  height: 780px;
  display: flex;
  justify-content: space-between;
}

/* ir_content */
.ir_content {
  width: 300px;
  height: 297px;
}
.ir_content h3 {
  font-size: 80px;
  font-weight: 500;
  font-family: "Playfair Display", serif;
  margin-bottom: 60px;
}

.news_content {
  width: 780px;
}

.news_content h3 {
  font-size: 80px;
  font-weight: 500;
  font-family: "Playfair Display", serif;
  margin-bottom: 30px;
}

.news_list {
  padding: 30px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border-bottom: 1px #e5e5e5 solid;
  font-family: "Noto";
}
.news_list dt {
  margin-bottom: 20px;
  font-size: 25px;
}

.news_list dd {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #6e6e6e;
}
</style>
