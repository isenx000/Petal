const { SlashCommandBuilder } = require('discord.js');

// const {} = require('discord.js');

module.exports = {
    permissions: { user: [], bot: [] },
    cooldown: 0,
    slash: true,
    data: new SlashCommandBuilder()
        .setName('setup-logs')
        .setDescription('Setup Logs'),
    async execute(client, interaction, args) {

    const choice = interaction.options.getString('setup');
    const channel = interaction.options.getChannel('channel');
    
    const choices = {
        serverLogs : logs,
        levelLogs : levelLogs,
        boostLogs : boostLogs
    };

    client.createChannelSetup(choices[choice], channel, interaction);
    }
};
