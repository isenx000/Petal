// const {} = require('discord.js');

module.exports = async (client, interaction, args) => {
    const choice = interaction.options.getString('setup');
    const channel = interaction.options.getChannel('channel');
    
    const choices = {
        birthdays : Birthdays,
        chatbot : Chatbot,
        reviews : Review,
        suggestions : Suggestion,
        starboard : StarBoard
    };

    client.createChannelSetup(choices[choice], channel, interaction);
}

 
