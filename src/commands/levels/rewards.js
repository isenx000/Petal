const { SlashCommandBuilder } = require('discord.js');

// const {} = require('discord.js');

module.exports = {
    permissions: { user: [], bot: ['SendMessages', 'EmbedLinks'] },
    cooldown: 0,
    slash: false,
    data: new SlashCommandBuilder()
        .setName('levels-rewards')
        .setDescription('Levels Rewards'),
    async execute(client, interaction, args) {

    const rawLeaderboard = await Schema.find({ Guild: interaction.guild.id });

    if (rawLeaderboard.length < 1) return client.errNormal({
        error: `No rewards found!`,
        type: 'editreply'
    }, interaction);

    const lb = rawLeaderboard.map(e => `**Level ${e.Level}** - <@&${e.Role}>`);

    await client.createLeaderboard(`🆙・Level rewards - ${interaction.guild.name}`, lb, interaction);
    }
};
