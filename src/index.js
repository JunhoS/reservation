import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { HashRouter, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {createStore} from 'redux';


let initData = {
  thema : {},
  times : {},
  selectday : new Date()
};

function reducer(stete=initData, action){
  if(action.type === "selectThema"){
    stete.thema = action.thema;
    stete.times = action.times;
  }else if(action.type === "selectday"){
    stete.selectday = action.selectday;
  }
  return stete;
}

let store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
