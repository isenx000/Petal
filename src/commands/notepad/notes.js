const { SlashCommandBuilder } = require('discord.js');

// const {} = require('discord.js');
// const generator = require('generate-password');

module.exports = {
    permissions: { user: [], bot: [] },
    cooldown: 0,
    data: new SlashCommandBuilder()
        .setName('notes')
        .setDescription('Notes'),
    async execute(client, interaction, args) {

    const rawboard = await Schema.find({ Guild: interaction.guild.id, User: interaction.user.id })

    if (rawboard.length < 1) return client.errNormal({ error: "No notes found!", type: 'editreply' }, interaction);

    const lb = rawboard.map(e => `**Note ID: ${e.Code}** \n${e.Note} \n`);

    await client.createLeaderboard(`📓・Notes - ${interaction.user.username}`, lb, interaction);
    }
};
