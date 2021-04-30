<template>
  <footer>
    <div id="footer_wrap">
      <div class="footer_content">
        <div class="info_content">
          <div class="footer_sns">
            <a
              href="https://www.instagram.com/samhwa_paint/"
              target="_blank"
              class="icon_inst"
              >instagram</a
            >
            <a
              href="https://www.youtube.com/channel/UChCIzdQAmFFUkqghKWKFOPA"
              target="_blank"
              class="icon_yout"
              >youtube</a
            >
            <a
              href="https://blog.naver.com/samhwa2016"
              target="_blank"
              class="icon_blog"
              >blog</a
            >
          </div>
          <!-- footer_sns -->

          <dl>
            <dt>삼화페인트공업(주)</dt>
            <dd>대표이사: 오진수, 류기붕</dd>
            <dd>서울본사: 서울 종로구 돈화문로 58 (묘동)</dd>
            <dd>안산공장: 경기도 안산시 단원구 별망로 178 (성곡동)</dd>
          </dl>
        </div>
        <!-- info_content -->

        <div class="info_cscenter">
          <span>Technical Service Center</span>
          <p>1544-5357</p>
        </div>
        <!-- info_cscenter -->

        <div class="info_sitelist">
          <div class="info_btn">Family Site</div>
          <ul class="family_list">
            <li>
              <a href="https://homentones.com/main/index.do" target="_blank"
                >홈앤톤즈</a
              >
            </li>
            <li>
              <a href="http://scd.spi.co.kr/" target="_blank">컬러디자인센터</a>
            </li>
            <li>
              <a href="http://www.powton.co.kr/ko/index.asp" target="_blank"
                >파우톤 분체도료</a
              >
            </li>
            <li>
              <a href="http://www.karocle.com/index_eng/" target="_blank"
                >카로클 자동차 도료</a
              >
            </li>
            <li>
              <a href="https://gume.samhwa.com/" target="_blank"
                >삼화페인트 구매포털</a
              >
            </li>
            <li>
              <a
                href="https://www.paintnet.co.kr/login.do;jsessionid=A761BB3F9F9F12F470DC91AD28DD0FAD.paintnet2"
                target="_blank"
                >대리점전용 시스템</a
              >
            </li>
          </ul>
        </div>
        <!-- info_sitelist -->
      </div>
      <!-- footer_content -->

      <div class="footer_copyright">
        &#169; 2020 Samhwa Paint Industrial Co., Ltd. All Rights Reserved.
      </div>
      <!-- footer_content -->
    </div>
    <!-- footer_wrap -->
  </footer>
</template>

<script>
import $ from "jquery";
export default {
  name: "Footer",
  mounted() {
    let infoSiteList = $(".family_list"),
      infoSiteListBtn = $(".info_sitelist");

    //info select click시 하위리스트 fadeIn
    infoSiteList.hide();

    infoSiteListBtn.click(function() {
      $(this).addClass("active");
      infoSiteList.fadeIn(function() {
        $(this).mouseleave(function() {
          $(this).hide();
          infoSiteListBtn.removeClass("active");
        });
      });
    });
  }
};
</script>
<style>
#footer {
  width: 100%;
  height: 280px;
  background: #fafafa;
  font-family: "Graphie", "Noto", "Malgun Gothic", sans-serif;
}

#footer_wrap {
  height: 224px;
  padding: 56px 70px 0;
}

.footer_content {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.footer_content div {
}

.info_content {
  height: 123px;
}

.info_content dl {
  height: 60px;
  font-size: 12px;
  line-height: 20.4px;
  letter-spacing: -0.5px;
  font-weight: lighter;
}

.info_content dl dt {
  float: left;
  padding-right: 15px;
  position: relative;
}

.info_content dl dt::before {
  content: "";
  width: 1px;
  height: 11px;
  margin-top: -5px;
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateX(-50%);
  background-color: rgb(136, 136, 136);
}

.info_content dl dd:first-child {
  clear: both;
}

.footer_sns {
  width: 130px;
  height: 24px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 39px;
}

.icon_inst {
  font-size: 0;
  background: url(../../assets/img/icon/icon-insta.svg) no-repeat;
  width: 24px;
  height: 24px;
  display: block;
}

.icon_yout {
  font-size: 0;
  background: url(../../assets/img/icon/icon-youtube.svg) no-repeat;
  width: 24px;
  height: 24px;
  display: block;
}

.icon_blog {
  font-size: 0;
  background: url(../../assets/img/icon/icon-blog.svg) no-repeat;
  width: 24px;
  height: 24px;
  display: block;
}

.info_cscenter {
  text-align: center;
  display: flex;
  flex-direction: column;
}

.info_cscenter span {
  font-size: 14px;
  line-height: 14px;
  font-weight: 800;
  height: 16px;
}

.info_cscenter p {
  font-size: 24px;
  font-weight: 700;
  height: 36px;
  line-height: 36px;
  letter-spacing: 1.5px;
}

.info_sitelist {
  position: relative;
}

.info_btn {
  color: #000;
  box-shadow: rgba(0, 0, 0, 0.1) 0 1px 0 0;
  font-size: 14px;
  font-weight: bold;
  width: 220px;
  height: 45px;
  line-height: 45px;
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
}

.info_btn::after {
  background: url(../../assets/img/icon/icon-dropdown.svg) no-repeat;
  filter: invert(100%);
  content: "";
  width: 12px;
  height: 12px;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
}

.info_btn.active::after {
  transform: rotate(180deg);
  top: 2px;
}

.family_list {
  width: 220px;
  height: 312px;
  position: absolute;
  bottom: 120px;
  right: 0;
  background: #fff;
  border: 1px solid #000;
  display: flex;
  flex-direction: column;
  position: absolute;
}

.family_list li {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.family_list li:hover {
  background: rgba(219, 219, 219, 0.5);
}

.family_list li a {
  font-size: 16px;
  font-weight: 300;
  padding: 12px 16px;
  color: #000;
}

/*font graphie*/
.footer_copyright {
  margin-top: 22px;
  font-size: 12px;
  font-weight: 800;
}
</style>
