const Router = require('express')
const Holst = require('../models/Holst')
const holstController = require('../controllers/holst.controller')
const authMiddleware = require('../middlewares/auth.middleware')
const router = new Router()

router.post('/create', authMiddleware, holstController.createHolst)
router.post('/save', authMiddleware, holstController.saveHolst)
router.get('', authMiddleware, holstController.getHolsts)
router.get('/one', authMiddleware, holstController.getCurrentHolst)


module.exports = router
