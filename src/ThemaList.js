/* eslint=disable */ 
import React, {useState, useContext} from 'react';
import themaData from './data.js';
import axios from 'axios';
import './ThemaList.css';

import Card from './Card.js';
import CalendarForm from './CalendarForm.js';


function ThemaList(props) {
  let [thema, themaChange] = useState(themaData);
  return (
      <div className="container">
        <div className="wrap">
          <div className="contents">
            <CalendarForm />
            <div className="row">

              {
                thema.map((Item, i)=>{ return <Card thema={Item} i={i}/> })
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

export default ThemaList;