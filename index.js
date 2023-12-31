const TelegramBot = require('node-telegram-bot-api');

const token = '6500327667:AAFcPqqJPN69_XVNArj-sH5t2tJFlNX4reo';
const bot = new TelegramBot(token, {polling: true});

bot.on('message', (msg) => {
 const chatId = msg.chat.id;
 const text = 'Pesan diterima!';

 bot.sendMessage(chatId, text);
});