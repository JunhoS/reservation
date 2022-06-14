/* eslint=disable */ 

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
// 깃 연동 테스트
// 젠킨스 빌드 테스트
  let [글제목, 글제목변경] = useState(['남자 코트 추천', "강남 우동 맛집", "파이썬독학"]);
  let [model, modelChange] = useState(false);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [누른제목, 누른제목변경] = useState(0);
  let [입력값, 입력값변경] = useState('');

  function 리스트추가(val){ 
    let changelist = [...글제목]
    changelist.unshift(val); 
    글제목변경(changelist); 
    따봉증가();
  }

  function 따봉추가(idx){ 
    let changel따봉 = [...따봉]
    changel따봉[idx]++; 
    따봉변경(changel따봉); 
  }

  function 따봉증가(){ 
    let changel따봉 = [...따봉]
    changel따봉.unshift(0); 
    따봉변경(changel따봉); 
  }

  return (

    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
     

      {
        글제목.map(function(subject, idx){
          return <div className='list' key={idx} >
            <h3>
              <span  onClick={ ()=>{ modelChange(true); 누른제목변경(idx); } }>{subject}</span>
              <span onClick={ ()=>{ 따봉추가(idx); } } >👍</span> {따봉[idx]} 
            </h3>
            <p>2월 19일 발행</p>
            <hr />
          </div>
        })
      }

      <div className="publish">
        <input onChange={ (e)=>{ 입력값변경(e.target.value); } }/>
        <button onClick={ ()=>{ 리스트추가(입력값); } }>저장</button>
      </div>

      {/* <input onChange={ (e)=>{ 입력값변경(e.target.value) } } /> */}
      <button onClick={ ()=>{ modelChange(!model); } } >열고닫기</button>

      {
        !!model ? <Modal 글제목={글제목} 누른제목={누른제목}/> : null
      }

    </div>
  );
}

function Modal(props){
  return(

    <div className="modal">
      <h2>제목 : { props.글제목[props.누른제목] }</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>

  )
}

export default App;
