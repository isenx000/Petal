const { SlashCommandBuilder } = require('discord.js');

// const {} = require('discord.js');

module.exports = {
    permissions: { user: [], bot: [] },
    cooldown: 0,
    data: new SlashCommandBuilder()
        .setName('welcomerole')
        .setDescription('Welcomerole'),
    async execute(client, interaction, args) {

    const role = interaction.options.getRole('role');

    client.createRoleSetup(welcomeRole, role, interaction)
    }
};
