const { SlashCommandBuilder } = require('discord.js');



module.exports = {
    permissions: { user: [], bot: [] },
    cooldown: 0,
    slash: false,
    data: new SlashCommandBuilder()
        .setName('cleverrate')
        .setDescription('Cleverrate'),
    async execute(client, interaction, args) {


    var result = Math.ceil(Math.random() * 100);

    client.embed({
        title: `💡・Clever Rate`,
        desc: `You are ${result}% clever!`,
        type: 'editreply'
    }, interaction)
    }
};
