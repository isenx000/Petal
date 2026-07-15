const { SlashCommandBuilder } = require('discord.js');

// const {} = require('discord.js');

module.exports = {
    permissions: { user: [], bot: [] },
    cooldown: 0,
    slash: true,
    data: new SlashCommandBuilder()
        .setName('birthdays-list')
        .setDescription('Birthdays List'),
    async execute(client, interaction, args) {

    const rawBirthdayboard = await Schema.find({ Guild: interaction.guild.id })

    if (rawBirthdayboard.length < 1) return client.errNormal({ 
        error: "No birthdays found!",
        type: 'editreply' 
    }, interaction);

    const lb = rawBirthdayboard.map(e => `${client.emotes.normal.birthday} | **<@!${e.User}>** - ${e.Birthday} `);

    await client.createLeaderboard(`🎂・Birthdays - ${interaction.guild.name}`, lb, interaction);
    }
};
