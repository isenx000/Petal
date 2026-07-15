const { SlashCommandBuilder } = require('discord.js');

// const {} = require('discord.js');

module.exports = {
    permissions: { user: [], bot: [] },
    cooldown: 0,
    slash: false,
    data: new SlashCommandBuilder()
        .setName('enlarge')
        .setDescription('Enlarge'),
    async execute(client, interaction, args) {


    const emoji = interaction.options.getString('emoji');
    const parsedEmoji = Discord.parseEmoji(emoji)

    if (parsedEmoji) {
        const ex = parsedEmoji.animated ? ".gif" : ".png";
        const url = `https://cdn.discordapp.com/emojis/${parsedEmoji.id + ex}`;

        return client.embed({
            image: url,
            type: 'editreply'
        }, interaction)
    } else {
        client.errNormal({ error: "Please supply a valid emoji!", type: 'editreply' }, interaction)
    }
    }
};
