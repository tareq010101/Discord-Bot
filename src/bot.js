require('dotenv').config();
const { Client, WebhookClient, GatewayIntentBits, Partials } = require('discord.js');

const client = new Client({
  partials: [Partials.Message, Partials.Reaction],
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessageReactions
  ],
});


const webhookClient = new WebhookClient({
    id: process.env.WEBHOOK_ID,
    token: process.env.WEBHOOK_TOKEN
});


const PREFIX='$'
client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});


client.on('messageCreate', async (message) => {
    if(message.author.bot) return;
    if(message.content.startsWith(PREFIX)){
        const [CMD_NAME, ...args]=message.content.trim()
        .substring(PREFIX.length).split(/\s+/)
        if(CMD_NAME==='kick'){

            if(!message.member.permissions.has('KICK_MEMBERS'))
                return message.reply('you dont have premission to kick members')
            if(args.length === 0)
                return message.reply('please provide ID')

            const member =message.guild.members.cache.get(args[0])
        if(member){
            member
            .kick()
            .then((member) => message.channel.send(`${member} was kicked`))
            .catch((err)=> message.channel.send(`I dont hane premission`))
        }else{
            message.channel.send('member not found')
        }
        }else if(CMD_NAME ==='ban'){
            if(!message.member.permissions.has('BAN_MEMBERS'))
                return message.reply('you dont have premission to kick members')
            if(args.length === 0)
                return message.reply('please provide ID');
            try{
                const user= await message.guild.members.ban(args[0])
                message.channel.send('user baned sucessfuly')
            }catch(err){
                message.channel.send('an error eccord')

            }
        } else if (CMD_NAME === 'announce') {
      console.log(args);
      const msg = args.join(' ');
      console.log(msg);
      webhookClient.send(msg);
    }

        
    }
});

client.on('messageReactionAdd', (reaction, user) => {
  const { name } = reaction.emoji;
  const member = reaction.message.guild.members.cache.get(user.id);
  if (reaction.message.id === '1425233247092211753') {
    switch (name) {
      case '🍏':
        member.roles.add('1425234768227995729');
        break;
      case '👍':
        member.roles.add('1425234870870999063');
        break;
      case '🥵':
        member.roles.add('1425234912973295698');
        break;
      case '🥶':
        member.roles.add('1425234956174491720');
        break;
    }
  }
});

client.on('messageReactionRemove', (reaction, user) => {
  const { name } = reaction.emoji;
  const member = reaction.message.guild.members.cache.get(user.id);
  if (reaction.message.id === '1425233247092211753') {
    switch (name) {
      case '🍏':
        member.roles.remove('1425234768227995729');
        break;
      case '👍':
        member.roles.remove('1425234870870999063');
        break;
      case '🥵':
        member.roles.remove('1425234912973295698');
        break;
      case '🥶':
        member.roles.remove('1425234956174491720');
        break;
    }
  }
});
client.login(process.env.DISCORD_BOT_TOKEN);
