import '../../css/header.scss';
import TmaxLogo from '../../img/Tmax_logo.png';
import { Link } from "react-router-dom";


function OpenSubmenu() {  
  const submenu = document.querySelectorAll('.gnb__nav--link .gnb__nav--submenu');
  for (let i=0; i<submenu.length; i++) {
    submenu[i].classList.add('active')
  }
}

function Header() {
  return (    
    <div className="gnb__wrapper">      
      <div className="gnb__wrap">
        <div className="gnb__logo">
          <Link to="/">
            <img src={TmaxLogo} alt="TmaxOffice" className="gnb__logo--img" />
          </Link>
        </div>
        <nav className="gnb__nav" >
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
