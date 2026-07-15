const { SlashCommandBuilder } = require('discord.js');

// const {} = require('discord.js');

module.exports = {
    permissions: { user: [], bot: [] },
    cooldown: 0,
    slash: true,
    data: new SlashCommandBuilder()
        .setName('deletesetup')
        .setDescription('Deletesetup'),
    async execute(client, interaction, args) {

    const options = {
        tickets: ticketSchema,
        customvoice: voiceSchema,
        serverlogs: logs,
        levellogs: levelLogs,
        boostlogs: boostLogs,
        birthdays: Birthdays,
        chatbot: Chatbot,
        reviews: Review,
        suggestions: Suggestion,
        counting: Counting,
        gtn: GTN,
        gtw: GTW,
        welcomechannel: welcomeChannel,
        leavechannel: leaveChannel,
        welcomerole: welcomeRole,
        wordsnake: WordSnake
    };

    const choice = interaction.options.getString('setup');

    options[choice].findOneAndDelete({ Guild: interaction.guild.id }).then(() => {
        client.succNormal({ 
            text: `Setup successfully deleted!`,
            type: 'editreply'
        }, interaction);
    })
    }
};
