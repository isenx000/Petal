const { SlashCommandBuilder } = require('discord.js');

// const {} = require('discord.js');

module.exports = {
    permissions: { user: [], bot: [] },
    cooldown: 0,
    slash: false,
    data: new SlashCommandBuilder()
        .setName('reactionroles-list')
        .setDescription('Reactionroles List'),
    async execute(client, interaction, args) {

    const reactions = await Schema.find({ Guild: interaction.guild.id });
    if (!reactions) return client.errNormal({ 
        error: `No data found!`,
        type: 'editreply'
    }, interaction);
    
    let list = ``;

    for (var i = 0; i < reactions.length; i++) {
        list += `**${i + 1}** - Category: ${reactions[i].Category} \n`;
    }

    await client.embed({
        title: "📃・Reaction roles",
        desc: list,
        type: 'editreply'
    }, interaction)
    }
};
