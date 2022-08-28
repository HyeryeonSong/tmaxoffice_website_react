import React from 'react';
import styled from 'styled-components';

const IMG = styled.div`
  width: 100%;
  position: relative;
  .bg--img {
    width: 100%;
  }  
  h2 {
    position: absolute;
    top: calc(50% - 50px); // temp
    margin-left: 17.8%;
    font-family: noto-sans-display, sans-serif;
    font-weight: 800;
    font-size: 48px;
    color: #fff;
  }
`

function MainImage(props) {
  return (
    <IMG>
      <img className="bg--img" src={props.img} alt="" />
      <h2>{props.title}</h2>
    </IMG>
  )
}



export default MainImage;