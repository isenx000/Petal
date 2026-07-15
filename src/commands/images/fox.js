const { SlashCommandBuilder } = require('discord.js');

// const {} = require('discord.js');
// const fetch = require("node-fetch");

module.exports = {
    permissions: { user: [], bot: ['SendMessages', 'EmbedLinks'] },
    cooldown: 0,
    slash: false,
    data: new SlashCommandBuilder()
        .setName('fox')
        .setDescription('Fox'),
    async execute(client, interaction, args) {


    fetch(
        `https://some-random-api.com/img/fox`
    )
        .then((res) => res.json()).catch({})
        .then(async (json) => {
            client.embed({
                title: `🦊・Random Fox`,
                image: json.link,
                type: 'editreply'
            }, interaction)
        }).catch({})
    }
};
