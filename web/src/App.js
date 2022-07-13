import * as React from 'react'
import { Reset } from 'styled-reset'
import './css/style.scss'
import Header from './common/Header';
import Footer from './common/Footer';

function App() {
  return (
    <>
      <Reset />
      <Header />
      <Footer />
    </>
  );
}

export default App;
