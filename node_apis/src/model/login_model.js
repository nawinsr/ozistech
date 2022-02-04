const db = require("../db");
const bcrypt = require("../api/bcrypt");
const constants = require("../constants");

async function login(username, password) {
    const connection = await db.getConnection();
    const [results] = await connection.query('SELECT * FROM user_credentials WHERE username = ?', [username]);
    console.log(results);
    if (!results || !results[0]) {
        connection.release();
        return false;
    }
    console.log(4);
    const loginDetails = results[0];
    console.log(loginDetails.password);
    if (loginDetails.usertype == constants.admin) {
        console.log(password);
        if (password == loginDetails.password) {
            connection.release();
            console.log(6);
            return false;
        }
        connection.release();
        return loginDetails;
    } else return false;


}

module.exports.login = login;