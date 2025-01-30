import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './component/Login';
import Dashboard from './component/Dashboard';
import Home from './component/Home';
import './App.css';

function App() {
    return (
        <Router>
            
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
            <nav>
                <Link to="/home">Register</Link>
                <Link to="/ ">Login</Link>
            </nav>
        </Router>
    );
}

export default App;
