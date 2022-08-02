import { useState } from "react";
import { useMediaQuery } from "react-responsive";

import '../../css/header.scss';
import TmaxLogo from '../../img/Tmax_logo.png';
import Hamburger from '../../img/icon_menu.png';
import Close from '../../img/icon_close.png';
import { Link } from "react-router-dom";



function Header() {
  const [menu, setMenu] = useState(true);
  const OpenMenu = () => {    
    const gnbList = document.querySelector('.gnb__nav--list');    
    if(gnbList.style.visibility === "hidden") {
      gnbList.style.visibility = "visible";
      gnbList.style.maxHeight = "450px";
      setMenu(false);
    } else {      
      gnbList.style.visibility = "hidden";
      gnbList.style.maxHeight = "0";
      setMenu(true);

    }

  }
  
  const OpenSubmenu = () => {
    const submenu = document.querySelectorAll('.gnb__nav--link .gnb__nav--submenu');    
    for (let i=0; i<submenu.length; i++) {
      submenu[i].classList.add('active')
    }
  }

  return (    
    <div className="gnb__wrapper">      
      <div className="gnb__wrap">
        <div className="gnb__logo">
          <Link to="/">
            <img src={TmaxLogo} alt="TmaxOffice" className="gnb__logo--img" />
          </Link>
        </div>
        <nav className="gnb__nav" >
          <div className="gnb__toggle" onClick={OpenMenu}>
            {menu ? 
                <img src={Hamburger} alt="메뉴보기" /> 
              : <img src={Close} alt="메뉴닫기" /> 
            }
            
          </div>
          <ul className="gnb__nav--list">
            <li className="gnb__nav--link">
              <div className="gnb__nav--link-title">
                <Link to="/">About</Link>
              </div>
            </li>
            <li className="gnb__nav--link">
              <div className="gnb__nav--link-title" onMouseOver={OpenSubmenu}>
                <Link to="/product/superoffice">PRODUCT</Link>
              </div>
              <div className="gnb__nav--submenu">
                <ul className="submenu--list">
                  <li className="submenu--link">
                    <Link to="/product/superoffice">SuperOffice</Link>
                  </li>
                  <li className="submenu--link">
                    <Link to="/product/superdocument">SuperDocument</Link>
                  </li>
                  <li className="submenu--link">
                    <Link to="/product/servicetype">서비스 유형</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="gnb__nav--link">
              <div className="gnb__nav--link-title">
                <Link to="/">DEMO</Link>
              </div>
            </li>
            <li className="gnb__nav--link">
              <div className="gnb__nav--link-title" onMouseOver={OpenSubmenu}>
                <Link to="/notice/media">NOTICE</Link>
              </div>
              <div className="gnb__nav--submenu">
                <ul className="submenu--list">
                  <li className="submenu--link">
                    <Link to="/notice/media">언론보도</Link>
                  </li>
                  <li className="submenu--link">
                    <Link to="/notice/career">채용 프로세스</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="gnb__nav--link">
              <div className="gnb__nav--link-title">
                <Link to="/">CONTACT</Link>
              </div>
            </li>
          </ul>          
        </nav>
      </div>      
    </div>
  );
}

export default Header;
