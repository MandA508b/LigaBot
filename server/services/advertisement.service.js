const Advertisement = require('../../models/advertisement.model')

class advertisementController{

    async create(name,userId,type,cityId,total,part,rate,deadline,extraInfo){
        const advertisement = await Advertisement.create({name,userId,type,cityId,total,part,rate,deadline,extraInfo})

        return advertisement
    }

    async delete(advertisementId){
        const advertisement = await Advertisement.findByIdAndDelete(advertisementId)

        return advertisement
    }

    async redact(advertisementId, data){
        const advertisement = await Advertisement.findByIdAndUpdate(advertisementId, data)
        console.log(advertisementId, data)
        return advertisement
    }

    async findAll(){
        const advertisements = await Advertisement.find()

        return advertisements
    }

}

module.exports = new advertisementController()