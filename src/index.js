import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Test from "./Test.js"
import Test2  from './Test2.js'  

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   {/* <h1>Hello React</h1>
   <h1>1 + 1</h1>
   <h1> {1+ 1} </h1>
   <button>click</button>
   <Test></Test>
   <Test2></Test2> */}
   <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
