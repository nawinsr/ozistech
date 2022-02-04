const router = require('express').Router();
const asyncMiddleware = require('../middlewares/async-middleware');
const controller = require("../controllers/member_controller");
const jwtController = require('../controllers/jwtController');

router.post('/', [
    jwtController.isValid,
    asyncMiddleware(controller.createMember),
]);

router.get('/all', [
    jwtController.isValid,
    asyncMiddleware(controller.getAllMembers),
]);

router.get('/:id', [
    jwtController.isValid,
    asyncMiddleware(controller.getMember),
]);

router.put('/:id', [
    jwtController.isValid,
    asyncMiddleware(controller.putMember),
]);

router.delete('/:id', [
    jwtController.isValid,
    asyncMiddleware(controller.deleteMember),
]);



module.exports = router;