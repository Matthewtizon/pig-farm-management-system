const express = require('express');
const app = express();
const PORT = 3000;
const {con} = require("./db.js");

con.connect().then(()=> console.log("DB Connected"))

app.get('/', (req, res) => {
    res.send('Hello');
});

app.listen(PORT, () => {
    console.log('Server is Running at http://localhost:${PORT}');
});