require('dotenv').config()
const { Telegraf } = require('telegraf')
const startServer = require('./server/index')
const userController = require('./controllers/user.controller')

const bot = new Telegraf(`${process.env.BOT_TOKEN}`)

bot.command('start', async (ctx) => {
    await userController.start(ctx.update.message.from)
    ctx.reply("Вітаю! Ви успішно зареєстровані як користувач!")
})

startServer()
bot.launch()