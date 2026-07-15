const { SlashCommandBuilder } = require('discord.js');

// const {} = require('discord.js');

module.exports = {
    permissions: { user: [], bot: [] },
    cooldown: 0,
    slash: true,
    data: new SlashCommandBuilder()
        .setName('birthdays-check')
        .setDescription('Birthdays Check'),
    async execute(client, interaction, args) {

    Schema.findOne({ Guild: interaction.guild.id, User: interaction.user.id }, async (err, data) => {
        if (!data) return client.errNormal({ 
            error: "No birthday found!",
            type: 'editreply' 
        }, interaction);

        client.embed({ 
            title: `${client.emotes.normal.birthday}・Birthday check`, 
            desc: `${interaction.user.username} birthday is on ${data.Birthday}`,
            type: 'editreply'
        }, interaction)
    })
    }
};
