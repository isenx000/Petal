const { SlashCommandBuilder } = require('discord.js');



module.exports = {
    permissions: { user: [], bot: [] },
    cooldown: 0,
    slash: false,
    data: new SlashCommandBuilder()
        .setName('confused')
        .setDescription('Confused'),
    async execute(client, interaction, args) {


    client.embed({
        title: '😲・Confused Nick',
        image: "https://cdn.discordapp.com/attachments/825305196355780628/836154426481704980/nick-young-confused-face-300x256-nqlyaa.png",
        type: 'editreply'
    }, interaction)
    }
};
