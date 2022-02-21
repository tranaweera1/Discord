const ping = require('./ping');
const eightBall = require('./8ball');



const guildID = '936391809372938270';
const channelID = '936397936286371922';

const commands = {
    'ping': ping,
    '8ball': eightBall,
};

module.exports = async (message) => {
    console.log(message);

    if (message.guildId === guildID && message.channelId === channelID) {
       
        const args = message.content.split(' ');

        if (args.length == 0 || args[0].charAt(0) !== '!') return;
        const command = args.shift().substr(1);

        if (command in commands) {
            commands[command](message, args);
        }

    }
};

