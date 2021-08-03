const gif = require('./commands/gif.js');
const hello = require('./commands/hello.js');

const commands = {
    hello: hello,
    gif: gif
};

/**
 * Checks to make sure message in right channel
 * Checks keyword after !
 */
module.exports = async function (msg) {
    if (msg.channel == '871447342031700018') {
        let splitWords = msg.content.split(" ");

        if(splitWords[0] === '!hello'){
            commands.hello(msg);
        }else if(splitWords[0] === '!gif') {
            commands.gif(msg);
        }
    }
}
