const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const scoreRoutes = require('./routes/scores');
const app = express();
const connectDB = require("./config");
require("dotenv").config();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
connectDB();

app.use('/api/scores', scoreRoutes);
app.get("/", (req, res) => {
    res.send("Decathlon Score Calculator API");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
