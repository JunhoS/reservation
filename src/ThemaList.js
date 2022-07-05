/* eslint=disable */ 
import React, {useState, useContext} from 'react';
import themaData from './data.js';
import axios from 'axios';
import './ThemaList.css';

import Card from './Card.js';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// let oThemaContext = React.createContext();

function ThemaList(props) {

  let [thema, themaChange] = useState(themaData);

  return (
      <div className="container">
        <div className="wrap">
          <div className="contents">
            <CalendarForm />
            <div className="row">

              {
                thema.map((Item, i)=>{ return <Card thema={Item} i={i} /> })
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

function CalendarForm(){
  return(
    <form name="sortform" action="" method="post">
			<input type="hidden" name="k_shopno" value="10"/>
			<input type="hidden" name="prdno" value=""/>
			<div className="date-select">
				<div className="day">
					<span>예약날짜선택</span>
          <DatePicker className="reactCalendarUi" value="2022-07-05" minDate={new Date()}/>
					{/* <input 
            type="text" 
            name="rdate" 
            style={{width:"177px", backgroundColor:"transparent", border:"none", height:"46px", fontSize:"18px", fontFamily: "'Roboto', sans-serif", cursor:"pointer", marginLeft: "41px"}} 
            title="예약날짜를 선택하세요" 
            value="2022-07-05" 
            onchange="Date_Ch(this.form);" 
            readonly="" 
            id="datepicker_bbs" 
            class="hasDatepicker"
            onClick={
              (e)=>{

              }
            }
          /> */}
				</div>
				<div className="check">
					<p className="clear">※ 예약을 원하시는 날짜와 아래 테마에 시간대를 선택해주세요.</p><a href="reservation_search.html" class="red_btn">예약내역확인/취소</a>
				</div>
			</div>
    </form>
  )
}



export default ThemaList;