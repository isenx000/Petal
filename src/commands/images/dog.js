const { SlashCommandBuilder } = require('discord.js');

// const {} = require('discord.js');
// const fetch = require("node-fetch");

module.exports = {
    permissions: { user: [], bot: [] },
    cooldown: 0,
    slash: false,
    data: new SlashCommandBuilder()
        .setName('dog')
        .setDescription('Dog'),
    async execute(client, interaction, args) {


    fetch(
        `https://some-random-api.com/img/dog`
    )
        .then((res) => res.json()).catch({})
        .then(async (json) => {
            client.embed({
                title: `🐶・Random Dog`,
                image: json.link,
                type: 'editreply'
            }, interaction)
        }).catch({})
    }
};
