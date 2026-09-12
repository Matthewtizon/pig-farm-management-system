

const express = require('express');
const app = express();
const PORT = 3000;

require("dotenv").config()

console.log(process.env.DB_HOST);

app.get('/', (req, res) => {
    res.send('Hello');
});

app.listen(PORT, () => {
    console.log('Server is Running at http://localhost:${PORT}');
});