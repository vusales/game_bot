# Hamster-Kombat-Clone Telegram Game Bot
This project is a Telegram Game Bot and forked from <a href="https://github.com/nikandr-surkov/Hamster-Kombat-Telegram-Mini-App-Clone">github.com/nikandr-surkov/Hamster-Kombat-Telegram-Mini-App-Clone</a>


## Key Features

### Levels and Points System:

- The application tracks the user's level and points.
There are ten levels, ranging from "Bronze" to "Lord," based on the number of coins (points).
As the user's points increase, they advance through the levels.

###  Timers:

- The application includes countdown timers for three daily events: "Daily Reward," "Daily Cipher," and "Daily Combo." These timers reset daily at specific times.

### Profit per Hour:

- The application simulates profit accumulation per hour, updating the user's points every second based on a predefined profit rate.

### Interactive UI Elements:

- The application features clickable cards that animate and add points when clicked.
A floating animation is displayed at the click location, showing the points added.

### Responsive Layout:

- The UI is designed to be responsive, with different sections of the screen dedicated to various game functions.


## Technologies Used

- React
- Tailwind CSS
- Telegraf (Telegram Bot API)
- Node.js (express npm, node-telegram-bot-api npm)



## Setup

1. Clone the repository
2. Install dependencies with `npm install`
3. Start the React app with `npm run dev`
4. Create a Telegram bot using BotFather and add your bot token to a `.env` file or you can modify ./bot/bot.js file directly:

   ```
   BOT_TOKEN=your_bot_token_here

   ```
5. For testing game in your local you have to install ngrok and signin, you have to get authtoken from ngrok, use this authtoken first `ngrok config add-authtoken $YOUR_AUTHTOKEN` ,  after `ngrok http $YOUR_PORT` this command will give you public url for checking your telegram game bot. Copy link and change url variable in ./bot/bot.js file.
6. Go to ./bot folder first `npm install`, then `node bot.js` 






