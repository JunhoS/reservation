/* eslint=disable */ 
import React from 'react';
import TimeBox from './TimeBox.js';

function Card(props) {

  function optionLevel(cnt) {
    let array = [];
    for (let i = 0; i < cnt; i++) {
      array.push(<img src="favourites.png" alt="난이도" width="34px" height="34px"/>);
    }
    for (let i = 0; i < 5-cnt; i++) {
      array.push(<img src="star.png" alt="난이도" width="34px" height="34px"/>);
    }
    return array;
  }

  return (
    <div className="theme_box">
      {/* <div className="event" style={{display:"block"}}>
        <span className="event01" style={{display:"none"}}></span>
        <span className="event02" style={{display:"block"}}></span>
        <span className="event03" style={{display:"none"}}></span>
        <span className="age19" style={{display:"block"}}></span>
      </div> */}
      <div className="theme_Title">
        <div className="theme_div">
          <span className="level">
            <span className="level_img">
              {
                optionLevel(props.thema.level)
              }
            </span>
            <em>별은 난이도를 나타냅니다</em>
          </span>
        </div>
      </div>
      <div className="theme_pic">
        <img src={ props.thema.src } width="300" align="absmiddle" alt="images"/>
      </div>
      <div className="time_Area">
        <h3 className="h3_theme">{props.thema.title}</h3>
        <p className="tag_tt">{props.thema.hashTeg}</p>
        <p className="tag_txt">{props.thema.explain}</p>
        <ul className="reserve_Time">
          {
            props.thema.timeSet.map((times, i) => { return <TimeBox times={times} thema={props.thema} idx={i} selectday={props.selectday} /> })
          }
        </ul>
      </div>
    </div>
  );
}


export default Card;