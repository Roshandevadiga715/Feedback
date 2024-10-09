import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FeedbackForm from './FeedbackForm';
import Dashboard from './Dashboard';
import './index.css';

function App() {
    const [feedbackList, setFeedbackList] = useState([]);

    const handleFeedbackSubmit = (feedback) => {
        setFeedbackList((prevList) => [...prevList, feedback]);
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={<FeedbackForm onSubmit={handleFeedbackSubmit} />} />
                <Route path="/dashboard" element={<Dashboard feedbackList={feedbackList} />} />
            </Routes>
        </Router>
    );
}

export default App;
