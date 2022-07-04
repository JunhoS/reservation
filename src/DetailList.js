/* eslint=disable */ 
import React, {useState, useContext} from 'react';
import './App.css';
import themaData from './data.js';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

let oThemaContext = React.createContext();

function Main() {

  let [thema, themaChange] = useState(themaData);
  let [stocks, stockChange] = useState([10,11,12]);

  return (
      <div className="container">
        <div className="wrap">
          <div className="contents">
            <div className="row">

              {
                thema.map((Item, i)=>{ return <Card2 thema={Item} i={i} /> })
              }
            </div>
          </div>
        </div>
        {/* <button className="btn btn-primary" onClick={()=>{
          axios.get("http://localhost:8081/data")
          .then((o)=>{
            // console.log(o.data)
            themaChange(thema.concat(o.data))
          })
          .catch((o)=>{
            console.log(o)
          });
        }}>더보기</button> */}
      </div>
  );
}

function Card(props){
    let navigate = useNavigate();
    let stock = useContext(oThemaContext);
  return (
    <div className="col-md-4">
      <img src={ props.thema.src } width="100%" height="300em"/>
      <h4>{ props.thema.title }</h4> 
      <p>{ props.thema.genre }</p>
      <p>{stock[props.i]}</p>
      <a className="btn btn-primary btn-sm" role="button" onClick={()=>{ navigate("/detail/"+props.thema.id)} }>예약하기</a>
    </div>
    
  )
}
function Card2(props){

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

  function TimeBox(props){
    return (
     <li>
      <a href="javascript:;" 
        class={ !!props.times.reservationFlg ? '' : 'end' }
      >
        <span className="time">{props.times.time}</span>
        {
          !!props.times.reservationFlg ?
          <span className="possible">예약가능</span> : 
          <span className="impossible">예약마감</span>
        }
        
      </a>
    </li>
    )
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
              {/* <em>빨간장미는 난이도를 나타냅니다</em> */}
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
              props.thema.timeSet.map((times) => { return <TimeBox times={times}/> })
            }
          </ul>
        </div>
      </div>
  )
}


export default Main;