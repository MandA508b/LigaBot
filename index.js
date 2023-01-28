require('dotenv').config()
const { Telegraf,Markup } = require('telegraf')
const startServer = require('./server/index')
const userController = require('./controllers/user.controller')

const bot = new Telegraf(`${process.env.BOT_TOKEN}`)

bot.command('start', async (ctx) => {
    await userController.start(ctx.update.message.from)
    ctx.reply("Вітаю! Ви успішно зареєстровані як користувач!",
    Markup.inlineKeyboard([
        Markup.button.webApp('Додати Оголошення', 'https://heroic-profiterole-cc695c.netlify.app'),
    ]))
})

startServer()
bot.launch()