import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './ScoreForm.css'; // Import the CSS for styling

const ScoreForm = () => {
    const [playerName, setPlayerName] = useState('');
    const [eventResults, setEventResults] = useState({
        hundredM: '',
        longJump: '',
        shotPut: '',
        highJump: '',
        fourHundredM: '',
        hurdles: '',
        discus: '',
        poleVault: '',
        javelin: '',
        fifteenHundredM: '',
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setEventResults({ ...eventResults, [e.target.name]: e.target.value });
    };

    const handleNameChange = (e) => {
        setPlayerName(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/scores', { eventResults });
            // Navigate to results page
            navigate('/results', {
                state: { playerName, eventResults, totalScore: response.data.totalScore },
            });
        } catch (error) {
            console.error('Error calculating score:', error);
        }
    };

    return (
        <div className="form-container">
            <h2>Decathlon Score Calculator</h2>
            <form onSubmit ={handleSubmit}>
                <div className="input-group">
                    <label>Player Name: </label>
                    <input
                        type="text"
                        value={playerName}
                        onChange={handleNameChange}
                        required
                    />
                </div>
                <div className="input-group">
                    <label>100m (seconds): </label>
                    <input
                        type="number"
                        name="hundredM"
                        value={eventResults.hundredM}
                        onChange={handleChange}
                        required
                        step="0.01"
                    />
                </div>
                <div className="input-group">
                    <label>Long Jump (cm): </label>
                    <input
                        type="number"
                        name="longJump"
                        value={eventResults.longJump}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="input-group">
                    <label>Shot Put (m): </label>
                    <input
                        type="number"
                        name="shotPut"
                        value={eventResults.shotPut}
                        onChange={handleChange}
                        required
                        step="0.01"
                    />
                </div>
                <div className="input-group">
                    <label>High Jump (cm): </label>
                    <input
                        type="number"
                        name="highJump"
                        value={eventResults.highJump}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="input-group">
                    <label>400m (seconds): </label>
                    <input
                        type="number"
                        name="fourHundredM"
                        value={eventResults.fourHundredM}
                        onChange={handleChange}
                        required
                        step="0.01"
                    />
                </div>
                <div className="input-group">
                    <label>110m Hurdles (seconds): </label>
                    <input
                        type="number"
                        name="hurdles"
                        value={eventResults.hurdles}
                        onChange={handleChange}
                        required
                        step="0.01"
                    />
                </div>
                <div className="input-group">
                    <label>Discus (m): </label>
                    <input
                        type="number"
                        name="discus"
                        value={eventResults.discus}
                        onChange={handleChange}
                        required
                        step="0.01"
                    />
                </div>
                <div className="input-group">
                    <label>Pole Vault (cm): </label>
                    <input
                        type="number"
                        name="poleVault"
                        value={eventResults.poleVault}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="input-group">
                    <label>Javelin (m): </label>
                    <input
                        type="number"
                        name="javelin"
                        value={eventResults.javelin}
                        onChange={handleChange}
                        required
                        step="0.01"
                    />
                </div>
                <div className="input-group">
                    <label>1500m (minutes): </label>
                    <input
                        type="number"
                        name="fifteenHundredM"
                        value={eventResults.fifteenHundredM}
                        onChange={handleChange}
                        required
                        step="0.01"
                    />
                </div>
                <button type="submit">Calculate Score</button>
            </form>
        </div>
    );
};

export default ScoreForm;