import React, {useState} from 'react';
import '../css/footer.scss';
import TmaxLogo from '../img/Tmax_logo.png';
import instagram from '../img/img_instagram.png';
import facebook from '../img/img_facebook.png';
import blog from '../img/img_blog.png';
import youtube from '../img/img_youtube.png';

function Footer() {
  const sns = [instagram, facebook, blog, youtube];
  const snsList = sns.map((item) =>
      <li><a href=""><img src={item} alt={item} /></a></li>    
  )
  const selectList = ['TMAXGROUP', 'TMAX A&C', 'TMAXWAPL', 'TMAXMetaverse', 'TMAXTibero'];
  const [selected, setSelected] = useState("family");
  const handleSelect = (e) => {
    setSelected(e.target.value);
  };

  return (
    <>
      <footer>
        <div className="footer">      
          <div className="footer_top">
            <a href="">개인정보처리방침</a>
            <select onChange={handleSelect} value={selected}>
              <option>FAMILY SITE</option>
              {selectList.map((item) => (
                <option value={item} key={item}>{item}</option>
              ))}
            </select>
          </div>
          <div className="footer_bottom">
            <div className="logo">
              <img src={TmaxLogo} alt="Tmax logo" />
            </div>
            <div className="address">
              <p>본사: 경기도 성남시 분당구 황새울로 258번길 29, 티맥스 수내타워</p>
              <p>R&D센터: 경기도 성남시 분당구 정자일로 45, 티맥스타워</p>
              <p>제품구입문의 031-8018-1111 | 기술서비스센터 1544-8629 | 대표번호 : 031-8018-1000</p>
            </div>
            <div className="sns">              
              <ul className="sns_list">
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
