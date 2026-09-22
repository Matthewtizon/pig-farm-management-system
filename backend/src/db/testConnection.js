const { con } = require("./connections");

con.connect()
    .then(() => {
        console.log("PostgreSQL connected successfully!");
        return con.query("SELECT * FROM pigs;");
    })
    .then((result) => {
        console.log("Pigs:", result.rows);
    })
    .catch((error) => {
        console.error("PostgreSQO connection failed");
        console.error(error.message);
    })
    .finally(() => {
        con.end();
    });