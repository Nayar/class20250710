import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Car from './Car';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Car make="BMW" model="x1" max_speed="200"/>
    <Car make="VW" model="polo" max_speed="150"/>
    <Car make="Nissan" model="March" max_speed="110"/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// 0km/h -> 2s
// 100km/h -> 0.5s

