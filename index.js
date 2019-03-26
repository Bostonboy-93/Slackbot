const SlackBot = require('slackbots');
const axios = require('axios');

const bot = new SlackBot({
    token: 'xoxb-577236061777-585935027188-1Ah4hb78UbjZHI6gCDsvp0yv',
    name: 'PortBot'
});

// Start Handler - we want to have a specific channel dedicated to portbot, or do we want portbot available in all channels? My suggestion is to have a specific channel that PortBot lives in.
bot.on('start', () => {
    const params = {
        icon_emoji: ':telephone:'
    };

    bot.postMessageToChannel('portbot', 'Ring Ring!', params);
});

// Error handler
bot.on('error', (err) => console.log(err));

// Message Handler
bot.on('message', data => {
    if (data.type !== 'message') {
        return;
    }



    handleMessage(data.text);
});

// Respond to data
function handleMessage(message) {
    if(message.includes('portabl', 'portability')) {

    }
}
/*we need to set this up in Heroku I believe. 
The auth token changes every time, and I have to re-copy and paste the new auth code every time I run npm start. Strange, but we'll figure out the solution.
*/