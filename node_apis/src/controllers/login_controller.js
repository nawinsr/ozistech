const loginModel = require("../model/login_model");
const jwt = require('jsonwebtoken');
const config = require('../config/dev');

async function login(req, res) {
    const { username, password } = req.body;
    console.log(username, password);
    try {
        const result = await loginModel.login(username, password);
        console.log("result", result);
        if (result === false) {
            return res.status(401).json("Invalid username or password !");
        } else {
            let token;
            const jwtInfo = {
                user_id: result.id,
                type: result.usertype
            }
            const type = result.usertype;
            token = jwt.sign({...jwtInfo }, config.JWTSECRET);
            const loginResult = { token, type };
            return res.status(200).json(loginResult);
        }
    } catch (err) {
        // logger.error(err);
        console.log(err);
        return res.sendStatus(400);
    }
}


module.exports.login = login;