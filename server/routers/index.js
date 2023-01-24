const Router = require('express')
const router = new Router()
const userRouter = require('./user.router')
const adminRouter = require('./admin.router')

router.use('/user', userRouter)
router.use('/admin', adminRouter)

module.exports = router