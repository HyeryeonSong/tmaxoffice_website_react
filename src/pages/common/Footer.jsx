import React from 'react';
import '../../css/footer.scss';
import TmaxLogo from '../../img/Tmax_logo.png'
import instagram from '../../img/img_instagram.png';
import facebook from '../../img/img_facebook.png';
import post from '../../img/img_post.png';
import more from '../../img/icon_open.png';
import youtube from '../../img/img_youtube.png';
import { Link } from "react-router-dom";

function OpenFamilysite() {  
  const selectItem = document.querySelector('.selectbox--list');  
  const moreBtn = document.querySelector('.selectbox--title img');
  if(selectItem.style.display === ""){    
    selectItem.style.display = "block";
    moreBtn.style.transform ="rotate(-45deg)";
  } else {
    selectItem.style.display = "";
    moreBtn.style.transform ="rotate(0deg)";
  }
}

function Footer() {
  const sns = [
    {sns: instagram, site: "https://www.instagram.com/tmaxoffice/"},
    {sns: facebook, site: "https://www.facebook.com/TmaxHQ"},
    {sns: post, site: "https://post.naver.com/tmaxhq"},
    {sns: youtube, site: "https://www.youtube.com/channel/UCSL_WpbQKwxFZpdMSqRaRTg"}
  ];
  const snsList = sns.map((item) =>
      <li><a target="_blank" rel="noreferrer" href={item.site}><img src={item.sns} alt="sns" /></a></li>    
  )  
  const selectArray = [
    {group: "Tmax Group", site: "https://www.tmax.co.kr/"},
    {group: "TMAX A&C", site: "https://www.tmax.co.kr/"},
    {group: "TMAXWAPL", site: "https://wapl.ai/"},
    {group: "TMAXMetaverse", site: "https://www.tmaxmetaverse.com/"},
    {group: "TMAXTibero", site: "https://www.tmaxtibero.com/main.do"}
  ]
  
  const selectList = selectArray.map((obj) => 
      <li className="selectbox--link"><a target="_blank" rel="noreferrer" href={obj.site}>{obj.group}</a></li>
  )

  return (
    <>
      <footer>
        <div className="footer">      
          <div className="footer__top">
            <div className="footer__top--privacy">
              <Link to="">개인정보처리방침</Link>
            </div>
            <div className="footer__top--selectbox">
              <div className="selectbox--title" onClick={OpenFamilysite}>
                <span>FAMILY SITE</span>
                <img src={more} alt="more" />
              </div>
              <ul className="selectbox--list">
                {selectList}
              </ul>
            </div>
          </div>
          <div className="footer__bottom">
            <div className="footer__bottom--logobox">
              <img src={TmaxLogo} alt="TmaxOffice logo" />
            </div>
            <div className="footer__bottom--address">
              <p className="address--text">본사: 경기도 성남시 분당구 황새울로 258번길 29, 티맥스 수내타워</p>
              <p className="address--text">R&D센터: 경기도 성남시 분당구 정자일로 45, 티맥스타워</p>
              <div className="footer__bottom--contact">
                <ul className="contact--list">
                  <li className="contact--link">제품구입문의 031-8018-1111</li>
                  <li className="contact--link">기술서비스센터 1544-8629</li>
                  <li className="contact--link">대표번호 : 031-8018-1000</li>
                </ul>
              </div>
            </div>
            <div className="footer__bottom--snsbox">              
              <ul className="snsbox--list">
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
