const { SlashCommandBuilder } = require('discord.js');



module.exports = {
    permissions: { user: [], bot: ['SendMessages', 'EmbedLinks'] },
    cooldown: 0,
    slash: false,
    data: new SlashCommandBuilder()
        .setName('stankrate')
        .setDescription('Stankrate'),
    async execute(client, interaction, args) {

    var result = Math.ceil(Math.random() * 100);

    client.embed({
        title: `💨・Stank rate`,
        desc: `You are ${result}% stanky!`,
        type: 'editreply'
    }, interaction)
    }
};
