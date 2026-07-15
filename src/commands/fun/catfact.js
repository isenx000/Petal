const { SlashCommandBuilder } = require('discord.js');

// const {} = require('discord.js');
// const fetch = require("node-fetch");

module.exports = {
    permissions: { user: [], bot: ['SendMessages', 'EmbedLinks'] },
    cooldown: 0,
    slash: false,
    data: new SlashCommandBuilder()
        .setName('catfact')
        .setDescription('Catfact'),
    async execute(client, interaction, args) {


    fetch(
        `https://some-random-api.com/facts/cat`
    )
        .then((res) => res.json()).catch({})
        .then(async (json) => {
            client.embed({
                title: `💡・Random cat fact`,
                desc: json.fact,
                type: 'editreply',
            }, interaction);
        }).catch({})
    }
};
