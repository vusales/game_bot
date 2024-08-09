const TelegramBot = require('node-telegram-bot-api');
const express = require('express');

const TOKEN = "7083202109:AAHJFwWlBXtcieBsHIr18JVceXQF-cK9Q2U";
const gameName = "testRobot" ;

// url that i created with ngrok for testing bot
let url = "https://9f00-37-61-126-27.ngrok-free.app" ;

// gameLink that botfather sent "t.me/testGamebbBot?game=testRobot"
let gameLink = "t.me/testGamebbBot?game=testRobot" ;

const port = 8080 ;

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
