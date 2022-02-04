const jwt = require('jsonwebtoken');
const constants = require('../constants');
const config = require('../config/dev');



function isValid(req, res, next) {

    if (!req.headers.authorization) {
        return res.sendStatus(401);
    }

    const token = req.headers.authorization.replace('Bearer ', '');
    if (token) {
        try {
            const { user_id, type } = jwt.verify(token, config.JWTSECRET);
            req.userData = {
                user_id,
                type
            };
            next();
        } catch (err) {
            return res.sendStatus(401);
        }
    } else {
        return res.sendStatus(401);
    }
}

function validAdmin(req, res, next) {
    if (isAdmin(req.userData.type)) {
        next();
    } else {
        res.status(401).json(constants.noAuth);
    }
}

function isAdmin(type) {
    if (type === constants.admin) {
        return true;
    }
    return false;
}

module.exports.validAdmin = validAdmin;
module.exports.isValid = isValid;