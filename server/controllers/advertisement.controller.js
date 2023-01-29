const advertisementService  = require('../services/advertisement.service')
const ApiError = require('../errors/api.error')

class advertisementController{
    async create(req, res, next){
        try{
            const {name,userId,type,cityId,total,part,rate,deadline,extraInfo} = req.body
            if(!name || !userId || !type ||! cityId || !total || !rate || !deadline){
                return next(ApiError.badRequest('!name || !userId || !type ||! cityId || !total || !rate || !deadline'))
            }
            const advertisement = await advertisementService.create(name,userId,type,cityId,total,part,rate,deadline,extraInfo)

            return res.json({advertisement})
        }catch (e) {
            next(e)
        }
    }

    async delete(req, res, next){
        try{
            const {advertisementId} = req.body
            if(!advertisementId){
                return next(ApiError.badRequest('!advertisementId'))
            }
            const advertisement = await advertisementService.delete(advertisementId)

            return res.json({advertisement})
        }catch (e) {
            next(e)
        }
    }

    async redact(req, res, next){
        try{
            const {advertisementId, data} = req.body
            console.log(advertisementId, data)
            if(!advertisementId || !data){
                return next(ApiError.badRequest('!advertisementId  !data'))
            }
            const advertisement = await advertisementService.redact(advertisementId, data)

            return res.json({advertisement})
        }catch (e) {
            next(e)
        }
    }

    async findAll(req, res, next){
        try{
            const cities = await advertisementService.findAll()

            return res.json({cities})
        }catch (e) {
            next(e)
        }
    }

}

module.exports = new advertisementController()