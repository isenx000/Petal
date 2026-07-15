const { SlashCommandBuilder } = require('discord.js');

// const {} = require('discord.js');

module.exports = {
    permissions: { user: [], bot: [] },
    cooldown: 0,
    data: new SlashCommandBuilder()
        .setName('welcomechannels')
        .setDescription('Welcomechannels'),
    async execute(client, interaction, args) {

    const choice = interaction.options.getString('setup');
    const channel = interaction.options.getChannel('channel');

    const choices = {
        welcomechannel : welcomeChannel,
        leavechannel : leaveChannel
    };

    client.createChannelSetup(choices[choice], channel, interaction);
    }
};
