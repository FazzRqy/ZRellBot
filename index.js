const TelegramBot = require('node-telegram-bot-api');

const token = 'YOUR_TELEGRAM_BOT_TOKEN';
const bot = new TelegramBot(token, {polling: true});

bot.on('message', (msg) => {
 const chatId = msg.chat.id;
 const text = 'Pesan diterima!';

 bot.sendMessage(chatId, text);
});
