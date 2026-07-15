const { SlashCommandBuilder } = require('discord.js');

// const {} = require('discord.js');
// const fetch = require("node-fetch");

module.exports = {
    permissions: { user: [], bot: [] },
    cooldown: 0,
    slash: false,
    data: new SlashCommandBuilder()
        .setName('koalafact')
        .setDescription('Koalafact'),
    async execute(client, interaction, args) {


    fetch(
        `https://some-random-api.com/facts/koala`
    )
        .then((res) => res.json()).catch({})
        .then(async (json) => {
            client.embed({
                title: `💡・Random koala fact`,
                desc: json.fact,
                type: 'editreply',
            }, interaction);
        }).catch({})
    }
};
