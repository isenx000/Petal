const { SlashCommandBuilder } = require('discord.js');

// const {} = require('discord.js');

module.exports = {
    permissions: { user: ['ManageGuild'], bot: ['ManageRoles', 'SendMessages', 'EmbedLinks'] },
    cooldown: 0,
    slash: true,
    data: new SlashCommandBuilder()
        .setName('welcomerole')
        .setDescription('Welcomerole'),
    async execute(client, interaction, args) {

    const role = interaction.options.getRole('role');

    client.createRoleSetup(welcomeRole, role, interaction)
    }
};
