const express = require('express');
const router = express.router();

// controllers variable
const { fetchPigs } = require("../controllers/pigController.js");

// endpoints
router.get('/fetch-pigs' fetchPigs,);

router.post('/create-pig',);

router.update('/update-pig/?',);

router.delete('/delete-pig/?',);



module.exports = router;