const db= require('../db/db')

const schema = new db.Schema({
    status: {
        type: Boolean,
        default: false
    },
    name: {
        type: String,
        required: true
    },
    level: {
        type: String,
        required: true
    },
    channelId: {
        type: String,
        default: "12345"
    }
})

module.exports = db.model('Liga', schema)

