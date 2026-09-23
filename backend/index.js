const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 3000;

const pigRoutes = require("./src/routes/pigRoutes.js");

const { con } = require("./db.js");

app.use(express.json());
app.use(cors());

const {con} = require("./src/db/connections.js");

con.connect().then(()=> console.log("DB Connected"))

app.get('/', (req, res) => {
    res.send('Hello');
});

app.get("/health-check", (req, res) => {
    res.status(200).json({
        status: 'OK',
        message: 'Server is healthy'
    });
});


app.use("/api", pigRoutes);

app.listen(PORT, () => {
    console.log(`Server is Running at http://localhost:${PORT}`);
});