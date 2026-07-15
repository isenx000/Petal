const { SlashCommandBuilder } = require('discord.js');

// const {} = require('discord.js');

module.exports = {
    permissions: { user: [], bot: [] },
    cooldown: 0,
    slash: true,
    data: new SlashCommandBuilder()
        .setName('reactionroles-delete')
        .setDescription('Reactionroles Delete'),
    async execute(client, interaction, args) {

    const category = interaction.options.getString('category');

    Schema.findOne({ Guild: interaction.guild.id, Category: category }, async (err, data) => {
        if (!data) return client.errNormal({ 
            error: `No data found!`,
            type: 'editreply'
        }, interaction);

        var remove = await Schema.deleteOne({ Guild: interaction.guild.id, Category: category });

        client.succNormal({ 
            text: `**${category}** successfully deleted!`,
            type: 'editreply'
        }, interaction);
    })
    }
};
