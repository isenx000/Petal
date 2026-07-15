const { SlashCommandBuilder } = require('discord.js');

// const {} = require('discord.js');

module.exports = {
    permissions: { user: [], bot: [] },
    cooldown: 0,
    slash: false,
    data: new SlashCommandBuilder()
        .setName('changelogs')
        .setDescription('Changelogs'),
    async execute(client, interaction, args) {

    client.embed({
        title: "📃・Changelogs",
        desc: `_____`,
        thumbnail: client.user.avatarURL({ size: 1024 }),
        fields: [{
            name: "📃┆Changelogs",
                value: '15/3/2023 Updated dependencies',
                inline: false,
            },
        ],
        type: 'editreply'
    }, interaction)
    }
};
