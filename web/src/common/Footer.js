import '../css/footer.scss';

function Footer() {
  const sns = ['instagram', 'facebook', 'naverblog', 'youtube'];
  const snsList = sns.map((item) =>   
    <li><a href=""><img src="" alt="{item}" /></a></li>
  )
  return (
    <>
      <footer>
        <div class="footer">      
          <div class="footer_top">
            <a href="">개인정보처리방침</a>
            <select name="family" id="family">
              <option disabled selected>FAMILY SITE</option>
              <option value="tmaxgroup">TMAXGROUP</option>
              <option value="tmaxanc">TMAX A&C</option>
              <option value="tmaxwapl">TMAXWAPL</option>
              <option value="tmaxmetaverse">TMAXMetaverse</option>
              <option value="tmaxtibero">TMAXTibero</option>
            </select>
          </div>
          <div class="footer_bottom">
            <div class="logo">
              <img src="/images/Tmax_logo.png" alt="Tmax logo" />
            </div>
            <div class="address">
              <p>본사: 경기도 성남시 분당구 황새울로 258번길 29, 티맥스 수내타워</p>
              <p>R&D센터: 경기도 성남시 분당구 정자일로 45, 티맥스타워</p>
              <p>제품구입문의 031-8018-1111 | 기술서비스센터 1544-8629 | 대표번호 : 031-8018-1000</p>
            </div>
            <div class="sns">
              <ul>
                {snsList}
              </ul>
            </div>
          </div>
        </div>
      </footer>      
    </>
  );
}

export default Footer;
