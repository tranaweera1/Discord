
module.exports = async (message, args) => {

    await message.channel.send('pong');
    console.log('Ping Pong! (sent)');

};