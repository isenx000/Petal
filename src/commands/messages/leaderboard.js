const { SlashCommandBuilder } = require('discord.js');

// const {} = require('discord.js');

module.exports = {
    permissions: { user: [], bot: [] },
    cooldown: 0,
    data: new SlashCommandBuilder()
        .setName('messages-leaderboard')
        .setDescription('Messages Leaderboard'),
    async execute(client, interaction, args) {

    const rawLeaderboard = await Schema.find({ Guild: interaction.guild.id }).sort(([['Messages', 'descending']]));

    if (!rawLeaderboard) return client.errNormal({
        error: `No data found!`,
        type: 'editreply'
    }, interaction);

    const lb = rawLeaderboard.map(e => `**${rawLeaderboard.findIndex(i => i.Guild === interaction.guild.id && i.User === e.User) + 1}** | <@!${e.User}> - Messages: \`${e.Messages}\``);

    await client.createLeaderboard(`💬・Messages - ${interaction.guild.name}`, lb, interaction);
    }
};
