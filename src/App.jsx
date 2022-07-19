import * as React from 'react';
import { Reset } from 'styled-reset';
import { Routes, Route, useParams } from 'react-router-dom';
import { useMediaQuery } from "react-responsive"
import styled from 'styled-components';
import './css/common.scss';
import Header from './common/Header';
import Footer from './common/Footer';
import Main from './common/Main';
import VisionSuperApp from "./pages/VisionSuperApp";
import VisionTmaxOffice from './pages/VisionTmaxOffice';
import ProductSuperOffice from './pages/ProductSuperOffice';
import ProductSuperDocument from './pages/ProductSuperDocument';
import ProductSuperUX from './pages/ProductSuperUX';
import ProductSuperDX from './pages/ProductSuperDX';
import ComingSoon from './pages/ComingSoon';


const Wrapper = styled.div`
  min-height: 100%;
`
export const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({
    query: "(max-width:768px)"
  });
  return <>{isMobile && children}</>
}

export const PC = ({ children }) => {
  const isPc = useMediaQuery({
    query: "(min-width:769px)"
  });
  return <>{isPc && children}</>
}

function App() {
  return (
    <Wrapper>
      <PC>
        <Reset />
        <Header />           
        <Routes>
          <Route exact path="/" element={<Main />}/>
          <Route path="/vision/1" element={<VisionSuperApp/>} />
          <Route path="/vision/2" element={<VisionTmaxOffice/>} />
          <Route path="/product/3" element={<ProductSuperOffice/>} />
          <Route path="/product/4" element={<ProductSuperDocument/>} />
          <Route path="/product/5" element={<ProductSuperUX/>} />
          <Route path="/product/6" element={<ProductSuperDX/>} />
          <Route path="*" element={<ComingSoon/>} />
        </Routes>
        <Footer />
      </PC>
      <Mobile>mobile 준비중...</Mobile>
    </Wrapper>
  );
}

export default App;
