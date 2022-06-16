/* eslint=disable */ 
import React, {useState} from 'react';
import './App.css';
import themaData from './data.js';
import { useNavigate } from 'react-router-dom';

function Main() {

  let [thema, themaChange] = useState(themaData);

  return (
      <div className="container">
        <div className="row">

          {
            thema.map((Item)=>{ return <Card thema={Item} /> })
          }

        </div>
      </div>
  );
}

function Card(props){
    let navigate = useNavigate();
  return (
    <div className="col-md-4">
      <img src={ props.thema.src } width="100%" height="300em"/>
      <h4>{ props.thema.title }</h4> 
      <p>{ props.thema.genre }</p>
      <a class="btn btn-primary btn-sm" role="button" onClick={()=>{ navigate("/detail/"+props.thema.id)} }>예약하기</a>
    </div>
  )
}

export default Main;