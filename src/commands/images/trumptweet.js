const { SlashCommandBuilder } = require('discord.js');

// const fetch = require('node-fetch');

module.exports = {
    permissions: { user: [], bot: ['SendMessages', 'EmbedLinks', 'AttachFiles'] },
    cooldown: 0,
    slash: false,
    data: new SlashCommandBuilder()
        .setName('trumptweet')
        .setDescription('Trumptweet'),
    async execute(client, interaction, args) {


    const tweet = interaction.options.getString('text');

    if (tweet.length > 68) tweet = tweet.slice(0, 65) + "...";

    const res = await fetch("https://nekobot.xyz/api/imagegen?type=trumptweet&text=" + tweet);

    const img = (await res.json()).message;

    client.embed({
        title: `🖼・Trump tweet`,
        image: img,
        type: 'editreply'
    }, interaction)
    }
};
