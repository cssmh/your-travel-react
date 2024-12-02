// src/App.js
import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import UserRoutes from './routes';
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import './App.css';
function App() {
    return (
        <>
            <Router>
                <Navbar />
                <UserRoutes />
                <Footer />
            </Router>

        </>

    );
}

export default App;
