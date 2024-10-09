import React from 'react';
import { Link } from 'react-router-dom';
function Dashboard({ feedbackList }) {
    
    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Feedback Dashboard</h2>
            {feedbackList.length === 0 ? (
                <p>No feedback submitted yet.</p>
            ) : (
                <ul>
                    {feedbackList.map((feedback, index) => (
                        <li key={index} className="border-b py-2">
                            <div>visit:{feedback.options === 10
                                    ? "Regular"
                                    : feedback.options === 20
                                    ? "Occasional"
                                    : "First time"}</div>
                            <div>Food Quality: {feedback.foodQuality}</div>
                            <div>Service Quality: {feedback.serviceQuality}</div>
                            <div>Overall Experience: {feedback.overallExperience}</div>
                            <div>Recommendation: {feedback.recommendation}</div>
                            <div>Suggestions: {feedback.suggestions}</div>
                            <div>Receive Follow-Up: {feedback.receiveFollowUp ? 'Yes' : 'No'}</div>
                        </li>
                    ))}
                </ul>
            )}
            <Link to="/">Feedback</Link>
        </div>
    );
}

export default Dashboard;
