const { SlashCommandBuilder } = require('discord.js');



module.exports = {
    permissions: { user: [], bot: [] },
    cooldown: 0,
    slash: false,
    data: new SlashCommandBuilder()
        .setName('simprate')
        .setDescription('Simprate'),
    async execute(client, interaction, args) {

    var result = Math.ceil(Math.random() * 100);

    client.embed({
        title: `👀・Simp rate`,
        desc: `You are ${result}% simp!`,
        type: 'editreply'
    }, interaction)
    }
};
