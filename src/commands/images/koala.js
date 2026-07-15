const { SlashCommandBuilder } = require('discord.js');

// const {} = require('discord.js');
// const fetch = require("node-fetch");

module.exports = {
    permissions: { user: [], bot: [] },
    cooldown: 0,
    data: new SlashCommandBuilder()
        .setName('koala')
        .setDescription('Koala'),
    async execute(client, interaction, args) {


    fetch(
        `https://some-random-api.com/img/koala`
    )
        .then((res) => res.json()).catch({})
        .then(async (json) => {
            client.embed({
                title: `🐨・Random Koala`,
                image: json.link,
                type: 'editreply'
            }, interaction)
        }).catch({})
    }
};
