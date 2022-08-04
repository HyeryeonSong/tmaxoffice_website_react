import '../../css/header.scss';
import TmaxLogo from '../../img/Tmax_logo.png';
import Nav from "./Nav";
import { Link } from "react-router-dom";


function Header() {
  return (    
    <div className="gnb__wrapper">      
      <div className="gnb__wrap">
        <div className="gnb__logo">
          <Link to="/">
            <img src={TmaxLogo} alt="TmaxOffice" className="gnb__logo--img" />
          </Link>
        </div>
        <Nav />
      </div>      
    </div>
  );
}

export default Header;
