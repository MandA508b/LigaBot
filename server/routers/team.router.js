const Router = require('express')
const router = new Router()
const teamController = require('../controllers/team.controller')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/create', authMiddleware, teamController.create)
router.delete('/delete', authMiddleware, teamController.delete)
router.put('/redact', authMiddleware, teamController.redact)
router.get('/findAll', authMiddleware, teamController.findAll)
router.post('/findByLigaId', authMiddleware, teamController.findByLigaId)
router.post('/findTeamsByLigaId', authMiddleware, teamController.findTeamsByLigaId)
router.post('/findTeamById', authMiddleware, teamController.findTeamById)


module.exports = router