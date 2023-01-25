const ligaService  = require('../services/liga.service')
const ApiError = require(`../errors/api.error`)

class ligaController{
    async create(req, res, next){//TODO: add сhannelId
        try{
            const {name, level, teamId} = req.body
            if(!name || !level || !teamId ){
                return next(ApiError.badRequest('!name || !level || !teamId'))
            }
            const team = await ligaService.create(name, level, teamId)

            return res.json({team})
        }catch (e) {
            next(e)
        }
    }

    async delete(req, res, next){
        try{
            const {ligaId} = req.body
            if(!ligaId){
                return next(ApiError.badRequest('!ligaId'))
            }
            const team = await ligaService.delete( ligaId)

            return res.json({team})
        }catch (e) {
            next(e)
        }
    }

    async redact(req, res, next){
        try{
            const {ligaId, data} = req.body
            if(!ligaId || !data){
                return next(ApiError.badRequest('!ligaId || !data'))
            }
            const team = await ligaService.redact(ligaId, data)

            return res.json({team})
        }catch (e) {
            next(e)
        }
    }

    async findAll(req, res, next){
        try{
            const teams = await ligaService.findAll()

            return res.json({teams})
        }catch (e) {
            next(e)
        }
    }
}

module.exports = new ligaController()