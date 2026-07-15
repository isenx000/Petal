const { SlashCommandBuilder } = require('discord.js');



module.exports = {
    permissions: { user: [], bot: [] },
    cooldown: 0,
    data: new SlashCommandBuilder()
        .setName('epicgamerrate')
        .setDescription('Epicgamerrate'),
    async execute(client, interaction, args) {

    var result = Math.ceil(Math.random() * 100);

    client.embed({
        title: `🎮・Epic gamer rate`,
        desc: `You are ${result}% epic gamer!`,
        type: 'editreply'
    }, interaction)
    }
};
