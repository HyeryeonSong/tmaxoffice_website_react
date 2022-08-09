import React, { useState, useRef } from 'react'
import { Link } from "react-router-dom";
import Hamburger from '../../img/icon_menu.png';
import Close from '../../img/icon_close.png';



function NavList(props) {       
  console.log(props.OpenMenu);
  // submenu
  const OpenSubmenu = () => {
    const submenu = document.querySelectorAll('.gnb__nav--link .gnb__nav--submenu');    
    for (let i=0; i<submenu.length; i++) {
      submenu[i].classList.add('active')
    }
  };
  const subList = [
    {title: "PRODUCT", link: "/product/superoffice", subtitle: "SuperOffice"},
    {title: "PRODUCT", link: "/product/superdocument", subtitle: "SuperDocument"},
    {title: "PRODUCT", link: "/product/servicetype", subtitle: "서비스 유형"},
    {title: "NOTICE", link: "/notice/media", subtitle: "언론보도"},
    {title: "NOTICE", link: "/notice/career", subtitle: "채용 프로세스"}
  ];
  const subMenu = subList.map((item) => {
    if(props.title === item.title) { // nav title과 subList title이 같을 때 해당 서브메뉴 반환
      return (
        <li key={item.id} className="submenu--link">
          <Link to={item.link}>{item.subtitle}</Link>
        </li>
      )
    }
  })

  return (
    <li className="gnb__nav--link">
      <div className="gnb__nav--link-title" onMouseOver={OpenSubmenu}>
        <Link to={props.link} onClick={props.OpenMenu}>{props.title}</Link>
      </div>
      {props.submenu ? 
        <div className="gnb__nav--submenu">
          <ul className="submenu--list">
            {subMenu}
          </ul>
        </div>
        : null
      }
    </li>
  )
}

function Nav({menu, gnbList, OpenMenu}) {
  console.log(OpenMenu);
  return (
    <nav className="gnb__nav" >
      <div className="gnb__toggle" onClick={OpenMenu}>
        {menu ? 
            <img src={Hamburger} alt="메뉴보기" /> 
          : <img src={Close} alt="메뉴닫기" /> 
        }
      </div>
      <ul className="gnb__nav--list">
        <NavList link="/" title="About" submenu={false} OpenMenu={OpenMenu} />
        <NavList link="/product/superoffice" title="PRODUCT" submenu={true} OpenMenu={OpenMenu}/>        
        <NavList link="/" title="DEMO" submenu={false} OpenMenu={OpenMenu}/>        
        <NavList link="/notice/media" title="NOTICE" submenu={true} OpenMenu={OpenMenu}/>
        <NavList link="/" title="CONTACT" submenu={false} OpenMenu={OpenMenu}/>
      </ul>          
    </nav>
  )
}

export default Nav;