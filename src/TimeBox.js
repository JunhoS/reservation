/* eslint=disable */ 
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {connect} from 'react-redux';

function TimeBox(props) {

  let navigate = useNavigate();

  return (
    <li>
      <a href="javascript:;" 
        class={ !!props.times.reservationFlg ? '' : 'end' }
        onClick={()=>{ 
          if(!!props.times.reservationFlg){
            props.dispatch({ type : "selectThema", thema:props.thema, times:props.times });
            navigate("/themaDetail")} 
          }
        }
      >
        <span className="time">{props.times.time}</span>
        {
          !!props.times.reservationFlg ?
          <span className="possible">예약가능</span> : 
          <span className="impossible">예약마감</span>
        }
        
      </a>
    </li>
  );
}

function ThemaProps(store){
  return{
    store : store
  }
}


export default connect(ThemaProps)(TimeBox);