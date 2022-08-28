import * as React from 'react';
import { Reset } from 'styled-reset';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import './css/common.scss';
import Header from './pages/common/Header';
import Footer from './pages/common/Footer';
import Main from './pages/Main';
import ProductSuperOffice from './pages/ProductSuperOffice';
import ProductSuperDocument from './pages/ProductSuperDocument';
import ProductServiceType from './pages/ProductServiceType';
import NoticeMedia from './pages/NoticeMedia';
import NoticeCareer from './pages/NoticeCareer';
import ComingSoon from './pages/ComingSoon';


const Wrapper = styled.div`
  height: auto;
  min-height: 100%; 
`

function App() {
  return (
    <>
      <Wrapper>
        <Reset />
        <Header />           
        <Routes>
          <Route exact path="/" element={<Main />}/>
          <Route path="/product/superoffice" element={<ProductSuperOffice/>} />
          <Route path="/product/superdocument" element={<ProductSuperDocument/>} />
          <Route path="/product/servicetype" element={<ProductServiceType/>} />
          <Route path="/notice/media" element={<NoticeMedia/>} />
          <Route path="/notice/career" element={<NoticeCareer/>} />
          <Route path="*" element={<ComingSoon/>} />
        </Routes>
      </Wrapper>
      <Footer />
    </>    
  );
}

export default App;
