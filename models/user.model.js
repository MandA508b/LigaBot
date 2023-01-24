const db= require('../db/db')

const schema = new db.Schema({
    name:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    telegramId:{
        type: String,
        required: true,
        unique: true
    },
    registrationDate: {
        type: Date,
        default: Date.now()
    },
    status: {//TODO: ???
        type: Boolean,
        default: false
    },
    role: {
        type: String,
        default: 'User'
    },
    teamId: {// TODO : next 2 rows
        type: String
    },
    ligaId: {
        type: String
    },
    isBlocked: {
        type: Boolean,
        default: false
    }
})

module.exports = db.model('User', schema)