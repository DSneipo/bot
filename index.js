const TelegramBot = require ('node-telegram-bot-api')
const os = require ('os')

const bot = new TelegramBot ('1635277664:AAHTRqgf5b31ztG-KtV9dhmTlL748EXWtoE', {polling: true})
bot.on('message', msg => {
bot.sendMessage(msg.chat.id, 'Hello from ${os.type()}, bot says hi to"${msg.from.first_name}"')
})
