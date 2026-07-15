const { SlashCommandBuilder } = require('discord.js');

// const {} = require('discord.js');

module.exports = {
    permissions: { user: [], bot: [] },
    cooldown: 0,
    slash: true,
    data: new SlashCommandBuilder()
        .setName('birthdays-delete')
        .setDescription('Birthdays Delete'),
    async execute(client, interaction, args) {

    Schema.findOne({ Guild: interaction.guild.id, User: interaction.user.id }, async (err, data) => {
        if (!data) return client.errNormal({ 
            error: "No birthday found!",
            type: 'editreply' 
        }, interaction);

        Schema.findOneAndDelete({ Guild: interaction.guild.id, User: interaction.user.id }).then(() => {
            client.succNormal({ 
                text: "Deleted your birthday", 
                type: 'editreply' 
            }, interaction)
        })
    })
    }
};
