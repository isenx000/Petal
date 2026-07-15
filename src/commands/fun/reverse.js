const { SlashCommandBuilder } = require('discord.js');

// const {} = require('discord.js');

module.exports = {
    permissions: { user: [], bot: [] },
    cooldown: 0,
    slash: false,
    data: new SlashCommandBuilder()
        .setName('reverse')
        .setDescription('Reverse'),
    async execute(client, interaction, args) {

    const text = interaction.options.getString('text');

    client.succNormal({
        text: `${text.split("").reverse().join("")}`,
        type: 'editreply'
    }, interaction)
    }
};
