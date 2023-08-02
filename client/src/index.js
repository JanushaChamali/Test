import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import './style.css';
import Login from './Login';
import Admin from './Admin';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Router>
      <Routes>      
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
);
