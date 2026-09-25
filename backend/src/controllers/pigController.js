const { con } = require('../db/connections');

// Import business logic
const { addPig } = require('../services/pigServices');]

// Import Model Creator
const { createPigModel } = require('../models/pigs');

// helper 
function response(status, message, res) {
    return res.status(status).json({ message });
}

exports.fetchPigs = async (req, res) => {
    const client = await con.connect();

    try {
        const users = await client.query('SELECT * FROM pigs;');

        return res.status(200).json(users.rows);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server Error" });
    } finally {
        client.release();
    }
}

exports.createPigs = async (req, res) => {
    //requrest
    const { tagNumber, breed, gender, birthDate, currentWeight, estimated_weight, status, photoUrl, notes } = req.body;

    //validation
    if (
        //validation for strings
        typeof name !== "string" ||
        name.trim() === "" ||
        //validation for numbers
        typeof age !== "number" ||
        age <= 0
    ) {
        return response(400, 'invalid', res);
    }

    // Model creation (data shape + ID)
    const pig = createPigModel(tagNumber, breed, gender, birthDate, currentWeight, estimated_weight, status, photoUrl, notes)
    
    // business logic
    const added = addPig(pig);

    if (!added) {
        return response(400, 'denied to add', res);
    }

    //response
    return response(200,'added new Pig')
};

