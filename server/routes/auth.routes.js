const Router = require('express')
const authController = require('../controllers/auth.controller')
const authMiddleware = require('../middlewares/auth.middleware')
const {check} = require('express-validator')

const router = new Router()

router.post('/registration', [
    check('username', "Uncorrect username").isLength({min:3, max:12}),
    check('password', 'Password must be longer than 3 and shorter than 12').isLength({min:3, max:12})
], authController.registration)

router.post('/login', authController.login)
router.get('', authMiddleware, authController.getUserByToken)

module.exports = router
