const Router = require('express')
const router = new Router()
const ligaController = require('../controllers/liga.controller')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/create', authMiddleware, ligaController.create)
router.delete('/delete', authMiddleware, ligaController.delete)
router.put('/redact', authMiddleware, ligaController.redact)
router.get('/findAll', authMiddleware, ligaController.findAll)

module.exports = router