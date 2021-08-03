const fetch = require('node-fetch');

module.exports = async function (msg, args) {
    try {
        let url = 'https://g.tenor.com/v1/search?q=excited&key=${process.env.TenorKey}&limit=8';
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        var gif = json.results[index].url;
        msg.channel.send(json.results[index].url);
    } catch (error) {
        console.log(error);
    }
}
