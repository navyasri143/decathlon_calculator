import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScoreForm from './components/ScoreForm';
import ScoreResults from './components/ScoreResults';
import './App.css';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ScoreForm />} />
                <Route path="/results" element={<ScoreResults />} />
            </Routes>
        </Router>
    );
};

export default App;