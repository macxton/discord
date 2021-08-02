/**
 * Nvmb Hearts Discord Bot
 * 8/1/21
 * index.js 
 * 
 * Purpose:  To handle interactions with users who join or send messages 
 * in the Nvmb Hearts Discord server.
 */

require("dotenv").config();

console.log("*****Beginning Discord Bot*********");
const Discord = require('discord.js');
const client = new Discord.Client();

client.login(process.env.Token);

//Make sur our bot is running
client.on('ready', discordRunning);
function discordRunning(){
    console.log("Hello!  Our Bot is up and running");
}

client.on('message', receivedMessage);

//Check if we are in right channel and then send it along'
function receivedMessage(msg){
    if(msg.channel == '871447342031700018'){
        checkMessage(msg);
    }
}

/**
 * Different bot responses you want to handle:
 * 1)User sends a gif
 * 2)User Says hello
 * 3)New User Joins the server
 * 4)!stats - Shows list of stats for user
 */
function receivedGif(msgContent){
    console.log('In the gif function');
}

/**
 * Checks to make sure message in right channel
 * Switch statement with msg.content
 * 
 * @param msgContent - What a user posted in chat
 */
 function checkMessage(msg){
    try {
        switch(msg.content){
            case 'Hello':
                msg.channel.send('Hello ' + msg.author.username);
            break;
            case '!gif':
                receivedGif(msg.content);
            break;
            case '!stats':
                console.log('Going to display stats')
            break;
        }
    } catch (error) {
        console.log(error)
    }
}
