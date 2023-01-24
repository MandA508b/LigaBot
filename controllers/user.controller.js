const User = require('../models/user.model')

class UserController{
    async start(data){
        try{
            const candidate = await User.findOne({telegramId: data.id})
            if(candidate){
                console.log({candidate})
                return
            }
            let name = data.first_name
            if(data.last_name){
                name = name + ' ' + data.last_name
            }
            const user = await User.create({
                name: name,
                telegramId: data.id,
                username: data.username
            })
            console.log('created user : \n', user)
        }catch (e) {
            console.log(e)
        }
    }
}

module.exports = new UserController()