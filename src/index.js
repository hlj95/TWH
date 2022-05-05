import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import BaseLayout from './components/BaseLayout';
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutUs from './components/AboutUs';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <BaseLayout>
        <Routes>
          <Route element={ <Home /> } exact path="/" />
          <Route element={ <AboutUs /> } path="/about" />
          
        </Routes>
      </BaseLayout>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
