import '../css/header.scss';
import TmaxLogo from '../img/Tmax_logo.png';
import data from '../db/data.json';
import { Link } from "react-router-dom";

function Header() {

  return (    
    <div className="gnb_wrapper">
      <nav className="gnb" >
        <ul className="gnb_list">
          <li className="gnb_link">
            <div className="gnb_title"></div>
            <div className="gnb_submenu">
              <ul>
                <li>
                  <img src={TmaxLogo} alt="TmaxOffice" className="gnb_logo" />
                </li>
              </ul>
            </div>
          </li>
          {
            data.link.map(link => (
              <li className="gnb_link">
                <div className="gnb_title">
                  <Link to={`${link.url}`}>{link.title}</Link>
                </div>
                <div className="gnb_submenu">
                  <ul>
                    {data.sub.map(sub => {                        
                      const subtitle = sub.title.toLocaleUpperCase();
                      if(link.title === subtitle) {                          
                        return (
                          <li>
                            <Link to={`/${sub.title}/${sub.id}`}>{sub.subtitle}</Link>
                          </li>
                        )
                      }
                    })}
                  </ul>
                </div>
              </li>
            ))
          }
        </ul>
      </nav>
    </div>
  );
}

export default Header;
