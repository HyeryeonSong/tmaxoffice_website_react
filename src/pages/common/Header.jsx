import React, { useState } from 'react'
import '../../css/header.scss';
import TmaxLogo from '../../img/Tmax_logo.png';
import Nav from "./Nav";
import { Link } from "react-router-dom";


function Header() {
  const [menu, setMenu] = useState(true);
  const gnbList = document.querySelector('.gnb__nav--list');
  const OpenMenu = () => { 
    if(gnbList.style.visibility === "hidden") { // menu 닫혀있을 경우
      gnbList.style.visibility = "visible"; // 메뉴 열기
      gnbList.style.maxHeight = "450px"; // 메뉴 높이
      setMenu(false); // 햄버거버튼을 닫기버튼으로 변경
    } else {
      gnbList.style.visibility = "hidden";
      gnbList.style.maxHeight = "0";
      setMenu(true);
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
        <Nav menu={menu} gnbList={gnbList} OpenMenu={OpenMenu} />
      </div>      
    </div>
  );
}

export default Header;
