/* eslint=disable */ 
import React from 'react';
import './App.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function App() {
  
  return (
    <div className="App">
      
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">방탈출 사이트</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">테마</Nav.Link>
              <NavDropdown title="지점" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">아쿠아마린점</NavDropdown.Item>
                {/* <NavDropdown.Item href="#action/3.2">
                  루비점
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">다이아몬드점</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  강남 1호점
                </NavDropdown.Item> */}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div class="bg-light p-5 rounded-lg m-3 background">
        <h1 class="display-4">어서오세요!</h1>
        <p class="lead">이곳은 방탈출 예약 하는 곳 입니다.</p>
        <hr class="my-4" />
        <p>여러분의 시간을 투자하세요</p>
        <a class="btn btn-primary btn-lg" href="#" role="button">Go</a>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img src="room1.jpg" width="100%" height="300em"/>
            <h4>테마1</h4> 
            <p>액션/잡입</p>
            <a class="btn btn-primary btn-sm" href="#" role="button">예약하기</a>
          </div>
          <div className="col-md-4">
            <img src="room2.jpg" width="100%" height="300em"/>
            <h4>테마2</h4>
            <p>스릴러/공포</p>
            <a class="btn btn-primary btn-sm" href="#" role="button">예약하기</a>
          </div>
          <div className="col-md-4">
            <img src="room3.jpg" width="100%" height="300em"/>
            <h4>테마3</h4>
            <p>드라마/감동</p>
            <a class="btn btn-primary btn-sm" href="#" role="button">예약하기</a>
          </div>
        </div>
      </div>
    
    </div>
  );
}

export default App;