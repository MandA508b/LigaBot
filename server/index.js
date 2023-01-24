const express = require('express')
const cors = require('cors')
const router = require('./routers/index')
const app = new express()
const PORT = 5000 || process.env.PORT

app.use(express.json())
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}))
app.use('/', router)

async function start(){
    try{
        app.listen(PORT, () => {
            console.log(`Server started on PORT: ${PORT}`)
        })
    }catch (e){
        console.log(e)
    }
}

module.exports = start