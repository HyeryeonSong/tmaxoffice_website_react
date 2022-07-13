import '../css/header.scss';

function Header() {
  return (
    <>
      <div class="gnb_wrapper">
        <nav class="gnb" >
          <ul class="gnb_list">
            <li class="gnb_link">
              <div class="gnb_title depth1">            
              </div>
              <div class="gnb_submenu depth2">
                <ul>
                  <li>
                    <img src="/images/Tmax_logo.png" alt="TmaxOffice" class="gnb_logo" />
                  </li>
                </ul>
              </div>
            </li>
            <li class="gnb_link">
              <div class="gnb_title depth1">
                <a href="#">VISION</a>
              </div>
              <div class="gnb_submenu depth2">
                <ul>
                  <li>
                    <a href="/sub/vision_superapp.html">SuperApp 세상</a>
                  </li>
                  <li>
                    <a href="#">TmaxOffice의 역할</a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="gnb_link">
              <div class="gnb_title depth1">
                <a href="#">PRODUCT</a>
              </div>
              <div class="gnb_submenu depth2">
                <ul>
                  <li>
                    <a href="#">SuperOffice</a>
                  </li>
                  <li>
                    <a href="#">SuperDocument</a>
                  </li>
                  <li>
                    <a href="#">SuperUX</a>
                  </li>
                  <li>
                    <a href="#">SuperDX</a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="gnb_link">
              <div class="gnb_title depth1">
                <a href="#">EXPRIENCE</a>
              </div>
              <div class="gnb_submenu depth2">
                <ul>
                  <li>
                    <a href="#">DEMO</a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="gnb_link">
              <div class="gnb_title depth1">
                <a href="#">도입안내</a>
              </div>
              <div class="gnb_submenu depth2">
                <ul>
                  <li>
                    <a href="#">서비스 유형</a>
                  </li>
                  <li>
                    <a href="#">도입 문의</a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="gnb_link">
              <div class="gnb_title depth1">
                <a href="#">MEDIA</a>
              </div>
              <div class="gnb_submenu depth2">
                <ul>
                  <li>
                    <a href="#">보도자료</a>
                  </li>
                  <li>
                    <a href="#">SNS</a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="gnb_link">
              <div class="gnb_title depth1">
              <a href="#">RECRUIT</a>
              </div>
              <div class="gnb_submenu depth2">
                <ul>
                  <li>
                    <a href="#">채용공고</a>
                  </li>
                  <li>
                    <a href="#">채용 프로세스</a>
                  </li>
                  <li>
                    <a href="#">복리후생</a>
                  </li>
                  <li>
                    <a href="#">자주묻는 질문</a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Header;
