const { SlashCommandBuilder } = require('discord.js');

// const {} = require('discord.js');

module.exports = {
    permissions: { user: [], bot: ['SendMessages', 'EmbedLinks'] },
    cooldown: 0,
    slash: false,
    data: new SlashCommandBuilder()
        .setName('levels-leaderboard')
        .setDescription('Levels Leaderboard'),
    async execute(client, interaction, args) {

    const rawLeaderboard = await Schema.find({ guildID: interaction.guild.id }).sort(([['xp', 'descending']])).exec();

    if (!rawLeaderboard) return client.errNormal({
        error: `No data found!`,
        type: 'editreply'
    }, interaction);

    const lb = rawLeaderboard.map(e => `**${rawLeaderboard.findIndex(i => i.guildID === interaction.guild.id && i.userID === e.userID) + 1}** | <@!${e.userID}> - Level: \`${e.level.toLocaleString()}\` (${e.xp.toLocaleString()} xp)`);

    await client.createLeaderboard(`🆙・Levels - ${interaction.guild.name}`, lb, interaction);
    }
};
