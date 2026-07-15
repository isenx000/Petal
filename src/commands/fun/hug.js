const { SlashCommandBuilder } = require('discord.js');

// const axios = require('axios');

module.exports = {
    permissions: { user: [], bot: [] },
    cooldown: 0,
    data: new SlashCommandBuilder()
        .setName('hug')
        .setDescription('Hug'),
    async execute(client, interaction, args) {


    const user = interaction.options.getUser('user');
    const url = 'https://some-random-api.com/animu/hug';

    if (!user) return client.errUsage({ usage: "hug [mention user]", type: 'editreply' }, interaction);

    let response, data;
    try {
        response = await axios.get(url);
        data = response.data;
    } catch (e) {
        return client.errNormal({ error: "An error occured!", type: 'editreply' }, interaction);
    }

    client.embed({
        title: `${interaction.user.tag} hugs ${user.tag}`,
        image: `${data.link}`,
        type: 'editreply'
    }, interaction);
    }
};
