import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Nexaio from './Nexaio';
import Philcon from './Philcon';
import Kwisaysayan from './Kwisaysayan';
import Nexus from './Nexus';
import Umak from './Umak';
import Jurassic from './Jurassic';
import Grocery from './Grocery';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/nexaio" element={<Nexaio />} />
        <Route path="/philcon" element={<Philcon />} />
        <Route path="/kwisaysayan" element={<Kwisaysayan/>}/>
        <Route path="/nexus" element={<Nexus/>}/>
        <Route path="/umak" element={<Umak/>}/>
        <Route path="/jurassic" element={<Jurassic/>}/>
        <Route path="/grocery" element={<Grocery/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
