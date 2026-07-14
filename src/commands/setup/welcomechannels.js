const {} = require('discord.js');


module.exports = async (client, interaction, args) => {
    const choice = interaction.options.getString('setup');
    const channel = interaction.options.getChannel('channel');

    const choices = {
        welcomechannel : welcomeChannel,
        leavechannel : leaveChannel
    };

    client.createChannelSetup(choices[choice], channel, interaction);
}

 
