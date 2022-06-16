/* eslint=disable */ 
import React, {useState} from 'react';
import './App.css';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

function Detail(props) {

    let { id } = useParams();
    let navigate = useNavigate();

    let item = props.thema.find(x=>x.id == id);

    let Box = styled.div`
        padding-top : 30px;
    `
    let DetailTitle = styled.h4`
        font-size : 25px;
        color : ${ props=>props.Color }
    `

// console.log(process.env.PUBLIC_URL);
  return (
    <div>
        <div className="container">
            <Box>
                <DetailTitle Color="red" >상세페이지</DetailTitle>
            </Box>
            <div className="row">
                <div className="col-md-6">
                    <img src={ "../" + item.src } width="100%" />
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{ item.title }</h4>
                    <p>{ item.genre }</p>
                    <a class="btn btn-primary btn-sm" role="button">예약하기</a>
                    &nbsp;
                    <a class="btn btn-primary btn-sm" role="button" onClick={()=>{ navigate(-1); }}>뒤로가기</a>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Detail;