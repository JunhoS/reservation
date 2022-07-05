/* eslint=disable */ 
import React, {useState} from 'react';
import './App.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Main from './main.js';
import ThemaDetail from './ThemaDetail.js';
import Bypass from './Bypass.js';
import ThemaList from './ThemaList.js';
import { Link, Route, Routes } from 'react-router-dom';


function App() {

  return (
    <div className="App">
      
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">방탈출 사이트</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link as={Link} to="/">Home</Nav.Link> */}
              <Nav.Link as={Link} to="/themas">테마</Nav.Link>
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

      <Routes>
          <Route path="/" element={ <Main /> } />
          <Route path="/themas" element={ <ThemaList /> } />
          <Route path="/themaDetail" element={ <ThemaDetail /> } />
          <Route path="/:id" element={ <Bypass /> } />
      </Routes>
    
    </div>
  );
}

export default App;