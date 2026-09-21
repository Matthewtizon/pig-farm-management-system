const express = require('express');
const app = express();
const PORT = 3000;
const {con} = require("./db.js");

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

app.listen(PORT, () => {
    console.log(`Server is Running at http://localhost:${PORT}`);
});