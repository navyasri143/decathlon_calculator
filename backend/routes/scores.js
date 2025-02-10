const express = require('express');
const router = express.Router();
const Score = require('../models/Score');

// Scoring formulas
const calculateScore = (results) => {
    const scores = {};
    scores.hundredM = 25.4347 * Math.pow((18 - results.hundredM), 1.81);
    scores.longJump = 0.14354 * Math.pow((results.longJump - 220), 1.4);
    scores.shotPut = 51.39 * Math.pow((results.shotPut - 1.5), 1.05);
    scores.highJump = 0.8465 * Math.pow((results.highJump - 75), 1.42);
    scores.fourHundredM = 1.53775 * Math.pow((82 - results.fourHundredM), 1.81);
    scores.hurdles = 5.74352 * Math.pow((28.5 - results.hurdles), 1.92);
    scores.discus = 12.91 * Math.pow((results.discus - 4), 1.1);
    scores.poleVault = 0.2797 * Math.pow((results.poleVault - 100), 1.35);
    scores.javelin = 10.14 * Math.pow((results.javelin - 7), 1.08);
    scores.fifteenHundredM = 0.03768 * Math.pow((480 - results.fifteenHundredM), 1.85);

    return Object.values(scores).reduce((acc, score) => acc + score, 0);
};

// POST route to calculate scores
router.post('/', async (req, res) => {
    const results = req.body.eventResults;
    const totalScore = calculateScore(results);

    const score = new Score({
        eventResults: results,
        totalScore: totalScore,
    });

    try {
        await score.save();
        res.status(201).json(score);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;