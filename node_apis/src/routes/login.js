const router = require('express').Router();
const asyncMiddleware = require('../middlewares/async-middleware');
const controller = require("../controllers/login_controller");

router.post('/', [
    asyncMiddleware(controller.login),
]);

module.exports = router;