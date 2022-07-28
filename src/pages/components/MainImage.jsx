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
    text-indent: -9999px;    
    .title--img {    
      position: absolute;
      height: 50px;
      top: 0;
      left: 0;    
    }
  }
`

function MainImage(props) {
  return (
    <IMG>
      <img className="bg--img" src={props.img} alt="" />
      <h2>{props.title}
        <img className="title--img" src={props.titleImg} alt={props.title}/>
      </h2>
    </IMG>
  )
}



export default MainImage;