const TelegramBot = require('node-telegram-bot-api');

const token = '5809078192:AAFNVDkHVSSnT4LXvDo6FRx_gpc34-mtT6A';
const webAppUrl = 'https://ya.ru'
const bot = new TelegramBot(token, {polling: true});


bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if (text === '/start') {
    await bot.sendMessage(chatId,'Ниже появится кнопка, заполни форму',{
        reply_markup: {
           keyboard: [
                [{text: 'Заполнить форму', web_app: {url: webAppUrl}}],
        ]
        }
    });
  }
  await bot.sendMessage(chatId,'Переходи в наш магазин',{
    reply_markup: {
        inline_keyboard: [
            [{text: 'Сделать заказ', web_app: {url: webAppUrl}}],
    ]
    }
});
});
