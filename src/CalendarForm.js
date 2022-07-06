/* eslint=disable */ 
import React, {useState, useContext} from 'react';
import './ThemaList.css';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {connect} from 'react-redux';

// let oThemaContext = React.createContext();

function CalendarForm(props){
  let [selectday, selectdayChange] = useState(props.state.selectday);
  let oToday = new Date();
  let sYear = oToday.getFullYear();
  let sMonth = oToday.getMonth();
  let sDate = oToday.getDate();
  
  return(
    <form name="sortform" action="" method="post">
			<input type="hidden" name="k_shopno" value="10"/>
			<input type="hidden" name="prdno" value=""/>
			<div className="date-picker">
				<div className="day">
					<span>예약날짜선택</span>
          <DatePicker 
            className="reactCalendarUi" 
            minDate={oToday} 
            maxDate={new Date(sYear, sMonth, sDate+7)}
            selected={selectday} 
            onChange={
              (date) => { 
                selectdayChange(date);
                props.dispatch({ type : "selectday", selectday:date });
              }
            }
            dateFormat="yyyy-MM-dd"
          />
				</div>
				<div className="check">
					<p className="clear">※ 예약을 원하시는 날짜와 아래 테마에 시간대를 선택해주세요.</p><a href="reservation_search.html" class="red_btn">예약내역확인/취소</a>
				</div>
			</div>
    </form>
  )
}

function stateProps(state){
  return{
    state : state
  }
}


export default connect(stateProps)(CalendarForm);