const { SlashCommandBuilder } = require('discord.js');



module.exports = {
    permissions: { user: [], bot: [] },
    cooldown: 0,
    data: new SlashCommandBuilder()
        .setName('howgay')
        .setDescription('Howgay'),
    async execute(client, interaction, args) {

    var result = Math.ceil(Math.random() * 100);

    client.embed({
        title: `🏳️‍🌈・Gay rate`,
        desc: `You are ${result}% gay!`,
        type: 'editreply'
    }, interaction)
    }
};
