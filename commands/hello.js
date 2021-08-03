module.exports = async function(msg,args){
    msg.channel.send('Hello ' + msg.author.username);
}
