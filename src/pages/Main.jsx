import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import AOS from 'aos';

import Carousel from "../pages/components/Carousel";
import LinkButton from "./components/LinkButton";
import product1 from "../img/img_product1.png";
import product2 from "../img/img_product2.png";
import superapp1 from "../img/img_superapp1.png";
import superapp2 from "../img/img_superapp2.png";

AOS.init();

const Wrapper = styled.div`
  max-width: 1920px;
  margin: 0 auto;
`

const Contents = styled.div`
  width: 100%;  
`


function Main() {
  const rightPin = document.querySelector(".right");
  const [ScrollY, setScrollY] = useState(0);  // 스크롤값을 저장하기 위한 상태
  const handleFollow = () => {
    setScrollY(window.pageYOffset); // window 스크롤 값을 ScrollY에 저장
  }

  useEffect(() => {
    if (ScrollY < 400) {      
    } else {      
      // console.log(ScrollY); // ScrollY가 변화할때마다 값을 콘솔에 출력
    }    
  }, [ScrollY])

  useEffect(() => {
    const watch = () => {
      window.addEventListener('scroll', handleFollow);
    }
    watch(); // addEventListener 함수를 실행
    return () => {
      window.removeEventListener('scroll', handleFollow); // addEventListener 함수를 삭제
    }
  })
  
  return (
    <Wrapper>
      <Carousel />
      <Contents>
        <div className="contents__wrap">
          <div className="content content__1">
            <div 
              className="content__pin right" 
              data-aos="fade-right" 
              data-aos-duration="2000"
            ></div>
            <div className="content__comp" 
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <span className="content__head">we<br/>are<br/>tmaxOffice!</span>
              <div className="content__text--wrap">
                <p className="content__text">
                  티맥스오피스는 <span className="text--strong">DB</span> 중심의 오피스’라는 새로운 패러다임을 제시하고,<br/>
                  문서의 생성부터 활용, 관리까지 책임지는 고도화된 솔루션을 제공하는<br/> 오피스 솔루션 전문기업입니다. <br/>
                  <br/>
                  데이터의 무한한 활용성과 확장성을 통해 상상이 현실이 되는 세상,<br/>
                  <span className="text--strong">티맥스오피스</span>가 만들어 가겠습니다.
                </p>
                <LinkButton 
                  link="https://www.tmax.co.kr/"
                  title="회사소개" 
                />
              </div>
            </div>
          </div>
          <div className="content content__2">      
            <span className="content__title">Product</span>
            <div 
              className="content__pin left"
              data-aos="fade-left" 
              data-aos-duration="2000"  
            ></div>
            <div className="content__comp" data-aos="fade-up" data-aos-duration="3000">
              <div className="comp--box">
                <div className="comp--detail">
                  <img src={product1} alt="SuperOffice" className="comp--img img1" />
                </div>
                <div className="line"></div>
                <span className="comp--text">문서데이터를 생성하고 활용성을<br/>극대화한 앱 기반의 오피스</span>
                <LinkButton 
                  link="https://www.tmax.co.kr/"
                  title="더 알아보기" 
                />
              </div>
              <div className="comp--box">
                <div className="comp--detail">
                  <img src={product2} alt="SuperDocument" className="comp--img img2"/>              
                </div>                
                <div className="line"></div>
                <span className="comp--text">데이터 단위 활용·분석을 지원하는을<br/>지능형 콘텐츠 통합 관리 솔루션</span>
                <LinkButton 
                  link="https://www.tmax.co.kr/"
                  title="더 알아보기" 
                />
              </div>
            </div>
          </div>
          <div className="content content__3">
            <span className="content__title"><span className="title--italic">TmaxGroup</span>이 그리는<br /><span className="title--italic">SuperApp</span> 세상</span>
            <div 
              className="content__pin right"
              data-aos="fade-right" 
              data-aos-duration="2000"
            ></div>
            <div className="content__text--wrap">
              <p className="content__text"><strong>Tmax</strong>는 국내 시스템 <strong>SW 1위</strong>를 이루어낸 기술과 경험으로 어디에도 종속되지 않고 무한한 확장성을 가진 새로운 <strong>IT</strong> 세상을 만들어갑니다.
              <br />여러분이 꿈꾸고 상상하던 가치와 기술, <strong>Tmax</strong>의 <strong>SuperApp</strong>을 만나 현실이 됩니다.</p>
            </div>            
            <div className="content__comp" data-aos="fade-up" data-aos-duration="3000">
              <img src={superapp1} alt="SuperApp 이미지"/>
            </div>            
            <div className="line"></div>
          </div>
          <div className="content content__4">
            <span className="content__title"><span className="title--italic">SuperApp</span><br />기술 구성도</span>
            <div 
              className="content__pin left"
              data-aos="fade-left" 
              data-aos-duration="2000"
            ></div>
            <div className="content__text--wrap">
              <p className="content__text"><strong>Infra</strong> 단계에서 <strong>App플랫폼</strong>까지 티맥스는 전 레이어를 아우르는 원천기술을 보유하고 있습니다.</p>
            </div>            
            <div className="content__comp" data-aos="fade-up" data-aos-duration="3000">
              <img src={superapp2} alt="SuperApp 이미지2"/>
            </div>            
            <div className="line"></div>
          </div>
        </div>
      </Contents>
    </Wrapper>
  );
}

export default Main;
