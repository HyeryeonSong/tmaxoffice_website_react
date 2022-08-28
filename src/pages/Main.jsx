import styled from 'styled-components';
import Carousel from "../pages/components/Carousel";
import contents1 from '../img/contents1.png';
import contents2 from '../img/contents2.png';
import contents3 from '../img/contents3.png';
import contents4 from '../img/contents4.png';

const Wrapper = styled.div`
  min-width: 1000px;
`

const Contents = styled.div`
  width: 100%;
  background-color: #EFF3F8;
  img {
    width: 100%;
  }
`

function Main() {
  return (
    <Wrapper>
      <Carousel />
      <Contents>
        <div className="contents__wrap">
          <div className="content__1">
            {/* <span className="contents__head">we are tmaxOffice!</span>
            <p className="contents__text">
              티맥스오피스는 DB 중심의 오피스’라는 새로운 패러다임을 제시하고,<br/>
              문서의 생성부터 활용, 관리까지 책임지는 고도화된 솔루션을 제공하는 오피스 솔루션 전문기업입니다. <br/>
              <br/>
              데이터의 무한한 활용성과 확장성을 통해 상상이 현실이 되는 세상,<br/>
              티맥스오피스가 만들어 가겠습니다.
            </p> */}
            <img src={contents1} alt="" />              
          </div>
          <div className="contents__2">
            <img src={contents2} alt="" />
          </div>
          <div className="contents__3">
            <img src={contents3} alt="" />
          </div>
          <div className="contents__4">
            <img src={contents4} alt="" />
          </div>
        </div>
      </Contents>
    </Wrapper>
  );
}

export default Main;
