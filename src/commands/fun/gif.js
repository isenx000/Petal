const { SlashCommandBuilder } = require('discord.js');

// const {} = require('discord.js');

module.exports = {
    permissions: { user: [], bot: [] },
    cooldown: 0,
    slash: false,
    data: new SlashCommandBuilder()
        .setName('gif')
        .setDescription('Gif'),
    async execute(client, interaction, args) {

    const msg = interaction.options.getString('text');

    if (!msg) return client.errUsage({ usage: "gif [text]", type: 'editreply' }, interaction);

    var giphy = require('giphy-api')(process.env.GIPHY_TOKEN);

    giphy.random(msg, function (err, res) {
        client.embed({
            title: `📺・${msg} Gif`,
            image: `https://media1.giphy.com/media/${res.data.id}/giphy.gif`,
            type: 'editreply'
        }, interaction);
    });
    }
};
