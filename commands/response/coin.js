const commando = require('discord.js-commando');

class CoinFlipCommand extends commando.Command {
    constructor(Client){
        super(Client, {
            name: 'coin', 
            group: 'response',
            memberName: 'coin',
            description: 'Flips a coin. (;coin)',
            examples: [';coin']
        });
    }

    async run(message, args) {
        if(message.channel.type !== 'dm') {
            if(!message.channel.permissionsFor(this.client.user).hasPermission('SEND_MESSAGES')) return;
            if(!message.channel.permissionsFor(this.client.user).hasPermission('READ_MESSAGES')) return;
        }
        console.log("[Command] " + message.content);
        let coin = ['Heads', 'Tails'];
        coin = coin[Math.floor(Math.random() * coin.length)];
        message.channel.send("It landed on " + coin);
    }
}

module.exports = CoinFlipCommand;