const { SlashCommandBuilder } = require('discord.js');

// const {} = require('discord.js');

module.exports = {
    permissions: { user: [], bot: [] },
    cooldown: 0,
    slash: false,
    data: new SlashCommandBuilder()
        .setName('invites-leaderboard')
        .setDescription('Invites Leaderboard'),
    async execute(client, interaction, args) {

    const rawLeaderboard = await Schema.find({ Guild: interaction.guild.id }).sort(([['Invites', 'descending']]));

    if (!rawLeaderboard) return client.errNormal({
        error: `No data found!`,
        type: 'editreply'
    }, interaction);

    const lb = rawLeaderboard.map(e => `**${rawLeaderboard.findIndex(i => i.Guild === interaction.guild.id && i.User === e.User) + 1}** | <@!${e.User}> - Invites: \`${e.Invites}\``);

    await client.createLeaderboard(`📨・Invites - ${interaction.guild.name}`, lb, interaction);
    }
};
