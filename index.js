//This is a discord bot

require("dotenv").config();

console.log("*****Beginning Discord Bot*********");
const Discord = require('discord.js');
const client = new Discord.Client();

client.login(process.env.Token);

client.on('ready', discordRunning);
function discordRunning(){
    console.log("Hello!  Our Bot is up and running");
}

client.on('message', receivedMessage);

function receivedMessage(msg){
    if(msg.channel == '871447342031700018' && msg.content === 'Hello'){
        console.log('Hello '+msg.author.username);
        msg.channel.send('Hello '+msg.author.username);
    }
}


//https://discord.com/oauth2/authorize?client_id=871108427340992512&scope=bot