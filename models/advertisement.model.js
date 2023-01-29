const db= require('../db/db')

const schema = new db.Schema({
    status: {
        type: Boolean,
        default: false
    },
    userId:{
        type: String,
        required: true
    },
    leagueId:{
        type: db.Schema.Types.ObjectId,
<<<<<<< HEAD
        required:true
=======
        default:'63d5abac8c57d24fa4077b28'
>>>>>>> 6e55377c88af4d76b7dc2eb943380709fab67fb1
    },
    type: {
        type: String,
        required: true
    },
    cityId:{
        type: db.Schema.Types.ObjectId,
        required: true
    },
    total:{
        type: Number,
        required: true
    },
    part: {
        type: Number,
        default: 0
    },
    rate:{
        type: Number,
        required: true
    },
    deadline:{
        type: Date,
        required: true
    },
    extraInfo: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

module.exports = db.model('Advertisement', schema)
