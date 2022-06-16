/* eslint=disable */ 
import React from 'react';
import './App.css';
import DetailList from './DetailList.js';

function Main() {

  return (
    <div>

      <div class="bg-light p-5 rounded-lg m-3 background">
        <h1 class="display-4">어서오세요!</h1>
        <p class="lead">이곳은 방탈출 예약 하는 곳 입니다.</p>
        <hr class="my-4" />
        <p>여러분의 시간을 투자하세요</p>
        <a class="btn btn-primary btn-lg" href="#" role="button">Go</a>
      </div>

      <DetailList />
    
    </div>
  );
}

export default Main;