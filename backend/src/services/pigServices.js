const { con } = require('../db/connections');

async function addPig(pig) {
    // Validate pig object

    if (

    ) {
        return false;
    }

    const query = `
    INSERT INTO pigs ()
    VALUES ()
    RETURNING *
    `;

    const result = await con.query(query, [pig.taggedNUmber]);
    return result.rows[0];
}


// Export service functions
module.exports = {
    addPig
};