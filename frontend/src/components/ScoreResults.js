import React from 'react';
import { useLocation } from 'react-router-dom';
import './ScoreResults.css'; // Import the CSS for styling

const ScoreResults = () => {
    const location = useLocation();
    const { playerName, eventResults, totalScore } = location.state;

    return (
        <div className="results-container">
            <h2>Results for {playerName}</h2>
            <ul>
                <li>100m: {eventResults.hundredM} seconds</li>
                <li>Long Jump: {eventResults.longJump} cm</li>
                <li>Shot Put: {eventResults.shotPut} m</li>
                <li>High Jump: {eventResults.highJump} cm</li>
                <li>400m: {eventResults.fourHundredM} seconds</li>
                <li>110m Hurdles: {eventResults.hurdles} seconds</li>
                <li>Discus Throw: {eventResults.discus} m</li>
                <li>Pole Vault: {eventResults.poleVault} cm</li>
                <li>Javelin Throw: {eventResults.javelin} m</li>
                <li>1500m: {eventResults.fifteenHundredM} seconds</li>
            </ul>
            <h4>Total Score: {totalScore}</h4>
        </div>
    );
};

export default ScoreResults;