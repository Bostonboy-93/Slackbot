const SlackBot = require('slackbots');
const axios = require('axios');

const bot = new SlackBot({
    token: 'xoxb-577236061777-585935027188-zhY1qLHs15HT9J1UZzCgJwbc',
    name: 'PortBot'
});

// Start Handler - we want to have a specific channel dedicated to portbot, or do we want portbot available in all channels? My suggestion is to have a specific channel that PortBot lives in.
bot.on('start', () => {
    const params = {
        icon_emoji: ':telephone:'
    };

    bot.postMessageToChannel('portbot', 'Ring Ring!', params);
});