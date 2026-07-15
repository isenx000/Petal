const { SlashCommandBuilder } = require('discord.js');

// const fetch = require("node-fetch")

module.exports = {
    permissions: { user: [], bot: ['SendMessages', 'EmbedLinks'] },
    cooldown: 0,
    slash: false,
    data: new SlashCommandBuilder()
        .setName('wallpaper')
        .setDescription('Wallpaper'),
    async execute(client, interaction, args) {

    var images = []
    const query = interaction.options.getString('name');

    // Use FREE API
    }
};
