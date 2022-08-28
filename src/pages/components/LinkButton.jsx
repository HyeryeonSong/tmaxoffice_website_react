import React from 'react';
import ArrowIcon from "../../img/icon_arrow.png";

function LinkButton(props) {
  return (
    <a href={props.link} target="_blank" rel="noreferrer" className="content__button">
      {props.title}
      <span className="content__button--icon">
        <img src={ArrowIcon} alt="링크 이동하기" className="content__button--arrow" />
      </span>
    </a>
  )
}



export default LinkButton;