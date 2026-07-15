const { SlashCommandBuilder } = require('discord.js');

// const {} = require('discord.js');

module.exports = {
    permissions: { user: [], bot: [] },
    cooldown: 0,
    slash: false,
    data: new SlashCommandBuilder()
        .setName('messages-rewards')
        .setDescription('Messages Rewards'),
    async execute(client, interaction, args) {

    const rawLeaderboard = await Schema.find({ Guild: interaction.guild.id });

    if (rawLeaderboard.length < 1) return client.errNormal({
        error: `No rewards found!`,
        type: 'editreply'
    }, interaction);

    const lb = rawLeaderboard.map(e => `**${e.Messages} messages** - <@&${e.Role}>`);

    await client.createLeaderboard(`💬・Message rewards - ${interaction.guild.name}`, lb, interaction);
    }
};
