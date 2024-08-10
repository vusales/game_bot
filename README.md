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
4. Create a Telegram bot and game using BotFather. If you need guidance, refer to this <a href="https://dev.to/xlzior/telegram-games-an-intermediate-guide-45io#:~:text=Creating%20a%20Game%201%20Create%20a%20Telegram%20Bot,%2Fsetinline%203%20Create%20a%20new%20game%20using%20%2Fnewgame">Telegram game bot creating</a> guide.  Add your bot token to a `.env` file or modify the ./bot/bot.js file directly::
   ```
   BOT_TOKEN=your_bot_token_here
   ```
5. To test the game locally, install and sign in to ngrok. Obtain an authtoken from ngrok, then use it with the command `ngrok config add-authtoken $YOUR_AUTHTOKEN`. Afterward, run `ngrok http $YOUR_PORT` to get a public URL for your Telegram game bot. Copy the link and update the `url` variable in the ./bot/bot.js file
6. In the ./bot folder, first run  `npm install`, then execute `node bot.js`  
7. Open Telegram, search for your bot by name or use the game link provided by BotFather. Start a chat with the bot and type `/start` to see and play the game.






