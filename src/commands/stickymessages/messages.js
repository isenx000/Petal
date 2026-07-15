const { SlashCommandBuilder } = require('discord.js');

// const {} = require('discord.js');

module.exports = {
    permissions: { user: [], bot: [] },
    cooldown: 0,
    slash: false,
    data: new SlashCommandBuilder()
        .setName('messages')
        .setDescription('Messages'),
    async execute(client, interaction, args) {

    const data = await Schema.find({ Guild: interaction.guild.id });

    if (data) {
        let list = ``;

        for (var i = 0; i < data.length; i++) {
            list += `**${i + 1}** - Channel: ${data[i].Channel}`;
        }

        await client.embed({ 
            title: `💬・Sticky messages`, 
            desc: list, 
            type: 'editreply' 
        }, interaction)
    }
    else {
        client.errNormal({ 
            error: "No data found!",
            type: 'editreply' 
        }, interaction)
    }
    }
};
