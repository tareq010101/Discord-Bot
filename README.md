#  Discord.js Bot

A simple yet powerful Discord bot built using **Node.js** and **Discord.js (v14+)**, featuring moderation commands (kick & ban), announcement webhook integration, and reaction-based role assignment.

---

## 🚀 Features

- Moderation Commands**
  - Kick members
  - Ban members
- Announcement System**
  - Send announcements to a channel using Discord Webhooks
- Reaction Roles**
  - Automatically assign or remove roles when users react to a specific message
- Environment Variable Support**
  - Securely manage tokens and webhook credentials with `.env`

---

##  Tech Stack

- **Node.js**
- **Discord.js**
- **dotenv** for environment management
- **WebhookClient** for announcements

---

##  Project Structure


discordjs-bot/
├── src/
│ └── bot.js # Main bot logic
├── .env # Environment variables (not pushed to GitHub)
├── .gitignore
├── package.json
└── README.md

2-Install dependencies

npm install


3-Create a .env file

DISCORD_BOT_TOKEN=your_discord_bot_token_here
WEBHOOK_ID=your_webhook_id_here
WEBHOOK_TOKEN=your_webhook_token_here


4-Run the bot

node src/bot.js


Or with nodemon (for auto-reload):
npx nodemon src/bot.js


Notes

Make sure your bot has the following permissions in your Discord server:

KICK_MEMBERS

BAN_MEMBERS

MANAGE_ROLES

READ_MESSAGE_HISTORY

ADD_REACTIONS

SEND_MESSAGES

Enable the Message Content Intent and Guild Members Intent in your bot settings on the Discord Developer Portal


------->Author
---> Tarek Elnaggar
