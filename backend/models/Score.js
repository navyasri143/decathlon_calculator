const mongoose = require('mongoose');

const scoreSchema = new mongoose.Schema({
    eventResults: {
        hundredM: Number,
        longJump: Number,
        shotPut: Number,
        highJump: Number,
        fourHundredM: Number,
        hurdles: Number,
        discus: Number,
        poleVault: Number,
        javelin: Number,
        fifteenHundredM: Number,
    },
    totalScore: Number,
});

module.exports = mongoose.model('Score', scoreSchema);