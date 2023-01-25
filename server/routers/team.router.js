const Router = require('express')
const router = new Router()
const teamController = require('../controllers/team.controller')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/create', authMiddleware, teamController.create)
router.delete('/delete', authMiddleware, teamController.delete)
router.put('/redact', authMiddleware, teamController.redact)
router.get('/findAll', authMiddleware, teamController.findAll)

module.exports = router