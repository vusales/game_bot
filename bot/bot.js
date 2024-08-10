require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const express = require('express');

const TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const gameName = process.env.TELEGRAM_GAME_NAME;
// url that i created with ngrok for testing bot
let url = process.env.PUBLIC_NGROK_URL ;
// gameLink that botfather sent "t.me/testGamebbBot?game=lucideAlien"
let gameLink = process.env.TELEGRAM_GAME_LINK || "t.me/testGamebbBot?game=lucideAlien" ;
const port = process.env.PORT || 8000 ;

const bot = new TelegramBot(TOKEN, { polling: true });
const app = express();

// Matches /start
bot.onText(/\/start/, function onPhotoText(msg) {
  console.log("Message that user send", msg); 
  bot.sendGame(msg.chat.id, gameName);
});

// Handle callback queries
bot.on('callback_query', function onCallbackQuery(callbackQuery) {
  console.log("Play works"); 
  console.log("callbackQuery" ,  callbackQuery ); 
  // bot.answerCallbackQuery(callbackQuery.id, { url });
  // bot.answerCallbackQuery(callbackQuery.id, gameLink, true, {url: gameLink}); 
  bot.answerCallbackQuery(callbackQuery.id, {
    url: url,         
    text: 'Lets play!', 
    show_alert: false  
  });
});

// Bind server to port
app.listen(port, function listen() {
  console.log(`Server is listening at http://localhost:${port}`);
});
