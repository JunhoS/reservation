/* eslint=disable */ 
import React, {useState} from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';

function Bypass(props) {

    let navigate = useNavigate();

  return (
    <div>
        <div className="container">
            <div>잘 못 된 경로 입니다.</div>
            <a class="btn btn-primary btn-sm" role="button" onClick={()=>{ navigate(-1); }}>뒤로가기</a>
        </div>   
    </div>
  );
}

export default Bypass;