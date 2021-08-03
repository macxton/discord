/**
 * Nvmb Hearts Discord Bot
 * 8/1/21
 * index.js 
 * 
 * Purpose:  
 * 1)Connect to Discord 
 * 2)Import handler to handle commands
 */
require("dotenv").config();
const Discord = require('discord.js');
const client = new Discord.Client();

client.login(process.env.Token);
client.on('ready', discordRunning);

function discordRunning(){
    console.log("Hello!  Our Bot is up and running");
}

const commandHandler = require("./commands");
client.on('message', commandHandler);




