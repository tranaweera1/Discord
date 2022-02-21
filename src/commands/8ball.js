const eightBall = ['As I see it, yes.',
'Ask again later.',
'Better not tell you now.',
'Cannot predict now.',
'Concentrate and ask again.',
'Dont count on it.',
'It is certain. ',
'It is decidely So.'
];

module.exports = async (message, args) => {

    if (!args.length) return;

    const i = Math.floor(Math.random()*eightBall.length);
    const reply = eightBall[i];
    await message.reply(reply);
};